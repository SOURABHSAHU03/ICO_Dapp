import React, { useState, useEffect } from "react";

const Header = ({
  account,
  setAccount,
  setLoader,
  setOwnerModel,
  CONNECT_WALLET,
  shortenAddress,
  detail,
  currency,
  ownerModel,
}) => {
  const [isMetaMaskInstalled, setIsMetaMaskInstalled] = useState(false);

  const handleAccountsChanged = (accounts) => {
    setAccount(accounts[0]);
  };

  useEffect(() => {
    if (typeof window.ethereum !== "undefined") {
      setIsMetaMaskInstalled(true);
      window.ethereum.on("accountsChanged", handleAccountsChanged);
    } else {
      setIsMetaMaskInstalled(false);
    }

    return () => {
      if (typeof window.ethereum !== "undefined") {
        window.ethereum.removeListener("accountsChanged", handleAccountsChanged);
      }
    };
  }, []);

 const connectMetaMask = async () => {
  if (typeof window.ethereum !== "undefined" && window.ethereum.isMetaMask) {
    try {
      setLoader(true);
      const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
      if (accounts.length > 0) {
        setAccount(accounts[0]);
        //await CONNECT_WALLET(); // Optional, only if needed
      }
      setLoader(false);
    } catch (error) {
      setLoader(false);
      if (error.code === 4001) {
        alert("Connection rejected by user.");
      } else {
        console.error("Error connecting to MetaMask:", error);
        alert("Failed to connect MetaMask. See console for details.");
      }
    }
  } else {
    alert("MetaMask is not installed. Please install it to continue.");
  }
};


  return (
    <header
      style={{
        background: "rgba(0,0,0,0.85)",
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 1000,
        padding: "20px 40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        color: "#fff",
        borderBottom: "1px solid #1f2937",
      }}
    >
      {/* Logo */}
     <div
  style={{
    display: "flex",
    alignItems: "center",
    paddingLeft: "60px",  // Add left padding to avoid sidebar overlap
    paddingTop: "10px",
    paddingBottom: "10px",
    gap: "20px",           // space between logo and text
    flexWrap: "nowrap",    // prevent wrapping
    backgroundColor: "black", // dark background
    width: "15%",
    boxSizing: "border-box"
  }}
>
  <img
    src="./token.png"
    alt="Logo"
    style={{
      width: "40px",
      height: "40px",
      objectFit: "contain"
    }}
  />
  <span
    style={{
      fontWeight: "bold",
      fontSize: "20px",
      color: "#00FFFF",
      whiteSpace: "nowrap"
    }}
  >
    Crypto Exchange
  </span>
</div>


      {/* Navigation */}
      <nav style={{ flex: 1, marginLeft: "60px" }}>
        <ul
          style={{
            display: "flex",
            listStyle: "none",
            gap: "30px",
            alignItems: "center",
            justifyContent: "center",
            margin: 0,
            padding: 0,
            overflowX: "auto",
          }}
        >
          {["Home", "About", "RoadMap", "Team", "FAQ", "Contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                style={{
                  textDecoration: "none",
                  color: "#d1d5db",
                  fontWeight: 500,
                  fontSize: 14,
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.target.style.color = "#818CF8")}
                onMouseLeave={(e) => (e.target.style.color = "#d1d5db")}
              >
                {item}
              </a>
            </li>
          ))}
          <li>
            <a
              style={{
                cursor: "pointer",
                color: "#f59e0b",
                fontWeight: 600,
              }}
              onClick={() => setOwnerModel(!ownerModel)}
            >
              Tools
            </a>
          </li>
        </ul>
      </nav>

      {/* Connect Wallet */}
      <div>
        {account ? (
          <a
            style={{
              background: "#1e40af",
              padding: "10px 18px",
              borderRadius: "8px",
              fontWeight: "bold",
              color: "#fff",
              cursor: "pointer",
              fontSize: 13,
            }}
            onClick={() => navigator.clipboard.writeText(detail?.address)}
          >
            {shortenAddress(detail?.address)}: {detail?.maticBal?.slice(0, 6)} {currency}
          </a>
        ) : (
          <a
            onClick={connectMetaMask}
            style={{
              background: "#10b981",
              padding: "10px 18px",
              borderRadius: "8px",
              fontWeight: "bold",
              color: "#fff",
              cursor: "pointer",
              fontSize: 13,
            }}
          >
            Connect Wallet
          </a>
        )}
      </div>
    </header>
  );
};

export default Header;
