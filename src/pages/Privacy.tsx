import Footer from '../components/Footer';
import LegalHeader from '../components/LegalHeader';

export default function PrivacyPage() {
  return <main className="legal-page">
    <LegalHeader />
    <article className="legal-document"><p className="eyebrow">INFORMACIÓN LEGAL</p><h1>Política de<br /><em>privacidad</em></h1><p className="legal-intro">Tu información es parte de la confianza que depositas en nosotros. Aquí explicamos, de manera clara, cómo la usamos al atender tu pedido.</p><p className="legal-date">Última actualización: septiembre de 2026</p>
      <section><h2>1. Responsable del tratamiento</h2><p>Bloomé es responsable del tratamiento de los datos personales que nos compartes al comunicarte para realizar una compra. Esta política se aplica a la información que recibimos cuando nos escribes por WhatsApp, redes sociales u otros canales de contacto para consultar, personalizar o coordinar un pedido.</p></section>
      <section><h2>2. Datos que podemos solicitar</h2><p>Para gestionar un pedido, podemos solicitar tu nombre, número de teléfono, zona o dirección de entrega en Huaral, referencia de ubicación, fecha de entrega, texto de dedicatoria y cualquier detalle necesario para personalizar el arreglo. No solicitamos información que no sea necesaria para atender tu compra.</p></section>
      <section><h2>3. Finalidad del uso</h2><p>Usamos tus datos exclusivamente para responder consultas, confirmar y preparar pedidos, coordinar pago, entrega o recojo, atender incidencias y mantener una comunicación relacionada con tu compra. No vendemos ni alquilamos datos personales.</p></section>
      <section><h2>4. Conservación y seguridad</h2><p>Conservamos la información durante el tiempo razonablemente necesario para cumplir las finalidades indicadas, atender obligaciones legales o resolver consultas posteriores. Adoptamos medidas razonables para evitar accesos no autorizados, pérdida o uso indebido de los datos.</p></section>
      <section><h2>5. Compartición de información</h2><p>Solo compartiremos información imprescindible con servicios de envío o terceros que intervengan directamente en la entrega, o cuando una autoridad competente lo requiera conforme a ley. Estos terceros deben usar los datos únicamente para la finalidad correspondiente.</p></section>
      <section><h2>6. Tus derechos</h2><p>Conforme a la Ley N.° 29733, puedes solicitar acceso, rectificación, cancelación u oposición al tratamiento de tus datos. Para ejercerlos, escríbenos por WhatsApp indicando tu solicitud y un medio para responderte. Evaluaremos cada pedido dentro de los plazos aplicables.</p></section>
      <section><h2>7. Analítica del sitio</h2><p>Utilizamos Vercel Web Analytics para comprender, de forma agregada, cómo se visita el sitio y mejorar su funcionamiento. Esta herramienta no usa cookies ni registra información que permita identificarte personalmente.</p></section>
      <section><h2>8. Cambios a esta política</h2><p>Podemos actualizar esta política cuando cambie nuestra forma de atender pedidos o la normativa aplicable. La versión vigente siempre estará disponible en esta página.</p></section>
    </article>
    <Footer />
  </main>;
}
