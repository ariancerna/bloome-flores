export type Product = {
  name: string;
  price: number;
  category: string;
  image: string;
  includes: string[];
};

export type CustomArrangement = Product & { tone: string };

export const customArrangements: CustomArrangement[] = [
  { image: '/caja-rosa-osito.webp', name: 'Caja rosa con osito', tone: 'Rosa suave', price: 65, category: 'Caja personalizada', includes: ['Flores eternas', 'Peluche', 'Dulces y globo decorativo'] },
  { image: '/caja-roja-hello-kitty.webp', name: 'Caja Hello Kitty', tone: 'Rojo intenso', price: 65, category: 'Caja personalizada', includes: ['Flores eternas', 'Peluche Hello Kitty', 'Dulces y globo decorativo'] },
  { image: '/caja-aniversario-azul.webp', name: 'Caja de aniversario', tone: 'Azul profundo', price: 65, category: 'Caja personalizada', includes: ['Flores eternas', 'Peluche', 'Dulces y globo de aniversario'] },
  { image: '/caja-cumple-conejo.webp', name: 'Caja de cumpleaños', tone: 'Rosa pastel', price: 55, category: 'Caja personalizada', includes: ['Flores eternas', 'Peluche conejo', 'Dulces y globo de cumpleaños'] },
  { image: '/caja-cumple-azul.webp', name: 'Caja personalizada', tone: 'Azul eléctrico', price: 95, category: 'Caja personalizada', includes: ['Flores eternas', 'Peluche', 'Dulces y globo personalizado'] },
];

