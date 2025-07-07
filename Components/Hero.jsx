import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const Hero = ({
  setBuyModel,
  account,
  CONNECT_WALLET,
  setAccount,
  setLoader,
  detail,
  addTokenToMetamask,
}) => {
  const notifySuccess = (message) => toast.success(message, {
    duration: 3000,
    style: { background: "#111", color: "#0f0" }
  });

  const notifyError = (message) => toast.error(message, {
    duration: 3000,
    style: { background: "#111", color: "#f33" }
  });

  const connectWallet = async () => {
    try {
      setLoader(true);
      const address = await CONNECT_WALLET();
      if (address) setAccount(address);
      else notifyError("Wallet connection failed.");
    } catch (error) {
      notifyError("MetaMask connection error.");
    } finally {
      setLoader(false);
    }
  };

  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const calculatePercentage = () => {
      const sold = Number(detail?.soldTokens || 0);
      const bal = Number(detail?.tokenBal || 0);
      const total = sold + bal;
      if (total === 0) return setPercentage(0);
      setPercentage(((sold / total) * 100).toFixed(2));
    };

    calculatePercentage();
    const interval = setInterval(calculatePercentage, 2000);
    return () => clearInterval(interval);
  }, [detail]);

  const ADD_TOKEN_METAMASK = async () => {
    try {
      setLoader(true);
      const success = await addTokenToMetamask();
      success ? notifySuccess("Token added to MetaMask") : notifyError("Failed to add token");
    } catch {
      notifyError("Error adding token");
    } finally {
      setLoader(false);
    }
  };

  return (
    <section style={{ paddingTop: "120px", paddingBottom: "60px", backgroundColor: "#000", color: "#fff", position: "relative" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px", display: "flex", flexWrap: "wrap", gap: "40px", justifyContent: "space-between" }}>
        <div style={{ flex: "1 1 600px" }}>
          <h1 style={{ fontSize: "2.5rem", marginBottom: "20px", lineHeight: "1.3" }}>
            Participate in the <span style={{ color: "#38bdf8" }}>Ongoing ICO Token</span>
          </h1>

          <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", marginBottom: "30px" }}>
            {account ? (
              <button onClick={() => setBuyModel(true)} style={btnPrimary}>PURCHASE TOKENS</button>
            ) : (
              <button onClick={connectWallet} style={btnPrimary}>CONNECT WALLET</button>
            )}
            <button onClick={ADD_TOKEN_METAMASK} style={btnSecondary}>ADD METAMASK</button>
          </div>

          <div>
            <p><strong>Raised:</strong> {detail?.soldTokens || 0} Tokens</p>
            <p><strong>Total ICO:</strong> {(Number(detail?.soldTokens || 0) + Number(detail?.tokenBal || 0)).toFixed(2)} {detail?.symbol || ""}</p>

            <div style={{ height: "10px", backgroundColor: "#222", borderRadius: "5px", overflow: "hidden", marginTop: "10px" }}>
              <div style={{
                width: `${percentage}%`,
                height: "100%",
                backgroundColor: "#00FF99",
                transition: "width 0.4s ease"
              }}></div>
            </div>

            <ul style={{ display: "flex", justifyContent: "space-between", fontSize: "14px", marginTop: "8px", color: "#aaa" }}>
              <li>Pre Sell</li>
              <li>Soft Cap</li>
              <li>Bonus</li>
              <li>Sell</li>
            </ul>
          </div>
        </div>

        <div style={{ flex: "1 1 400px", textAlign: "center" }}>
          <div style={{ marginBottom: "20px" }}>
            <div className="scroll-down" />
            <span style={{ color: "#38bdf8" }}>Explore Causes</span>
          </div>
          <h6 style={{ color: "#ccc", fontWeight: 400, fontSize: "1rem" }}>ICO Will Start In...</h6>
        </div>
      </div>

      {/* Background Graphics (Optional) */}
      <div className="hero_shape">
        <div className="shape shape--1">
          <img src="assets/img/shape/h_shape.png" alt="" />
        </div>
        <div className="shape shape--2">
          <img src="assets/img/shape/h_shape2.png" alt="" />
        </div>
        <div className="shape shape--3">
          <img src="assets/img/shape/h_shape3.png" alt="" />
        </div>
      </div>

      <div className="hero_coin">
        <div className="icon icon--1">
          <img src="assets/img/icon/coin1.png" alt="" />
        </div>
        <div className="icon icon--2">
          <img src="assets/img/icon/coin2.png" alt="" />
        </div>
        <div className="icon icon--3">
          <img src="assets/img/icon/coin3.png" alt="" />
        </div>
      </div>
    </section>
  );
};

const btnPrimary = {
  padding: "10px 20px",
  border: "none",
  borderRadius: "6px",
  backgroundColor: "#FF4500",
  color: "#fff",
  fontWeight: "600",
  cursor: "pointer",
  fontSize: "15px"
};

const btnSecondary = {
  ...btnPrimary,
  backgroundColor: "#1E90FF"
};

export default Hero;
