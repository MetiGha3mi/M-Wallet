"use strict";

/* -------------M Wallet data------------- */
// First account //
const account1 = {
  ownerName: "Meti Ghasemi",
  username: "MetiGhasemi",
  password: 1111,
  movements: [1000, 320, 433, -200, -122, 200, -1000, 200],
  creditNumber: "6037991779353048",
  totalBalance: 0,
  coinWallet: {
    bitcoin: {
      amount: 32,
      address: "MeTIGha3m1B1Tc0inWallet@ress",
    },
    ethereum: {
      amount: 44,
      address: "MeTIGha3m1EthereumWallet@ress",
    },
    tether: {
      amount: 234,
      address: "MeTIGha3m1TetherWallet@ress",
    },
    binance: {
      amount: 0,
      address: "MeTIGha3m1R1B1nanceWallet@ress",
    },
    ripple: {
      amount: 2,
      address: "MeTIGha3m1R1R1ppleWallet@ress",
    },
    cardano: {
      amount: 0,
      address: "MeTIGha3m1Cardan0Wallet@ress",
    },
    dogecoin: {
      amount: 0,
      address: "MeTIGha3m1D0gec01nWallet@ress",
    },
    litecoin: {
      amount: 6,
      address: "MeTIGha3m1L1ghtc01nWallet@ress",
    },
    tron: {
      amount: 0,
      address: "MeTIGha3m1Tr0nWallet@ress",
    },
  },
};

// Second account //
const account2 = {
  ownerName: "Jhon Smith",
  username: "JhonSmith",
  password: 2222,
  movements: [3000, -400, 1000, -2000, -100, 233, 321],
  creditNumber: "5527441160301045",
  totalBalance: 0,
  coinWallet: {
    bitcoin: {
      amount: 12,
      address: "JhonSm1thB1Tc0inWallet@ress",
    },
    ethereum: {
      amount: 44,
      address: "JhonSm1thEthereumWallet@ress",
    },
    tether: {
      amount: 234,
      address: "JhonSm1thTetherWallet@ress",
    },
    binance: {
      amount: 0,
      address: "JhonSm1thR1B1nanceWallet@ress",
    },
    ripple: {
      amount: 2,
      address: "JhonSm1thR1R1ppleWallet@ress",
    },
    cardano: {
      amount: 0,
      address: "JhonSm1thCardan0Wallet@ress",
    },
    dogecoin: {
      amount: 0,
      address: "JhonSm1thD0gec01nWallet@ress",
    },
    litecoin: {
      amount: 6,
      address: "JhonSm1thL1ghtc01nWallet@ress",
    },
    tron: {
      amount: 0,
      address: "JhonSm1thTr0nWallet@ress",
    },
  },
};

// accounts //
const accounts = [account1, account2];

// CC Array //
const cryptoCurrenciesArr = [
  "bitcoin",
  "ethereum",
  "tether",
  "binance",
  "ripple",
  "cardano",
  "dogecoin",
  "litecoin",
  "tron",
];

