const Transactions = require("../models/Transactions");

const rectifyName = function (a) {
  return a.toLowerCase();
};

//Create
const createTransactions = function (req, res) {
  let sendRes = {
    message: "",
    error: true,
    data: []
  };

  if (!req.body.name) {
    sendRes.message = "Please add the required data";
    return res.status(400).send(sendRes);
  }

  let TransactionsPayload = {
    name : req.body.name
  };
  
  Transactions.create(TransactionsPayload, (err, resp) => {
    if (err) {
      return res.status(500).send(sendRes);
    }
    sendRes.message = "inserted succesfully";
    sendRes.error = false;
    return res.status(200).send(sendRes);
  });

};
exports.createTransactions = createTransactions;

// Get
const getTransactions = function (req, res) {
  let sendRes = {
    message: "",
    error: true,
    data: [],
  };

  let findData = { isApproved: true };

  Transactions.find(findData, (err, resp) => {
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
exports.getTransactions = getTransactions;

// Update
const editTransactions = function (req, res) {
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
  
  let updateTransactions = {
    rating : req.body.rating
  };

  let options = { new: true };

  Transactions.findOneAndUpdate(query, updateTransactions, options, (err, resp) => {
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
exports.editTransactions = editTransactions;

// Delete
const deleteTransactions = function (req, res) {
  let sendRes = {
    message: "",
    error: true,
  };

  if (!req.body.ratingId) {
    sendRes.message = "Data not provided to delete the data!";
    return res.status(400).send(sendRes);
  }

  let query = { _id: req.body.ratingId };

  let updateTransactions = {
    isActive: false,
  };

  Transactions.findOneAndUpdate(query, updateTransactions, (err, resp) => {
    if (err) {
      sendRes.message = "Server error while fectching details from server";
      return res.status(500).send(sendRes);
    }
    sendRes.message = `deleted succesfully`;
    sendRes.data = resp;
    return res.status(200).send(sendRes);
  });
};
exports.deleteTransactions = deleteTransactions;
