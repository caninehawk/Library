const myLibrary = [];

function Book(author,title,pages) {
  this.author = author;
  this.title = title;
  this.pages = pages;
}
function addCards(){
    let res = document.querySelector(".results");
    res.innerHTML = "";
    for(let i=0;i<myLibrary.length;i++){
        res.innerHTML+=`<div class="cards">
            <p> Title: ${myLibrary[i].title} </p>
            <p> Author: ${myLibrary[i].author}</p>
            <p> Pages: ${myLibrary[i].pages}</p>
            <button class="remove" onclick="removeBook(${i})">Remove</button>
        </div>`
    }
}
function removeBook(index){
    myLibrary.splice(index,1);
    addCards();
}

function addBookToLibrary() {
    const author = document.querySelector("#author").value;
    const title = document.querySelector("#title").value;
    const pages = document.querySelector("#number-of-pages").value;
    let newBook = new Book(author,title,pages)
    myLibrary.push(newBook);
    addCards();
}


const submit = (e)=>{
    e.preventDefault();
    addBookToLibrary();
}

let add = document.querySelector('.btn');
add.addEventListener("click",submit);