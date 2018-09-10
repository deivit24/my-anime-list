// anime constructor

function Anime(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
}

// UI Constructor
function UI() {}

UI.prototype.addAnimeToList = function (anime) {
  const list = document.getElementById('anime-list');
  // create tr element
  const row = document.createElement('tr');
  // insert cols
  row.innerHTML = `
  <td>${anime.title}</td>
  <td>${anime.author}</td>
  <td>${anime.year}</td>
  <td><a href="#" class="delete">X<a></td>
  `;

  list.appendChild(row);
};

// show alert

UI.prototype.showAlert = function (message, className) {
  // create div
  const div = document.createElement('div');
  // add classes
  div.className = `alert ${className}`;
  // add text
  div.appendChild(document.createTextNode(message));
  // GET parent
  const container = document.querySelector('.container');
  // get form
  const form = document.querySelector('#anime-form');
  // insert alert
  container.insertBefore(div, form);

  // timeout after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').remove();
  }, 3000);
};

// deletebook
UI.prototype.deleteBook = function(target){
  if (target.className === 'delete') {
    target.parentElement.parentElement.remove();
  } 
};
// Clear fields

UI.prototype.clearFields = function(){
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('year').value = '';
};
// Event Listners 

document.getElementById('anime-form').addEventListener('submit', function(e) {

  // get form values
  const title = document.getElementById('title').value,
  author = document.getElementById('author').value,
  year = document.getElementById('year').value;

  // instantiate book
  const anime = new Anime(title, author, year);

  const ui = new UI();
  // validate

  if (title === '' || author === '' || year === '') {
    // error
    ui.showAlert('Please fill in all fields', 'error');
  } else {
// add book to list

ui.addAnimeToList(anime);

// show success
ui.showAlert('Anime Added!', 'success');

// clear fileds

ui.clearFields();
  }


  e.preventDefault();
});

// Event Listner for Delete
document.getElementById('anime-list').addEventListener('click', function(e){

   // instantiate UI

  const ui = new UI();

  ui.deleteBook(e.target);
  
  ui.showAlert('anime Removed', 'success');

  e.preventDefault();
});