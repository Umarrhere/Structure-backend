const UserModel = require('../models/UserModel')


/**
 * @returns {Array}
 */
const getAllUsers = async () => {
    return await UserModel.find({})
  };


/**
 * @param obj
 * @returns {UserModel}
 */
const createUser = async (name, email, password , role) => {
    return await UserModel.create({name, email, password, role})
  };


/**
 * @param object
 * @returns {UserModel}
 */
const findOneByObject = async (obj) => {
     return await UserModel.findOne(obj)
  };





module.exports = {
    getAllUsers,
    createUser,
    findOneByObject,



}