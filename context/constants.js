import{ethers} from "ethers";
import Web3modal from "web3modal";
import axios from "axios";

import tokenICO from "./TokenICO.json";
import erc20 from "./ERC20.json";


// export const TOKEN_ADDRESS = "0xF6Ccb5E387bD0EA3733449B8D055176D7abd13ee";
// export const ERC20_ABI = erc20.abi;

// export const OWNER_ADDRESS = "0xeD554E91aeb770aFfA6189213e5B69bEFf77440E";

// export const CONTRACT_ADDRESS ="0x3377d040023A0241640F03Bf64AcAa33975Fb68e";
// export const CONTRACT_ABI = tokenICO.abi;

export const TOKEN_ADDRESS = "0xa6f259a56e4dca4706a073f052e8171d3bd12182";
export const ERC20_ABI = erc20.abi;

export const OWNER_ADDRESS = "0xea31e47769f706763B12AFFf8EDe8cFD24cc3414";

export const CONTRACT_ADDRESS ="0xad01964aa20b460fe2c82d3feac694b555eb8189";
// export const CONTRACT_ADDRESS ="0xA6F259a56e4DCA4706A073f052e8171d3Bd12182";
export const CONTRACT_ABI = tokenICO.abi;

const networks = {
  sepolia: {
    chainId: `0x${Number(11155111).toString(16)}`,
    chainName: "Sepolia",
    nativeCurrency: {
      name: "SepoliaETH",
      symbol: "SepoliaETH",
      decimals: 18,
    },
    rpcUrls: ["https://sepolia.infura.io/v3/"],
    blockExplorerUrls: ["https://sepolia.etherscan.io"],
  },
  holesky: {
    chainId: `0x${Number(17000).toString(16)}`,
    chainName: "Holesky",
    nativeCurrency: {
      name: "holesky",
      symbol: "ETH",
      decimals: 18,
    },
    rpcUrls: ["https://rpc.ankr.com/eth_holesky"],
    blockExplorerUrls: ["https://holesky.etherscan.io/"],
  },
  polygon_amoy: {
    chainId: `0x${Number(80002).toString(16)}`,
    chainName: "Polygon Amoy",
    nativeCurrency: {
      name: "MATIC",
      symbol: "MATIC",
      decimals: 18,
    },
    rpcUrls: ["https://rpc-amoy.polygon.technology/"],
    blockExplorerUrls: ["https://www.oklink.com/amoy"],
  },
  polygon_mumbai: {
    chainId: `0x${Number(80001).toString(16)}`,
    chainName: "Polygon Mumbai",
    nativeCurrency: {
      name: "MATIC",
      symbol: "MATIC",
      decimals: 18,
    },
    rpcUrls: ["https://rpc.ankr.com/polygon_mumbai"],
    blockExplorerUrls: ["https://mumbai.polygonscan.com/"],
  },
  polygon: {
    chainId: `0x${Number(137).toString(16)}`,
    chainName: "Polygon Mainnet",
    nativeCurrency: {
      name: "MATIC",
      symbol: "MATIC",
      decimals: 18,
    },
    rpcUrls: ["https://rpc.ankr.com/polygon"],
    blockExplorerUrls: ["https://polygonscan.com/"],
  },
  bsc: {
    chainId: `0x${Number(56).toString(16)}`,
    chainName: "Binance Smart Chain Mainnet",
    nativeCurrency: {
      name: "Binance Chain Native Token",
      symbol: "BNB",
      decimals: 18,
    },
    rpcUrls: ["https://rpc.ankr.com/bsc"],
    blockExplorerUrls: ["https://bscscan.com"],
  },
  base_mainnet: {
    chainId: `0x${Number(8453).toString(16)}`,
    chainName: "Base Mainnet",
    nativeCurrency: {
      name: "ETH",
      symbol: "ETH",
      decimals: 18,
    },
    rpcUrls: ["https://mainnet.base.org/"],
    blockExplorerUrls: ["https://bscscan.com"],
  },
  base_sepolia: {
    chainId: `0x${Number(84532).toString(16)}`,
    chainName: "Base Sepolia",
    nativeCurrency: {
      name: "ETH",
      symbol: "ETH",
      decimals: 18,
    },
    rpcUrls: ["https://sepolia.base.org"],
    blockExplorerUrls: ["https://bscscan.com"],
  },
  localhost: {
    chainId: `0x${Number(31337).toString(16)}`,
    chainName: "localhost",
    nativeCurrency: {
      name: "GO",
      symbol: "GO",
      decimals: 18,
    },
    rpcUrls: ["http://127.0.0.1:8545/"],
    blockExplorerUrls: ["https://bscscan.com"],
  },
};

