const mongoose=require('mongoose')

const schema=mongoose.Schema(
    {
        name:{
            type:String,
            required:[true,"Plese enter the names"]
        },
        age: {
            type:Number,
            required:true
        },
        club: {
            type:String,
            required:true
        },
        goals: {
            type:Number,
            required:false,
        },
        assist: {
            type:Number,
            required:false,
        },
        passacc: {
            type:Number,
            required:false,
        },
        shotontarget: {
            type:Number,
            required:false,
        }
    },
    {
        timestamp: true
    }
)

const player=mongoose.model('player', schema);
module.exports=player;