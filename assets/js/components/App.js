var React = require('react');
var Products = require('./Products');
// var Timer = require('Timer');

var App = React.createClass({
  // getInitialState: function(){
  //   return {
  //     products: [],

  //   }
  // }








  render: function(){
    return (
      <div className="col-md-12">
        <h1>Deal or Die</h1>
        <Products />

      </div>
    )
  }
});


module.exports = App;