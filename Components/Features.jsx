import React from "react";

const Features = () => {
  return (
    <section className="features pos-rel pb-150 mb-0">
        <div className="container">
          <div className="sec-title text-center mb-95">
            <h5 className="sec-title__subtitle">WHY CHOOSE US</h5>
            <h2 className="sec-title__tilte"> Why Choose our Token??</h2>
          </div>

          <div className="feature__wrap pos-rel ul_li_between">
                <div className="feature__item text-center">
                  <div className="icon">
                    <img src="assets/img/icon/f_01.svg" alt="" />
                  </div>

                  <h4>
                    Mobile Payment <br /> make easy
                  </h4>
                </div>

                <div className="feature__item text-center">
                  <div className="icon">
                    <img src="assets/img/icon/f_02.svg" alt="" />
                  </div>

                  <h4>
                    Investments <br /> Projects
                  </h4>
                </div>

                <div className="feature__item text-center">
                  <div className="icon">
                    <img src="assets/img/icon/f_03.svg" alt="" />
                  </div>

                  <h4>
                    Secure Your  <br /> money
                  </h4>
                </div>

                <div className="feature__item text-center">
                  <div className="icon">
                    <img src="assets/img/icon/f_04.svg" alt="" />
                  </div>

                  <h4>
                    Free  <br /> Transactions
                  </h4>
                </div>

                {/* <div className=" feature__line_shape mr-250" > 
                  <img src="assets/img/shape/f_shape.png" alt="" />
                </div> */}
          </div>

         
        </div>
        <div className="feature__sec-shape"><img src="assests/img/shape/s_shape1.png" alt="" /></div>

        <div className="token-info__shape">
      <div className="shape shape--1">
        <img src="assets/img/shape/s_shape1.png" alt="" />
      </div>
      <div className="shape shape--2">
        <img src="assets/img/shape/s_shape2.png" alt="" />
      </div>

      <div className="shape shape--2">
        <img src="assets/img/shape/ti_shape.png" alt="" />
      </div>
    </div>
    </section>
  );
};

export default Features;
