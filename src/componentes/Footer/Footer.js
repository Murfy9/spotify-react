import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-premium">
      <div className="footer-text">
        <p className="footer-premium__title">Testar o Premium de graça</p>
        <p className="footer-premium__subtitle">
          Inscreva-se para curtir música ilimitada e podcasts só com alguns
          anúncios. Não precisa de cartão de crédito.
        </p>
      </div>
      <div className="button">
        <button type="button">Inscreva-se grátis</button>
      </div>
    </footer>
  );
};

export default Footer;
