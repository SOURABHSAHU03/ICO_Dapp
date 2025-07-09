// import React from "react";

// const Footer = () => {
//   return (
//     <footer
//       style={{
//         backgroundColor: "#111",
//         color: "#ccc",
//         textAlign: "center",
//         padding: "20px 0",
//         fontSize: "14px",
//       }}
//     >
//       <div>
//         <p>© 2025 Sourabh Sahu. All Rights Reserved.</p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from "react";
import {
  TiSocialFacebook,
  TiSocialTwitter,
  TiSocialInstagram,
  TiSocialEmail,
  TiSocialLinkedin,

} from "react-icons/ti";

import {IoCloudDownload} from "react-icons/io5";
import {IoIosSend} from "react-icons/io";

const Footer = () => {
  return <footer className="site-footer footer__ico pos-rel"
    data-background="assests/img/bg/footer_bg.png"
  >
    <div className="container">
      <div className="row mt-none-30">
        <div className="col-lg-4 mt-30">
          <div className="footer__widget footer__subscribe">
              <h2>Subscribe Crytooo</h2>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores adipisci cumque perspiciatis. Cumque, possimus culpa. Aut ducimus enim nemo illum!</p>

              <form action="">
                <input type="text" placeholder="sahusourabh062@gmail.com" />
                <button>
                  <IoIosSend/>
                </button>
              </form>
          </div>

        </div>
        <div className="col-lg-8 mt-30 ">
          <div className="footer__widget text-lg-end">
            <h2>Download Documents</h2>
            <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "20px",
                    justifyContent: "flex-start",
                    marginTop: "20px",
                  }}
                >
                  {["White Paper", "Coin Paper", "Privacy Policy", "Terms of Sale"].map(
                    (title, idx) => (
                      <a
                        href="#"
                        key={idx}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                          textDecoration: "none",
                          padding: "10px 12px",
                          backgroundColor: "#050134 ",
                          color: "#fff",
                          borderColor:"orange",
                          border:" 5px black",
                          borderRadius: "10px ",
                          fontSize: "14px",
                        }}
                      >
                        <img
                          src="assets/img/icon/pdf.svg"
                          alt="PDF icon"
                          style={{ width: "20px", height: "20px" }}
                        />
                        <span style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                          <IoCloudDownload />
                          {title}
                        </span>
                      </a>
                    )
                  )}
                </div>
          </div>
        </div>
      </div>

      <div className="footer__bottom ul_li_between mt-50">
        
        <ul className="footer__social ul_li mt-20">
          <li>
            <a href="https://www.instagram.com/sourabh_sahu2003/">
              Ig
            </a>
          </li>

          <li>
            <a href="https://www.instagram.com/sourabh_sahu2003/">
              G
            </a>
          </li>

          <li>
            <a href="https://www.instagram.com/sourabh_sahu2003/">
              Fb
            </a>
          </li>

          <li>
            <a href="https://www.instagram.com/sourabh_sahu2003/">
              Li
            </a>
          </li>

          <li>
            <a href="https://www.instagram.com/sourabh_sahu2003/">
              T
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div className="footer__copyright mt-35">
      <div className="container">
       
        <div className="footer__copyright-text mt-15">
          Copyright @ 2025 Sourabh Sahu
          All Rights Reserved ............
        </div>
      </div>
    </div>
    <div className="token-info__shape">
      <div className="shape shape--1">
        <img src="assets/img/shape/s_shape1.png" alt="" />
      </div>
      <div className="shape shape--2">
        <img src="assets/img/shape/s_shape2.png" alt="" />
      </div>

      <div className="shape shape--2">
        <img src="assets\img\bg\footer_bg.png" alt="" />
      </div>
    </div>
  </footer>
};

export default Footer;


