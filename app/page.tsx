'use client';

import { useState } from 'react';
import { ArrowUpRight, MessageCircle, X } from 'lucide-react';

type Product = { name: string; price: number; category: string; image: string; includes: string[] };

const whatsapp = '51926215342';

const products: Product[] = [
  { name: 'Ramo de 13 rosas + peluche', price: 95, category: 'Ramos buchón', image: '/ramo-peluche.png', includes: ['7 rosas rosadas', '6 rosas blancas', '13 perlas decorativas', 'Listón con frase personalizado', 'Peluche Lotso dormilón', 'Tarjeta dedicatoria'] },
  { name: 'Ramo de 17 rosas', price: 75, category: 'Ramos buchón', image: '/ramo-17.png', includes: ['17 rosas rojo intenso', '17 perlas decorativas', 'Listón con frase personalizado', 'Corona pequeña', 'Tarjeta dedicatoria'] },
  { name: 'Ramo de 12 rosas rojas', price: 65, category: 'Ramos buchón', image: '/ramo-12.png', includes: ['12 rosas rojas', '12 perlas decorativas', '2 mariposas medianas', 'Listón con frase personalizado', 'Corona pequeña', 'Tarjeta dedicatoria'] },
  { name: 'Ramo de 20 rosas', price: 85, category: 'Ramos buchón', image: '/ramo-20.png', includes: ['20 rosas rojas', '20 perlas decorativas', '2 mariposas', 'Corona mediana', 'Tarjeta dedicatoria'] },
  { name: 'Ramo de 30 rosas', price: 150, category: 'Ramos buchón', image: '/ramo-30.png', includes: ['30 rosas coral', '30 perlas decorativas', '2 mariposas grandes', 'Listón con frase personalizado', 'Corona mediana', 'Tarjeta dedicatoria'] },
  { name: 'Ramo de 15 rosas', price: 70, category: 'Ramos buchón', image: '/ramo-20.png', includes: ['15 rosas rojas', '15 perlas decorativas', '2 mariposas medianas', 'Listón con frase personalizado', '1 lazo', 'Tarjeta dedicatoria'] },
  { name: 'Ramo de 8 rosas', price: 70, category: 'Ramos buchón', image: '/ramo-8.png', includes: ['4 rosas pastel', '4 rosas blancas', '8 perlas decorativas', '1 corona mediana', '3 mariposas pequeñas', 'Tarjeta decorativa'] },
  { name: 'Ramo de 50 rosas', price: 180, category: 'Ramos buchón', image: '/ramo-50.png', includes: ['50 rosas rojas', '50 perlas decorativas', '4 mariposas grandes', 'Corona grande', 'Listón personalizado', 'Tarjeta dedicatoria'] },
  { name: 'Ramo de 7 rosas', price: 60, category: 'Ramos buchón', image: '/ramo-7.png', includes: ['4 rosas celestes', '3 rosas azules', 'Corona pequeña', '1 mariposa mediana', 'Listón con frase personalizado', 'Tarjeta decorativa'] },
  { name: 'Ramo de 1 rosa', price: 12, category: 'Ramos buchón', image: '/ramo-1.png', includes: ['1 rosa', '1 perla decorativa', 'Tarjeta personalizada'] },
  { name: 'Ramo de 9 rosas', price: 75, category: 'Ramos buchón', image: '/ramo-9.png', includes: ['9 rosas rosadas', '9 perlas decorativas', '2 mariposas grandes', 'Corona pequeña', 'Tarjeta dedicatoria'] },
  { name: 'Ramo de 3 rosas', price: 35, category: 'Ramos buchón', image: '/ramo-3.png', includes: ['3 rosas rosadas', '3 perlas decorativas', 'Lluvia decorativa', 'Tarjeta decorativa'] },
  { name: 'Ramo Hot Wheels de 3 rosas', price: 45, category: 'Hot Wheels', image: '/hotwheels-3.png', includes: ['3 rosas azules', '3 perlas decorativas', '2 carritos Hot Wheels a elección', '1 moño', 'Tarjeta dedicatoria'] },
  { name: 'Ramo Hot Wheels de 1 rosa', price: 30, category: 'Hot Wheels', image: '/hotwheels-1.png', includes: ['1 rosa azul', '1 carrito Hot Wheels', '1 mariposa pequeña', '1 perla decorativa', 'Tarjeta decorativa'] },
  { name: 'Ramo Hot Wheels de 5 rosas', price: 60, category: 'Hot Wheels', image: '/hotwheels-5.png', includes: ['5 rosas azules', '3 carros Hot Wheels', '2 chocolates', '1 moño decorativo', 'Tarjeta dedicatoria'] },
  { name: 'Ramo Hot Wheels de 8 rosas + gorra', price: 140, category: 'Hot Wheels', image: '/hotwheels-8-gorra.png', includes: ['8 rosas azules', '8 perlas decorativas', '4 carritos Hot Wheels', '1 gorra de preferencia', 'Tarjeta dedicatoria'] },
  { name: 'Ramo Hot Wheels de 7 rosas + gorra', price: 120, category: 'Hot Wheels', image: '/hotwheels-7-gorra.png', includes: ['7 rosas azules', '7 perlas decorativas', '2 carritos Hot Wheels', '1 gorra Jordan', 'Tarjeta dedicatoria'] },
  { name: 'Box de 10 rosas + gorra', price: 95, category: 'Hot Wheels', image: '/box-gorra.png', includes: ['5 rosas blancas', '5 rosas azules', '10 perlas decorativas', 'Caja decorativa', '1 gorra', 'Tarjeta dedicatoria'] },
  { name: 'Ramo de 12 rosas amarillas', price: 85, category: 'Amarillito', image: '/ramo-amarillo-12.png', includes: ['12 rosas amarillas', '12 perlas decorativas', 'Frase personalizada', '1 corona pequeña', '2 mariposas medianas', 'Tarjeta decorativa'] },
  { name: 'Ramo de girasoles', price: 55, category: 'Amarillito', image: '/girasoles.png', includes: ['6 girasoles', '1 mariposa grande', 'Tarjeta dedicatoria'] },
  { name: 'Ramo Kitty de 3 rosas amarillas', price: 59, category: 'Amarillito', image: '/kitty-amarillo.png', includes: ['3 rosas amarillas', '3 perlas decorativas', '1 mariposa grande', 'Tarjeta decorativa'] },
];

