const configData = require("../models/configuration")


exports.getData =async (req, res) => {
    try{
    const config = await configData.find({id: req.params.id})
    res.json(config);
    }catch(error){
        console.log(error);
    }
}

exports.updateData = async (req,res) => {

    try{
    const updateRemark = req.body.remark;
    const id = req.params.id;
    const config = await configData.findOneAndUpdate({id:id}, {remark: updateRemark});
    res.json(config.status);
    }catch(error){
        console.log(error);
    }
}
