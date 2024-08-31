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

function populateRow(row, book) {
    row.classList.add("table-row");
    let bookDiv = document.createElement("div");
    bookDiv.textContent = book.title;
    row.appendChild(bookDiv);

    let authorDiv = document.createElement("div");
    authorDiv.textContent = book.author;
    row.appendChild(authorDiv);

    let pageDiv = document.createElement("div");
    pageDiv.textContent = book.pages;
    row.appendChild(pageDiv);

    let readDiv = document.createElement("div");
    readDiv.textContent = book.read ? "Has Read Already" : "Unfinished";
    row.appendChild(readDiv);

    let deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-button");
    deleteButton.textContent = "Delete";

    deleteButton.addEventListener("click", e => {
        removeBook(book.title);
    })

    row.appendChild(deleteButton);

    return row;
}

function displayLibrary() {

    // let container = document.querySelector("#book-list");
    // let bookDiv = document.createElement("div");
    // bookDiv.textContent = yourLibrary[yourLibrary.length-1].title;
    // container.appendChild(bookDiv);

    // let authorDiv = document.createElement("div");
    // authorDiv.textContent = yourLibrary[yourLibrary.length-1].author;
    // container.appendChild(authorDiv);

    // let pageDiv = document.createElement("div");
    // pageDiv.textContent = yourLibrary[yourLibrary.length-1].pages;
    // container.appendChild(pageDiv);

    // let readDiv = document.createElement("div");
    // readDiv.textContent = yourLibrary[yourLibrary.length-1].read ? "Has Read Already": "Unfinished";
    // container.appendChild(readDiv);

    // let deleteButton = document.createElement("button");
    // deleteButton.classList.add("delete-button");
    // deleteButton.classList.add(yourLibrary.length);
    // deleteButton.textContent = "Delete";
    // deleteButton.setAttribute("onclick", "removeBook(getBookIndex())");
    // container.appendChild(deleteButton);

    let container = document.querySelector("#library-table");

    let headerRow = document.querySelector("#table-header");


    //removes every row in the library table except the header row
    while (container.children[1])
    {
        container.removeChild(container.children[1]);

    }

    for (let i = 0; i < yourLibrary.length; i++)
    {
        let rowDiv = document.createElement("div");
        rowDiv = populateRow(rowDiv, yourLibrary[i]);
        container.appendChild(rowDiv);
    }


    // let rowDiv = document.createElement("div");
    // rowDiv.classList.add("table-row");

}



function displayForm() {
    let container = document.querySelector("body");
    let modal = document.createElement("dialog");
    let para = document.createElement("p");
    para.textContent = "Love yourself!";
    modal.appendChild(para);
    container.appendChild(modal);
}

function removeBook(num) {
    console.log("you should kill yourself, NOW!");
    let i = getBookIndex(num);
    console.log(i)
    let table = document.querySelector("#library-table");
    table.removeChild(table.children[i]);

}

function getBookIndex(book) {
    for (i = 0; i < yourLibrary.length; i++)
    {
        if (yourLibrary[i].title == book)
        {
            return i;
        }
    }
    return -1;
}



let book1 = new Book("Diary of a Wimpy Kid", "Jeff Kinney", 217, true);
console.log(book1.info());
addBookToLibrary(book1);
console.log(yourLibrary);
// displayLibrary();


let dialog = document.querySelector("#new-book-modal");
let addButton = document.getElementById("add-book-button");
let closeButton = document.querySelector("#close-button");
let submitButton = document.querySelector("#submit-button");

addButton.addEventListener("click", () => {
    console.log(dialog);
    dialog.showModal();
});

closeButton.addEventListener("click", () => {
    dialog.close();
});

submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    let title = document.querySelector("#title-input").value;
    let author = document.querySelector("#author-input").value;
    let page = document.querySelector("#page-input").value;
    let status = false;
    let statuses = document.getElementsByClassName("status-input");
    for (i = 0; i < statuses.length; i++)
    {
        if (statuses[i].checked)
        {
            status = true ? statuses[i].value == "true" : false;
            
        }
    }
    let newBook = new Book(title, author, page, status);
    document.getElementById("new-book-form").reset();
    addBookToLibrary(newBook);
    displayLibrary();
    dialog.close();
})