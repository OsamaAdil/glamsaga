require("../config/index");
require("../models/database");
const crypto = require('crypto');
const mongoose = require('mongoose');
const Users = require("../models/users");
const { log } = require("console");

const salt = crypto.randomBytes(16).toString('base64');
const randomSalt = Buffer.from(salt, 'base64');

let insertUser = [
    {
        firstName: "Admin",
        email: "superadmin@glamsaga.co.in",
        accountId: "85217410",
        password: crypto.pbkdf2Sync('glamsaga@123', randomSalt, 10000, 64, 'sha1').toString('base64'),
        phoneNumber: "9082469146",  
        salt: salt,
        role: "ADMIN"
    },
]

const seedUsers = ()=>{
    Users.find({}, (err, resp) => {
      if (resp.length > 0) {
        return;
      } else {
        Users.create(insertUser, (err, response) => {
            if(err){
              console.log("Unable to create user", err)
              return
            }
            console.log("User Created successfully!");
          });
      }
    });
}

// seedUsers();
