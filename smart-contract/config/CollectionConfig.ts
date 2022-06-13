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
    price: 0.065,
    maxMintAmountPerTx: 2,
  },
  preSale: {
    price: 0.08,
    maxMintAmountPerTx: 5,
  },
  publicSale: {
    price: 0.09,
    maxMintAmountPerTx: 10,
  },
  contractAddress: "0x154b65792e4F206b001BefC110cE2cDab6B326bC",
  marketplaceIdentifier: 'my-nft-token',
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses,
};

export default CollectionConfig;
