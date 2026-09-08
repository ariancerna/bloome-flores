'use client';

import { useState } from 'react';
import { ArrowUpRight, MessageCircle, Minus, Plus, ShoppingBag, Trash2, X } from 'lucide-react';

type Product = { name: string; price: number; category: string; image: string; includes: string[] };
type CartLine = Product & { quantity: number };

const whatsapp = '51902586466';

const customArrangements: Array<Product & { tone: string }> = [
  { image: '/caja-rosa-osito.jpeg', name: 'Caja rosa con osito', tone: 'Rosa suave', price: 65, category: 'Caja personalizada', includes: ['Flores eternas', 'Peluche', 'Dulces y globo decorativo'] },
  { image: '/caja-roja-hello-kitty.jpeg', name: 'Caja Hello Kitty', tone: 'Rojo intenso', price: 65, category: 'Caja personalizada', includes: ['Flores eternas', 'Peluche Hello Kitty', 'Dulces y globo decorativo'] },
  { image: '/caja-aniversario-azul.jpeg', name: 'Caja de aniversario', tone: 'Azul profundo', price: 65, category: 'Caja personalizada', includes: ['Flores eternas', 'Peluche', 'Dulces y globo de aniversario'] },
  { image: '/caja-cumple-conejo.jpeg', name: 'Caja de cumpleaños', tone: 'Rosa pastel', price: 55, category: 'Caja personalizada', includes: ['Flores eternas', 'Peluche conejo', 'Dulces y globo de cumpleaños'] },
  { image: '/caja-cumple-azul.jpeg', name: 'Caja personalizada', tone: 'Azul eléctrico', price: 95, category: 'Caja personalizada', includes: ['Flores eternas', 'Peluche', 'Dulces y globo personalizado'] },
];

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
  const [cartOpen, setCartOpen] = useState(false);
  const [cart, setCart] = useState<CartLine[]>([]);
  const filters = ['Todos', 'Ramos buchón', 'Hot Wheels', 'Amarillito'];
  const visible = filter === 'Todos' ? products : products.filter((p) => p.category === filter);
  const itemCount = cart.reduce((total, line) => total + line.quantity, 0);
  const subtotal = cart.reduce((total, line) => total + line.price * line.quantity, 0);
  const addToCart = (product: Product) => setCart((current) => {
    const existing = current.find((line) => line.name === product.name);
    return existing ? current.map((line) => line.name === product.name ? { ...line, quantity: line.quantity + 1 } : line) : [...current, { ...product, quantity: 1 }];
  });
  const updateQuantity = (name: string, quantity: number) => setCart((current) => quantity < 1 ? current.filter((line) => line.name !== name) : current.map((line) => line.name === name ? { ...line, quantity } : line));
  const cartWhatsappUrl = `https://wa.me/${whatsapp}?text=${encodeURIComponent(`Hola, me gustaría hacer este pedido:\n\n${cart.map((line) => `• ${line.quantity} x ${line.name} — S/${line.price * line.quantity}`).join('\n')}\n\nTotal referencial: S/${subtotal}\n\n¿Me confirman disponibilidad y fecha de entrega?`)}`;

  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#inicio" aria-label="Bloomé, inicio">Bloom<span>é</span><small>FLORES QUE HABLAN</small></a>
        <nav aria-label="Navegación principal"><a href="#catalogo">Catálogo</a><a href="#como-pedir">Cómo pedir</a><a href="#contacto">Contacto</a></nav>
        <button className="cart-button" onClick={() => setCartOpen(true)} aria-label={`Ver carrito, ${itemCount} productos`}><ShoppingBag size={18} /> <span>Carrito</span>{itemCount > 0 && <b>{itemCount}</b>}</button>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-copy"><p className="eyebrow">FLORES ETERNAS · CON INTENCIÓN</p><h1>Flores que dicen<br /><em>lo que sientes.</em></h1><p className="hero-text">Ramos de flores eternas, pensados para quedarse en la memoria. Elige un diseño, personalízalo y nosotros nos encargamos del detalle.</p><a className="button button-dark" href="#catalogo">Ver colección <ArrowUpRight size={18} /></a></div>
        <div className="hero-visual"><div className="hero-ring" /><div className="hero-note"><span>01</span><p>Un detalle que<br />no se marchita.</p></div><img src="/ramo-peluche.png" alt="Ramo artesanal de rosas con peluche" /></div>
      </section>

      <section className="catalog" id="catalogo"><div className="section-heading"><div><p className="eyebrow">COLECCIÓN</p><h2>Elige tu detalle</h2></div><p>Todos los arreglos se elaboran a pedido.<br />Reserva con al menos 2 días de anticipación.</p></div>
        <div className="filters" aria-label="Filtrar arreglos">{filters.map((item) => <button className={filter === item ? 'active' : ''} onClick={() => setFilter(item)} key={item}>{item}</button>)}</div>
        <div className="product-grid">{visible.map((product) => <article className="product-card" key={product.name}><button className="product-image" onClick={() => setSelected(product)} aria-label={`Ver ${product.name}`}><img src={product.image} alt={product.name} /></button><div className="product-info"><div><p>{product.category}</p><h3>{product.name}</h3></div><strong>S/{product.price}</strong></div><div className="product-actions"><button className="view-detail" onClick={() => setSelected(product)}>Ver detalle <ArrowUpRight size={17} /></button><button className="add-cart" onClick={() => addToCart(product)}><Plus size={16} /> Agregar</button></div></article>)}</div>
      </section>

      <section className="process" id="como-pedir"><p className="eyebrow">SENCILLO Y PERSONAL</p><h2>Tu pedido, en tres pasos.</h2><div className="steps"><div><span>01</span><h3>Elige un arreglo</h3><p>Explora el catálogo y abre el detalle del diseño que te gusta.</p></div><div><span>02</span><h3>Escríbenos</h3><p>Cuéntanos la fecha, dedicatoria y cualquier toque que quieras sumar.</p></div><div><span>03</span><h3>Reserva tu fecha</h3><p>Separa tu pedido con el 50%. Coordinamos entrega o recojo contigo.</p></div></div></section>

      <section className="custom-gallery"><div className="gallery-heading"><div><p className="eyebrow">HECHOS A TU MEDIDA</p><h2>Detalles que ya<br /><em>hicieron historia.</em></h2></div><p>Globos, dulces, peluches y colores elegidos para una persona especial. Cada caja puede convertirse en algo único.</p></div><div className="gallery-grid">{customArrangements.map((arrangement) => <figure key={arrangement.name}><button className="gallery-image" onClick={() => setSelected(arrangement)} aria-label={`Ver ${arrangement.name}`}><img src={arrangement.image} alt={arrangement.name} /></button><figcaption><span>{arrangement.tone}</span><div className="gallery-product"><strong>{arrangement.name}</strong><b>S/{arrangement.price}</b></div><button className="gallery-add" onClick={() => addToCart(arrangement)}><Plus size={14} /> Agregar al carrito</button></figcaption></figure>)}</div></section>

      <section className="contact" id="contacto"><div><p className="eyebrow">CONTACTO</p><h2>Cuéntanos<br /><em>tu idea.</em></h2></div><div className="contact-copy"><p>Escríbenos por WhatsApp y crearemos un detalle para esa fecha especial.</p><a className="button button-dark" href={`https://wa.me/${whatsapp}?text=${encodeURIComponent('Hola, me gustaría cotizar un arreglo personalizado.')}`} target="_blank" rel="noreferrer"><MessageCircle size={19} /> Hablar por WhatsApp</a><a className="instagram-link" href="https://instagram.com/bloome.floreriaa" target="_blank" rel="noreferrer">Síguenos en Instagram <ArrowUpRight size={16} /></a></div></section>

      <footer><div><a className="wordmark" href="#inicio">Bloom<span>é</span><small>FLORES QUE HABLAN</small></a><p>Detalles hechos a mano para celebrar lo importante.</p></div><div><h3>Información</h3><a href="/privacidad">Política de privacidad</a><a href="/terminos">Términos y condiciones</a></div><div><h3>Hablemos</h3><a href={`https://wa.me/${whatsapp}`} target="_blank" rel="noreferrer">WhatsApp</a><a href="https://instagram.com/bloome.floreriaa" target="_blank" rel="noreferrer">Instagram</a></div><p className="copyright">© {new Date().getFullYear()} Bloomé. Todos los derechos reservados.</p></footer>

      {selected && <div className="modal-backdrop" role="presentation" onMouseDown={() => setSelected(null)}><section className="product-modal" role="dialog" aria-modal="true" aria-labelledby="product-title" onMouseDown={(e) => e.stopPropagation()}><button className="modal-close" onClick={() => setSelected(null)} aria-label="Cerrar"><X size={20} /></button><div className="modal-image"><img src={selected.image} alt={selected.name} /></div><div className="modal-content"><p className="eyebrow">{selected.category}</p><h2 id="product-title">{selected.name}</h2><strong>S/{selected.price}</strong><h3>Incluye</h3><ul>{selected.includes.map((item) => <li key={item}>{item}</li>)}</ul><p className="modal-note">Imagen referencial. Los tonos y detalles pueden variar según disponibilidad.</p><button className="button button-whatsapp" onClick={() => { addToCart(selected); setSelected(null); setCartOpen(true); }}><ShoppingBag size={19} /> Agregar al carrito</button></div></section></div>}
      {cartOpen && <div className="cart-backdrop" role="presentation" onMouseDown={() => setCartOpen(false)}><aside className="cart-panel" role="dialog" aria-modal="true" aria-labelledby="cart-title" onMouseDown={(e) => e.stopPropagation()}><div className="cart-head"><div><p className="eyebrow">TU PEDIDO</p><h2 id="cart-title">Carrito</h2></div><button className="modal-close" onClick={() => setCartOpen(false)} aria-label="Cerrar carrito"><X size={20} /></button></div>{cart.length === 0 ? <div className="cart-empty"><ShoppingBag size={32} /><p>Aún no agregaste arreglos.</p><button onClick={() => setCartOpen(false)}>Ver catálogo</button></div> : <><div className="cart-lines">{cart.map((line) => <article className="cart-line" key={line.name}><img src={line.image} alt="" /><div><h3>{line.name}</h3><p>S/{line.price} c/u</p><div className="quantity"><button onClick={() => updateQuantity(line.name, line.quantity - 1)} aria-label={`Quitar una unidad de ${line.name}`}><Minus size={14} /></button><span>{line.quantity}</span><button onClick={() => updateQuantity(line.name, line.quantity + 1)} aria-label={`Agregar una unidad de ${line.name}`}><Plus size={14} /></button></div></div><button className="remove-line" onClick={() => updateQuantity(line.name, 0)} aria-label={`Eliminar ${line.name}`}><Trash2 size={17} /></button></article>)}</div><div className="cart-total"><span>Total referencial</span><strong>S/{subtotal}</strong></div><a className="button button-whatsapp" href={cartWhatsappUrl} target="_blank" rel="noreferrer"><MessageCircle size={19} /> Confirmar por WhatsApp</a><p className="cart-note">El pago y la disponibilidad se confirman por WhatsApp.</p></>}</aside></div>}
    </main>
  );
}
