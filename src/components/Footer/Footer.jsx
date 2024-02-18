import LogoWhite from "../../assets/logoWhiteSmall.png";
import "./Footer.scss";

// CLASSNAME FOOTERWRAPPER reliée au Footer.scss

function Footer() {
   return (
      <div className="FooterWrapper">
         <img className="FooterLogo" alt="Logo Kasa" src={LogoWhite} />
         <div className="Rights" style={{ color: "white" }}>
            © Kasa. All rights reserved
         </div>
      </div>
   );
}

export default Footer;
