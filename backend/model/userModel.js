import mongoose from 'mongoose'

const userSchema = mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
            unique:true
        },

        email:{
            type:String,
            required:true
        },
        password:{
            type:String,
            required:true
        },
        image:{
            type:String
        }
        
    },
    {
        timestamps:true
    }
)

const User = mongoose.model('User',userSchema)
export {User}