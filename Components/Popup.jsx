import React, { useState,useEffect } from "react";

const Popup = ( {setBuyModel ,
            BUY_TOKEN,
            currency,
            account ,
            detail,
            ERC20,
            setLoader,
            TOKEN_ADDRESS}) => {
              const [amount , setAmount] = useState();
               const [transferToken , setTransferToken] = useState();
              
                useEffect(()=>{
                  setLoader(true);
                  ERC20(TOKEN_ADDRESS).then((items) => {
                    setTransferToken(items);
                    console.log(items);
                    setLoader(false);
                  })
              
                },[]);
 return (
    <section className="new-margin ico-contract pos-rel ">
      <div className="container">
          <div className="ico-contract__wrap"> 
            <h2 className="tilte">
                Buy Token{" "}
                <strong onClick={()=> setBuyModel(false)}>X</strong>
            </h2>

            <div>
            <div className="row">
              <div className="col-lg-6">
                  
                  <input type="text" placeholder={`Token Balance : ${transferToken?.balance} ${transferToken?.symbol}`} onChange={(e) => setAmount(
                    e.target.value
                  )}/>


                
              </div>

              <div className="col-lg-6">
                   <input type="text" 
                      value = {amount ? `${amount *detail?.tokenPrice}${currency}` : "Output Val"}
                  />
              </div>

              <div className="col-lg-12">
                  <textarea name="message" cols="30" row = "10" disabled placeholder={`Current Price : ${detail?.tokenBal}${detail?.symbol} Token Address : ${detail?.tokenBal} ${detail?.tokenAddr}`} ></textarea>
              </div>

               <div className="col-lg-12">
                   <input type="text" placeholder="_sendTo" onChange={(e) => (
                    setTransferToken({...transferToken,_amount : e.target.value})
                  )}/>
              </div>
             <div className="ico-contract__btn text-center mt-10">
                  <button onClick={() => BUY_TOKEN(amount)} className="thm-btn">
                        Buy Token
                  </button>
             </div> 
            </div>
          </div>
            
          </div>
          

          
      </div>
    </section>
  );
};

export default Popup;