// Crypto info//
const cryptoCurrenciesObj = {
  bitcoin: {
    coinName: "Bitcoin",
    abbrName: "btc",
    rank: "1#",
    icon: "coins/btc.png",
    price: "23,013.0",
    precent: "↓ 0.47%",
    exchangements: {
      oneUSDorUSDT: 0.000043,
      oneEthereum: 0.069,
      oneBinance: 0.013,
      oneRipple: 0.000016,
      oneCardano: 0.000016,
      oneDogecoin: 0.0000035,
      oneLitecoin: 0.004,
      oneTron: 0.0000029,
    },
  },
  ethereum: {
    coinName: "Ethereum",
    abbrName: "eth",
    rank: "2#",
    icon: "coins/eth.png",
    price: "1,578.89",
    precent: "↓ 0.61%",
    exchangements: {
      oneUSDorUSDT: 0.00063,
      oneBitcoin: 14.47,
      oneBinance: 0.19,
      oneRipple: 0.00024,
      oneCardano: 0.00023,
      oneDogecoin: 0.000051,
      oneLitecoin: 0.058,
      oneTron: 0.000042,
    },
  },
  tether: {
    coinName: "Tether",
    abbrName: "usdt",
    rank: "3#",
    icon: "coins/usdt.png",
    price: "1.0",
    precent: "↑ 0.00%",
    exchangements: {
      oneBitcoin: 23_013.0,
      oneEthereum: 1_578.89,
      oneBinance: 308.87,
      oneRipple: 0.3991,
      oneCardano: 0.3758,
      oneDogecoin: 0.08985,
      oneLitecoin: 94.44,
      oneTron: 0.06201,
    },
  },
  binance: {
    coinName: "Binance",
    abbrName: "bnb",
    rank: "4#",
    icon: "coins/bnb.png",
    price: "308.87",
    precent: "↓ 1.28%",
    exchangements: {
      oneUSDorUSDT: 0.0032,
      bitcoin: 77.17,
      oneEthereum: 5.32,
      oneRipple: 0.0013,
      oneCardano: 0.0013,
      oneDogecoin: 0.00027,
      oneLitecoin: 0.31,
      oneTron: 0.00023,
    },
  },
  ripple: {
    coinName: "Ripple",
    abbrName: "xrp",
    rank: "5#",
    icon: "coins/xrp.png",
    price: "0.3991",
    precent: "↓ 0.99%",
    exchangements: {
      oneUSDorUSDT: 2.5,
      bitcoin: 61_175.5,
      oneEthereum: 4_215.71,
      oneBinance: 791.22,
      oneCardano: 0.99,
      oneDogecoin: 0.22,
      oneLitecoin: 242.56,
      oneTron: 0.18,
    },
  },
  cardano: {
    coinName: "Cardano",
    abbrName: "ada",
    rank: "6#",
    icon: "coins/ada.png",
    price: "0.3758",
    precent: "↓ 4.21%",
    exchangements: {
      oneUSDorUSDT: 2.66,
      bitcoin: 62_066.42,
      oneEthereum: 4_273.47,
      oneBinance: 799.31,
      oneRipple: 1.01,
      oneDogecoin: 0.22,
      oneLitecoin: 245.8,
      oneTron: 0.18,
    },
  },
  dogecoin: {
    coinName: "Dogecoin",
    abbrName: "doge",
    rank: "7#",
    icon: "coins/doge.png",
    price: "0.08985",
    precent: "↓ 3.42%",
    exchangements: {
      oneUSDorUSDT: 11.12,
      bitcoin: 284_415.59,
      oneEthereum: 19_430.96,
      oneBinance: 3_645.7,
      oneRipple: 4.61,
      oneCardano: 4.57,
      oneLitecoin: 1_119.39,
      oneTron: 0.82,
    },
  },
  litecoin: {
    coinName: "Litecoin",
    abbrName: "ltc",
    rank: "8#",
    icon: "coins/ltc.png",
    price: "94.44",
    precent: "↓ 0.16%",
    exchangements: {
      oneUSDorUSDT: 0.01,
      bitcoin: 252.57,
      oneEthereum: 17.38,
      oneBinance: 3.26,
      oneRipple: 0.0041,
      oneCardano: 0.0041,
      oneDogecoin: 0.00089,
      oneTron: 0.00073,
    },
  },
  tron: {
    coinName: "Tron",
    abbrName: "trx",
    rank: "9#",
    icon: "coins/trx.png",
    price: "0.06201",
    precent: "↓ 0.86%",
    exchangements: {
      oneUSDorUSDT: 16.12,
      bitcoin: 348_526.92,
      oneEthereum: 24_003.77,
      oneBinance: 4_469.62,
      oneRipple: 5.64,
      oneCardano: 5.6,
      oneDogecoin: 1.23,
      oneLitecoin: 1_377.95,
    },
  },
};
/* -------------Application state------------- */
let currentAccount, nextAccount;
let sorted = false;
let coinObj;
let coinWallet;
let selectedCoin;
let walletAddress;
let currencyToBuy = "USDT";
let coinListItem;
let doOnce = true;
/* -------------App DOM Elements------------- */
// App Sections
const loginSection = document.querySelector(".login-section");
const appContainer = document.querySelector(".app-container");
// App Lists
const movemetsList = document.querySelector(".movements-list");
// App BTNs
const btnAppInfo = document.querySelector(".app-info-icon");
const btnCloseAppInfo = document.querySelector(".close-app-info");
const btnLoginSubmit = document.querySelector(".btn-login-submit");
const btnBack = document.querySelector(".app-brand-name");
const btnAppMainInfo = document.querySelector(".app-maininfo-icon");
const btnInformationClose = document.querySelector(".btn-information-close");
const btnEffectBalance = document.querySelector(".btn-effect-balance");
const btnCloseBalanceEffect = document.querySelector(".close-balance-effect");
const btnExchangeMode = document.querySelector(".exchange-mode");
const btnSubmitExchange = document.querySelector(".btn-submit-exchange");
const btnSort = document.querySelector(".btn-sort");
const btnCCItems = document.querySelectorAll(".cc-item");
const btnCCBack = document.querySelector(".btn-cc-back");
const btnAddressWallet = document.querySelector(".recieve-address-value");
const btnCCeBsMode = document.querySelector(".cce-bs-mode");
const btnCCebsWithSelect = document.querySelector(".ccebs-with-select");
const btnCCeBsSubmit = document.querySelector(".cce-btnbs-submit");
const btnUSDSide = document.querySelector(".usd-side");
const btnUSDTSide = document.querySelector(".usdt-side");
const btnCCeexToSelect = document.querySelector(".cceex-to-select");
const btnSubmitCryptoExchange = document.querySelector(
  ".cce-btnexchange-submit"
);
const btnSendSubmit = document.querySelector(".cce-btnsend-submit");
const btnCCeexCoinItem = [...document.querySelectorAll(".cceex-coin-item")];
// App Covers
const shadowCover = document.querySelector(".shadow-cover");
const shadowCoverMainInfo = document.querySelector(".shadow-cover-maininfo");
const effectBalanceCover = document.querySelector(".effect-balance-cover");
const ccCover = document.querySelector(".cc-cover");
// App Inputs
const inputLoginUsername = document.querySelector(".login-username-input");
const inputLoginPassword = document.querySelector(".login-password-input");
const inputAmountValue = document.querySelector(".amount-value-input");
const inputPinValue = document.querySelector(".pin-value-input");
const inputAmountBuySell = document.querySelector(".ccebs-amount-input");
const inputCCBuySellResult = document.querySelector(".ccebs-res-input");
const inputAmountCryptoExchange = document.querySelector(".cceex-amount-input");
const inputSendAmount = document.querySelector(".ccesn-sendamount-input");
const inputSendAddress = document.querySelector(".ccesn-address-input");
// App Messages
const warningLogin = document.querySelector(".warning-login");
const welcomeMessage = document.querySelector(".welcome-message");
const warningBalance = document.querySelector(".warning-balance");
const coinAbbrName = document.querySelector(".abbr-coin-name");
const coinRankLevel = document.querySelector(".rank-level");
const coinNameHeading = document.querySelector(".coin-name-heading");
const recieveAddressValue = document.querySelector(".recieve-address-value");
const cceexFromcoinLabel = document.querySelector(".cceex-fromcoin-label");
const ccebsResLabel = document.querySelector(".ccebs-res-label");
const ccebsWithLabel = document.querySelector(".ccebs-with-label");
const cceexMessageCoinfromname = document.querySelector(
  ".cceex-message-coinfromname"
);
const cceexTocoinLabel = document.querySelector(".cceex-tocoin-label");
const ccBuySellWarning = document.querySelector(".cce-bs-warning");
const ccExchangeWarning = document.querySelector(".cce-ex-warning");
const cceexMessageToCoinName = document.querySelector(
  ".cceex-message-cointoname"
);
const ccSendWarning = document.querySelector(".cce-sn-warning");
const copyrightDate = document.querySelector(".copyright-date");
// App amounts
const balanceAmount = document.querySelector(".balance-amount");
const accNum = document.querySelector(".acc-num");
const coinAmount = document.querySelectorAll(".coin-amount");
const ccPriceValue = document.querySelector(".cc-price-value");
const ccPrecentValue = document.querySelector(".cc-precent-value");
// App icons
const ccEIcon = document.querySelector(".cc-e-icon");
const cceexFromIcon = document.querySelector(".cceex-from-icon");
const cceexToIcon = document.querySelector(".cceex-to-icon");

