const Category = require("../models/categories");
const {resStr} = require("../helpers/responseStructure");

const rectifyName = function (a) {
  return a.toLowerCase();
};

//Create
const createCategory = function (req, res) {

  // manipulation


  let sendRes = {
    message: "",
    error: true,
    data: [],
  };

  if (!req.body.name) {
    sendRes.message = "Please add the name";
    return res.status(400).send(sendRes);
  }

  let CategoryPayload = {
    name: rectifyName(req.body.name),
  };

  Category.findOne(CategoryPayload, (err, resp) => {
    if (err) {
      
      sendRes.message = "Error in finding";
      return res.status(500).send(sendRes);
    }
    if (resp) {
      sendRes.message = "Already exists";
      return res.status(400).send(sendRes);
    }
    Category.create(CategoryPayload, (errC, resC) => {
      if (errC) {
        return res.status(500).send(sendRes);
      }
      sendRes.message = "Inserted succesfully";
      sendRes.error = false;
      return res.status(200).send(sendRes);
    });
  });

};
exports.createCategory = createCategory;

// Get
const getCategory = function (data, cb) {

  let findData = { };
  
  // if (!data.name) {
  //   sendRes.message = "Please add the name";
  //   sendRes.status = 400;
  //   return cb(sendRes);
  // }

  Category.find(findData, (err, resp) => {
    if (err) {
      // sendRes.status = 500;
      // return res.status(500).send(sendRes);
      // return cb(sendRes)
      return cb(resStr(500, "Server error while fetching details from server", null, true))
    }
    // sendRes.message = "";
    // sendRes.error = false;
    // sendRes.status = 200;
    // sendRes.data = ;
    //yahan pe
    // return res.status(200).send(sendRes);
    // return sendRes;
    // return cb(false, sendRes);
    return cb(null, resStr(200, "fetched succesfully", resp, true))
  });
};
exports.getCategory = getCategory;

// Update
const editCategory = function (req, res) {
  let sendRes = {
    message: "",
    error: true,
    data: [],
  };

  if (!req.body.name && !req.body.categoryId) {
    sendRes.message = "Bad request";
    return res.status(400).send(sendRes);
  }
  
  let query = { _id : req.body.categoryId };
  
  let updateCategory = {
    name: rectifyName(req.body.name),
  };

  let options = { new: true };

  Category.findOneAndUpdate(query, updateCategory, options, (err, resp) => {
    if (err) {
      sendRes.message = "Server error while fectching details from server";
      return res.status(500).send(sendRes);
    }
    sendRes.message = `updated data with new name ${req.body.name} succesfully`;
    sendRes.data = resp;
    sendRes.error = false;
    return res.status(200).send(sendRes);
  });
};
exports.editCategory = editCategory;

// Delete
const deleteCategory = function (req, res) {
  let sendRes = {
    message: "",
    error: true,
  };

  if (!req.body.categoryId) {
    sendRes.message = "Name not provided to delete the data!";
    return res.status(400).send(sendRes);
  }

  let query = { _id : req.body.categoryId };

  let updateCategory = {
    isDelete: true,
  };

  Category.findOneAndUpdate(query, updateCategory, (err, resp) => {
    if (err) {
      sendRes.message = "Server error while fectching details from server";
      return res.status(500).send(sendRes);
    }
    sendRes.message = `${req.body.name} deleted succesfully`;
    sendRes.data = resp;
    return res.status(200).send(sendRes);
  });
};
exports.deleteCategory = deleteCategory;
