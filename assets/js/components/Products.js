var React = require('react');

module.exports = React.createClass({
  getInitialState: function(){
    return {items:[]};
  },
  getItems: function(){
    var ajax = new XMLHttpRequest();
    var self = this;
    ajax.onreadystatechange = function(){
      if (ajax.readyState==4 && ajax.status==200) {
        console.log('data',typeof ajax.responseText);
        try {
          var data = JSON.parse(ajax.responseText);
          self.setState({items:data});
          console.log('this is try', data);
        } catch(e){
          console.log('error',e);
          self.setState({items:[]});
        }
      }
    }
    ajax.open('GET', '/products');
    ajax.send();
  },

  componentWillMount: function(){
    this.getItems();
  },
  render: function(){
    console.log('items render',this.state.items);
    var items = this.state.items.map(function(item, idx){
      return (
        <div className="row tile" key={idx}>
          <div className="product-img">
            <div>{item.name}</div>
            <div>{item.description}</div>
            <div>{item.price}</div>
          </div>
        </div>
      );
    });


    return (
      <div>
        <button onClick={this.getItems}>Load items</button>
        <div className="tile">{items}</div>
      </div>
    )
  }
});