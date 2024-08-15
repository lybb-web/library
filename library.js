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

let book1 = new Book("Diary of a Wimpy Kid", "Jeff Kinney", 217, true);
console.log(book1.info());