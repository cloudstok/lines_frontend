import React, { useState, useEffect, useContext } from "react";
import { formatBalance } from "../utility/helper";

const BalanceWinAmount = ({ info, resultData, statusData }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [showWinAmount, setShowWinAmount] = useState(false);

  useEffect(() => {
    if (statusData && resultData?.winAmount) {
      const delayTimer = setTimeout(() => {
        setShowPopup(true);
        setShowWinAmount(true); // Show win amount at the same time

        const hideTimer = setTimeout(() => {
          setShowPopup(false);
          setShowWinAmount(false); // Hide win amount when pop-up disappears
        }, 2000);

        return () => clearTimeout(hideTimer);
      }, 500); // Delay pop-up and win amount by 2 seconds

      return () => clearTimeout(delayTimer);
    } else {
      setShowPopup(false);
      setShowWinAmount(false);
    }
  }, [statusData, resultData]);

  return (
    <div style={{ height: "" }}>
      {showPopup && (
        <div className="win-amount-section">
          Win Amount: {resultData?.winAmount}
        </div>
      )}

      <div className="blance-info-container">
        <div className="balance-info">
          <div className="">
            <p
              className=""
              style={{
                fontSize: "10px",
                color: "#e9ecef",
                textAlign: "center",
                height: "10px",
              }}
            >
              BALANCE:
            </p>
            <p
              style={{
                fontSize: "14px",
                fontWeight: 600,
                color: "#fff",
                marginTop: "6px",
              }}
            >
              {`${formatBalance(info.balance)}`}
            </p>
          </div>
        </div>
        <div className="balance-info">
          <div>
            <p
              style={{
                fontSize: "10px",
                color: "#e9ecef",
                textAlign: "center",
                height: "10px",
              }}
            >
              WIN
            </p>
            {showWinAmount && ( // Show win amount only when showWinAmount is true
              <p
                style={{
                  fontSize: "14px",
                  fontWeight: 600,
                  color: "#fff",
                  marginTop: "6px",
                  height: "10px",
                }}
              >
                {resultData?.winAmount}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BalanceWinAmount;