/* -------------App Functionalities------------- */
// Displaying account movements
const displayMovements = function (acc, sort = false) {
  movemetsList.innerHTML = "";
  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;

  movs.forEach((mov, i) => {
    const type = mov > 0 ? "deposit" : "withdrawal";
    const html = `
    <li class="movements-item">
      <div class="movements-type movements-type-${type}">
        ${i + 1} ${type}
      </div>
      <div class="movements-value">${mov.toFixed(2)}$</div>
    </li>
    `;
    movemetsList.insertAdjacentHTML("afterbegin", html);
  });
};
// Displaying account totol balance
const displayAccountBalance = function (acc) {
  acc.totalBalance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  balanceAmount.textContent = `${acc.totalBalance.toFixed(2)}$`;
};
// Display account filltered credit number
const displayCreditNumber = function (acc) {
  const hiddenCredit = acc.creditNumber
    .slice(-4)
    .padStart(acc.creditNumber.length, "*");
  accNum.textContent = hiddenCredit;
};
// Calculating movements balance
const balanceMovementOperation = function (acc) {
  const amount = +inputAmountValue.value;
  acc.movements.push(
    btnExchangeMode.classList.contains("deposit") ? amount : -amount
  );
};
// Doing Exchange functionality
const doExchangeMoney = function () {
  balanceMovementOperation(currentAccount);
  warningBalance.textContent = "Done!";
  warningBalance.style.color = "#39b385";
  warningBalance.classList.add("warning-appear");
  setTimeout(function () {
    updateUI();
    effectBalanceCover.classList.add("disappear");
    warningBalance.classList.remove("warning-appear");
    inputAmountValue.value = inputPinValue.value = "";
    warningBalance.style.color = "#e03131";
    doOnce = true;
  }, 2000);
};
// Displaying crypto currencies amount
const displayCurrencyAmount = function () {
  cryptoCurrenciesArr.map((crp, i) => {
    document.querySelector(`.${crp}-amount`).textContent =
      currentAccount.coinWallet[crp].amount;
  });
};
// Displaying crypto currencies information
const displayCryptoInfo = function (cryptoObj, cryptoWallet) {
  ccEIcon.src = cryptoObj.icon;
  coinNameHeading.textContent = cryptoObj.coinName;
  coinAbbrName.textContent = cryptoObj.abbrName;
  coinRankLevel.textContent = cryptoObj.rank;
  ccPriceValue.textContent = `$${cryptoObj.price}`;
  ccPrecentValue.textContent = cryptoObj.precent;
  if (cryptoObj.coinName === "Tether") {
    ccPrecentValue.classList.remove("p-down");
    ccPrecentValue.classList.add("p-up");
  } else {
    ccPrecentValue.classList.remove("p-up");
    ccPrecentValue.classList.add("p-down");
  }
  recieveAddressValue.textContent = cryptoWallet.address;
  cceexFromIcon.src = cryptoObj.icon;
  cceexFromcoinLabel.textContent = cryptoObj.coinName;
  cceexMessageCoinfromname.textContent = cryptoObj.coinName;
};
// Displaying coin operation section
const displayCoinListItem = function (coinItem) {
  cceexToIcon.src = coinItem.icon;
  cceexTocoinLabel.textContent = coinItem.coinName;
  cceexMessageToCoinName.textContent = coinItem.coinName;
};

