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
}

// Clear fields

UI.prototype.clearFields = function(){
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('year').value = '';
}
// Event Listners 

document.getElementById('anime-form').addEventListener('submit', function(e) {

  // get form values
  const title = document.getElementById('title').value,
  author = document.getElementById('author').value,
  year = document.getElementById('year').value;

  // instantiate book
  const anime = new Anime(title, author, year);

  // instantiate UI

  const ui = new UI();

  // add book to list

  ui.addAnimeToList(anime);

  // clear fileds

  ui.clearFields();
 
 
  
  
  e.preventDefault();
});