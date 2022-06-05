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
  tokenName: 'BRK',
  tokenSymbol: 'BRK',
  hiddenMetadataUri: 'ipfs://QmbzAGQE3JaKmQWcgpREvxcskvnxxSagvedaEoL55AwKc9/hidden.json',
  maxSupply: 10000,
  whitelistSale: {
    price: 0.03,
    maxMintAmountPerTx: 3,
  },
  preSale: {
    price: 0.04,
    maxMintAmountPerTx: 6,
  },
  publicSale: {
    price: 0.05,
    maxMintAmountPerTx: 15,
  },
  contractAddress: "0xBa3561cA0574FC3116e5f3D8aa407CE906C07b2D",
  marketplaceIdentifier: 'my-nft-token',
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses,
};

export default CollectionConfig;
