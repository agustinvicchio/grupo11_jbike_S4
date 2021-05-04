const controller = {
    product: (req,res) => {
        res.render('./products/product');
    },
    crear: (req,res) => {
        res.render('./products/crearProducto');

    },


    carrito: (req,res) => {
        res.render('./products/carrito');
    }
}


module.exports = controller;