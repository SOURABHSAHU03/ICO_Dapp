import React, { useState, useEffect } from "react";

const TransferCurrency = ({
  setTransferCurrency,
  TRANSFER_ETHER,
  detail,
  CHECK_ACCOUNT_BALANCE,
  currency,
  setLoader,
}) => {
  const [transfer, setTransfer] = useState({
    _amount: "",
    _receiver: "",
  });

  const [receiverBalance, setReceiverBalance] = useState();
  const [address, setAddress] = useState();

  useEffect(() => {
    if (address) {
      const loadBalance = async () => {
        setLoader(true);
        const balance = await CHECK_ACCOUNT_BALANCE(address);
        if (balance === undefined) {
          console.log("Kindly pass the receiver address");
        } else {
          setReceiverBalance(balance);
          console.log("Receiver balance:", balance);
        }
        setLoader(false);
      };
      loadBalance();
    }
  }, [address]);

  return (
    <section className="new-margin ico-contract pos-rel">
      <div className="container">
        <div className="ico-contract__wrap">
          <h2 className="tilte">
            Transfer {currency}
            <strong onClick={() => setTransferCurrency(false)} style={{ cursor: "pointer", marginLeft: "10px" }}>
              X
            </strong>
          </h2>

          <div className="row">
            <div className="col-lg-12">
              {receiverBalance ? (
                <input
                  type="text"
                  readOnly
                  value={`Receiver Balance: ${receiverBalance} ${currency}`}
                />
              ) : (
                <input
                  type="text"
                  placeholder="Receiver Address"
                  onChange={(e) => {
                    const value = e.target.value;
                    setTransfer({ ...transfer, _receiver: value });
                    setAddress(value);
                  }}
                />
              )}
            </div>

            <div className="col-lg-12">
              <input
                type="text"
                placeholder="Amount"
                onChange={(e) =>
                  setTransfer({ ...transfer, _amount: e.target.value })
                }
              />
            </div>

            <p>
              <strong>My Balance:</strong> {detail?.maticBal} {currency}
            </p>

            <div className="ico-contract__bt text-center mt-10">
              <button onClick={() => TRANSFER_ETHER(transfer)} className="thm-btn">
                Transfer Currency
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransferCurrency;