// Doing buy or sell functionality
const doBuySellCrypto = function () {
  ccBuySellWarning.classList.add("warning-cce-appear");
  ccBuySellWarning.textContent = "Done!";
  ccBuySellWarning.style.color = "#39b385";
  setTimeout(function () {
    updateUI();
    ccCover.classList.add("display-none");
    ccBuySellWarning.classList.remove("warning-cce-appear");
    inputAmountBuySell.value = "";
    inputCCBuySellResult.value = "";
    ccBuySellWarning.style.color = "#e03131";
    ccBuySellWarning.textContent = "";
    doOnce = true;
    btnCCeBsMode.classList.remove("sell");
    btnCCeBsMode.classList.add("buy");
    btnUSDTSide.classList.add("selected-side");
    btnUSDSide.classList.remove("selected-side");
  }, 2000);
};
const doCryptoExchangement = function () {
  ccExchangeWarning.classList.add("warning-cce-appear");
  ccExchangeWarning.textContent = "Done!";
  ccExchangeWarning.style.color = "#39b385";
  setTimeout(function () {
    updateUI();
    ccCover.classList.add("display-none");
    ccExchangeWarning.classList.remove("warning-cce-appear");
    inputAmountCryptoExchange.value = "";
    ccExchangeWarning.style.color = "#e03131";
    ccExchangeWarning.textContent = "";
    doOnce = true;
  }, 2000);
};
const doCryptoSending = function () {
  setTimeout(function () {
    updateUI();
    ccCover.classList.add("display-none");
    inputSendAddress.value = inputSendAmount.value = "";
    ccSendWarning.style.color = "#e03131";
    ccSendWarning.textContent = "";
    doOnce = true;
  }, 2000);
};
const resetAllCryptoCurrencyCover = function () {
  // Buy and Sell component reset
  btnCCeBsMode.classList.remove("sell");
  btnCCeBsMode.classList.add("buy");
  btnUSDTSide.classList.add("selected-side");
  btnUSDSide.classList.remove("selected-side");
  inputAmountBuySell.value = inputCCBuySellResult.value = "";
  ccBuySellWarning.classList.remove("warning-cce-appear");
  ccBuySellWarning.textContent = "";
  // Exchange coin component
  ccExchangeWarning.classList.remove("warning-cce-appear");
  inputAmountCryptoExchange.value = "";
  ccExchangeWarning.textContent = "";
  // Send coin component
  inputSendAddress.value = inputSendAmount.value = "";
  ccSendWarning.classList.remove("warning-cce-appear");
  ccSendWarning.textContent = "";
};
const displayCopyrightDate = function () {
  const date = new Date().getFullYear();
  copyrightDate.textContent = date;
};

