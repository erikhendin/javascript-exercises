const getTheTitles =function(booksArr) {
    const bookTitles =[];
      for (let i=0;i<booksArr.length;i++){
      //console.log(booksArr[i].title);
      bookTitles.push(booksArr[i].title);
      }
    return bookTitles;
  };

/*
    const booksArr = [{title: 'Book', author: 'Name'},{title: 'Book2',author: 'Name2'}]
*/


// Do not edit below this line
module.exports = getTheTitles;
