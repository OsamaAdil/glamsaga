const async = require('async');
const { sendResponse }  = require("../helpers/common")
const { comparePassword, encryptData, validatePassword, generatePassword } = require("../helpers/security")
const Users = require('../models/users')
const {resStr} = require("../helpers/responseStructure");

const userSignup = function (data, response, cb){
    if(!cb){
        cb = response;
    }
    if (!data.email || !data.password || !data.confirmPassword || !data.name ) {
        return cb(sendResponse(400, null, "userSignup", null));
    }

    if(!validatePassword(data.password, data.confirmPassword)){
        return cb(sendResponse(400, "Password and Confirm Password doesn't matched!", "userSignup", null));
    }

    let waterfallFunction = [];

    waterfallFunction.push(async.apply(validateEmail, data));
    waterfallFunction.push(async.apply(generatePassword, data.password));
    waterfallFunction.push(async.apply(registerUser, data));
    waterfallFunction.push(async.apply(encryptUserDataAndUserLogin, data));
    async.waterfall(waterfallFunction, cb);
}
exports.userSignup = userSignup


/**
 * It takes in a data object, a response object, and a callback function. If the callback function is
 * not passed in, it sets the callback function to the response object.
 * Use to check for the email information in DB.
 * @param data - The data object that is passed to the function.
 * @param response - The response object from the route
 * @param cb - callback function
 */
const validateEmail = function (data, response, cb){
    if(!cb){
        cb = response;
    }

    let findUser = {
        email: data.email
    }

    Users.findOne(findUser, (err, user)=>{
        if (err) {

            return cb(sendResponse(500, null, "validateEmail", null));
        }
        if(!user){
            return cb(null, sendResponse(200, "Email does not exist!", "validateEmail", null));
        }else{
            if(user.isBlocked){
                return cb(sendResponse(400, "Email has been blocked", "validateEmail", null))
            }
            return cb(sendResponse(400, "Email already exist!", "validateEmail", null))
        }
    })

}

/**
 * The function registers a user by creating a new user in the database with their email, name, hashed
 * password, salt, and provider.
 * @param data - an object containing user data such as email and name
 * @param response 
 * @param cb - 
 * @returns Either an error response or a success response. 
 * If there is an error, it returns a response with a status code of 500 
 * and a message indicating that something went wrong. 
 * If there is no hash or salt in the response, it returns a response with a status code of 500 
 * and a message indicating that there is no hash/salt. 
 * If the user is created then it will return a response with a status code of 200 
 * and a message indicating that the user has successfully created.
 */
const registerUser = async function (data, response, cb) {
    if (!cb) {
        cb = response;
    }
    let { hash, salt } = response;

    if (!hash || !salt) {
        return cb(sendResponse(500, "no hash/salt", "registerUser", null));
    }
    data.salt = salt;

    let createData = {
        email: data.email,
        name: data.name,
        password: response.hash,
        salt: response.salt,
        provider: 'email'
    }
   
    Users.create(createData, (err, res) => {
        if (err) {
            console.error(err);
            return cb(sendResponse(500, "Something went wrong", "registerUser", null));
        }
        data.userDetails = res
        return cb(null, sendResponse(200, "Email just added in DB!", "registerUser", null));
    })
}


/**
 * The function encrypts user data and login information and returns a token and user object.
 * @param data - an object containing user details and a salt value
 * @param response 
 * @param cb - cb stands for "callback function". It is a function that is passed as a parameter to
 * another function and is called back when the operation is complete. In this case, the callback
 * function is used to handle the response of the encryption operation.
 */
const encryptUserDataAndUserLogin = function (data, response, cb){
    if(!cb){
        cb = response;
    }
    let payload = {
        email: data.userDetails.email,
        name: data.userDetails.name,
        role: data.userDetails.role,
        id: data.userDetails._id,
    }
    encryptData(payload, data.salt, (err, encryptedData)=>{
        if(err){
            return cb(resStr(500, "encryptUserDataAndUserLogin", null, true))
            // return cb(sendResponse(500, null, "encryptUserDataAndUserLogin", null));
        }
        let sendRes = {
            token: encryptedData,
            user: payload
        }
        return cb(null, resStr(200, "User logged in successfully!", sendRes, false));
    })
}


const userLogin = function (data, response, cb){
    if(!cb){
        cb = response;
    }
    if (!data.email || !data.password) {
        return cb(sendResponse(400, null, "userLogin", null));
    }

    let waterfallFunction = [];

    waterfallFunction.push(async.apply(getUserData, data));
    waterfallFunction.push(async.apply(verifyPassword, data));
    waterfallFunction.push(async.apply(encryptUserDataAndUserLogin, data));
    
    //add activity log here//

    async.waterfall(waterfallFunction, cb);
}
exports.userLogin = userLogin

/**
 * It takes in a data object, a response object, and a callback function. If the callback function is
 * not passed in, it sets the callback function to the response object.
 * Use to verify the user information.
 * @param data - The data object that is passed to the function.
 * @param response - The response object from the route
 * @param cb - callback function
 */
const getUserData = function (data, response, cb){
    if(!cb){
        cb = response;
    }

    let findUser = {
        email: data.email
    }

    Users.findOne(findUser, (err, user)=>{
        if (err) {
            return cb(resStr(400, "User not found", null, true))
            // return cb(sendResponse(500, null, "getUserData", null));
        }
        if(!user){
            return cb(resStr(400, "User not found", null, true))
            // return cb(sendResponse(400, "User not found", "getUserData", null));
        }
        if(user.isBlocked){
            return cb(resStr(400, "User is blocked", null, true))
            // return cb(sendResponse(400, "User is blocked", "getUserData", null))
        }
        data.userDetails = user;
        data.hash = user.password;
        data.salt = user.salt;
        // return cb(null, sendResponse(200, "User found", "getUserData", null))
        return cb(null, resStr(200, "User found", data, false))
        // return cb(null, { nameOf : "ABC", age: 20 })
    })

}

/**
 * This function takes in a password, a hash, and a salt, and returns a callback with an error if the
 * password is incorrect, or a callback with a success message if the password is correct
 * @param data - This is the data object that contains the password, hash, and salt.
 * @param response - This is the response object from the express server.
 * @param cb - callback function
 */
const verifyPassword = function (data, response, cb){
    if(!cb){
        cb = response;
    }
    comparePassword(data.password, data.hash, data.salt, (err, isMatch)=>{
        if(err){
            return cb(resStr(500, "verifyPassword", null, true))
            // return cb(sendResponse(500, null, "verifyPassword", null));
        }
        
        if(!isMatch){
            return cb(resStr(500, "Password is incorrect", null, true))
            // return cb(sendResponse(400, "Password is incorrect", "verifyPassword", null));
        }
        return cb(null, resStr(200, "Password is correct", null, true))
        // return cb(null, sendResponse(200, "Password is correct", "verifyPassword", null));
    });
}
