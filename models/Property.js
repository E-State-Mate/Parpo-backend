const mongoose = require('mongoose');
const { model, Schema } = mongoose;

const PropertySchema = Schema(
    {
    //Building Information
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
        irr:{
            type: Number,
            required: true
        },
        bldgRating:{
            type: String,
            required: true,
        },
        bldgCredit:{
            type: String,
            required: true,
        },
        yearBuilt: {
            type: String,
            required: true,
        },
        propertyType:{
            type: String,
            required: true,
        },
        bSize:{
            type: Number,
            required: true,
        },
        imageUrl: {
            type: String, 
            required: true,
        },
        opportunity:{
            type: Boolean,
            required: true,
        },

// Tenant Information
        tenantOccupancy:{
            type: Number,
            required: true,
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
        },

//Parking Information
        parkingSpaces: {
            type: String,
            require: true,
        },
        parkingRation: {
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
            required: true,
        }, 
        mPartner: {
            type: String,
            required: true,
        }, 
        hPhone: {
            type: Number,
            required: true,
        },
        hEmail: {
            type: String,
            required: true,
        },

        //Building Size: number
        //Oportunity {true,false} {checkbox}
        // Bldgg ratings: drop down menu
        // year built: Number
        // Property type: Drop down menu
    }
)

module.exports = model("Property", PropertySchema)