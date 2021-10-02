import mongoose from 'mongoose'

export default async () => {
    try {
        await mongoose.connect('mongodb://root:password@3.214.56.123:80/example-pil?authSource=admin', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log('🚀 Database is runing...')
    } catch (error) {
        console.log(error)
    }
}
