const fs = require ('fs');
const controller = {
    product: (req,res) => {
        console.log("renderizando al producto");
        let archivoProductos = fs.readFileSync('productos.JSON', {enconding: 'utf-8'}); 
        let productos;
        if(archivoProductos == "")
        {
            console.log("lei un archivo vacio");
            productos=[];
        }
        else
        {
            console.log("Lei de un archivo que ya tiene algo");
            productos = JSON.parse(archivoProductos);
        }
        let id = req.query.productID;
        console.log(id)
        let productsend = products[id-1];
        res.render('./products/product', {'product':prodcutsend});
    },

    crear: (req,res) => {
        console.log("renderizando a la creacion del producto");
        res.render('./products/crearProducto');

    },

    carrito: (req,res) => {
        console.log("renderizando al carrito");
        res.render('./products/carrito');
    },

    guardar:(req,res) => {
        console.log("creando un producto");
        let archivoProductos = fs.readFileSync('productos.JSON', {enconding: 'utf-8'});
        let productos;
        if(archivoProductos == "")
        {
            console.log("lei un archivo vacio");
            productos=[];
        }
        else
        {
            console.log("Lei de un archivo que ya tiene algo");
            productos = JSON.parse(archivoProductos);
        }
        console.log("el archivo contiene lo siguiente");
        console.log(productos);
        let producto = {
            id: productos.length+1,
            marca: req.body.marcaProducto,
            modelo: req.body.modeloProducto,
            desc1: req.body.desc1,
            desc2: req.body.desc2,
            imagen: req.file.filename,
            rodados: req.body.rodadosProducto,
            colores: req.body.coloresProducto,
            stock: req.body.stockProducto,
            precio: req.body.precioProducto,
            descuento: req.body.descuentoProducto,
            cutoas: req.body.cuotasProducto
        }
        console.log(producto);
        productos.push(producto);
        console.log("genero un nuevo producto a la lista");
        let productosJSON = JSON.stringify(productos);
        fs.writeFileSync('prodcutos.json', productosJSON);
        res.redirect("/");
    },

}


module.exports = controller;