var HDWalletProvider = require("truffle-hdwallet-provider");
var mnemonic = "gasp layer vote stick mystery motor kiss eye call ostrich hawk club";

var Web3 = require('web3');
var provider = new Web3.providers.HttpProvider("http://localhost:8545");

module.exports = {
    networks: {
        development: {
            host: 'localhost',
            port: 8545,
            network_id: '*', // Match any network id,
            gas: 6612388
        },
        nodeth: {
          provider: provider,
          network_id: "*", // any network associated with your node
          from: "8bedc32ad9905c16b609cccc7066c0ba54250a01"
        },
        ropsten: {
            provider: function() {
                return new HDWalletProvider(mnemonic, "https://ropsten.infura.io/8JOaHX2U8Z0GGN8eDCpD")
            },
            network_id: 3,
            gas: 4690000
        },
        rinkeby: {
            provider: function() {
                return new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/pjvC14Kn4cv47X3U8qLq ")
            },
            network_id: 4,
            gas: 4690000
        },
        kovan: {
            provider: function() {
                return new HDWalletProvider(mnemonic, "https://kovan.infura.io/pjvC14Kn4cv47X3U8qLq")
            },
            gas: 4690000
        }
    }
};
