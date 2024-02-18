import "./Footer.scss";
import LogoWhite from "../../assets/logoWhiteSmall.png";

function Footer() {
   return (
      <div className="FooterWrapper">
         <img className="FooterLogo" alt="Logo Kasa" src={LogoWhite} />
         <div className="Rights" style={{ color: "white" }}>
            © 2020 Kasa. All rights reserved
         </div>
      </div>
   );
}

export default Footer;
