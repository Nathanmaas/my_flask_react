import json
from flask import Flask

app = Flask(__name__)

@app.route('/')
def index():
  return app.send_static_file('index.html')

@app.route('/<path:path>')
def static_path(path):
  return app.send_static_file(path)

@app.route('/stuff')
def stuff():
  stuff = {
    'artist1': 'Red Hot Chili Peppers',
    'artist2': 'Vampire Weekend',
    'artist3': 'Chicago'
  }

  return json.dumps(stuff)

@app.route('/products')
def products():
  products = [
    {
      'name': 'Bike',
      'description': 'Very Nice Bike',
      'price': 2500.01
    },
    {
      'name': 'Trike',
      'description': 'Very Nice Trike',
      'price': 250.01
    },
    {
      'name': 'Unicycle',
      'description': 'Very Nice Unicycle',
      'price': 500.11
    },
    {
      'name': 'Go-Cart',
      'description': 'Very Nice Go-Cart',
      'price': 25000.91
    },
    {
      'name': 'Car',
      'description': 'Very Nice Car',
      'price': 25000.99
    }
  ]
  return json.dumps(products)


app.run(debug=True)
