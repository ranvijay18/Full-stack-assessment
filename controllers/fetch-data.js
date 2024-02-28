const configData = require("../models/configuration")


exports.getData =async (req, res) => {
    const config = await configData.find({id: req.params.id})

    res.json(config);

}

exports.updateData = async (req,res) => {
    const updateRemark = req.body.remark;
    const id = req.params.id;
    const config = await configData.findOneAndUpdate({id:id}, {remark: updateRemark});
    res.json(config.status);
}