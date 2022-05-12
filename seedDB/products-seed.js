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
    "Dengeki Book 01",
    "Dengeki Book 02",
    "Dengeki Book 03",
    "Dengeki Book 04",
    "Dengeki Book 05",
  ];
  const dengeki_imgs = [
    "https://i.pinimg.com/736x/8a/95/78/8a9578205020cc79cee33ef1c4da8c8e.jpg",
    "https://i.pinimg.com/736x/8a/95/78/8a9578205020cc79cee33ef1c4da8c8e.jpg",
    "https://i.pinimg.com/736x/8a/95/78/8a9578205020cc79cee33ef1c4da8c8e.jpg",
    "https://i.pinimg.com/736x/8a/95/78/8a9578205020cc79cee33ef1c4da8c8e.jpg",
    "https://i.pinimg.com/736x/8a/95/78/8a9578205020cc79cee33ef1c4da8c8e.jpg",
  ];

  //--------------------Kodansha
  const kodansha_titles = [
    "Kodansha Book 01",
    "Kodansha Book 02",
    "Kodansha Book 03",
    "Kodansha Book 04",
    "Kodansha Book 05",
  ];

  const kodansha_imgs = [
    "https://i.pinimg.com/736x/8a/95/78/8a9578205020cc79cee33ef1c4da8c8e.jpg",
    "https://i.pinimg.com/736x/8a/95/78/8a9578205020cc79cee33ef1c4da8c8e.jpg",
    "https://i.pinimg.com/736x/8a/95/78/8a9578205020cc79cee33ef1c4da8c8e.jpg",
    "https://i.pinimg.com/736x/8a/95/78/8a9578205020cc79cee33ef1c4da8c8e.jpg",
    "https://i.pinimg.com/736x/8a/95/78/8a9578205020cc79cee33ef1c4da8c8e.jpg",
  ];

  //--------------------Fantasia
  const fantasia_titles = [
    "Fantasia Book 01",
    "Fantasia Book 02",
  ];

  const fantasia_imgs = [
    "https://i.pinimg.com/736x/8a/95/78/8a9578205020cc79cee33ef1c4da8c8e.jpg",
    "https://i.pinimg.com/736x/8a/95/78/8a9578205020cc79cee33ef1c4da8c8e.jpg",
  ];

  //--------------------MF Bunko
  const mfbunko_titles = [
    "MF Bunko Book 01",
    "MF Bunko Book 02",
    "MF Bunko Book 03",
    "MF Bunko Book 04",
    "MF Bunko Book 05",
  ];
  const mfbunko_imgs = [
    "https://i.pinimg.com/736x/8a/95/78/8a9578205020cc79cee33ef1c4da8c8e.jpg",
    "https://i.pinimg.com/736x/8a/95/78/8a9578205020cc79cee33ef1c4da8c8e.jpg",
    "https://i.pinimg.com/736x/8a/95/78/8a9578205020cc79cee33ef1c4da8c8e.jpg",
    "https://i.pinimg.com/736x/8a/95/78/8a9578205020cc79cee33ef1c4da8c8e.jpg",
    "https://i.pinimg.com/736x/8a/95/78/8a9578205020cc79cee33ef1c4da8c8e.jpg",
  ];

  //--------------------Gagaga

  const gagaga_titles = [
    "Gagaga Book 01",
    "Gagaga Book 02",
    "Gagaga Book 03",
    "Gagaga Book 04",
    "Gagaga Book 05",
  ];
  const gagaga_imgs = [
    "https://i.pinimg.com/736x/8a/95/78/8a9578205020cc79cee33ef1c4da8c8e.jpg",
    "https://i.pinimg.com/736x/8a/95/78/8a9578205020cc79cee33ef1c4da8c8e.jpg",
    "https://i.pinimg.com/736x/8a/95/78/8a9578205020cc79cee33ef1c4da8c8e.jpg",
    "https://i.pinimg.com/736x/8a/95/78/8a9578205020cc79cee33ef1c4da8c8e.jpg",
    "https://i.pinimg.com/736x/8a/95/78/8a9578205020cc79cee33ef1c4da8c8e.jpg",
  ];

  //-----------------------GCN
  const gcn_titles = [
    "GCN Book 01",
    "GCN Book 02",
    "GCN Book 03",
    "GCN Book 04",
    "GCN Book 05",
  ];
  const gcn_imgs = [
    "https://i.pinimg.com/736x/8a/95/78/8a9578205020cc79cee33ef1c4da8c8e.jpg",
    "https://i.pinimg.com/736x/8a/95/78/8a9578205020cc79cee33ef1c4da8c8e.jpg",
    "https://i.pinimg.com/736x/8a/95/78/8a9578205020cc79cee33ef1c4da8c8e.jpg",
    "https://i.pinimg.com/736x/8a/95/78/8a9578205020cc79cee33ef1c4da8c8e.jpg",
    "https://i.pinimg.com/736x/8a/95/78/8a9578205020cc79cee33ef1c4da8c8e.jpg",
  ];

  //-----------------Overlap

  const overlap_titles = [
    "Overlap Book 01",
    "Overlap Book 02",
    "Overlap Book 03",
    "Overlap Book 04",
    "Overlap Book 05",
  ];
  const overlap_imgs = [
    "https://i.pinimg.com/736x/8a/95/78/8a9578205020cc79cee33ef1c4da8c8e.jpg",
    "https://i.pinimg.com/736x/8a/95/78/8a9578205020cc79cee33ef1c4da8c8e.jpg",
    "https://i.pinimg.com/736x/8a/95/78/8a9578205020cc79cee33ef1c4da8c8e.jpg",
    "https://i.pinimg.com/736x/8a/95/78/8a9578205020cc79cee33ef1c4da8c8e.jpg",
    "https://i.pinimg.com/736x/8a/95/78/8a9578205020cc79cee33ef1c4da8c8e.jpg",
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
          price: faker.random.number({ min: 100000, max: 500000 }),
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
  await seedProducts(kodansha_titles, kodansha_imgs, "Kodansha");
  await seedProducts(mfbunko_titles, mfbunko_imgs, "MF Bunko");
  await seedProducts(
    gagaga_titles,
    gagaga_imgs,
    "Gagaga"
  );
  await seedProducts(gcn_titles, gcn_imgs, "GCN");
  await seedProducts(overlap_titles, overlap_imgs, "Overlap");

  await closeDB();
}

seedDB();
