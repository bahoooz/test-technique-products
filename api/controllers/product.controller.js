const Product = require("../models/product.model");

exports.createproduct = async (req, res) => {
  const newProduct = new Product({
    ...req.body,
  });
  try {
    const savedProduct = await newProduct.save();
    res.status(201).json({ product: savedProduct, message: "Produit créé !" });
  } catch (error) {
    console.log(error);
    res
      .status(400)
      .json({ message: "Echec de création de produits", error: error.message });
  }
};

exports.getproducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Erreur lors de la récupération des produits",
      error: error.message,
    });
  }
};

exports.getproduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.productId);
    if (!product) {
      return res.status(404).json({ message: "Produit non trouvé" });
    }
    res.json(product);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Erreur lors de la récupération du produit",
      error: error.message,
    });
  }
};


exports.deleteproduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.productId);
    res.status(200).json({ message: "The product has been deleted" });
  } catch (error) {
    res.status(400).json({
      message: "Erreur lors de la suppression du produit",
      error: error.message,
    });
  }
};

exports.updateproduct = async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.productId,
      {
        $set: {
          name: req.body.name,
          type: req.body.type,
          price: req.body.price,
          rating: req.body.rating,
          warranty_years: req.body.warranty_years,
          available: req.body.available,
        },
      },
      { new: true }
    );
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(400).json({
      message: "Erreur lors de la mise a jour du produit",
      error: error.message,
    });
  }
};