const tokenImage =
      "https://www.daulathussain.com/wp-content/uploads/2024/05/theblockchaincoders.jpg";


const changeNetwork = async ({networkName}) => {
  try {
    if(!window.ethereum) {
      throw new Error("MetaMask is not installed");
    }
    await window.ethereum.request({
      method : "wallet_addEthereumChain",
      params: [
        {
          ...networks[networkName],
        }
      ]
    });
  }catch(error) {
    console.error("Failed to change network:", error);
    throw error;
  }
};

export const handleNetworkSwitch = async() =>{
    const networkName = "holesky";
    await changeNetwork({networkName});
};

export const CHECK_WALLET_CONNECTED = async() => {
  if(!window.ethereum) {
    throw new Error("MetaMask is not installed");
  }
  await handleNetworkSwitch();
  const accounts = await window.ethereum.request({
    method: "eth_accounts",
  });

  if(accounts.length) {
    return accounts[0];
  }else{
    console.log("No accounts found");
  }

};


export const CONNECT_WALLET = async() => {
  try{

        if(!window.ethereum) {
        throw new Error("MetaMask is not installed");
      }
      await handleNetworkSwitch();
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      window.location.reload();
      
        return accounts[0];
     

  }catch(error) {
    console.error("Failed to connect wallet:", error);
    throw error;
  } 
};

const fetchContract = (address ,abi, signer) =>
  new ethers.Contract(address, abi, signer);

export const TOKEN_ICO_CONTRACT = async () => {
  try {
    const web3modal = new Web3modal();
    const connection = await web3modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();

    const contract = fetchContract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);
    return contract;
  } catch (error) {
    console.error("Failed to connect TOKEN_ICO_CONTRACT:", error);
    throw error;
  }
};

export const ERC20 = async(ADDRESS) => {
  try{

    const web3modal = new Web3modal();
    const connection = await web3modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const network = await provider.getNetwork();
    const signer = await provider.getSigner();
    const userAddress = await signer.getAddress();
     const contract = new ethers.Contract(ADDRESS, ERC20_ABI, signer);
    const balance = await contract.balanceOf(userAddress);

    const name = await contract.name();
    const symbol = await contract.symbol();
    const decimals = await contract.decimals();
    const totalSupply = await contract.totalSupply();
    const address = await contract.address;

    const token = {
      address : address,
      name: name,
      symbol: symbol,
      decimals: decimals,
      supply : ethers.utils.formatUnits(totalSupply.toString(), decimals),
      balance: ethers.utils.formatUnits(balance.toString(), decimals),
      chainId : network.chainId,
    }
     console.log("token",token);
    return token;

  }catch(error) {
    console.error("Failed to connect wallet:", error);
    throw error;
  } 
};


export const ERC20_CONTRACT = async() => {
try{

    const web3modal = new Web3modal();
    const connection = await web3modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();
    const contract = fetchContract(CONTRACT_ADDRESS,ERC20_ABI, signer);
     
    return contract;

  }catch(error) {
    console.error("Failed to connect wallet:", error);
    throw error;
  } 
};

export const GET_BALANCE = async(address) => {
    try{

    const web3modal = new Web3modal();
    const connection = await web3modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();
    
    const maticBal = await provider.getBalance(address);
    return ethers.utils.formatEther(maticBal.toString());

  }catch(error) {
    console.error("Failed to connect wallet:", error);
    throw error;
  } 
};

