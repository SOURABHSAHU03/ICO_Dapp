import React ,{useState,useEffect}from "react";
import { IoPintOutline } from "react-icons/io5";

const UpdatePrice = ({setOpenUpdatePrice, 
                UPDATE_TOKEN_PRICE,
                
                detail,
                currency}) => {
 const [price , setPrice] = useState();

 
  return (
    <section className="new-margin ico-contract pos-rel">
      <div className="container">
          <div className="ico-contract__wrap"> 
            <h2 className="tilte">
                Update Token Price
                <strong onClick={()=> setOpenUpdatePrice(false)}>X</strong>
            </h2>

            <div>
            <div className="row">
              <div className="col-lg-12">
                
                  <input type="text" placeholder="_price" onChange={(e) => (
                    setPrice( e.target.value)
                  )}/>


                
              </div>

             <p>
              <strong>Current Price : </strong> {detail?.tokenPrice} {currency} &nbsp;
              &nbsp;
              <strong>Token Balance:</strong> {detail?.tokenBal}{" "}{detail?.symbol}

             </p>

              
             <div className="ico-contract__btn text-center mt-10">
                  <button onClick={() => UPDATE_TOKEN_PRICE(donateFund)} className="thm-btn">
                        Update Price
                  </button>
             </div> 
            </div>
          </div>
            
          </div>
          

          
      </div>
    </section>
  );
};






export default UpdatePrice;
