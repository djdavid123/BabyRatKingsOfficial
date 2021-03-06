import CollectionConfigInterface from '../lib/CollectionConfigInterface';
import * as Networks from '../lib/Networks';
import * as Marketplaces from '../lib/Marketplaces';
import whitelistAddresses from './whitelist.json';

const CollectionConfig: CollectionConfigInterface = {
  testnet: Networks.ethereumTestnet,
  mainnet: Networks.ethereumMainnet,
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  contractName: 'BabyRatKings',
  tokenName: 'BabyRatKings',
  tokenSymbol: 'BRK',
  hiddenMetadataUri: 'ipfs://QmbzAGQE3JaKmQWcgpREvxcskvnxxSagvedaEoL55AwKc9/hidden.json',
  maxSupply: 10000,
  whitelistSale: {
    price: 0.08,
    maxMintAmountPerTx: 2,
  },
  preSale: {
    price: 0.095,
    maxMintAmountPerTx: 5,
  },
  publicSale: {
    price: 0.125,
    maxMintAmountPerTx: 10,
  },
  contractAddress: "0x3aADade9954a93edf32C9afE5A0817c6ee0DFEcF",
  marketplaceIdentifier: 'my-nft-token',
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses,
};

export default CollectionConfig;
