import React ,{useState,useEffect}from "react";
import { IoPintOutline } from "react-icons/io5";

const Donate = ({setOpenDonate, 
                DONATE,
               
                currency,
                detail}) => {
  const [donateFund , setDonateFund] = useState();

  const [tokenDetails, setTokenDetails] = useState();

  const [transferToken , setTransferToken] = useState();

 
  return (
    <section className="new-margin ico-contract pos-rel">
      <div className="container">
          <div className="ico-contract__wrap"> 
            <h2 className="tilte">
                Donate {currency}
                <strong onClick={()=> setOpenDonate(false)}>X</strong>
            </h2>

            <div>
            <div className="row">
              <div className="col-lg-12">
                
                  <input type="text" placeholder="_amount" onChange={(e) => (
                    setDonateFund( e.target.value)
                  )}/>


                
              </div>

             <p>
              <strong>Balance : </strong> {detail?.maticBal} {currency}
             </p>

              
             <div className="ico-contract__btn text-center mt-10">
                  <button onClick={() => DONATE(donateFund)} className="thm-btn">
                        Donate
                  </button>
             </div> 
            </div>
          </div>
            
          </div>
          

          
      </div>
    </section>
  );
};



export default Donate;
