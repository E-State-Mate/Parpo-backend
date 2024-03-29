const express = require('express');
const Property = require('../models/Property');
const router = express.Router();

router.get('/', async (req, res) => {
    const property = await Property.find();
    try {
        /*if (property.length === 0) {
            return res.status(400).json({message: "No properties found"});
        }*/
        return res.status(200).json(property)
    } catch (error) {
        return res.status(500).json({ message: "couldn't find" })
    }
});

router.get('/property/:id', async (req, res) => {
    const _id = req.params.id;

    const property = await Property.findOne({ _id });
    try {
        return res.status(200).json(property)
    } catch (error) {
        return res.status(500).json({ message: "couldn't find" })
    }
});

router.post("/property", async (req, res) => {
    
    try {
        const propertyToCreate = await Property.create(req.body);
        return res.status(201).json(propertyToCreate);
    } catch (error) {
        return res.status(500).json({ message: "Couldn't create", error });
    }
});

router.put('/property/:id', async (req, res) => {
    const _id = req.params.id;
    
    await Property.findByIdAndUpdate({ _id }, req.body);

    const singleProperty = await Property.findById(_id);
    try {
        return res.status(200).json(singleProperty);
    } catch (error) {
        return res.status(500).json({ message: "couldn't retireve" });
    }
});

//Delete Function

router.delete("/property/:id", async (req, res) => {
    const { id } = req.params;
    const propertyToDelete = await Property.findByIdAndDelete(id)
    try {
        return res.status(203).json({ message: "sucessfuly delete" })
    } catch (error) {
        return res.status(500).json({ message: "couldn't delete" })
    }
})

module.exports = router;