require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom kiwi bridge tooth guard render remain hour install industry fortune spy'; 
let testAccounts = [
"0x13aa913498c5ee894d8254b996d761fce5f990b0669b470aee3a3d4b332a473f",
"0x2fbf3a92f5ce2f699943b5e613888b4e7b0878ef6356d18f45a9082a06616917",
"0xe8f1a74763aa94c471b7f6f32a80b5e3b5bc8318cabfdbf3d565750a3633bbbc",
"0x67692055bc7944781577d54d8207148f731eed59231bdcfb61e8a99d14e2f528",
"0x102f32ad9456d634177476add69e05b32e918e3eddb605e1d12abe9be1dbfce3",
"0x56e9482473b9286c7351ccc60cd7b5164388cf07e63f3a9625896ec54b3f66d7",
"0xd1de626120a59f9b2658aad85d4a1b5a16cc95e2ce7fc1ffae0e0838bff28bec",
"0x8f169c423765942aa188358142e9b8c74ddc38edec8b964338c0eff62aa1c196",
"0x0fe6698dc8e95019016ab4ed82405a2edd47ceba9a218e3e83e5263a6959c8bd",
"0x1facc2eaad7f6b5af62cf35539a3a7ddc333698760a25c1d1c834b4cf651c29e"
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

