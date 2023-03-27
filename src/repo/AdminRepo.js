
const UserModel = require('../models/UserModel') 


/**
 * @returns {Object}
 */
const getAllData = async () => {
 
    const Users = await UserModel.find({})
    const data = {
        Users
    }
    return data;
  };


  /**
 * @returns {Object}
 */
const deleteAllData = async () => {
  
    const Users = await UserModel.deleteMany({})
    const data = {
        Users
    }
    return data;
  };



module.exports = {
    getAllData,
    deleteAllData,


}