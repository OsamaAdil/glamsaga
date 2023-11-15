const Orders = require("../models/orders");

const rectifyName = function (a) {
  return a.toLowerCase();
};

//Create
const createOrders = function (req, res) {
  let sendRes = {
    message: "",
    error: true,
    data: []
  };

  if (!req.body.name) {
    sendRes.message = "Please add the required data";
    return res.status(400).send(sendRes);
  }

  let OrdersPayload = {
    name : req.body.name
  };
  
  Orders.create(OrdersPayload, (err, resp) => {
    if (err) {
      return res.status(500).send(sendRes);
    }
    sendRes.message = "inserted succesfully";
    sendRes.error = false;
    return res.status(200).send(sendRes);
  });

};
exports.createOrders = createOrders;

// Get
const getOrders = function (req, res) {
  let sendRes = {
    message: "",
    error: true,
    data: [],
  };

  let findData = { isApproved: true };

  Orders.find(findData, (err, resp) => {
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
exports.getOrders = getOrders;

// Update
const editOrders = function (req, res) {
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
  
  let updateOrders = {
    rating : req.body.rating
  };

  let options = { new: true };

  Orders.findOneAndUpdate(query, updateOrders, options, (err, resp) => {
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
exports.editOrders = editOrders;

// Delete
const deleteOrders = function (req, res) {
  let sendRes = {
    message: "",
    error: true,
  };

  if (!req.body.ratingId) {
    sendRes.message = "Data not provided to delete the data!";
    return res.status(400).send(sendRes);
  }

  let query = { _id: req.body.ratingId };

  let updateOrders = {
    isActive: false,
  };

  Orders.findOneAndUpdate(query, updateOrders, (err, resp) => {
    if (err) {
      sendRes.message = "Server error while fectching details from server";
      return res.status(500).send(sendRes);
    }
    sendRes.message = `deleted succesfully`;
    sendRes.data = resp;
    return res.status(200).send(sendRes);
  });
};
exports.deleteOrders = deleteOrders;
