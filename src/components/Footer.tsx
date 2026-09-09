import { business } from '../data/business';

export default function Footer() {
  return (
    <footer>
      <div><a className="wordmark" href="/" aria-label={`${business.name}, inicio`}>Bloom<span>é</span><small>FLORES QUE HABLAN</small></a><p>Detalles hechos a mano para celebrar lo importante.</p></div>
      <div><h3>Información</h3><a href="/privacidad">Política de privacidad</a><a href="/terminos">Términos y condiciones</a></div>
      <div><h3>Hablemos</h3><a href={`https://wa.me/${business.whatsapp}`} target="_blank" rel="noreferrer">WhatsApp</a><a href={business.instagramUrl} target="_blank" rel="noreferrer">Instagram</a></div>
      <p className="copyright">© {new Date().getFullYear()} {business.name}. Todos los derechos reservados.</p>
    </footer>
  );
}
