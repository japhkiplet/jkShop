import { createProduct, deleteProduct, getAllProducts, getProduct, updateProduct } from "../contollers/product.js";



const routes = (app) => {
    app.route('/product')
        .get(getAllProducts)
        .post(createProduct );

    app.route('/product/:id')
        .put(updateProduct)
        .get(getProduct)
        .delete(deleteProduct);

        


  


};
export default routes;