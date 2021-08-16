const db = require('../config/db');
const Sequelize = require('sequelize');
const SequelizeSlugify = require('sequelize-slugify');

const Cities = db.define('cities', {
    city_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING
    },
})


SequelizeSlugify.slugifyModel(Cities, {
    source: ['city_id'],
    slugOptions: { lower: true },
    overwrite: false,
    column: 'city_id',
    incrementalReplacement: '-',
});

module.exports = Cities;