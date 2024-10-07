import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

const userSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        phone:{
            type: String,
        },
        address: {
            type: String,
        },
        fullname: {
            type: String,
        },
        role: {
            type: String,
            default: 'customer',
            enum: ['customer', 'admin', 'staff'],
        },
        status: {
            type: String,
            default: 'active',
            enum: ['active', 'inactive'],
        },
        avatar: {
            type: String,
        },
    },
    {
        timestamps: true,
        versionkey: false,
    },
);

userSchema.plugin(mongoosePaginate);

const User = mongoose.model('User', userSchema);

export default User;