import { model, Schema } from 'mongoose'
const mongoosePaginate = require('mongoose-paginate-v2')

const schema = new Schema(
    {
        name: {
            required: true,
            type: String,
        },
        stock: {
            required: true,
            type: Number,
        },
        image: {
            required: true,
            type: String,
        },
    },
    {
        timestamps: true,
        toJSON: {
            virtuals: true,
            versionKey: false,
            transform: (doc, ret) => {
                delete ret._id
            },
        },
    }
)

schema.plugin(mongoosePaginate)

export default model('products', schema)