export const CHECK_ACCOUNT_BALANCE = async(ADDRESS) => {
    try{

    const web3modal = new Web3modal();
    const connection = await web3modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();
    
    const maticBal = await signer.getBalance(ADDRESS);
    return ethers.utils.formatEther(maticBal.toString());

  }catch(error) {
    console.error("Failed to connect wallet:", error);
    throw error;
  } 
};


export const addTokenToMetamask = async() => {
  if(window.ethereum) {
    const tokenDetails = await ERC20(TOKEN_ADDRESS);
    const tokenDecimals = tokenDetails?.decimals;
    const tokenAddress = TOKEN_ADDRESS;
    const tokenSymbol = tokenDetails?.symbol;
    const tokenImag = await tokenImage;

    try {

      const wasAdded = await window.ethereum.request({
        method: 'wallet_watchAsset',
        params: {
          type: 'ERC20',
          options: {
            address: tokenAddress,
            symbol: tokenSymbol,
            decimals: tokenDecimals,
            image: tokenImag,
          },
        },
      });
      if(wasAdded) {
        console.log("Token added successfully");
        
      }else {
        console.log("Token not added");
      }
    }catch(error) {
      console.error("Failed to add token to MetaMask:", error);
      throw error;
    }

  }
  else {
    console.error("MetaMask is not installed");
    throw new Error("MetaMask is not installed");
  }
};



// TRANSFER_ETHER function
export const TRANSFER_ETHER = async (transfer) => {
  const { _receiver, _amount } = transfer;

  try {
    if (!window.ethereum) {
      throw new Error("MetaMask is not installed");
    }

    if (!ethers.utils.isAddress(_receiver)) {
      throw new Error("Invalid Ethereum address");
    }

    const amountInEth = _amount.toString().trim();

    if (!amountInEth || isNaN(amountInEth) || Number(amountInEth) <= 0) {
      throw new Error("Invalid ETH amount");
    }

    const amountInWei = ethers.utils.parseEther(amountInEth); // 🔐 SAFE

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, contractABI, signer);

    const tx = await contract.transferEther(_receiver, amountInWei);
    await tx.wait();

    return "Ether transfer successful ✅";
  } catch (error) {
    console.error("TRANSFER_ETHER error:", error);
    throw new Error(error?.reason || error?.message || "Ether transfer failed ❌");
  }
};






// // utils.js
// import { ethers } from "ethers";
// import Web3Modal from "web3modal";

// import tokenICO from "./TokenICO.json";
// import erc20 from "./ERC20.json";

// export const TOKEN_ADDRESS = "0xF6Ccb5E387bD0EA3733449B8D055176D7abd13ee";
// export const CONTRACT_ADDRESS = "0x3377d040023A0241640F03Bf64AcAa33975Fb68e";
// export const OWNER_ADDRESS = "0xeD554E91aeb770aFfA6189213e5B69bEFf77440E";

// export const CONTRACT_ABI = tokenICO.abi;
// export const ERC20_ABI = erc20.abi;

// const networks = {
//   holesky: {
//     chainId: `0x${Number(17000).toString(16)}`,
//     chainName: "Holesky",
//     nativeCurrency: {
//       name: "ETH",
//       symbol: "ETH",
//       decimals: 18,
//     },
//     rpcUrls: ["https://rpc.ankr.com/eth_holesky"],
//     blockExplorerUrls: ["https://holesky.etherscan.io"],
//   },
// };

// const tokenImage =
//   "https://www.daulathussain.com/wp-content/uploads/2024/05/theblockchaincoders.jpg";

// // NETWORK SWITCHING
// export const changeNetwork = async ({ networkName }) => {
//   try {
//     if (!window.ethereum) throw new Error("MetaMask not installed");

