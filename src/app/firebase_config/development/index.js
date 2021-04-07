const { products } = require("./products");
const { orders } = require("./orders");

const buildData = async () => {
  try {
    await products();
    await orders();

    console.log("Collections inserted Successfuly");
  } catch (err) {
    console.log("Fail Collections inserted: ", err);
  }

  process.exit();
};

buildData();