// Updating whole program
const updateUI = function () {
  displayMovements(currentAccount);
  displayAccountBalance(currentAccount);
  displayCreditNumber(currentAccount);             
  displayCurrencyAmount();
};
/* -------------App EventListeners------------- */
// Login section //
// App info
btnAppInfo.addEventListener("click", function () {
  shadowCover.classList.remove("disappear");
});
btnCloseAppInfo.addEventListener("click", function () {
  shadowCover.classList.add("disappear");
});
// Login submit
btnLoginSubmit.addEventListener("click", function (e) {
  e.preventDefault();
  if (inputLoginUsername.value !== "" && inputLoginPassword.value !== "") {
    currentAccount = accounts.find(
      (acc, i) =>
        acc.username === inputLoginUsername.value ||
        acc.password === +inputLoginPassword.value
    );
    currentAccount === account1
      ? (nextAccount = account2)
      : (nextAccount = account1);
    if (
      currentAccount?.username === inputLoginUsername.value &&
      currentAccount?.password === +inputLoginPassword.value
    ) {
      warningLogin.textContent = "Correct User!";
      warningLogin.style.color = "#39b385";
      warningLogin.classList.add("warning-appear");
      setTimeout(function () {
        loginSection.classList.add("display-none");
        appContainer.classList.remove("display-none");
        welcomeMessage.textContent = `Welcome to your account ${
          currentAccount.ownerName.split(" ")[0]
        }`;
        warningLogin.classList.remove("warning-appear");
        inputLoginUsername.value = inputLoginPassword.value = "";
        warningLogin.style.color = "#e03131";
      }, 2000);
      updateUI();
      displayCopyrightDate();
    } else {
      warningLogin.textContent = "Username or password is incorrect!";
      warningLogin.classList.add("warning-appear");
    }
  } else {
    warningLogin.textContent = "There is no data for submit!";
    warningLogin.classList.add("warning-appear");
  }
});

