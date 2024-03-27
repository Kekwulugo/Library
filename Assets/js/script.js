const showBtn = document.querySelector(".new-form");
const closeBtn = document.querySelector(".close-form");
const dialog = document.querySelector("dialog");


// open modal
function openModal (){
  dialog.showModal();
}

// close modal
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
  libraryItem.classList.add("book");

  const Title = document.createElement("h3");
  Title.innerText = myLibrary[i].Title;

  const Authour = document.createElement("p");
  Authour.innerText = "by " + myLibrary[i].Authour;

  const Pages = document.createElement("p");
  Pages.innerText = myLibrary[i].Pages + " Pages";

  const Review = document.createElement("p");
  Review.innerText = "My Review: " + myLibrary[i].Review

  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";
  deleteBtn.classList.add("delete");
  deleteBtn.setAttribute("data-id", i);

  const readBtn = document.createElement("button");
  readBtn.classList.add("status");
  readBtn.setAttribute("data-id", i);
  
  if(myLibrary[i].Read){
    readBtn.innerText = "Mark as Unread";

  } else{
    readBtn.innerText = "Mark as Read";
  }
  
  
  libraryItem.appendChild(Title);
  libraryItem.appendChild(Authour);
  libraryItem.appendChild(Pages);
  libraryItem.appendChild(Review);
  libraryItem.appendChild(deleteBtn);
  libraryItem.appendChild(readBtn);
  bookContainer.appendChild(libraryItem);


}
}

let submitBtn = document.querySelector(".Submit");
let titleEl = document.querySelector("#Title");
let authourEl = document.querySelector("#Authour");
let pagesEl = document.querySelector("#Pages");
let readEl = document.querySelector("#Read")
let reviewEl = document.querySelector("#Review");


function addBooktoLibrary(event){
 //prevent page from reloading when submitting form
 event.preventDefault();

 let bookTitle = titleEl.value;
 let bookAuthour = authourEl.value;
 let bookPages = pagesEl.value;
 let bookRead = readEl.checked;
 let bookReview = reviewEl.value;


const newBook = new Book (bookTitle, bookAuthour, bookPages, bookRead, bookReview);
myLibrary.push(newBook);

//reset form
 titleEl.value = "";
 authourEl.value = "";
 pagesEl.value = "";
reviewEl.value = "";

renderBooks();
dialog.close();
}

function removeBooks(event){
  const item = event.dataset.id;
  myLibrary.pop(item);
  renderBooks();


}

function updateStatus(event){

  //get book id

  // get current status

  // toggle status (read or unread)

  renderBooks();

}







submitBtn.onclick = addBooktoLibrary;
showBtn.onclick = openModal;
closeBtn.onclick = closeModal;


