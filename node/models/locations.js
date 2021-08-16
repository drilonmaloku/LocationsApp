const db = require('../config/db');
const Sequelize = require('sequelize');
const SequelizeSlugify = require('sequelize-slugify');

const Cities = require('./cities')

const Locations = db.define('locations', {
    location_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING
    },
    address: {
        type: Sequelize.STRING
    },
    city_id: {
        type: Sequelize.INTEGER
    },
    longitude: {
        type: Sequelize.FLOAT
    },
    latitude: {
        type: Sequelize.FLOAT
    }
})

Locations.belongsTo(Cities, {
    foreignKey: 'city_id',
});

SequelizeSlugify.slugifyModel(Locations, {
    source: ['location_id'],
    slugOptions: { lower: true },
    overwrite: false,
    column: 'location_id',
    incrementalReplacement: '-',
});

module.exports = Locations;