// Back to login section
btnBack.addEventListener("click", function () {
  loginSection.classList.remove("display-none");
  appContainer.classList.add("display-none");
});
// Main info
btnAppMainInfo.addEventListener("click", function () {
  shadowCoverMainInfo.classList.remove("disappear");
});
btnInformationClose.addEventListener("click", function () {
  shadowCoverMainInfo.classList.add("disappear");
});
// Effect balance
btnEffectBalance.addEventListener("click", function () {
  effectBalanceCover.classList.remove("disappear");
});
btnCloseBalanceEffect.addEventListener("click", function () {
  effectBalanceCover.classList.add("disappear");
});
// Deposit or Withdrawal
btnExchangeMode.addEventListener("click", function () {
  btnExchangeMode.classList.toggle("withdrawal");
  btnExchangeMode.classList.toggle("deposit");
  btnExchangeMode.textContent = `${
    btnExchangeMode.classList.contains("deposit") ? "Deposit" : "Withdrawal"
  }`;
});
btnSubmitExchange.addEventListener("click", function (e) {
  e.preventDefault();
  if (doOnce === true) {
    if (inputAmountValue.value !== "" && inputPinValue.value !== "") {
      if (
        +inputAmountValue.value > 0 &&
        +inputPinValue.value === currentAccount.password
      ) {
        if (btnExchangeMode.classList.contains("deposit")) {
          doExchangeMoney();
          doOnce = false;
        } else {
          if (currentAccount.totalBalance > +inputAmountValue.value) {
            doExchangeMoney();
            doOnce = false;
          } else {
            warningBalance.textContent =
              "You can't withdrawal more than you have!";
            warningBalance.classList.add("warning-appear");
          }
        }
      } else {
        warningBalance.textContent = "Wrong Data! amount or pin has problem";
        warningBalance.classList.add("warning-appear");
      }
    } else {
      warningBalance.textContent = "There is no data for submit!";
      warningBalance.classList.add("warning-appear");
    }
  }
});

btnSort.addEventListener("click", function () {
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
});
// Crypto Currency list
btnCCItems.forEach((btn, i) => {
  btn.addEventListener("click", function () {
    coinWallet = currentAccount.coinWallet[cryptoCurrenciesArr[i]];
    ccCover.classList.remove("display-none");
    coinObj = cryptoCurrenciesObj[cryptoCurrenciesArr[i]];
    selectedCoin = coinObj.coinName.toLowerCase();
    displayCryptoInfo(coinObj, coinWallet);
  });
});
btnCCBack.addEventListener("click", function () {
  ccCover.classList.add("display-none");
  resetAllCryptoCurrencyCover();
});