//     await window.ethereum.request({
//       method: "wallet_addEthereumChain",
//       params: [networks[networkName]],
//     });
//   } catch (error) {
//     console.error("Network change error:", error);
//     throw error;
//   }
// };

// export const handleNetworkSwitch = async () => {
//   await changeNetwork({ networkName: "holesky" });
// };

// // WALLET CONNECTIONS
// export const CHECK_WALLET_CONNECTED = async () => {
//   if (!window.ethereum) throw new Error("MetaMask not installed");
//   await handleNetworkSwitch();
//   const accounts = await window.ethereum.request({ method: "eth_accounts" });
//   return accounts.length ? accounts[0] : null;
// };

// export const CONNECT_WALLET = async () => {
//   if (!window.ethereum) throw new Error("MetaMask not installed");
//   await handleNetworkSwitch();
//   const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
//   window.location.reload();
//   return accounts[0];
// };

// // FETCH CONTRACT
// const fetchContract = (address, abi, signer) =>
//   new ethers.Contract(address, abi, signer);

// // TOKEN ICO CONTRACT
// export const TOKEN_ICO_CONTRACT = async () => {
//   try {
//     const web3modal = new Web3Modal();
//     const connection = await web3modal.connect();
//     const provider = new ethers.providers.Web3Provider(connection);
//     const signer = provider.getSigner();
//     return fetchContract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);
//   } catch (error) {
//     console.error("Failed to fetch TOKEN ICO contract:", error);
//     throw error;
//   }
// };

// // ERC20 CONTRACT (by token address)
// export const ERC20_CONTRACT = async (ADDRESS = TOKEN_ADDRESS) => {
//   try {
//     const web3modal = new Web3Modal();
//     const connection = await web3modal.connect();
//     const provider = new ethers.providers.Web3Provider(connection);
//     const signer = provider.getSigner();
//     return fetchContract(ADDRESS, ERC20_ABI, signer);
//   } catch (error) {
//     console.error("Failed to fetch ERC20 contract:", error);
//     throw error;
//   }
// };

// // GET TOKEN INFO
// export const ERC20 = async (ADDRESS = TOKEN_ADDRESS) => {
//   try {
//     const contract = await ERC20_CONTRACT(ADDRESS);
//     const provider = contract.provider;
//     const signer = provider.getSigner();
//     const userAddress = await signer.getAddress();
//     const balance = await contract.balanceOf(userAddress);
//     const name = await contract.name();
//     const symbol = await contract.symbol();
//     const decimals = await contract.decimals();
//     const supply = await contract.totalSupply();
//     const network = await provider.getNetwork();

//     return {
//       address: ADDRESS,
//       name,
//       symbol,
//       decimals,
//       supply: ethers.utils.formatUnits(supply, decimals),
//       balance: ethers.utils.formatUnits(balance, decimals),
//       chainId: network.chainId,
//     };
//   } catch (error) {
//     console.error("Failed to fetch ERC20 token info:", error);
//     throw error;
//   }
// };

// // BALANCE
// export const GET_BALANCE = async () => {
//   const web3modal = new Web3Modal();
//   const connection = await web3modal.connect();
//   const provider = new ethers.providers.Web3Provider(connection);
//   const signer = provider.getSigner();
//   const maticBal = await signer.getBalance();
//   return ethers.utils.formatEther(maticBal);
// };

// // ADD TOKEN TO METAMASK
// export const addTokenToMetamask = async () => {
//   if (!window.ethereum) {
//     throw new Error("MetaMask not installed");
//   }

//   const tokenDetails = await ERC20(TOKEN_ADDRESS);

//   const wasAdded = await window.ethereum.request({
//     method: "wallet_watchAsset",
//     params: {
//       type: "ERC20",
//       options: {
//         address: TOKEN_ADDRESS,
//         symbol: tokenDetails.symbol,
//         decimals: tokenDetails.decimals,
//         image: tokenImage,
//       },
//     },
//   });

//   if (wasAdded) {
//     console.log("Token added to MetaMask");
//   } else {
//     console.log("Token not added");
//   }
// };

