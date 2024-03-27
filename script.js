//modal control
const showBtn = document.querySelector(".new-form");
const closeBtn = document.querySelector(".close-form");
const dialog = document.querySelector("dialog");

function openModal (){
  dialog.showModal();
}

function closeModal (){
  dialog.close();
}

//create library array
const myLibrary = [];


//object constructor to create new book objects
function Book (Title, Authour, Pages, Read, Review){
 this.Title = Title;
 this.Authour = Authour;
 this.Pages = Pages;
 this.Read = Read;
 this.Review = Review;
 
}

function renderBooks(){
const bookContainer = document.querySelector(".book-container")
bookContainer.innerHTML = "";

 // for each object create a card and append it to the book container
 for (let i = 0; i <myLibrary.length; i++){
  const libraryItem = document.createElement("div");
  libraryItem.classList.add("book")

  const Title = document.createElement("h4");
  Title.innerText = myLibrary[i].Title;

  const Authour = document.createElement("p");
  Authour.innerText = myLibrary[i].Authour;

  const Pages = document.createElement("Pages");
  Pages.innerText = myLibrary[i].Pages;

  const Review = document.createElement("Review");
  Review.innerText = myLibrary[i].Review

  libraryItem.appendChild(Title);
  libraryItem.appendChild(Authour);
  libraryItem.appendChild(Pages);
  libraryItem.appendChild(Review);

  

  bookContainer.appendChild(libraryItem);


}
}

let submitBtn = document.querySelector(".Submit");
let titleEl = document.querySelector("#Title");
let authourEl = document.querySelector("#Authour");
let pagesEl = document.querySelector("#Pages");
let reviewEl = document.querySelector("#Review");


function addBooktoLibrary(event){
 //prevent page from reloading when submitting form
 event.preventDefault();

 let bookTitle = titleEl.value;
 let bookAuthour = authourEl.value;
 let bookPages = pagesEl.value;
 let bookReview = reviewEl.value;

const newBook = new Book (bookTitle, bookAuthour, bookPages, true, bookReview);
myLibrary.push(newBook);

//reset form
 titleEl.value = "";
 authourEl.value = "";
 pagesEl.value = "";
reviewEl.value = "";

renderBooks();
dialog.close();


}



submitBtn.onclick = addBooktoLibrary;
showBtn.onclick = openModal;
closeBtn.onclick = closeModal;
