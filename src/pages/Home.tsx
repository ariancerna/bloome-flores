'use client';

import { useCallback, useState } from 'react';
import { ArrowUpRight, MessageCircle, Minus, Plus, ShoppingBag, Trash2, X } from 'lucide-react';
import { customArrangements as customArrangementCatalog, products as productCatalog } from '../data/products';
import type { Product } from '../data/products';
import { business } from '../data/business';
import Footer from '../components/Footer';
import { useCart } from '../hooks/useCart';
import { useDialogA11y } from '../hooks/useDialogA11y';
import '../styles/cart-details.css';

type CartStep = 'cart' | 'details';

const { whatsapp, instagramUrl } = business;

function formatDateForInput(date: Date) {
  return [date.getFullYear(), String(date.getMonth() + 1).padStart(2, '0'), String(date.getDate()).padStart(2, '0')].join('-');
}

function getMinimumDeliveryDate() {
  const date = new Date();
  date.setHours(0, 0, 0, 0);
  date.setDate(date.getDate() + 2);
  return formatDateForInput(date);
}

export default function Home() {
  const [filter, setFilter] = useState('Todos');
  const [selected, setSelected] = useState<Product | null>(null);
  const [cartOpen, setCartOpen] = useState(false);
  const { cart, addToCart, updateQuantity } = useCart();
  const [cartStep, setCartStep] = useState<CartStep>('cart');
  const [deliveryType, setDeliveryType] = useState<'delivery' | 'pickup'>('delivery');
  const [deliveryDate, setDeliveryDate] = useState('');
  const [deliveryZone, setDeliveryZone] = useState('');
  const [deliveryReference, setDeliveryReference] = useState('');
  const [dedication, setDedication] = useState('');
  const minimumDeliveryDate = getMinimumDeliveryDate();
  const filters = ['Todos', 'Ramos buchón', 'Hot Wheels', 'Amarillito'];
  const visible = filter === 'Todos' ? productCatalog : productCatalog.filter((p) => p.category === filter);
  const itemCount = cart.reduce((total, line) => total + line.quantity, 0);
  const subtotal = cart.reduce((total, line) => total + line.price * line.quantity, 0);
  const openCart = () => { setCartStep('cart'); setCartOpen(true); };
  const closeCart = useCallback(() => { setCartStep('cart'); setCartOpen(false); }, []);
  const closeSelected = useCallback(() => setSelected(null), []);
  useDialogA11y(Boolean(selected), closeSelected, 'product-title');
  useDialogA11y(cartOpen, closeCart, 'cart-title');
  const canConfirmOrder = Boolean(deliveryDate >= minimumDeliveryDate && (deliveryType === 'pickup' || deliveryZone.trim()));
  const cartWhatsappUrl = `https://wa.me/${whatsapp}?text=${encodeURIComponent(`Hola, me gustaría hacer este pedido:\n\n${cart.map((line) => `• ${line.quantity} x ${line.name} — S/${line.price * line.quantity}`).join('\n')}\n\nTotal referencial: S/${subtotal}\n\nFecha deseada: ${deliveryDate}\nModalidad: ${deliveryType === 'delivery' ? 'Envío en Huaral' : 'Recojo'}${deliveryType === 'delivery' ? `\nZona o dirección: ${deliveryZone}\nReferencia: ${deliveryReference || 'Sin referencia'}` : ''}\nDedicatoria: ${dedication || 'Sin dedicatoria'}\n\n¿Me confirman disponibilidad?`)}`;

  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#inicio" aria-label="Bloomé, inicio">Bloom<span>é</span><small>FLORES QUE HABLAN</small></a>
        <nav aria-label="Navegación principal"><a href="#catalogo">Catálogo</a><a href="#como-pedir">Cómo pedir</a><a href="#contacto">Contacto</a></nav>
        <button className="cart-button" onClick={openCart} aria-label={`Ver carrito, ${itemCount} productos`}><ShoppingBag size={18} /> <span>Carrito</span>{itemCount > 0 && <b>{itemCount}</b>}</button>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-copy"><p className="eyebrow">FLORES ETERNAS · CON INTENCIÓN</p><h1>Flores que dicen<br /><em>lo que sientes.</em></h1><p className="hero-text">Ramos de flores eternas, pensados para quedarse en la memoria. Elige un diseño, personalízalo y nosotros nos encargamos del detalle.</p><a className="button button-dark" href="#catalogo">Ver colección <ArrowUpRight size={18} /></a></div>
        <div className="hero-visual"><div className="hero-ring" /><div className="hero-note"><span>01</span><p>Un detalle que<br />no se marchita.</p></div><img src="/ramo-peluche.webp" alt="Ramo artesanal de rosas con peluche" fetchPriority="high" decoding="async" /></div>
      </section>

      <section className="trust" aria-label="Por qu&eacute; elegir Bloom&eacute;"><div className="trust-inner"><div className="trust-intro"><p className="eyebrow">HECHO PARA REGALAR</p><h2>Detalles pensados<br />para quedarse.</h2></div><div className="trust-list"><article><span>01</span><h3>Hecho a mano</h3><p>Cada dise&ntilde;o se prepara con cuidado, uno a uno.</p></article><article><span>02</span><h3>Flores eternas</h3><p>Un detalle que conserva su belleza por mucho m&aacute;s tiempo.</p></article><article><span>03</span><h3>Personalizable</h3><p>Colores, mensaje y complementos elegidos para esa persona.</p></article><article><span>04</span><h3>Con anticipaci&oacute;n</h3><p>Reserva tu pedido con al menos 2 d&iacute;as de anticipaci&oacute;n.</p></article></div></div></section>

      <section className="catalog" id="catalogo"><div className="section-heading"><div><p className="eyebrow">COLECCIÓN</p><h2>Elige tu detalle</h2></div><p>Todos los arreglos se elaboran a pedido.<br />Reserva con al menos 2 días de anticipación.</p></div>
        <div className="filters" aria-label="Filtrar arreglos">{filters.map((item) => <button className={filter === item ? 'active' : ''} onClick={() => setFilter(item)} key={item}>{item}</button>)}</div>
        <div className="product-grid">{visible.map((product) => <article className="product-card" key={product.name}><button className="product-image" onClick={() => setSelected(product)} aria-label={`Ver ${product.name}`}><img src={product.image} alt={product.name} loading="lazy" decoding="async" /></button><div className="product-info"><div><p>{product.category}</p><h3>{product.name}</h3></div><strong>S/{product.price}</strong></div><div className="product-actions"><button className="view-detail" onClick={() => setSelected(product)}>Ver detalle <ArrowUpRight size={17} /></button><button className="add-cart" onClick={() => addToCart(product)}><Plus size={16} /> Agregar</button></div></article>)}</div>
      </section>

      <section className="process" id="como-pedir"><p className="eyebrow">SENCILLO Y PERSONAL</p><h2>Tu pedido, en tres pasos.</h2><div className="steps"><div><span>01</span><h3>Elige un arreglo</h3><p>Explora el catálogo y abre el detalle del diseño que te gusta.</p></div><div><span>02</span><h3>Escríbenos</h3><p>Cuéntanos la fecha, dedicatoria y cualquier toque que quieras sumar.</p></div><div><span>03</span><h3>Reserva tu fecha</h3><p>Separa tu pedido con el 50%. Coordinamos entrega o recojo contigo.</p></div></div></section>

      <section className="custom-gallery"><div className="gallery-heading"><div><p className="eyebrow">HECHOS A TU MEDIDA</p><h2>Detalles que ya<br /><em>hicieron historia.</em></h2></div><p>Globos, dulces, peluches y colores elegidos para una persona especial. Cada caja puede convertirse en algo único.</p></div><div className="gallery-grid">{customArrangementCatalog.map((arrangement) => <figure key={arrangement.name}><button className="gallery-image" onClick={() => setSelected(arrangement)} aria-label={`Ver ${arrangement.name}`}><img src={arrangement.image} alt={arrangement.name} loading="lazy" decoding="async" /></button><figcaption><span>{arrangement.tone}</span><div className="gallery-product"><strong>{arrangement.name}</strong><b>S/{arrangement.price}</b></div><button className="gallery-add" onClick={() => addToCart(arrangement)}><Plus size={14} /> Agregar al carrito</button></figcaption></figure>)}</div></section>

      <section className="contact" id="contacto"><div><p className="eyebrow">CONTACTO</p><h2>Cuéntanos<br /><em>tu idea.</em></h2></div><div className="contact-copy"><p>Escríbenos por WhatsApp y crearemos un detalle para esa fecha especial.</p><a className="button button-dark" href={`https://wa.me/${whatsapp}?text=${encodeURIComponent('Hola, me gustaría cotizar un arreglo personalizado.')}`} target="_blank" rel="noreferrer"><MessageCircle size={19} /> Hablar por WhatsApp</a><a className="instagram-link" href={instagramUrl} target="_blank" rel="noreferrer">Síguenos en Instagram <ArrowUpRight size={16} /></a></div></section>

      <Footer />

      <a className="floating-whatsapp" href={`https://wa.me/${whatsapp}?text=${encodeURIComponent('Hola, me gustar\u00eda conocer m\u00e1s sobre los arreglos de Bloom\u00e9.')}`} target="_blank" rel="noreferrer" aria-label="Escribir a Bloom&eacute; por WhatsApp"><MessageCircle size={21} /><span>WhatsApp</span></a>

      {selected && <div className="modal-backdrop" role="presentation" onMouseDown={() => setSelected(null)}><section className="product-modal" role="dialog" aria-modal="true" aria-labelledby="product-title" onMouseDown={(e) => e.stopPropagation()}><button className="modal-close" onClick={() => setSelected(null)} aria-label="Cerrar"><X size={20} /></button><div className="modal-image"><img src={selected.image} alt={selected.name} /></div><div className="modal-content"><p className="eyebrow">{selected.category}</p><h2 id="product-title">{selected.name}</h2><strong>S/{selected.price}</strong><h3>Incluye</h3><ul>{selected.includes.map((item) => <li key={item}>{item}</li>)}</ul><p className="modal-note">Imagen referencial. Los tonos y detalles pueden variar según disponibilidad.</p><button className="button button-whatsapp" onClick={() => { addToCart(selected); setSelected(null); openCart(); }}><ShoppingBag size={19} /> Agregar al carrito</button></div></section></div>}
      {cartOpen && <div className="cart-backdrop" role="presentation" onMouseDown={closeCart}><aside className="cart-panel" role="dialog" aria-modal="true" aria-labelledby="cart-title" onMouseDown={(e) => e.stopPropagation()}><div className="cart-head"><div><p className="eyebrow">TU PEDIDO</p><h2 id="cart-title">{cartStep === 'cart' ? 'Carrito' : 'Datos del pedido'}</h2></div><button className="modal-close" onClick={closeCart} aria-label="Cerrar carrito"><X size={20} /></button></div>{cart.length === 0 ? <div className="cart-empty"><ShoppingBag size={32} /><p>Aún no agregaste arreglos.</p><button onClick={closeCart}>Ver catálogo</button></div> : cartStep === 'cart' ? <><div className="cart-lines">{cart.map((line) => <article className="cart-line" key={line.name}><img src={line.image} alt="" /><div><h3>{line.name}</h3><p>S/{line.price} c/u</p><div className="quantity"><button onClick={() => updateQuantity(line.name, line.quantity - 1)} aria-label={`Quitar una unidad de ${line.name}`}><Minus size={14} /></button><span>{line.quantity}</span><button onClick={() => updateQuantity(line.name, line.quantity + 1)} aria-label={`Agregar una unidad de ${line.name}`}><Plus size={14} /></button></div></div><button className="remove-line" onClick={() => updateQuantity(line.name, 0)} aria-label={`Eliminar ${line.name}`}><Trash2 size={17} /></button></article>)}</div><div className="cart-total"><span>Total referencial</span><strong>S/{subtotal}</strong></div><button className="button button-whatsapp" onClick={() => setCartStep('details')}><MessageCircle size={19} /> Continuar</button><p className="cart-note">Completa unos datos antes de enviar tu pedido por WhatsApp.</p></> : <div className="cart-details"><p>Cuéntanos cómo prefieres recibir tu pedido.</p><label>Fecha deseada<input type="date" value={deliveryDate} onChange={(event) => setDeliveryDate(event.target.value)} required /></label><fieldset><legend>¿Cómo deseas recibirlo?</legend><label><input type="radio" name="delivery-type" checked={deliveryType === 'delivery'} onChange={() => setDeliveryType('delivery')} /> Envío en Huaral</label><label><input type="radio" name="delivery-type" checked={deliveryType === 'pickup'} onChange={() => setDeliveryType('pickup')} /> Recojo</label></fieldset>{deliveryType === 'delivery' && <><label>Zona o dirección en Huaral<input value={deliveryZone} onChange={(event) => setDeliveryZone(event.target.value)} placeholder="Ej. Urb. Los Olivos, calle..." required /></label><label>Referencia<input value={deliveryReference} onChange={(event) => setDeliveryReference(event.target.value)} placeholder="Ej. frente al parque" /></label></>}<label>Dedicatoria<textarea value={dedication} onChange={(event) => setDedication(event.target.value)} placeholder="Escribe tu mensaje (opcional)" rows={3} /></label><a className={`button button-whatsapp${canConfirmOrder ? '' : ' is-disabled'}`} href={canConfirmOrder ? cartWhatsappUrl : undefined} target="_blank" rel="noreferrer" aria-disabled={!canConfirmOrder}><MessageCircle size={19} /> Enviar por WhatsApp</a><button className="cart-back" onClick={() => setCartStep('cart')}>← Volver al carrito</button><p className="cart-note">El pago y la disponibilidad se confirman por WhatsApp.</p></div>}</aside></div>}
    </main>
  );
}
