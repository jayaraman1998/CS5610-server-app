import productModel from "../models/product-model.js";


export const findProductsByStatus = async (s) => await productModel.find({ status: s });

export const findProductsByOwnerId = async (s) => await productModel.find({ owner: s });


export const findAllProducts = async () => {
    const product = await productModel.find()
    return product
}

export const findProductByproductId = async (pid) =>
    await productModel.find({ _id: pid })

export const findProductByUsername = async (username) =>
    await productModel.findOne({ username })

export const createProduct = async (product) => {
    const actualInsertedProduct = await productModel.create(product)
    return actualInsertedProduct
}
export const deleteProduct = async (pid) => {
    const status = await productModel.deleteOne({ _id: pid })
    return status
}

export const updateProduct = async (pid, userUpdates) =>
    await productModel.updateOne({ _id: pid },
        { $set: userUpdates })