export const products: Product[] = [
  { name: 'Ramo de 13 rosas + peluche', price: 95, category: 'Ramos buchón', image: '/ramo-peluche.webp', includes: ['7 rosas rosadas', '6 rosas blancas', '13 perlas decorativas', 'Listón con frase personalizado', 'Peluche Lotso dormilón', 'Tarjeta dedicatoria'] },
  { name: 'Ramo de 17 rosas', price: 75, category: 'Ramos buchón', image: '/ramo-17.webp', includes: ['17 rosas rojo intenso', '17 perlas decorativas', 'Listón con frase personalizado', 'Corona pequeña', 'Tarjeta dedicatoria'] },
  { name: 'Ramo de 12 rosas rojas', price: 65, category: 'Ramos buchón', image: '/ramo-12.webp', includes: ['12 rosas rojas', '12 perlas decorativas', '2 mariposas medianas', 'Listón con frase personalizado', 'Corona pequeña', 'Tarjeta dedicatoria'] },
  { name: 'Ramo de 20 rosas', price: 85, category: 'Ramos buchón', image: '/ramo-20.webp', includes: ['20 rosas rojas', '20 perlas decorativas', '2 mariposas', 'Corona mediana', 'Tarjeta dedicatoria'] },
  { name: 'Ramo de 30 rosas', price: 150, category: 'Ramos buchón', image: '/ramo-30.webp', includes: ['30 rosas coral', '30 perlas decorativas', '2 mariposas grandes', 'Listón con frase personalizado', 'Corona mediana', 'Tarjeta dedicatoria'] },
  { name: 'Ramo de 15 rosas', price: 70, category: 'Ramos buchón', image: '/ramo-20.webp', includes: ['15 rosas rojas', '15 perlas decorativas', '2 mariposas medianas', 'Listón con frase personalizado', '1 lazo', 'Tarjeta dedicatoria'] },
  { name: 'Ramo de 8 rosas', price: 70, category: 'Ramos buchón', image: '/ramo-8.webp', includes: ['4 rosas pastel', '4 rosas blancas', '8 perlas decorativas', '1 corona mediana', '3 mariposas pequeñas', 'Tarjeta decorativa'] },
  { name: 'Ramo de 50 rosas', price: 180, category: 'Ramos buchón', image: '/ramo-50.webp', includes: ['50 rosas rojas', '50 perlas decorativas', '4 mariposas grandes', 'Corona grande', 'Listón personalizado', 'Tarjeta dedicatoria'] },
  { name: 'Ramo de 7 rosas', price: 60, category: 'Ramos buchón', image: '/ramo-7.webp', includes: ['4 rosas celestes', '3 rosas azules', 'Corona pequeña', '1 mariposa mediana', 'Listón con frase personalizado', 'Tarjeta decorativa'] },
  { name: 'Ramo de 1 rosa', price: 12, category: 'Ramos buchón', image: '/ramo-1.webp', includes: ['1 rosa', '1 perla decorativa', 'Tarjeta personalizada'] },
  { name: 'Ramo de 9 rosas', price: 75, category: 'Ramos buchón', image: '/ramo-9.webp', includes: ['9 rosas rosadas', '9 perlas decorativas', '2 mariposas grandes', 'Corona pequeña', 'Tarjeta dedicatoria'] },
  { name: 'Ramo de 3 rosas', price: 35, category: 'Ramos buchón', image: '/ramo-3.webp', includes: ['3 rosas rosadas', '3 perlas decorativas', 'Lluvia decorativa', 'Tarjeta decorativa'] },
  { name: 'Ramo Hot Wheels de 3 rosas', price: 45, category: 'Hot Wheels', image: '/hotwheels-3.webp', includes: ['3 rosas azules', '3 perlas decorativas', '2 carritos Hot Wheels a elección', '1 moño', 'Tarjeta dedicatoria'] },
  { name: 'Ramo Hot Wheels de 1 rosa', price: 30, category: 'Hot Wheels', image: '/hotwheels-1.webp', includes: ['1 rosa azul', '1 carrito Hot Wheels', '1 mariposa pequeña', '1 perla decorativa', 'Tarjeta decorativa'] },
  { name: 'Ramo Hot Wheels de 5 rosas', price: 60, category: 'Hot Wheels', image: '/hotwheels-5.webp', includes: ['5 rosas azules', '3 carros Hot Wheels', '2 chocolates', '1 moño decorativo', 'Tarjeta dedicatoria'] },
  { name: 'Ramo Hot Wheels de 8 rosas + gorra', price: 140, category: 'Hot Wheels', image: '/hotwheels-8-gorra.webp', includes: ['8 rosas azules', '8 perlas decorativas', '4 carritos Hot Wheels', '1 gorra de preferencia', 'Tarjeta dedicatoria'] },
  { name: 'Ramo Hot Wheels de 7 rosas + gorra', price: 120, category: 'Hot Wheels', image: '/hotwheels-7-gorra.webp', includes: ['7 rosas azules', '7 perlas decorativas', '2 carritos Hot Wheels', '1 gorra Jordan', 'Tarjeta dedicatoria'] },
  { name: 'Box de 10 rosas + gorra', price: 95, category: 'Hot Wheels', image: '/box-gorra.webp', includes: ['5 rosas blancas', '5 rosas azules', '10 perlas decorativas', 'Caja decorativa', '1 gorra', 'Tarjeta dedicatoria'] },
  { name: 'Ramo de 12 rosas amarillas', price: 85, category: 'Amarillito', image: '/ramo-amarillo-12.webp', includes: ['12 rosas amarillas', '12 perlas decorativas', 'Frase personalizada', '1 corona pequeña', '2 mariposas medianas', 'Tarjeta decorativa'] },
  { name: 'Ramo de girasoles', price: 55, category: 'Amarillito', image: '/girasoles.webp', includes: ['6 girasoles', '1 mariposa grande', 'Tarjeta dedicatoria'] },
  { name: 'Ramo Kitty de 3 rosas amarillas', price: 59, category: 'Amarillito', image: '/kitty-amarillo.webp', includes: ['3 rosas amarillas', '3 perlas decorativas', '1 mariposa grande', 'Tarjeta decorativa'] },
];
