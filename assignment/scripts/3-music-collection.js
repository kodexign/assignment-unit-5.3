console.log('***** Music Collection *****');
// Safe Zone -- Write code below this line
let myCollection = [];

console.log(':::ADD TO COLLECTION:::');
function addToCollection(collection, title, artist, yearPublished) {

  let newAlbum = {
    title,
    artist,
    yearPublished,
  }
  collection.push(newAlbum);
  return newAlbum;
}

console.log('album 1:', addToCollection(myCollection, 'Remember', 'Big Bang', 2008));
console.table('album 2:',addToCollection(myCollection, 'MADE', 'Big Bang', 2016));
console.log('album 3:', addToCollection(myCollection, 'Its Hyorish', 'Lee Hyori', 2008));
console.log('album 4:', addToCollection(myCollection, 'Still Fantasy', 'Jay Chou', 2006));
console.log('album 5:', addToCollection(myCollection, 'In a World Like This', 'Backstreet Boys', 2013));
console.log('album 6:', addToCollection(myCollection, 'Fallen Embers', 'Illenium', 2021));

console.log('my collection:', myCollection);

console.log(':::SHOW COLLECTION:::');
function showCollection(collection) {
  for (let album of collection) {
    console.log(`${album.title} by ${album.artist} published in ${album.yearPublished}`);
  }
}
showCollection(myCollection);

// not returning all albums...
console.log(':::FIND BY ARTIST:::');
console.table(myCollection);

function findByArtist(collection, artist) {
  let sameArtist = [];
  for (let album of collection) {
    if (album.artist === artist) {
      sameArtist.push(album);
      return sameArtist;
    }
    return sameArtist;
  }
  
}
findByArtist(myCollection, 'Big Bang');
console.log('artist albums:', findByArtist(myCollection, 'Big Bang'));
console.log('artist albums:', findByArtist(myCollection, 'Taylor Swift'));


console.log(':::STRETCH GOALS:::');

let searchCriteria = {
  artist,
  yearPublished,
}
function search(collection, searchCriteria){
let find = [];
for (let album of colleciton) {
  if (album.artist && album.yearPublished === searchCriteria.artist && searchCriteria.yearPublished){
    find.push(album);
    return find;
  }
  return collection;
}
}

console.log( 'search:', search( myCollection, 'Big Bang', 2008));









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
