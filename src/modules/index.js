import products from './v1/products'

export default (io, socket) => {
    products(io, socket)
}
