import { configureChains, createClient } from 'wagmi';
import { polygonMumbai } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';

import { Web3AuthConnectorInstance } from '@/auth/web3-auth';

const { chains, provider, webSocketProvider } = configureChains([polygonMumbai], [publicProvider()]);

export const Web3AuthConnector = Web3AuthConnectorInstance(chains);

export const wagmiClient = createClient({
  autoConnect: true,
  connectors: [Web3AuthConnector],
  provider,
  webSocketProvider
});
