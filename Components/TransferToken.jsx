import React ,{useState,useEffect}from "react";
import { IoPintOutline } from "react-icons/io5";

const TransferToken = ({setTransferModel,
              TRANSFER_TOKEN,
              ERC20 ,
              setLoader}) => {
  const [token , setToken] = useState({
    _sendTo : "",
    _amount : "",
    _tokenAddress : "",
  });

  const [tokenDetails, setTokenDetails] = useState();

  const [transferToken , setTransferToken] = useState();

  useEffect(()=>{
    if(transferToken){
            const loadToken = async() => {
             setLoader(true);
          const token = await ERC20(transferToken);
          if(token == undefined){
            console.log("kindly pass the token address");
          }
          else{
            setTokenDetails(token);
            console.log(token);
          }
          setLoader(false);
      };
      loadToken();
    }

  },[transferToken]);
  return (
    <section className="new-margin ico-contract pos-rel">
      <div className="container">
          <div className="ico-contract__wrap"> 
            <h2 className="tilte">
                Transfer Token{" "}
                <strong onClick={()=> setTransferModel(false)}>X</strong>
            </h2>

            <div>
            <div className="row">
              <div className="col-lg-12">
                {tokenDetails?.name ? (<input type = "text" value = {`Name ${tokenDetails?.name} Balance : ${tokenDetails?.balance} ${tokenDetails?.symbol}`}/>) : (
                  <input type="text" placeholder="_tokenAddress" onChange={(e) => (
                    setToken({...tokenDetails,_tokenAddress : e.target.value}), setTransferToken(e.target.value)
                  )}/>


                )}
              </div>

              <div className="col-lg-12">
                   <input type="text" placeholder="_sendTo" onChange={(e) => (
                    setToken({...tokenDetails,_sendTo : e.target.value})
                  )}/>
              </div>

               <div className="col-lg-12">
                   <input type="text" placeholder="_sendTo" onChange={(e) => (
                    setToken({...tokenDetails,_amount : e.target.value})
                  )}/>
              </div>
             <div className="ico-contract__btn text-center mt-10">
                  <button onClick={() => TRANSFER_TOKEN(token)} className="thm-btn">
                        Tranfer Token
                  </button>
             </div> 
            </div>
          </div>
            
          </div>
          

          
      </div>
    </section>
  );
};

export default TransferToken;
