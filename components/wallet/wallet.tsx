import { WalletAggregator } from '@polkadot-onboard/core';
import { InjectedWalletProvider } from '@polkadot-onboard/injected-wallets';
import { WalletConnectProvider } from '@polkadot-onboard/wallet-connect';
import { PolkadotWalletsContextProvider, useWallets } from '@polkadot-onboard/react';

const APP_NAME = 'Polkadot wallets example';

const ConnectContainer = () => {
    let walletConnectParams = {
        projectId: '4fae...',
        relayUrl: 'wss://relay.walletconnect.com',
        metadata: {
        name: 'Polkadot Demo',
        description: 'Polkadot Demo',
        url: '#',
        icons: ['https://walletconnect.com/walletconnect-logo.png'],
        },
    };
    let walletAggregator = new WalletAggregator([
            new InjectedWalletProvider({}, APP_NAME),
            new WalletConnectProvider(walletConnectParams, APP_NAME)
    ]);
    return (
        <PolkadotWalletsContextProvider walletAggregator={walletAggregator}>
        
        </PolkadotWalletsContextProvider>
    );
}