const mongoose = require('mongoose');
const { model, Schema } = mongoose;

const CarouselSchema = Schema({
    url: {
        type: String,
        required: false
    },
    title: {
        type: String,
        required: false
    },
    label: {
        type: String,
        required: false
    },
    text: {
        type: String,
        required: false
    }
});

const PropertySchema = Schema(
    {
    //Building Informations
        name: {
            type: String, 
            required: false
        }, 
        address: {
            type: String,
            required: false,
        }, 
        price: { 
            type: Number, 
            required: false
        },
        irr:{
            type: Number,
            required: false
        },
        bldgRating:{
            type: String,
            required: false,
        },
        bldgCredit:{
            type: String,
            required: false,
        },
        yearBuilt: {
            type: String,
            required: false,
        },
        propertyType:{
            type: String,
            required: false,
        },
        bSize:{
            type: Number,
            required: false,
        },
        floorNumber:{
            type: Number,
            required: false,
        },
        floorPlate:{
            type: Number,
            required: false,
        },
        imageUrl: {
            type: String, 
            required: false,
        },
        opportunity:{
            type: Boolean,
            required: false,
        },

// Tenant Information
        tenantOccupancy:{
            type: Number,
            required: false,
        },
        tenantSingleMulti:{
            type: String,
            require: true,            
        },
        leaseYearsLeft:{
            type: String, 
            require: true,
        },
        leaseEndDate: {
            type: String,
            require: true,
        },,

//Parking Information
        parkingSpaces: {
            type: String,
            require: true,
        },
        parkingRatio: {
            type: String,
            require: true,
        },
        parkingRevenue:{
            type: String,
            require: true,
        },
// Holder Information
        holder: {
            type: String,
            required: false,
        }, 
        mPartner: {
            type: String,
            required: false,
        }, 
        hPhone: {
            type: Number,
            required: false,
        },
        hEmail: {
            type: String,
            required: false,
        },
        carousel: {
            type: [CarouselSchema],
            required: false,
        }
        //Carousel objects
        // -3 images
        // -3 title text
        // -3 subtexts

        //Building Size: number
        //Oportunity {true,false} {checkbox}
        // Bldgg ratings: drop down menu
        // year built: Number
        // Property type: Drop down menu
    }
)

module.exports = model("Property", PropertySchema)