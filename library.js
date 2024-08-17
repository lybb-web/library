const yourLibrary = []

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
         
        return  this.read ? this.title + " by " + this.author + ", " + this.pages + " pages, already read" : 
        this.title + " by " + this.author + ", " + this.pages + " pages, not read yet";
    }
}

function addBookToLibrary(book) {
    yourLibrary.push(book);
}

function displayLibrary() {
    for (i = 0; i < yourLibrary.length; i++)
    {
        let container = document.querySelector("#book-list");
        let bookDiv = document.createElement("div");
        bookDiv.textContent = yourLibrary[i].title;
        console.log(bookDiv);
        container.appendChild(bookDiv);

        let authorDiv = document.createElement("div");
        authorDiv.textContent = yourLibrary[i].author;
        container.appendChild(authorDiv);

        let pageDiv = document.createElement("div");
        pageDiv.textContent = yourLibrary[i].pages;
        container.appendChild(pageDiv);

        let readDiv = document.createElement("div");
        readDiv.textContent = yourLibrary[i].read ? "Has Read Already" : "Unfinished";
        container.appendChild(readDiv);

    }
}

function displayForm() {
    let container = document.querySelector("body");
    let modal = document.createElement("dialog");
    let para = document.createElement("p");
    para.textContent = "Love yourself!";
    modal.appendChild(para);
    container.appendChild(modal);
}



let book1 = new Book("Diary of a Wimpy Kid", "Jeff Kinney", 217, true);
console.log(book1.info());
addBookToLibrary(book1);
console.log(yourLibrary);
displayLibrary();


let dialog = document.querySelector("#new-book-modal");
let addButton = document.querySelector("button");

addButton.addEventListener("click", () => {
    console.log(dialog);
    dialog.showModal();
});