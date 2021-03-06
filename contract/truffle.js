var HDWalletProvider = require("truffle-hdwallet-provider");
var mnemonic = process.env.ROPSTEN_MNEMONIC;
var accessToken = process.env.INFURA_ACCESS_TOKEN;

module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 9545,
      network_id: 10
    },
    geth: {
      host: "localhost",
      port: 8545,
      network_id: 10
    },
    ganache: {
      host: "127.0.0.1",
      port: 7545,
      network_id: 5777
    },
    ropsten: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "https://ropsten.infura.io/" + accessToken);
      },
      network_id: 3,
      gas: 4700000
    }
  }
};