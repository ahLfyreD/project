const express = require('express');
const router = express.Router();

const dataController = require('../../controllers/dataController');

router.route('/')
    .get(dataController.getAllData)
    .post(dataController.createData)
       
    router.route('/:id')
    .put(dataController.updateData)
    .get(dataController.getData)
    .delete(dataController.deleteData)

module.exports = router;