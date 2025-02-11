
import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import {
  mainnet,
  polygon,
  optimism,
  arbitrum,
  base,
  zora,
} from 'wagmi/chains';

import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
const { chains, publicClient } = configureChains(
    [mainnet, polygon, optimism, arbitrum, base, zora],
    [
      alchemyProvider({ apiKey: process.env.ALCHEMY_ID as string }),
      publicProvider()
    ]
  );
  
  const { connectors } = getDefaultWallets({
    appName: 'My RainbowKit App',
    projectId: 'YOUR_PROJECT_ID',
    chains
  });
  
  const wagmiConfig = createConfig({
    autoConnect: true,
    connectors,
    publicClient
  })

export  const MyWalletButton = () => {
    return (
      <WagmiConfig config={wagmiConfig}>
        <RainbowKitProvider chains={chains}>
          <WalletButton />
        </RainbowKitProvider>
      </WagmiConfig>
    );
  };
import { ConnectButton } from '@rainbow-me/rainbowkit';

export const WalletButton = () => {
  return <ConnectButton />;
};