const dataSchema = require('../model/Data');

const getAllData = async (req, res) => {
    const getData = await dataSchema.find().exec();
    if (!getData) return res.sendStatus(204).json({ 'message': 'No Data found.' });
    res.json(getData);
}

const createData = async (req, res) => {
    const {title, content, status, dateCreated, dateUpdated} = req.body;
    if (!title || !content || !status)  return res.status(400).json({ 'message': 'All fields required.' });

    try {
        const result = await dataSchema.create({
            title: title,
            content: content,
            status: status,
            dateCreated: dateCreated,
            dateUpdated: dateUpdated
        });
        res.sendStatus(201).json({'success': "Updated successfully"});
    } catch (error) {
        console.error(error)
    }
};

const updateData = async (req, res) => {
    if(!req.param.body) {
        res.sendStatus(400).json({ 'message': "ID parameter is required" })
    };

    const update = await dataSchema.findOne({_id: req.param.body.id }).exec();
    if(!update) {
        return res.status(204).json({ 'message': `No Data matches ID ${req.params.id}`});
    };
    if (req.body?.title) update.title = req.body.title;
    if (req.body?.status) update.banner = req.body.status;
    if (req.body?.content) update.description = req.body.content;
    const result = await update.save();
    res.json(result);
};

const deleteData = async (req, res) => {
    if(!req?.params?.id) { res.sendStatus(400).json({ 'message': 'Data ID is required.'});
    };
    const deleted = await dataSchema.findOne({_id: req.params.id}).exec();
    if (!deleted) {
        return res.status(204).json({ 'message': `No Data matches ID ${req.params.id}`});
    }
    const result = await deleted.deleteOne({ _id: req.params.id});
    res.json(result);
};

const getData = async (req, res) => {
    if (!req?.params?.id) return res.sendStatus(400).json({ 'message': 'Data ID is required.'});
    const dataSchema = await dataSchema.findOne({_id: req.params.id}).exec();
    if (!dataSchema) {
        return res.status(204).json({ 'message': `No Data matches ID ${req.params.id}`});
    }
    res.json(dataSchema);
};

module.exports = {
    getAllData,
    createData,
    updateData,
    deleteData,
    getData
}