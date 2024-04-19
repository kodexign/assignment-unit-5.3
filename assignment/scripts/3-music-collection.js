console.log('***** Music Collection *****');
// Safe Zone -- Write code below this line
let myCollection = [];


function addToCollection(collection, title, artist, yearPublished) {
  let newAlbum = {
    title,
    artist,
    yearPublished,
  };
  myCollection.push(newAlbum);
  return newAlbum;
}

let album1 = addToCollection('Remember', 'Big Bang', 2008);
console.log('Album 1:', album1);
let album2 = addToCollection('MADE', 'Big Bang', 2016);
console.table('album 2:', album2);
let album3 = addToCollection('Its Hyorish', 'Lee Hyori', 2008);
console.log('album 3:', album3);
let album4 = addToCollection('Still Fantasy', 'Jay Chou', 2006);
console.log('album 4:', album4);
let album5 = addToCollection('In a World Like This', 'Backstreet Boys', 2013);
console.log('album 5:', album5);
let album6 = addToCollection('Fallen Embers', 'Illenium', 2021);
console.log('album 6:', album6);

console.log('my collection:', myCollection);

function showCollection(collection) {
  for (let album of collection) {
    console.log(${album.title} +'by' + ${album.artist} + 'published in' + ${yearPublished});

  }
}







// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
  module.exports = {
    myCollection: typeof myCollection !== 'undefined' ? myCollection : undefined,
    addToCollection: typeof addToCollection !== 'undefined' ? addToCollection : undefined,
    showCollection: typeof showCollection !== 'undefined' ? showCollection : undefined,
    findByArtist: typeof findByArtist !== 'undefined' ? findByArtist : undefined,
    search: typeof search !== 'undefined' ? search : undefined,
  }
} catch (e) {
  // Do nothing
}
