greetUser = name => {
    console.log("Hello" + name + "! Have a great day!")
};      
greetUser("Chat");

let fruits = ["apple", "banana", "mango"];

for (let fruit of fruits) {
  console.log(fruit);
}

for (let i=0; i<5; i++) {
    console.log("I love JavaScript!");
}

let colors = ["red", "blue", "green"];

for (let color of colors) {
    console.log("Color: " + color);
}

for (let i=10; i>0; i--) {
    console.log("Countdown: " + i);
}

let movies = ["Inception", "The Matrix", "Interstellar"];
for (let movie of movies) {
    console.log(movie);
}

book = {
    title: "Percy Jackson",
    author: "Rick Riordan",
    pages: 377
}
console.log("Book name: " + book.title + "\n" + "Author: " + book.author + "\n" + "Pages: " + book.pages + "\n");

// DOM MANIPULATION----------------

// | What You Can Do     | Code Example                        |
// | ------------------- | ----------------------------------- |
// | Change text         | `element.innerText = "New text"`    |
// | Change HTML inside  | `element.innerHTML = "<b>Bold</b>"` |
// | Change style        | `element.style.color = "red"`       |
// | Add/remove classes  | `element.classList.add("big")`      |
// | Create new element  | `document.createElement("div")`     |
// | Add element to page | `parent.appendChild(newElement)`    |

add = num1, num2 => {
    x+y == sum;
}