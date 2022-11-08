//! Creamos los objetos
class Consolas {
  constructor(id, nombre, precio) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
  }
}

const playUno = new Consolas(1, "Play Station 1", 10000);
const playDos = new Consolas(2, "Play Station 2", 20000);
const playTres = new Consolas(3, "Play Station 3", 30000);
const playCuatro = new Consolas(4, "Play Station 4", 40000);
const playCinco = new Consolas(5, "Play Station 5", 50000);
const xbox1 = new Consolas(6, "Xbox 360", 15000);
const xbox2 = new Consolas(7, "Xbox One", 55000);

//! Array para los objetos creados
const arrayConsolas = [
  playUno,
  playDos,
  playTres,
  playCuatro,
  playCinco,
  xbox1,
  xbox2,
];

console.log(arrayConsolas);

//! Array para el carrito de compras
const carrito = [];


let seguirComprando = true;
let totalCompra = 0;

//! Menu de bienvenida al sitio y funcion
alert("Bienvenido a Mundo Vicio");

const iniciarCompra = () => {
  while (seguirComprando) {
    let producto = parseInt(
      prompt(
        "Elija la consola que desea comprar : \n 1- Play Station 1 \n 2- Play Station 2 \n 3- Play Station 3 \n 4- Play Station 4 \n 5- Play Station 5 \n 6- Xbox 360 \n 7- Xbox One"
      )
    );
    while (
      producto !== 1 &&
      producto !== 2 &&
      producto !== 3 &&
      producto !== 4 &&
      producto !== 5 &&
      producto !== 6 &&
      producto !== 7
    ) {
      producto = parseInt(
        prompt(
          "Elija la consola que desea comprar : \n 1- Play Station 1 \n 2- Play Station 2 \n 3- Play Station 3 \n 4- Play Station 4 \n 5- Play Station 5 \n 6- Xbox 360 \n 7- Xbox One"
        )
      );
    }
    carrito.push(arrayConsolas[producto - 1]);
    let seguir = parseInt(prompt("¿Desea seguir comprando?: 1.Si - 2.No"));
    while (seguir !== 1 && seguir !== 2) {
      seguir = parseInt(prompt("¿Desea seguir comprando?: 1.Si - 2.No"));
    }
    if (seguir === 2) {
      alert("Muchas gracias por visitar nuestro sitio!");
      seguirComprando = false;
    }
  }
  console.log(carrito);

  totalCompra = carrito
    .map((producto) => producto.precio)
    .reduce((a, b) => a + b);
  console.log(totalCompra);
  alert(`El total de su compra es de $${totalCompra}`);
  
};

//! Inicio

iniciarCompra();
