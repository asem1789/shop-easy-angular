var firebase = require("firebase/app");
require("firebase/firestore");

const config = require("../../../firebase-config-1");

firebase.initializeApp(config);

const db = firebase.firestore();

module.exports = {
  db,
};
