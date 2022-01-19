require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea knife sun tooth guard render remain provide gesture desert foster genius'; 
let testAccounts = [
"0x92d731cce0c07c6c8305f0338fd41d52406ee5d27d308a69690326e8f6a91b45",
"0xc8c32860af016598f22313a1efea34b6b4fb6215bf801ea0d0402848a4835908",
"0x059a9553f7c1ed439f713ac6f55d1d2e14441d714eaee0eee52cc08477064a85",
"0x07b295311a8bb56620849869874b9c27c506694111d61f456a384407bbc13da8",
"0x7c35a616aa8b8b43ec4a117c635bb0fa99b587a6c59c10db5c5d82267a78d43c",
"0x11707bc3aa086167431b057af2212b77e2085435492c93c7457a52320929ed86",
"0x0eb5ed8f1c12c198df75f87634da941ce4044b4c9b4d47d626b879aedab367b0",
"0x5d78676bc45e0bbb60a6899faeb7fe679a24a84d703b64e8b72626581a55dba6",
"0xc9ec49c90e863e05a333e8c181f6dda3b5cf3a2b39af0869f661b926e85a9581",
"0x981cebc6511b1f55387d7a59719e153cbc289ef1080ad25fe916fcaa3323d193"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