function whatsappUrl(product: Product) {
  return `https://wa.me/${whatsapp}?text=${encodeURIComponent(`Hola, me gustaría comprar estas flores: ${product.name}.`)}`;
}

export default function Home() {
  const [filter, setFilter] = useState('Todos');
  const [selected, setSelected] = useState<Product | null>(null);
  const filters = ['Todos', 'Ramos buchón', 'Hot Wheels', 'Amarillito'];
  const visible = filter === 'Todos' ? products : products.filter((p) => p.category === filter);

  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#inicio" aria-label="Bloomé, inicio">Bloom<span>é</span><small>FLORES QUE HABLAN</small></a>
        <nav aria-label="Navegación principal"><a href="#catalogo">Catálogo</a><a href="#como-pedir">Cómo pedir</a><a href="#contacto">Contacto</a></nav>
        <a className="header-whatsapp" href={`https://wa.me/${whatsapp}`} target="_blank" rel="noreferrer"><MessageCircle size={17} /> Pedir por WhatsApp</a>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-copy"><p className="eyebrow">HECHO A MANO · CON INTENCIÓN</p><h1>Flores que dicen<br /><em>lo que sientes.</em></h1><p className="hero-text">Ramos artesanales de chenille, pensados para quedar en la memoria. Elige un diseño, personalízalo y nosotros nos encargamos del detalle.</p><a className="button button-dark" href="#catalogo">Ver colección <ArrowUpRight size={18} /></a></div>
        <div className="hero-visual"><div className="hero-ring" /><div className="hero-note"><span>01</span><p>Un detalle que<br />no se marchita.</p></div><img src="/ramo-peluche.png" alt="Ramo artesanal de rosas con peluche" /></div>
      </section>

      <section className="catalog" id="catalogo"><div className="section-heading"><div><p className="eyebrow">COLECCIÓN</p><h2>Elige tu detalle</h2></div><p>Todos los arreglos se elaboran a pedido.<br />Reserva con al menos 2 días de anticipación.</p></div>
        <div className="filters" aria-label="Filtrar arreglos">{filters.map((item) => <button className={filter === item ? 'active' : ''} onClick={() => setFilter(item)} key={item}>{item}</button>)}</div>
        <div className="product-grid">{visible.map((product) => <article className="product-card" key={product.name}><button className="product-image" onClick={() => setSelected(product)} aria-label={`Ver ${product.name}`}><img src={product.image} alt={product.name} /></button><div className="product-info"><div><p>{product.category}</p><h3>{product.name}</h3></div><strong>S/{product.price}</strong></div><button className="view-detail" onClick={() => setSelected(product)}>Ver detalle <ArrowUpRight size={17} /></button></article>)}</div>
      </section>

      <section className="process" id="como-pedir"><p className="eyebrow">SENCILLO Y PERSONAL</p><h2>Tu pedido, en tres pasos.</h2><div className="steps"><div><span>01</span><h3>Elige un arreglo</h3><p>Explora el catálogo y abre el detalle del diseño que te gusta.</p></div><div><span>02</span><h3>Escríbenos</h3><p>Cuéntanos la fecha, dedicatoria y cualquier toque que quieras sumar.</p></div><div><span>03</span><h3>Reserva tu fecha</h3><p>Separa tu pedido con el 50%. Coordinamos entrega o recojo contigo.</p></div></div></section>

      <footer id="contacto"><div><a className="wordmark" href="#inicio">Bloom<span>é</span><small>FLORES QUE HABLAN</small></a><p>Detalles hechos a mano para celebrar lo importante.</p></div><div><h3>Información</h3><a href="#privacidad">Política de privacidad</a><a href="#terminos">Términos y condiciones</a></div><div><h3>Hablemos</h3><a href={`https://wa.me/${whatsapp}`} target="_blank" rel="noreferrer">WhatsApp</a><a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a></div><p className="copyright">© {new Date().getFullYear()} Bloomé. Todos los derechos reservados.</p></footer>

      <section className="legal" id="privacidad"><h2>Política de privacidad</h2><p>Bloomé trata los datos que compartas por WhatsApp (nombre, teléfono, dirección de entrega y detalles del pedido) únicamente para atender, coordinar y realizar tu compra. Aplicamos las medidas razonables para protegerlos y no los vendemos ni cedemos, salvo obligación legal o proveedores indispensables para el servicio.</p><p>De acuerdo con la Ley N.° 29733, Ley de Protección de Datos Personales, puedes solicitar acceso, rectificación, cancelación u oposición al tratamiento de tus datos escribiéndonos por WhatsApp. Antes de publicar, completa aquí la razón social o nombre del titular, RUC, domicilio y correo de contacto del negocio.</p></section>
      <section className="legal" id="terminos"><h2>Términos y condiciones</h2><p>Los arreglos son elaborados a mano con flores de chenille; pueden existir variaciones razonables de color, material o disposición respecto de las imágenes referenciales. Los precios se confirman al momento de la reserva. Se solicita un adelanto del 50% para reservar y el saldo antes del envío o al recojo. Los pedidos se realizan con al menos 2 días de anticipación. Al tratarse de productos personalizados, no se aceptan cancelaciones ni devoluciones una vez iniciada su elaboración, sin perjuicio de los derechos que correspondan al consumidor conforme al Código de Protección y Defensa del Consumidor peruano.</p><p>El costo de envío depende de la zona y se informa antes de confirmar el pedido. Para recojo, el cliente debe respetar la hora coordinada. Cualquier incidencia debe comunicarse el mismo día de la entrega para poder evaluarla.</p></section>

      {selected && <div className="modal-backdrop" role="presentation" onMouseDown={() => setSelected(null)}><section className="product-modal" role="dialog" aria-modal="true" aria-labelledby="product-title" onMouseDown={(e) => e.stopPropagation()}><button className="modal-close" onClick={() => setSelected(null)} aria-label="Cerrar"><X size={20} /></button><div className="modal-image"><img src={selected.image} alt={selected.name} /></div><div className="modal-content"><p className="eyebrow">{selected.category}</p><h2 id="product-title">{selected.name}</h2><strong>S/{selected.price}</strong><h3>Incluye</h3><ul>{selected.includes.map((item) => <li key={item}>{item}</li>)}</ul><p className="modal-note">Imagen referencial. Los tonos y detalles pueden variar según disponibilidad.</p><a className="button button-whatsapp" href={whatsappUrl(selected)} target="_blank" rel="noreferrer"><MessageCircle size={19} /> Quiero este arreglo</a></div></section></div>}
    </main>
  );
}
