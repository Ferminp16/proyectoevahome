alert("Bienvenido a EVAHome")

do {

    let option = mostrarMenu();
    if (option === productos.length + 1) break
    let cantidad = parseInt(prompt(selecCantidad))


    addToCart(option, cantidad)

    resp = prompt("¿Desea agregar otro producto al carrito? SI / NO")
    resp = resp.toUpperCase()

} while (resp === "SI");

if (total > 0) {

    alert(`El total de su compra es de $${total}`)
}

alert("Gracias por su compra")




