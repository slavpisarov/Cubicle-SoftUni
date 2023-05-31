const Accessory = require('../models/Accessory')


exports.getAll = () => Accessory.find();

exports.create = (accessoryData) => Accessory.create(accessoryData);

exports.getExcluded = (accessoryIds) => Accessory.find({_id: {$nin: accessoryIds}});