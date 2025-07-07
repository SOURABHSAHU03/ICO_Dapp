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
    if (typeof window.ethereum !== "undefined") {
      try {
        const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
        setAccount(accounts[0]);
        setLoader(true);
        await CONNECT_WALLET();
        setLoader(false);
      } catch (error) {
        console.error("Error connecting to MetaMask:", error);
        setLoader(false);
      }
    } else {
      alert("MetaMask not installed");
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
      <div style={{ display: "flex", alignItems: "center" }}>
        <img src="./token.png" alt="Logo" style={{ width: 40, marginRight: 12 }} />
        <span style={{ fontWeight: "bold", fontSize: 18, color: "#fff" }}>Crypto Exchange</span>
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
