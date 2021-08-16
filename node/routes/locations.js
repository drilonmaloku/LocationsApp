const router = require('express').Router();
const locations = require('../models/locations');
const cities = require('../models/cities');
// const path = require('path');

//GET
router.get('/', (req, res, next) => {
    locations.findAll({ 
        include: [{
            model: cities,
            as: 'city'
        }]
    })
        .then(data => res.json(data))
        .catch(err => res.json(err))
});

router.get('/single', (req, res, next) => {
    locations.findOne({ where: { location_id : req.query.location_id },
        include: [{
            model: cities,
            as: 'city'
        }]    
    })
        .then(data => res.json(data))
        .catch(err => res.json(err))
});


//POST
router.post('/', (req, res, next) => {
    locations.bulkCreate(req.body)
        .then(data => res.json(data))
        .catch((err) => res.json(err))
});

router.post('/single', (req, res, next) => {
    locations.create(req.body)
        .then(data => res.json(data))
        .catch((err) => res.json(err))
});


//PUT
router.put('/', (req, res, next) => {
    locations.update(req.body, { where: { location_id: req.body.location_id}})
        .then(data => res.json(data))
        .catch((err) => res.json(err))
});


//DELETE
router.delete('/', (req, res, next) => {
    locations.destroy({where: { location_id : req.body.location_id}})
        .then(data => res.json(data))
        .catch((err) => res.json(err))
})



module.exports = router;
