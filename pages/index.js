import React ,{useState,useEffect, useContext}from "react";
import {Footer,
    Header,
    About,
    Token,
    Roadmap,
    Team,
    Contact,
    Faq,
    Feature,
    Hero,
    Brand,
    Loader,
    Progress,
    SideBar,
    Popup,
    TransferToken,
    Owner,
    TransferCurrency,
    Donate,
    UpdatePrice,
    TokenInfo,
    UpdateAddress,
  } from "../Components/index.js";

    import {TOKEN_ICO_CONTEXT } from "../context/index.js";
    import {shortenAddress}  from "../Utils/index.js";
    import {CHECK_ACCOUNT_BALANCE, CONNECT_WALLET, ERC20} from "../context/constants.js";
import { TOKEN_ADDRESS } from "../context/constants";
 const index = () => {
   const { 
                   TOKEN_ICO,
                   BUY_TOKEN,
                   TRANSFER_ETHER,
                   DONATE,
                   CONNECT_WALLET,
                   TOKEN_WITHDRAW,
                   UPDATE_TOKEN,
                   UPDATE_TOKEN_PRICE,
                   TRANSFER_TOKEN,
                   addTokenToMetamask,
                   ERC20,
                   CHECK_ACCOUNT_BALANCE,
                   setAccount,
                   setLoader,
                   TOKEN_ADDRESS,
                   loader,
                   account,
                   currency,} = useContext(TOKEN_ICO_CONTEXT);
       
        const [ownerModel, setOwnerModel] = useState(false);
        const [buyModel, setBuyModel] = useState(false);
        const [transferModel, setTransferModel] = useState(false);
        const [transferCurrency, setTransferCurrency] = useState(false);
        const [openDonate,setOpenDonate] = useState(false);
        const [openUpdatePrice,setOpenUpdatePrice] = useState(false);
        const [openUpdateAddress,setOpenUpdateAddress] = useState(false);
        const [openUp,setopenUp] = useState(false);

        const [detail,setDetail] = useState();
        //const [account,setAccount] = useState("");

        useEffect(() => {
          console.log("ADDRESS");
          const fetchData = async () => {
            const items = await TOKEN_ICO();
            console.log(items);
            setDetail(items);
          };
          fetchData();
        }, []);

    return ( <>
        <div className = "body_wrap">
          {ownerModel && (<Owner setOwnerModel={setOwnerModel} 
            currency = {currency}
            detail = {detail}
            account= {account}
            setTransferModel= {setTransferModel}
            setTransferCurrency = {setTransferCurrency}
            TOKEN_WITHDRAW={TOKEN_WITHDRAW}
            setOpenDonate={setOpenDonate}
            setOpenUpdatePrice={setOpenUpdatePrice}
            //setopenUp={setopenUp}
            //addTokenToMetamask={addTokenToMetamask}
            setOpenUpdateAddress={setOpenUpdateAddress}
            /> 
          )}

          
            {buyModel && (<Popup 
            setBuyModel = {setBuyModel}
            BUY_TOKEN = {BUY_TOKEN}
            currency = {currency}
            account = {account}
            detail = {detail}
            ERC20 = {ERC20}
            setLoader = {setLoader}
            TOKEN_ADDRESS = {TOKEN_ADDRESS}
            />)}
            {transferModel && (
              <TransferToken setTransferModel={setTransferModel}
              TRANSFER_TOKEN={TRANSFER_TOKEN}
              ERC20 = {ERC20}
              setLoader={setLoader}


            />
            )}

            {

              transferCurrency && (
                <TransferCurrency setTransferCurrency={setTransferCurrency}
                TRANSFER_ETHER={TRANSFER_ETHER}
                detail = {detail}
                CHECK_ACCOUNT_BALANCE = {CHECK_ACCOUNT_BALANCE}
                currency = {currency}
                setLoader = {setLoader}
                />
              )
            }

            {
              openDonate && (
                <Donate setOpenDonate={setOpenDonate} 
                DONATE={DONATE}
               
                currency = {currency}
                detail = {detail}
                
                />
              )
            }

            {
              openUpdatePrice && (
                <UpdatePrice setOpenUpdatePrice={setOpenUpdatePrice} 
                UPDATE_TOKEN_PRICE={UPDATE_TOKEN_PRICE}
                
                detail = {detail}
                currency = {currency}
                
                />
              )
            }

            {
              openUpdateAddress && (
                <UpdateAddress 
                setOpenUpdateAddress={setOpenUpdateAddress}
                detail = {detail}
                UPDATE_TOKEN={UPDATE_TOKEN}
                
                currency = {currency}
                ERC20 = {ERC20}
                setLoader = {setLoader}
                />
              )
            }
            {loader && <Loader/>}
            <Header account = {account}
              CONNECT_WALLET = {CONNECT_WALLET}
              setAccount = {setAccount}
              setLoader = {setLoader}
              setOwnerModel = {setOwnerModel}
              shortenAddress = {shortenAddress}
              detail = {detail}
              currency = {currency}
              ownerModel = {ownerModel}
            />  

            <SideBar/>

            <Hero
            setBuyModel = {setBuyModel}
            account = {account}
            CONNECT_WALLET = {CONNECT_WALLET}
            setAccount = {setAccount}
            setLoader = {setLoader}
            detail = {detail}
            addTokenToMetamask = {addTokenToMetamask}
            />
            <About/>
            <Feature/>
            <Token/>
            <TokenInfo detail={detail} currency = {currency}/>
            <Team/>
            <Faq/>
            <Contact/>
            <Footer/>
        </div>
    </>
    );
     
};
// const index = () => {
//   return <div>Team</div>;
// };
export default index;