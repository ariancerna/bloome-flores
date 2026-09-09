import { business } from '../data/business';

export default function LegalHeader() {
  return (
    <header className="legal-header">
      <a href="/" className="wordmark" aria-label={`${business.name}, inicio`}>Bloom<span>é</span><small>FLORES QUE HABLAN</small></a>
      <a href="/" className="back-link">← Volver a la tienda</a>
    </header>
  );
}
