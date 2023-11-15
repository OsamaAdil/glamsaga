const Products = require("../models/Products");

const rectifyName = function (a) {
  return a.toLowerCase();
};

//Create
const createProducts = function (req, res) {
  let sendRes = {
    message: "",
    error: true,
    data: []
  };

  if (!req.body.name) {
    sendRes.message = "Please add the required data";
    return res.status(400).send(sendRes);
  }

  let ProductsPayload = {
    name : req.body.name
  };
  
  Products.create(ProductsPayload, (err, resp) => {
    if (err) {
      return res.status(500).send(sendRes);
    }
    sendRes.message = "inserted succesfully";
    sendRes.error = false;
    return res.status(200).send(sendRes);
  });

};
exports.createProducts = createProducts;

// Get
const getProducts = function (req, res) {
  let sendRes = {
    message: "",
    error: true,
    data: [],
  };

  let findData = { isApproved: true };

  Products.find(findData, (err, resp) => {
    if (err) {
      
      sendRes.message = "Server error while fectching details from server";
      return res.status(500).send(sendRes);
    }
    sendRes.message = "fetched succesfully";
    sendRes.error = false;
    sendRes.data = resp;
    return res.status(200).send(sendRes);
  });
};
exports.getProducts = getProducts;

// Update
const editProducts = function (req, res) {
  let sendRes = {
    message: "",
    error: true,
    data: []
  };

  if (!req.body.rating || !req.body.productId) {
    sendRes.message = "Bad request from user";
    return res.status(400).send(sendRes);
  }
  
  let query = { _id: req.body.ratingId }; 
  
  let updateProducts = {
    rating : req.body.rating
  };

  let options = { new: true };

  Products.findOneAndUpdate(query, updateProducts, options, (err, resp) => {
    if (err) {
      sendRes.message = "Server error while fectching details from server";
      return res.status(500).send(sendRes);
    }
    sendRes.message = `updated data succesfully`;
    sendRes.data = resp;
    sendRes.error = false;
    return res.status(200).send(sendRes);
  });
};
exports.editProducts = editProducts;

// Delete
const deleteProducts = function (req, res) {
  let sendRes = {
    message: "",
    error: true,
  };

  if (!req.body.ratingId) {
    sendRes.message = "Data not provided to delete the data!";
    return res.status(400).send(sendRes);
  }

  let query = { _id: req.body.ratingId };

  let updateProducts = {
    isActive: false,
  };

  Products.findOneAndUpdate(query, updateProducts, (err, resp) => {
    if (err) {
      sendRes.message = "Server error while fectching details from server";
      return res.status(500).send(sendRes);
    }
    sendRes.message = `deleted succesfully`;
    sendRes.data = resp;
    return res.status(200).send(sendRes);
  });
};
exports.deleteProducts = deleteProducts;
