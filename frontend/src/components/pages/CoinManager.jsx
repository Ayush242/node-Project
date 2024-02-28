import React, { useState } from "react";
import PropTypes from "prop-types";
export const CoinsContext = React.createContext();
function CoinManager({ children }) {
  const updateCoinsInLocalStorage = (newBalance) => {
    const coinsVal = { currentBalance: newBalance };
    localStorage.setItem("balance", JSON.stringify(coinsVal));
  };

  const coinsVal = {
    currentBalance:
      JSON.parse(localStorage.getItem("balance")).currentBalance || 1000,
  };
  localStorage.setItem("balance", JSON.stringify(coinsVal));

  //variable to fetch the values from localstorage
  const temp = JSON.parse(localStorage.getItem("balance"));

  const [coinState, setCoinState] = useState(temp.currentBalance);

  const decreaseCoins = (amount) => {
    setCoinState((prevCoins) => Math.max(0, prevCoins - amount));
    updateCoinsInLocalStorage(coinState);
  };

  const increaseCoins = (amount) => {
    setCoinState((prevCoins) => prevCoins + amount);
    updateCoinsInLocalStorage(coinState);
  };

  return (
    <CoinsContext.Provider value={{ coinState, decreaseCoins, increaseCoins }}>
      {children}
    </CoinsContext.Provider>
  );
}

CoinManager.propTypes = {
  children: PropTypes.element.isRequired,
};
export default CoinManager;
