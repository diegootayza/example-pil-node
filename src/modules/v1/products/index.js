import Products from '../../schemas/products'

export default (io, socket) => {
    socket.on('read:products', async (data) => {
        const { filter, options } = data

        const conditions = {}

        if (filter.search) conditions.name = { $regex: `${filter.search}`, $options: 'i' }

        try {
            const products = await Products.paginate(conditions, options)
            socket.emit('products', products)
        } catch (error) {
            console.log(error)
        }
    })

    socket.on('create:product', async (data) => {
        const { submitData } = data

        try {
            await new Products({ ...submitData }).save()
            socket.emit('read:products', {})
        } catch (error) {
            console.log(error)
        }
    })

    socket.on('update:product', async (data) => {
        const { submitData } = data

        try {
            await new Products({ ...submitData }).save()
            socket.emit('read:products', {})
        } catch (error) {
            console.log(error)
        }
    })

    socket.on('delete:product', async (data) => {
        const { submitData } = data

        try {
            await new Products({ ...submitData }).save()
            socket.emit('read:products', {})
        } catch (error) {
            console.log(error)
        }
    })
}