btnAddressWallet.addEventListener("click", function () {
  walletAddress = btnAddressWallet.textContent;
  navigator.clipboard.writeText(walletAddress);
  alert("Address copied!");
});
btnCCeBsMode.addEventListener("click", function () {
  btnCCeBsMode.classList.toggle("sell");
  btnCCeBsMode.classList.toggle("buy");
  btnCCeBsMode.textContent = btnCCeBsMode.classList.contains("buy")
    ? "Buy"
    : "Sell";
  ccebsResLabel.textContent = btnCCeBsMode.classList.contains("buy")
    ? "Will earn:"
    : "Should pay:";
  ccebsWithLabel.textContent = btnCCeBsMode.classList.contains("buy")
    ? "With:"
    : "To:";
});

btnCCebsWithSelect.addEventListener("click", function () {
  btnUSDTSide.classList.toggle("selected-side");
  btnUSDSide.classList.toggle("selected-side");
  currencyToBuy = btnUSDTSide.classList.contains("selected-side")
    ? `USDT`
    : `USD`;
  console.log(currencyToBuy);
});
btnCCeexToSelect.addEventListener("click", function () {
  btnCCeexToSelect.classList.toggle("open-cceexcoin-list");
});
btnCCeexCoinItem.map((item, i) => {
  item.addEventListener("click", function () {
    coinListItem = cryptoCurrenciesObj[cryptoCurrenciesArr[i]];
    displayCoinListItem(coinListItem);
  });
});
// Submit buying or selling operation
btnCCeBsSubmit.addEventListener("click", function (e) {
  e.preventDefault();
  let amount = +inputAmountBuySell.value;
  let willEarn;

  // Exchange the crypto
  const exchangeCrypto = function (amount, willEarn) {
    willEarn =
      selectedCoin === "tether"
        ? amount * 1
        : amount * cryptoCurrenciesObj[selectedCoin].exchangements.oneUSDorUSDT;
    inputCCBuySellResult.value = `${willEarn} ${selectedCoin}`;
    doBuySellCrypto();
    doOnce = false;
    currentAccount.coinWallet[selectedCoin].amount += willEarn;
  };
  if (doOnce === true) {
    if (inputAmountBuySell.value !== "" && +inputAmountBuySell.value !== 0) {
      if (btnCCeBsMode.classList.contains("buy")) {
        if (currencyToBuy === "USDT") {
          if (selectedCoin !== "tether") {
            if (currentAccount.coinWallet.tether.amount > amount) {
              exchangeCrypto(amount, willEarn);
              currentAccount.coinWallet.tether.amount -= amount;
            } else {
              ccBuySellWarning.textContent = "You don't have enough USDT!";
              ccBuySellWarning.classList.add("warning-cce-appear");
            }
          } else {
            ccBuySellWarning.textContent = "You can't buy USDT by USDT";
            ccBuySellWarning.classList.add("warning-cce-appear");
          }
        }
        if (currencyToBuy === "USD") {
          if (currentAccount.totalBalance > amount) {
            exchangeCrypto(amount, willEarn);
            currentAccount.movements.push(-amount);
          } else {
            ccBuySellWarning.textContent = "You don't have enough Money!";
            ccBuySellWarning.classList.add("warning-cce-appear");
          }
        }
      } else if (btnCCeBsMode.classList.contains("sell")) {
        if (currentAccount.coinWallet[selectedCoin].amount >= amount) {
          currentAccount.coinWallet[selectedCoin].amount -= amount;

          if (currencyToBuy === "USDT" && selectedCoin !== "tether") {
            currentAccount.coinWallet.tether.amount +=
              amount *
              +cryptoCurrenciesObj[selectedCoin].price.replace(",", "");
            inputCCBuySellResult.value = `${
              amount * +cryptoCurrenciesObj[selectedCoin].price.replace(",", "")
            } $`;
            doBuySellCrypto();
          } else if (currencyToBuy === "USD") {
            currentAccount.movements.push(
              amount * +cryptoCurrenciesObj[selectedCoin].price.replace(",", "")
            );
            inputCCBuySellResult.value = `${
              amount * +cryptoCurrenciesObj[selectedCoin].price.replace(",", "")
            } $`;
            doBuySellCrypto();
          } else {
            ccBuySellWarning.textContent = `You can't sell USDT to earn USDT`;
            ccBuySellWarning.classList.add("warning-cce-appear");
          }
        } else {
          ccBuySellWarning.textContent = `You don't have enough ${selectedCoin}`;
          ccBuySellWarning.classList.add("warning-cce-appear");
        }
      }
    } else {
      ccBuySellWarning.textContent = "There is no data for submit!";
      ccBuySellWarning.classList.add("warning-cce-appear");
    }
  }
});
btnSubmitCryptoExchange.addEventListener("click", function (e) {
  e.preventDefault();
  let toCoinName = cceexMessageToCoinName.textContent.toLowerCase();
  let selectedToCoin =
    selectedCoin.charAt(0).toUpperCase() + selectedCoin.slice(1);
  let amount = inputAmountCryptoExchange.value;
  if (doOnce === true) {
    if (
      inputAmountCryptoExchange.value !== "" &&
      +inputAmountCryptoExchange.value !== 0
    ) {
      if (toCoinName !== "---") {
        if (selectedCoin !== toCoinName) {
          if (currentAccount.coinWallet[selectedCoin].amount >= amount) {
            currentAccount.coinWallet[selectedCoin].amount -= +amount;
            currentAccount.coinWallet[toCoinName].amount +=
              +amount *
              cryptoCurrenciesObj[toCoinName].exchangements[
                `one${
                  selectedToCoin === "Tether" ? "USDorUSDT" : selectedToCoin
                }`
              ];
            doOnce = false;
            doCryptoExchangement();
          } else {
            ccExchangeWarning.textContent = "You don't have enough coin!";
            ccExchangeWarning.classList.add("warning-cce-appear");
          }
        } else {
          ccExchangeWarning.textContent = "You can't exchange two same coins!";
          ccExchangeWarning.classList.add("warning-cce-appear");
        }
      } else {
        ccExchangeWarning.textContent = "Please choose a coin to exchange!";
        ccExchangeWarning.classList.add("warning-cce-appear");
      }
    } else {
      ccExchangeWarning.textContent = "There is no data for submit!";
      ccExchangeWarning.classList.add("warning-cce-appear");
    }
  }
});
btnSendSubmit.addEventListener("click", function (e) {
  e.preventDefault();
  let amount = +inputSendAmount.value;
  let address = inputSendAddress.value;
  if (doOnce === true) {
    if (amount !== "" && amount !== 0 && address !== "") {
      if (currentAccount.coinWallet[selectedCoin].amount >= amount) {
        if (address === nextAccount.coinWallet[selectedCoin].address) {
          currentAccount.coinWallet[selectedCoin].amount -= amount;
          nextAccount.coinWallet[selectedCoin].amount += amount;
          doOnce = false;
          ccSendWarning.classList.add("warning-cce-appear");
          ccSendWarning.textContent = "Done!";
          ccSendWarning.style.color = "#39b385";
          doCryptoSending();
        } else {
          currentAccount.coinWallet[selectedCoin].amount -= amount;
          ccSendWarning.classList.add("warning-cce-appear");
          ccSendWarning.textContent = "Missed!";
          ccSendWarning.style.color = "#adb5bd";
          doCryptoSending();
        }
      } else {
        ccSendWarning.textContent = `You don't have enough ${selectedCoin}!`;
        ccSendWarning.classList.add("warning-cce-appear");
      }
    } else {
      ccSendWarning.textContent = "There is no data for submit!";
      ccSendWarning.classList.add("warning-cce-appear");
    }
  }
});
