const mongoose = require('mongoose');
const { model, Schema } = mongoose;

const PropertySchema = Schema(
    {
        name: {
            type: String, 
            required: true
        }, 
        address: {
            type: String,
            required: true,
        }, 
        price: { 
            type: Number, 
            required: true
        },
        imageUrl: {
            type: String, 
            required: true,
        }
    }
)

module.exports = model("Property", PropertySchema)