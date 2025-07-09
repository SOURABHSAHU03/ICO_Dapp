import React from "react";

const Token = () => {
  return (
    <section className="token pt-125"> 
      <div className="container">
        <div className="row align-items-center mt-none">
            <div className="col-lg-5 mt-30">
              <div className="token__content wow fadeInLeft">
                  <div className="sec-title mb-20">
                    <h5 className="sec-title__subtilte">  
                        Tokenomics
                    </h5>
                    <h2 className="sec-title__title">Token Allocation & Funds Distribution </h2>
                  </div>
                  <ul className="nav nav-tabs token__tab" id="myTab" role="tabList">
                    <li className="nav-item" role="presentation">
                      <button className="nav-link active" id="home-tab" data-bs-toggle="tab" type="button" 
                      data-bs-target = "#home" role="tab" aria-controls="home" aria-selected="true">
                        Funding Allocation
                      </button>
                    </li>

                    <li className="nav-item" role="presentation">
                      <button className="nav-link " id="profile-tab" data-bs-toggle="tab" type="button" 
                      data-bs-target = "#home" role="tab" aria-controls="home" aria-selected="true">
                        Token Allocation
                      </button>
                    </li>

                  </ul>

                  <div className="token__info mt-40">
                    <h2 className="">
                        1XYZ = 0.000013 BTC
                    </h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, doloribus, fugiat perferendis recusandae deserunt ducimus amet itaque dolorem consequatur ipsum deleniti reiciendis exercitationem, quam similique sint iusto minima natus! Repellat.
                    </p>

                    <div className="token-btn mt-40"> 
                        <a href="#" className="thm-btn">
                          Buy Now
                        </a>
                    </div>
                  </div>
              </div>
            </div>

            <div  className="col-lg-7 mt-30">
              <div className="tab-content wow fadeInRight" data-wow-delay="100ms" id="myTabContent">
                  <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                        <div className="token__img">
                          <img src="assets/img/token/token_chart.png" alt="" />

                        </div>
                  </div>

                  <div className="tab-pane fade " id="profile" role="tabpanel" aria-labelledby="profile-tab">
                        <div className="token__img">
                          <img src="assets/img/token/token_chart2.png" alt="" />

                        </div>
                  </div>
              </div>
            </div>

            
        </div>
      </div>
    </section>
  );
};

export default Token;
