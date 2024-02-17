/* 
Using the given dogs array, create a variable named "corgis" whose value is an array containing only the dogs of breed Corgi - use the filter method to get this done. 
When a user clicks the button "Corgis!!",
Use the corgis variable to add only the dogs with the breed "Corgi" to the Corgi Container - List the dogs' names in the Corgi Container
*/

// Use these dogs:
const dogs = [
    { name: "Cheddar", breed: "Corgi" },
    { name: "Toto", breed: "Terrier" },
    { name: "Susan", breed: "Corgi" },
];

const corgis = dogs.filter(dog => dog['breed'] === "Corgi")

const btn = document.querySelector('button#corgi-button')
btn.addEventListener('click', addCorgi)
function addCorgi(e) {
    corgis.forEach(dog => {
        let name = document.createElement('h2')
        name.innerText = dog.name;
        document.querySelector('div#corgi-container').appendChild(name)
    })
}