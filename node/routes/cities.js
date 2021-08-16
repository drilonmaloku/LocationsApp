const router = require('express').Router();
const cities = require('../models/cities');
// const path = require('path');
// const { route } = require('./locations');


// GET
router.get('/', (req, res, next) => {
    cities.findAll()
        .then(data => res.json(data))
        .catch(err => res.json(err))
});

router.get('/single', (req, res, next) => {
    cities.findOne({ where: { city_id : req.body.city_id }})
        .then(data => res.json(data))
        .catch(err => res.json(err))
});


// POST
router.post('/', (req, res, next) => {
    cities.bulkCreate(req.body)
        .then(data => res.json(data))
        .catch((err) => res.json(err))
});

router.post('/single', (req, res, next) => {
    cities.create(req.body)
        .then(data => res.json(data))
        .catch((err) => res.json(err))
});


//PUT
router.put('/', (req, res, next) => {
    cities.update(req.body)
        .then(data => res.json(data))
        .catch((err) => res.json(err))
});


//DELETE
router.delete('/', (req, res, next) => {
    cities.destroy({where: { city_id : req.body.city_id}})
        .then(data => res.json(data))
        .catch((err) => res.json(err))
});

module.exports = router;
