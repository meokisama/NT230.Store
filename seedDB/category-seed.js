const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });
const Category = require("../models/category");
const mongoose = require("mongoose");
const connectDB = require("./../config/db");
connectDB();

async function seedDB() {
  async function seedCateg(titleStr) {
    try {
      const categ = await new Category({ title: titleStr });
      await categ.save();
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async function closeDB() {
    console.log("CLOSING CONNECTION");
    await mongoose.disconnect();
  }
  await seedCateg("Dengeki");
  await seedCateg("Fantasia");
  await seedCateg("MF Bunko");
  await seedCateg("Gagaga");
  await seedCateg("Overlap");
  await seedCateg("GCN");
  await seedCateg("HJ Bunko");
  await closeDB();
}

seedDB();
