const uniqid = require("uniqid");
const { db } = require("../firebase_connection");

exports.products = async () => {
  const data = [
    {
      id: uniqid("product"),
      name: "breasted man",
      price: 50,
      images: [
        "https://res.cloudinary.com/as1789/image/upload/v1617455801/shop-easy-ng/products/breastedman-1_buapf1.jpg",
        "https://res.cloudinary.com/as1789/image/upload/v1617455801/shop-easy-ng/products/breastedman-3_w8wk4g.jpg",
        "https://res.cloudinary.com/as1789/image/upload/v1617455804/shop-easy-ng/products/breastedman-2_bokdqj.jpg",
      ],
    },
    {
      id: uniqid("product"),
      name: "cap",
      price: 28,
      images: [
        "https://res.cloudinary.com/as1789/image/upload/v1617517932/shop-easy-ng/products/cap-2_pxee0x.jpg",
        "https://res.cloudinary.com/as1789/image/upload/v1617517936/shop-easy-ng/products/cap-1_cxdk6t.jpg",
      ],
    },
    {
      id: uniqid("product"),
      name: "Jaket black",
      price: 40,
      images: [
        "https://res.cloudinary.com/as1789/image/upload/v1617518025/shop-easy-ng/products/jaket-black-2_sehr5r.jpg",
        "https://res.cloudinary.com/as1789/image/upload/v1617518028/shop-easy-ng/products/jaket-black-1_rkbco5.jpg",
      ],
    },
    {
      id: uniqid("product"),
      name: "Jaket brown",
      price: 38,
      images: [
        "https://res.cloudinary.com/as1789/image/upload/v1617518071/shop-easy-ng/products/jaket-brown-1_luhfaf.png",
        "https://res.cloudinary.com/as1789/image/upload/v1617518071/shop-easy-ng/products/jaket-brown-2_jrybet.png",
      ],
    },
    {
      id: uniqid("product"),
      name: "Jaket Fur",
      price: 35,
      images: [
        "https://res.cloudinary.com/as1789/image/upload/v1617518090/shop-easy-ng/products/jaket-fur-2_sxiilr.jpg",
        "https://res.cloudinary.com/as1789/image/upload/v1617518090/shop-easy-ng/products/jaket-fur-1_ayw8rd.jpg",
      ],
    },
    {
      id: uniqid("product"),
      name: "Jeans black",
      price: 30,
      images: [
        "https://res.cloudinary.com/as1789/image/upload/v1617518129/shop-easy-ng/products/jeans-black1-1_u6wc7j.jpg",
        "https://res.cloudinary.com/as1789/image/upload/v1617518130/shop-easy-ng/products/jeans-black1-2_pgvcqq.jpg",
      ],
    },
    {
      id: uniqid("product"),
      name: "Shoes",
      price: 55,
      images: [
        "https://res.cloudinary.com/as1789/image/upload/v1617518171/shop-easy-ng/products/shoes-aa-1_ovctzq.jpg",
        "https://res.cloudinary.com/as1789/image/upload/v1617518178/shop-easy-ng/products/shoes-aa-3_dbzrc4.jpg",
        "https://res.cloudinary.com/as1789/image/upload/v1617518181/shop-easy-ng/products/shoes-aa-2_ljyssc.jpg",
      ],
    },
    {
      id: uniqid("product"),
      name: "Suits gray",
      price: 80,
      images: [
        "https://res.cloudinary.com/as1789/image/upload/v1617518191/shop-easy-ng/products/suits-gray-2_sqcyjj.jpg",
        "https://res.cloudinary.com/as1789/image/upload/v1617518191/shop-easy-ng/products/suits-gray-3_hgxxr1.jpg",
        "https://res.cloudinary.com/as1789/image/upload/v1617518191/shop-easy-ng/products/suits-gray-1_s22q5r.jpg",
      ],
    },
  ];

  try {
    data.forEach((el) => {
      db.collection("products")
        .doc(el.id)
        .set({ name: el.name, price: el.price, images: el.images });
    });
  } catch (err) {
    console.log("erro with Products: ", err);
  }
};
