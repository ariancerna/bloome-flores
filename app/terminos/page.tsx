import Link from 'next/link';

export const metadata = { title: 'Términos y condiciones | Bloomé' };

export default function TermsPage() {
  return <main className="legal-page">
    <header className="legal-header"><Link href="/" className="wordmark" aria-label="Bloomé, inicio">Bloom<span>é</span><small>FLORES QUE HABLAN</small></Link><Link href="/" className="back-link">← Volver a la tienda</Link></header>
    <article className="legal-document"><p className="eyebrow">INFORMACIÓN LEGAL</p><h1>Términos y<br /><em>condiciones</em></h1><p className="legal-intro">Estos términos establecen cómo trabajamos cada pedido para que tu detalle llegue con la atención que merece.</p><p className="legal-date">Última actualización: septiembre de 2026</p>
      <section><h2>1. Pedidos y disponibilidad</h2><p>Todos los arreglos Bloomé se elaboran a mano con flores de chenille. Las fotografías son referenciales: pueden existir variaciones razonables de color, tono, material, envoltura o disposición sin que se afecte la esencia ni el valor del diseño. La disponibilidad de materiales se confirma al momento de atender el pedido.</p></section>
      <section><h2>2. Reserva y pagos</h2><p>Para reservar una fecha solicitamos un adelanto del 50% del valor del arreglo. El saldo debe cancelarse antes del envío o al momento del recojo, según lo coordinado. Los precios mostrados están expresados en soles (S/) y se confirman antes de iniciar la elaboración.</p></section>
      <section><h2>3. Personalización y anticipación</h2><p>Los pedidos deben realizarse con al menos 2 días de anticipación. Si deseas una combinación de colores, frase, accesorio o temática específica, cuéntanoslo al realizar la reserva. La personalización está sujeta a disponibilidad y a la confirmación previa de Bloomé.</p></section>
      <section><h2>4. Envíos y recojo</h2><p>El costo de envío varía según distrito y se informa antes de confirmar el pedido. Para entrega, es responsabilidad del cliente proporcionar una dirección y referencia correctas, además de asegurar que exista una persona disponible para recibir el arreglo. Para recojo, solicitamos respetar la hora acordada.</p></section>
      <section><h2>5. Cambios, cancelaciones e incidencias</h2><p>Por tratarse de productos personalizados y elaborados a pedido, no se aceptan cancelaciones ni devoluciones una vez iniciada su elaboración, sin perjuicio de los derechos que correspondan al consumidor conforme a la normativa peruana. Si existe una incidencia con la entrega o el producto, comunícate con nosotros el mismo día para revisarla y buscar una solución razonable.</p></section>
      <section><h2>6. Propiedad intelectual</h2><p>Las fotografías, diseños, textos y elementos de identidad de Bloomé son de uso exclusivo de la marca. No pueden ser reproducidos ni utilizados con fines comerciales sin autorización previa.</p></section>
      <section><h2>7. Contacto</h2><p>Para consultas sobre estos términos, pedidos o atención posterior a una compra, contáctanos por nuestro canal oficial de WhatsApp.</p></section>
    </article>
  </main>;
}
