import React,{useState,useEffect} from "react";
import {ethers} from "ethers";
import toast from "react-hot-toast";
import axios from "axios";
// import toast from "react-hot-toast";
// import {useRouter} from "next/router";

import {
    CHECK_WALLET_CONNECTED,
    CONNECT_WALLET,
    handleNetworkSwitch,
    fetchContract,
    networks,   
    GET_BALANCE,
    TOKEN_ADDRESS,
    TOKEN_ICO_CONTRACT,
    ERC20,
    ERC20_CONTRACT,
    CHECK_ACCOUNT_BALANCE,
    addTokenToMetamask,
}from "./constants";

export const TOKEN_ICO_CONTEXT = React.createContext();

export const TOKEN_ICO_PROVIDER = ({children}) => {
    const DAPP_NAME = "TOKEN ICO DAPP";
    const currency = "ETH";
    const network = "Holesky";

    const [loader,setLoader] = useState(false);
    const [account,setAccount] = useState("");
    const [balance,setBalance] = useState(0);
    const [count , setCount] = useState(0);

    const notifySuccess = (message) => {
        toast.success(message, {
            position: "top-right",
            duration: 3000,
            style: {
                background: "#333",
                color: "#fff",
            },
        });
    }

    const notifyError = (message) => {
        toast.error(message, {
            position: "top-right",
            duration: 3000,
            style: {
                background: "#333",
                color: "#fff",
            },
        });
    }


// const TOKEN_ICO = async() => {
//         try{
//             const address = await CHECK_WALLET_CONNECTED();
//             if(address){
//                 setLoader(true);
//                 setAccount(address);
//                 const contract = await TOKEN_ICO_CONTRACT();
//                 const tokenDetails = await contract.getTokenDetails();
//                 const contractOwner = await contract.owner();
//                 const soldTokens = await contract.soldTokens();
//                 const ethBal = await GET_BALANCE(address);
//                 const token = {
//                     tokenBal : ethers.utils.formatEther(tokenDetails.balance.toString()),
//                     name : tokenDetails.name,
//                     symbol : tokenDetails.symbol,
//                     supply : ethers.utils.formatEther(tokenDetails.supply.toString()),
//                     decimals : tokenDetails.decimals,
//                     tokenPrice : ethers.utils.formatEther(tokenDetails.tokenPrice.toString()),
//                     tokenAddr : tokenDetails.tokenAddr,
//                     maticBal : ethBal,
//                     address : address.toLowerCase(),
//                     owner : contractOwner.toLowerCase(),
//                     soldTokens : soldTokens.toNumber(),
//                 };
//                 setLoader(false);
//                 return token;
//             }
//         }catch(error) {
//             console.error("Failed to fetch token ICO contract:", error);
//             notifyError("Failed to fetch token ICO contractiiii");
//         }

// };

const TOKEN_ICO = async () => {
  try {
    const address = await CHECK_WALLET_CONNECTED();
    if (!address) return;

    setLoader(true);
    setAccount(address);

    const contract = await TOKEN_ICO_CONTRACT();
    if (!contract) {
  console.error("Contract instance is undefined");
  return;
}

    const tokenDetails = await contract.getTokenDetails();
    const contractOwner = await contract.owner();
    const soldTokens = await contract.soldTokens();
    const ethBal = await GET_BALANCE(address);

    // Debug: log the raw response
    console.log("Token Details:", tokenDetails);
    console.log(123456);

    const token = {
      tokenBal: ethers.utils.formatEther(tokenDetails.supply), // or use ERC20.balanceOf?
      name: tokenDetails.name,
      symbol: tokenDetails.symbol,
      supply: ethers.utils.formatEther(tokenDetails.supply),
      decimals: 18,
      tokenPrice: ethers.utils.formatEther(tokenDetails.tokenPrice),
      tokenAddr: tokenDetails.tokenAddr,
      maticBal: ethBal,
      address: address.toLowerCase(),
      owner: contractOwner.toLowerCase(),
      soldTokens: soldTokens.toNumber(),
    };

    setLoader(false);
    return token;
  } catch (error) {
    console.error("TOKEN_ICO Error:", error);
    toast.error("Error fetching token ICO details");
    setLoader(false);
  }
};


const BUY_TOKEN = async(amount) => {
        try{
            setLoader(true);
             const address = await CHECK_WALLET_CONNECTED();
            if(address){
                
                //setAccount(address);
                const contract = await TOKEN_ICO_CONTRACT();
                const tokenDetails = await contract.getTokenDetails();

                const availableTokens = ethers.utils.formatEther(tokenDetails.balance.toString());

                if(availableTokens > 1){
                    const price = ethers.utils.formatEther(tokenDetails.tokenPrice.toString());
                    const payAmount = ethers.utils.parseUnits(price.toString(), "ether");

                    const transaction = await contract.buyToken(Number(amount),{
                        value : payAmount.toString(),
                        gasLimit : ethers.utils.hexlify(8000000),

                    });
                    await transaction.wait();
                    setLoader(false);
                    notifySuccess("Token purchased successfully");
                    window.location.reload();
                }

            }
        }catch(error) {
            console.error("Failed to fetch token ICO contract:", error);
            notifyError("Failed to fetch token ICO contract");
            setLoader(false);
        }

};

const TOKEN_WITHDRAW = async() => {
        try{
             setLoader(true);
             const address = await CHECK_WALLET_CONNECTED();
            if(address){
                
                //setAccount(address);
                const contract = await TOKEN_ICO_CONTRACT();
                const tokenDetails = await contract.getTokenDetails();

                const availableTokens = ethers.utils.formatEther(tokenDetails.balance.toString());

                if(availableTokens > 1){
                   

                    const transaction = await contract.withdrawAllTokens();
                    await transaction.wait();
                    setLoader(false);
                    notifySuccess("Token purchased successfully");
                    window.location.reload();
                }

            }
        }catch(error) {
            console.error("Failed to fetch token ICO contract:", error);
            notifyError("Failed to fetch token ICO contract");
        }

};


const UPDATE_TOKEN = async(_address) => {
        try{
             setLoader(true);
             const address = await CHECK_WALLET_CONNECTED();
            if(address){
                
                //setAccount(address);
                const contract = await TOKEN_ICO_CONTRACT();
                

               
                   

                    const transaction = await contract.updateToken(_address);
                    await transaction.wait();
                    setLoader(false);
                    notifySuccess("Token purchased successfully");
                    window.location.reload();
                

            }
        }catch(error) {
            console.error("Failed to fetch token ICO contract:", error);
            notifyError("Failed to fetch token ICO contract");
        }

};

const UPDATE_TOKEN_PRICE = async(AMOUNT) => {
        try{
            setLoader(true);
             const address = await CHECK_WALLET_CONNECTED();
            if(address){
                
                //setAccount(address);
                const contract = await TOKEN_ICO_CONTRACT();
                const payAmount= ethers.utils.parseUnits(AMOUNT.toString(), "ether");

               
                   

                    const transaction = await contract.updateTokenSalePrice(payAmount,{
                        value : payAmount.toString(),
                        gasLimit : ethers.utils.hexlify(8000000),
                    });
                    await transaction.wait();
                    setLoader(false);
                    notifySuccess("Token purchased successfully");
                    window.location.reload();
            }
        }catch(error) {
            console.error("Failed to fetch token ICO contract:", error);
            notifyError("Failed to fetch token ICO contract");
        }

};

const DONATE = async(AMOUNT) => {
        try{
            setLoader(true);
             const address = await CHECK_WALLET_CONNECTED();
            if(address){
                
                //setAccount(address);
                const contract = await TOKEN_ICO_CONTRACT();
                const payAmount= ethers.utils.parseUnits(AMOUNT.toString(), "ether");

               
                   

                    const transaction = await contract.transferToOwner(payAmount,{
                        value : payAmount.toString(),
                        gasLimit : ethers.utils.hexlify(8000000),
                    });
                    await transaction.wait();
                    setLoader(false);
                    notifySuccess("Token purchased successfully");
                    window.location.reload();
            }
        }catch(error) {
            console.error("Failed to fetch token ICO contract:", error);
            notifyError("Failed to fetch token ICO contract");
        }

};

const TRANSFER_ETHER = async(transfer) => {
        try{
            setLoader(true);

            const {_receiver, _amount} = transfer;
             const address = await CHECK_WALLET_CONNECTED();
            if(address){
                
                //setAccount(address);
                const contract = await TOKEN_ICO_CONTRACT();
                const payAmount= ethers.utils.parseUnits(_amount.toString(), "ether");

               
                   

                    const transaction = await contract.transferEther(_receiver,payAmount,{
                        value : payAmount.toString(),
                        gasLimit : ethers.utils.hexlify(8000000),
                    });
                    await transaction.wait();
                    setLoader(false);
                    notifySuccess("Token purchased successfully");
                    window.location.reload();
            }
        }catch(error) {
            console.error("Failed to fetch token ICO contract:", error);
            notifyError("Failed to fetch token ICO contract");
        }

};


const TRANSFER_TOKEN = async(transfer) => {
        try{
            setLoader(true);

            const {_tokenAddress,_sendTo, _amount} = transfer;
             const address = await CHECK_WALLET_CONNECTED();
            if(address){
                
                //setAccount(address);
                const contract = await ERC20_CONTRACT(_tokenAddress);
                const payAmount= ethers.utils.parseUnits(_amount.toString(), "ether");

               
                   

                    const transaction = await contract.transfer(_sendTo,payAmount,{
                       
                        gasLimit : ethers.utils.hexlify(8000000),
                    });
                    await transaction.wait();
                    setLoader(false);
                    notifySuccess("Token purchased successfully");
                    window.location.reload();
            }
        }catch(error) {
            console.error("Failed to fetch token ICO contract:", error);
            notifyError("Failed to fetch token ICO contract");
        }

};

return (
    <TOKEN_ICO_CONTEXT.Provider
    value={{
        
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
        currency,


    }}
    >
    {children}
    </TOKEN_ICO_CONTEXT.Provider>
 );
};