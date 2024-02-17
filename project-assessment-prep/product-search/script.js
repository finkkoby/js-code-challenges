/* 
Create a search feature. When the user makes a change to the input field,
capture the user input and use it to filter through the product names - this should happen in real time.
Then list the products on the page that pass the filter - this should be case insensitive. 
You should allow products that contain all of the letters in order in the input to pass the filter. 
Use a h3 tag for the product name and a p tag for the category. 
Take a look at the HTML file to see where you should be appending your elements with product details.
*/

const products = [
    { id: 1, name: "Apple", category: "Fruits" },
    { id: 2, name: "Banana", category: "Fruits" },
    { id: 3, name: "Carrot", category: "Vegetables" },
    { id: 4, name: "Tomato", category: "Vegetables" },
    { id: 5, name: "Orange", category: "Fruits" },
    { id: 6, name: "Broccoli", category: "Vegetables" },
  ];

let inputBox = document.querySelector('input#searchInput')
inputBox.addEventListener('input', e => searcher(e))

function searcher(e) {
  let text = e.target.value
  let len = text.length
  let newArray = products.filter(product => {
    let substring = product['name'].substring(0, len)
    return substring.toUpperCase() === text.toUpperCase()
  })
  postProducts(newArray)
}

function postProducts(array) {
  clear()
  array.forEach(product => {
    let productList = document.querySelector('div#productList')
    let name = document.createElement('h3')
    name.innerText = product['name']
    let category = document.createElement('p')
    category.innerText = product['category']
    productList.append(name, category)
  })
}

function clear() {
  document.querySelector('#productList').innerHTML = ''
}