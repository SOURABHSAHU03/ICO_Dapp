import React from "react";
import {FaPlus} from "react-icons/fa"
const Owner = ({setOwnerModel, 
            currency,
            detail, 
            account,
            setTransferModel,
            setTransferCurrency, 
            TOKEN_WITHDRAW,
            setOpenDonate,
            setOpenUpdatePrice,
  
            setOpenUpdateAddress}) => {
  return (
    <section className="team pos-rel">
      <div className="container"> 
        <div className="new-owner team__wrap ul_li">
          <div className="team__item">
                <div className="avatar">
                  <img src="assets/img/shape/c_shape1.png" alt="" />
                </div>
                <div className="team__info text-center mb-20">
                  <h3>
                    TOKEN TRANSFER
                  </h3>
                  <span>Any ERC 20</span>
                </div>
                <div className="team__social ul_li_center">
                  <span onClick={()=> (setOwnerModel(false),setTransferModel(true))} className="h-icon" style={{
                    cursor:"pointer",
                  }}> <FaPlus/></span>
                </div>
          </div>

          <div className="team__item">
                <div className="avatar">
                  <img src="assets/img/token/t_info_img.png" alt="" />
                </div>
                <div className="team__info text-center mb-20">
                  <h3>
                    TRANSFER FUNDS
                   </h3>
                  <span>{detail?.maticBal.slice(0,6)}{currency}</span>
                </div>
                <div className="team__social ul_li_center">
                  <span onClick={()=> (setOwnerModel(false),setTransferCurrency(true))} className="h-icon" style={{
                    cursor:"pointer",
                  }}> <FaPlus/></span>
                </div>

               
          </div>

           <div className="team__item">
                <div className="avatar">
                  <img src="assets/img/shape/c_shape2.png" alt="" />
                </div>
                <div className="team__info text-center mb-20">
                  <h3>
                    DONATE FUND
                  </h3>
                  <span>If u Can ... </span>
                </div>
                <div className="team__social ul_li_center">
                  <span onClick={()=> (setOwnerModel(false),setOpenDonate(true))} className="h-icon" style={{
                    cursor:"pointer",
                  }}> <FaPlus/></span>
                </div>
            </div>

                  
                {
                  account == detail?.owner && (
                    <>
                          <div className="team__item">
                      <div className="avatar">
                        <img src="assets/img/shape/c_shape2.png" alt="" />
                      </div>
                      <div className="team__info text-center mb-20">
                        <h3>
                          WITHDRAW TOKENS
                        </h3>
                        <span>ONLY OWNERS</span>
                      </div>
                      <div className="team__social ul_li_center">
                        <span onClick={()=> (TOKEN_WITHDRAW())} className="h-icon" style={{
                          cursor:"pointer",
                        }}> <FaPlus/></span>
                      </div>
                        </div>
                        <div className="team__item">
                      <div className="avatar">
                        <img src="assets/img/shape/c_shape2.png" alt="" />
                      </div>
                      <div className="team__info text-center mb-20">
                        <h3>
                          UPDATE TOKENS
                        </h3>
                        <span>ONLY OWNERS</span>
                      </div>
                      <div className="team__social ul_li_center">
                        <span onClick={()=> (setOwnerModel(false),
                        setOpenUpdateAddress(true))} className="h-icon" style={{
                          cursor:"pointer",
                        }}> <FaPlus/></span>
                      </div>
                        </div>

                        <div className="team__item">
                      <div className="avatar">
                        <img src="assets/img/shape/c_shape2.png" alt="" />
                      </div>
                      <div className="team__info text-center mb-20">
                        <h3>
                          UPDATE TOKENS PRICE
                        </h3>
                        <span>ONLY OWNERS</span>
                      </div>
                      <div className="team__social ul_li_center">
                        <span onClick={()=> (setOwnerModel(false),
                        setOpenUpdatePrice(true))} className="h-icon" style={{
                          cursor:"pointer",
                        }}> <FaPlus/></span>
                      </div>
                        </div>

                    </>                        
                  )
                }

                

          
        </div>
      </div>
      <div className="team__shape">
                <div className="shape shape--1">
                      <img src="assets/img/shape/t_shape1.png" alt="" />
                </div>
                <div className="shape shape--1">
                      <img src="assets/img/shape/t_shape2.png" alt="" />
                </div>
                <div className="shape shape--1">
                      <img src="assets/img/shape/s_shape1.png" alt="" />
                </div>
                <div className="shape shape--1">
                      <img src="assets/img/shape/s_shape2.png" alt="" />
                </div>
      </div>
    </section>
  );
};

export default Owner;
