const uniqid = require("uniqid");
const { db } = require("../firebase_connection");

const { countTotalPrice } = require("../utils");

exports.orders = async () => {
  /**
   * @Notes
   * don't fetch user, and using hard code id, beause, Users manipulating with GooglAuth
   */
  let products = [];
  const productsRef = db.collection("products");
  const snapShot = await productsRef.get();

  snapShot.forEach((doc) => {
    products.push({ id: doc.id, ...doc.data() });
  });

  const data = [
    {
      id: uniqid("orders"),
      productsRef: [
        { id: products[0].id, count: 2 },
        { id: products[1].id, count: 3 },
        { id: products[3].id, count: 1 },
      ],
      user: "XJF3EJyrJ3ac43DLHqw0QuPni473",
      price: countTotalPrice([
        { price: products[0].price, count: 2 },
        { price: products[1].price, count: 3 },
        { price: products[3].price, count: 1 },
      ]),
      createdAt: new Date(),
      status: "Processing",
    },
    {
      id: uniqid("orders"),
      productsRef: [
        { id: products[4].id, count: 1 },
        { id: products[2].id, count: 2 },
        { id: products[3].id, count: 1 },
      ],
      user: "XJF3EJyrJ3ac43DLHqw0QuPni473",
      price: countTotalPrice([
        { price: products[4].price, count: 1 },
        { price: products[2].price, count: 2 },
        { price: products[3].price, count: 1 },
      ]),
      createdAt: new Date(),
      status: "Completed",
    },
    {
      id: uniqid("orders"),
      productsRef: [
        { id: products[0].id, count: 2 },
        { id: products[1].id, count: 3 },
      ],
      user: "jD6MGcqTPISYIYqsPQIRB9ZgeYE2",
      price: countTotalPrice([
        { price: products[0].price, count: 2 },
        { price: products[1].price, count: 3 },
      ]),
      createdAt: new Date(),
      status: "Canceled",
    },
  ];

  try {
    data.forEach((el) => {
      db.collection("orders").doc(el.id).set({
        productsRef: el.productsRef,
        user: el.user,
        price: el.price,
        status: el.status,
      });
    });
  } catch (err) {
    console.log("erro with Products: ", err);
  }
};
