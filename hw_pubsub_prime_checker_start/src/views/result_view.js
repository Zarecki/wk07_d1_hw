const PubSub = require('../helpers/pub_sub.js');

const ResultView = function () {

};

ResultView.prototype.displayResult = function (result) {
  const resultElement = document.querySelector('#result');
  resultElement.textContent = `${result}.`;
};

ResultView.prototype.bindEvents = function () {
  PubSub.subscribe('PrimeChecker:result-calculated', (event) => {
    const numberIsPrime = event.detail;
    this.displayResult(numberIsPrime);;
  });
};

module.exports = ResultView;
