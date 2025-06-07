import React from "react";
import imgFacebook from "../../assets/facebook-brands.svg";
import imgInstagram from "../../assets/instagram-brands.svg";
import imgWhatapps from "../../assets/whatsapp-brands.svg";
import imgGithub from "../../assets/github-brands.svg";

/* Footer */
const Footer = () => {
  return (
    <footer className="Footer footer">
      <div className="cointaner">
        <div>
          <a
            href="https://facebook.com"
            title="Seguinos en Facebook"
            target="_blank"
          >
            <img src={imgFacebook} width="50" height="50" />
          </a>
          <a
            href="https://instagram.com"
            title="Seguinos en Instagram"
            target="_blank"
          >
            <img src={imgInstagram} width="50" height="50" />
          </a>

          <a
            href="https://api.whatsapp.com/send?phone=110303456&text=Buenos%20dias,%20mi%20consulta%20es..."
            title="Mensajeanos por Whatsapp"
            target="_blank"
          >
            <img src={imgWhatapps} width="50" height="50" />
          </a>

          <a
            href="https://github.com/mwcastellan/tpo_react_fron_pro"
            title="Mi desarrollo en Github"
            target="_blank"
          >
            <img src={imgGithub} width="50" height="50" />
          </a>
        </div>
        <span className="text-muted">&copy; 2025 derechos reservados</span>
      </div>
    </footer>
  );
};

export default Footer;
