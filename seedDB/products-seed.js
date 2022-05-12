const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });
const Product = require("../models/product");
const Category = require("../models/category");
const mongoose = require("mongoose");
const faker = require("faker");
const connectDB = require("./../config/db");
connectDB();

async function seedDB() {
  faker.seed(0);

  //----------------------Dengeki
  const dengeki_titles = [
    "Killing the Killers"
  ];
  const dengeki_imgs = [
    "https://m.media-amazon.com/images/P/1250279259.01._SCLZZZZZZZ_SX500_.jpg"
  ];

  //--------------------MF Bunko
  const mfbunko_titles = [
    "Burn After Writing"
  ];

  const mfbunko_imgs = [
    "https://images-na.ssl-images-amazon.com/images/I/612V9dt-NGS.jpg"
  ];

  //--------------------Fantasia
  const fantasia_titles = [
    "Book Lovers"
  ];

  const fantasia_imgs = [
    "https://images-na.ssl-images-amazon.com/images/I/71gDtm1U0FL.jpg"
  ];

  //--------------------Gagaga
  const gagaga_titles = [
    "It Ends with Us"
  ];
  const gagaga_imgs = [
    "https://images-na.ssl-images-amazon.com/images/I/71EwoNQypZL.jpg"
  ];

  //--------------------Overlap

  const overlap_titles = [
    "I Love You to the Moon and Back"
  ];
  const overlap_imgs = [
    "https://images-na.ssl-images-amazon.com/images/I/8144Vic9C5L.jpg"
  ];

  //-----------------------GCN
  const gcn_titles = [
    "The Perfect College Student Planner"
  ];
  const gcn_imgs = [
    "https://images-na.ssl-images-amazon.com/images/I/71zqjvaVd8L.jpg"
  ];

  //----------------------HJ Bunko

  const hjbunko_titles = [
    "Where the Crawdads Sing"
  ];
  const hjbunko_imgs = [
    "https://images-na.ssl-images-amazon.com/images/I/61m1Vxw8tiL.jpg"
  ];

  async function seedProducts(titlesArr, imgsArr, categStr) {
    try {
      const categ = await Category.findOne({ title: categStr });
      for (let i = 0; i < titlesArr.length; i++) {
        let prod = new Product({
          productCode: faker.helpers.replaceSymbolWithNumber("####-##########"),
          title: titlesArr[i],
          imagePath: imgsArr[i],
          description: faker.lorem.paragraph(),
          price: faker.random.number({ min: 10, max: 50 }),
          manufacturer: faker.company.companyName(0),
          available: true,
          category: categ._id,
        });
        await prod.save();
      }
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async function closeDB() {
    console.log("CLOSING CONNECTION");
    await mongoose.disconnect();
  }

  await seedProducts(dengeki_titles, dengeki_imgs, "Dengeki");
  await seedProducts(fantasia_titles, fantasia_imgs, "Fantasia");
  await seedProducts(mfbunko_titles, mfbunko_imgs, "MF Bunko");
  await seedProducts(gagaga_titles, gagaga_imgs, "Gagaga");
  await seedProducts(
    overlap_titles,
    overlap_imgs,
    "Overlap"
  );
  await seedProducts(gcn_titles, gcn_imgs, "GCN");
  await seedProducts(hjbunko_titles, hjbunko_imgs, "HJ Bunko");

  await closeDB();
}

seedDB();
