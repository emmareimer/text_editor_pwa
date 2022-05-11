import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  console.log('line 17');

  const jateDb = await openDB('jate', 1)

  const tx = jateDb.transaction('jate', "readwrite")

  const store = tx.objectStore('jate')

  const request = store.put({ jate: content})

  const result = await request
  console.log('line 28');
  console.log('result.value', result);
  return result;
};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  console.log("line 35");

  const jateDb = await openDB('jate', 1)

  const tx = jateDb.transaction('jate', "readonly")

  const store = tx.objectStore('jate')

  const request = store.getAll()

  const result = await request
  console.log('IT FINALLY WORKED');
  console.log(result);
};

initdb();
