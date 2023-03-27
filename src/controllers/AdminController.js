const { successResponse, errorResponse } = require('../config/responceHandler')

const AdminRepo = require('../repo/AdminRepo')

const getAllData = async (req, res, next) => {
    try{
        const AllData = await AdminRepo.getAllData()
        if(!AllData){
            console.log("[AdminController:getAllData] Error Occured!")
            return errorResponse(res, 'Fetching Data Error!', [] , 400)
        }
        return successResponse(res, 'Getting All DAta', AllData)

    }catch(err){
        next(err)
    }
}

const removeAllData = async (req, res, next) => {
    try{
        const AllData = await AdminRepo.deleteAllData()
        if(!AllData){
            console.log("[AdminController:removeAllData] Error Occured!")
            return errorResponse(res, 'Fetching Data Error!', [] , 400)
        }
        return successResponse(res, 'All Data is Cleared.', AllData)

    }catch(err){
        next(err)
    }
}



module.exports = {
    getAllData,
    removeAllData


}