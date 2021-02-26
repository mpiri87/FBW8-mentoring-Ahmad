const { MongoClient } = require("mongodb");

const connectionString =
  "mongodb+srv://Mehmet:Temhem1987@cluster0.md4dr.mongodb.net/Blog?retryWrites=true&w=majority";

let client;

function connect() {
  return new Promise((resolve, reject) => {
    MongoClient.connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
      .then((con) => {
        client = con;
        resolve();
      })
      .catch((error) => {
        reject(error);
      });
  });
}

function addComment(name, commentDate, comment, email) {
  return new Promise((resolve, reject) => {
    const db = client.db("Blog");
    db.collection("comments")
      .insertOne({
        name: name,
        commentDate: commentDate,
        comment: comment,
        email: email,
      })
      .then((response) => {
        if (response.result.ok) {
          resolve();
        } else {
          reject();
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
}

function getComments() {
  return new Promise((resolve, reject) => {
    const db = client.db("Blog");
    //find method gonna return all documents inside the collection
    db.collection("comments")
      .find()
      .toArray()
      .then((comments) => {
        resolve(comments);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

module.exports = {
  connect,
  addComment,
  getComments,
};
