import Product from "../models/product.model.js";

// Get All Products
export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      products,
    });
  } catch (error) {
    console.error("Get Products Error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch products",
    });
  }
};

// Get Id by Product
export const getProductById = async (req, res) => {
  try {

    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    res.status(200).json({
      success: true,
      product,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching product",
      error: error.message,
    });
  }
};

//Search Product
export const SearchProduct = async (req, res) => {
  try {
    const q = req.query.q || "";

    if (!q.trim()) {
      return res.json([]);
    }

    const products = await Product.find({
      name: { $regex: q, $options: "i" }, // case-insensitive search
    });

    res.json(products);
  } catch (error) {
    console.error("Search Error:", error);
    res.status(500).json({ message: "Search failed" });
  }
};
