const Users = require("../models/Users");

const rectifyName = function (a) {
  return a.toLowerCase();
};

//Create
const createUsers = function (req, res) {
  let sendRes = {
    message: "",
    error: true,
    data: []
  };

  if (!req.body.name) {
    sendRes.message = "Please add the required data";
    return res.status(400).send(sendRes);
  }

  let UsersPayload = {
    name : req.body.name
  };
  
  Users.create(UsersPayload, (err, resp) => {
    if (err) {
      return res.status(500).send(sendRes);
    }
    sendRes.message = "inserted succesfully";
    sendRes.error = false;
    return res.status(200).send(sendRes);
  });

};
exports.createUsers = createUsers;

// Get
const getUsers = function (req, res) {
  let sendRes = {
    message: "",
    error: true,
    data: [],
  };

  let findData = { isApproved: true };

  Users.find(findData, (err, resp) => {
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
exports.getUsers = getUsers;

// Update
const editUsers = function (req, res) {
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
  
  let updateUsers = {
    rating : req.body.rating
  };

  let options = { new: true };

  Users.findOneAndUpdate(query, updateUsers, options, (err, resp) => {
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
exports.editUsers = editUsers;

// Delete
const deleteUsers = function (req, res) {
  let sendRes = {
    message: "",
    error: true,
  };

  if (!req.body.ratingId) {
    sendRes.message = "Data not provided to delete the data!";
    return res.status(400).send(sendRes);
  }

  let query = { _id: req.body.ratingId };

  let updateUsers = {
    isActive: false,
  };

  Users.findOneAndUpdate(query, updateUsers, (err, resp) => {
    if (err) {
      sendRes.message = "Server error while fectching details from server";
      return res.status(500).send(sendRes);
    }
    sendRes.message = `deleted succesfully`;
    sendRes.data = resp;
    return res.status(200).send(sendRes);
  });
};
exports.deleteUsers = deleteUsers;
