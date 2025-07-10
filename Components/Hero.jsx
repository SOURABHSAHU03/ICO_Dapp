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
      setLoader(true);
      const address = await CONNECT_WALLET();
      if (address) setAccount(address);
    
  };

  const [percentage, setPercentage] = useState();

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
   setLoader(true);
   const response = await addTokenToMetamask();
   setLoader(false);
   notifySuccess("token added");
  };

   const sectionStyle = {
    minHeight: "100vh",
    width: "100%",
    backgroundColor: "#000",
    color: "#fff",
    padding: "120px 20px 60px",
    position: "relative",
    overflow: "hidden",
    boxSizing: "border-box"
  };

  const backgroundWrapper = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1
  };

  const bgItemStyle = {
    position: "absolute",
    width: "80px",
    height: "80px",
    objectFit: "contain",
    opacity: 0.15
  };

  const contentWrapper = {
    maxWidth: "1200px",
    margin: "0 auto",
    display: "flex",
    flexWrap: "wrap",
    gap: "40px",
    justifyContent: "space-between",
    position: "relative",
    zIndex: 2
  };

  const heading = {
    fontSize: "2.5rem",
    marginBottom: "20px",
    lineHeight: "1.3"
  };

  const btnGroup = {
    display: "flex",
    gap: "20px",
    flexWrap: "wrap",
    marginBottom: "30px"
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

  const progressBarOuter = {
    height: "10px",
    backgroundColor: "#222",
    borderRadius: "5px",
    overflow: "hidden",
    marginTop: "10px"
  };

  const progressBarInner = {
    height: "100%",
    backgroundColor: "#00FF99",
    width: `${percentage}%`,
    transition: "width 0.4s ease"
  };

  const progressLabels = {
    display: "flex",
    justifyContent: "space-between",
    fontSize: "14px",
    marginTop: "8px",
    color: "#aaa"
  };

  const shapes = [
    "assets/img/shape/h_shape.png",
    "assets/img/shape/h_shape2.png",
    "assets/img/shape/h_shape3.png"
  ];

  const coins = [
    "assets/img/icon/coin1.png",
    "assets/img/icon/coin2.png",
    "assets/img/icon/coin3.png",
    "assets/img/icon/coin4.png",
    "assets/img/icon/coin5.png",
    "assets/img/icon/coin6.png"
  ];

//   return (
//     <section className="hero hero__ico pos-rel ">
//       <div className="hero__bg " data-background = "assets/img/bg/hero_bg.png">
//         <div className="container">
//               <div className="row">
//                 <div className="col-lg-7">
//                   <div className="hero__content">
//                     <h1 className="title mt-160"> 
//                               Participate in the <span>On going ICO Token</span>
//                     </h1>
//                     <div className="btns">
//                      {account ? (
//               <button onClick={() => setBuyModel(true)} >PURCHASE TOKENS</button>
//             ) : (
//               <button onClick={connectWallet} >CONNECT WALLET</button>
//             )}
//             <button onClick={ADD_TOKEN_METAMASK} >ADD METAMASK</button>

//                     </div>
//                       <div className="hero__progress mt-50">
//                         <div className="progress-title ul_li_between">
//                           <span>
//                             <span>
//                               Raised- 
//                             </span>
//                             {detail?.soldTokens} Tokens
//                           </span>

//                           <span>
//                             <span>
//                               Total ICO- 
//                             </span>
//                             {detail?.soldTokens + Number(detail?.tokenBal)} {detail?.symbol}
//                           </span>
//                         </div>

//                         <div className="progress">
//                           <div className="progress-bar" role="progressbar" style = {{
//                             width : `${percentage}`
//                           }}/>

                          

//                         </div>
//                         <ul className="ul_li_between">
//                           <li>Pre Sell</li>
//                           <li>Soft Cap</li>
//                           <li>Bonus</li>
//                         </ul>
//                       </div>

//                   </div>
//                   </div> 
//                         <div className="col-lg-5">
//                           <div className="hero__explore-wrap text-center">
//                             <div className="hero__explore tet-center">
//                                 <div className="scroll-down"/>

//                                <span>
//                                 Explore 
//                                </span>


//                             </div >
//                             <div className="hero__countdown">
//                               <h6 className="text-center"> ICO Will Start In .....</h6>
//                             </div>

//                           </div>

//                         </div>
//               </div>
//           </div> 

//       </div>

//       <div className="hero__shape ">
//             <div className="shape shape--1 ">
//               <img src="assets/img/shape/h_shape.png" alt="" /> 

//             </div>
//             <div className="shape shape--2">
//               <img src="assets/img/shape/h_shape.png" alt="" /> 

//             </div>
//             <div className="shape shape--2">
//               <img src="assets/img/shape/s_shape2.png" alt="" /> 

//             </div>
           
           
//       </div>

        // <div className="hero__coin ">
        //     <div className="coin coin--1">
        //       <img src="assets/img/icon/coin1.png" alt="" /> 

        //     </div>
        //     <div className="coin coin--2">
        //       <img src="assets/img/icon/coin2.png" alt="" /> 

        //     </div>
        //     <div className="coin coin--3">
        //       <img src="assets/img/icon/coin3.png" alt="" /> 

        //     </div>
        //   </div>
        //     <div className="hero__coin mt-100">
        //     <div className="coin coin--1">
        //       <img src="assets/img/icon/coin3.png" alt="" /> 

        //     </div>
        //     <div className="coin coin--2">
        //       <img src="assets/img/icon/coin4.png" alt="" /> 

        //     </div>
        //     <div className="coin coin--3">
        //       <img src="assets/img/icon/coin5.png" alt="" /> 

        //     </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;


  return (
    <section style={{ paddingTop: "120px", paddingBottom: "60px", backgroundColor: "#000", color: "#fff", position: "relative",height:"100vh" }}>
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

         <div className="hero__coin  mt-500">
            <div className="coin coin--1">
              <img src="assets/img/icon/coin1.png" alt="" /> 

            </div>
            <div className="coin coin--2">
              <img src="assets/img/icon/coin2.png" alt="" /> 

            </div>
            <div className="coin coin--3">
              <img src="assets/img/icon/coin3.png" alt="" /> 

            </div>
             <div className="coin coin--4">
              <img src="assets/img/icon/coin3.png" alt="" /> 

            </div>
            <div className="coin coin--5">
              <img src="assets/img/icon/coin4.png" alt="" /> 

            </div>
            <div className="coin coin--6">
              <img src="assets/img/icon/coin5.png" alt="" /> 
          </div>
            <div className="hero__coin pos-rel flex">
            <div className="coin coin--1">
              <img src="assets/img/icon/coin3.png" alt="" /> 

            </div>
            <div className="coin coin--2">
              <img src="assets/img/icon/coin4.png" alt="" /> 

            </div>
            <div className="coin coin--3">
              <img src="assets/img/icon/coin5.png" alt="" /> 

            </div>
            </div>
            </div>

      </div>

          {/* <section className="min-h-screen w-full bg-gradient-to-br from-[#0b0d2b] to-[#10133c] p-8">
            <div className="grid grid-cols-3 md:grid-cols-6 gap-6 place-items-center">
            
              <img src="assets/img/shape/h_shape.png" alt="Shape 1" className="w-20 h-20 object-contain" />
              <img src="assets/img/shape/h_shape2.png" alt="Shape 2" className="w-20 h-20 object-contain" />
              <img src="assets/img/shape/h_shape3.png" alt="Shape 3" className="w-20 h-20 object-contain" />

             
              <img src="assets/img/icon/coin1.png" alt="Coin 1" className="w-20 h-20 object-contain" />
              <img src="assets/img/icon/coin2.png" alt="Coin 2" className="w-20 h-20 object-contain" />
              <img src="assets/img/icon/coin3.png" alt="Coin 3" className="w-20 h-20 object-contain" />
              <img src="assets/img/icon/coin4.png" alt="Coin 4" className="w-20 h-20 object-contain" />
              <img src="assets/img/icon/coin5.png" alt="Coin 5" className="w-20 h-20 object-contain" />
              <img src="assets/img/icon/coin6.png" alt="Coin 6" className="w-20 h-20 object-contain" />
            </div>
          </section> */}


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
