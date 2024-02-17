/* 
First create a function that will render the people array to the DOM. List each person - "{name} is {age} years old."
Check the HTML file to see what element you should be appending them to.
Then write the code that will allow the user to click the button and
sort the people by age in ascending order.
 */

const peopleArr = [
    { id: 1, name: 'Maria', age: 32 },
    { id: 2, name: 'Ryan', age: 37 },
    { id: 3, name: 'Zoe', age: 11 },
    { id: 5, name: 'Adette', age: 9 },
    { id: 6, name: 'Gio', age: 15 }
];
let nameList = document.querySelector('ul#list')

document.addEventListener("DOMContentLoaded", names(peopleArr))

function names(arr) {
  clear()
  arr.forEach(person => {
    let item = document.createElement('li')
    item.innerText = `${person.name} is ${person.age} years old.`
    nameList.appendChild(item)
  })
}

let btn = document.querySelector('button#sortButton')
btn.addEventListener('click', () => {
  let sortedNames = sortNames()
  names(sortedNames)
})

function sortNames() {
  return peopleArr.sort(mySorter)
}

function mySorter(a, b) {
  if (a.age < b.age) {
    return -1
  } else if (a.age > b.age) {
    return 1
  } else {
    return 0
  }
}

function clear() {
  nameList.innerHTML = ''
}