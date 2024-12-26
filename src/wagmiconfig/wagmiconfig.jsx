import { base, mainnet, optimism, bsc, arbitrum } from 'wagmi/chains';
import { createConfig, http } from 'wagmi';
import { createPublicClient } from 'viem';

// Configure wagmi chains and their respective RPC endpoints
export const wagmiconfig = createConfig({
  chains: [mainnet, optimism, base, bsc, arbitrum],
  transports: {
    [mainnet.id]: http('https://ethereum-rpc.publicnode.com'),
    [optimism.id]: http('https://optimism-rpc.publicnode.com'),
    [base.id]: http('https://base-rpc.publicnode.com'),
    [bsc.id]: http('https://bsc-rpc.publicnode.com'),
    [arbitrum.id]: http('https://arbitrum.drpc.org'),
  },
});

export const viemClients = {
  [mainnet.id]: createPublicClient({
    chain: mainnet,
    transport: http('https://eth.merkle.io'),
  }),
  [optimism.id]: createPublicClient({
    chain: optimism,
    transport: http('https://optimism-rpc.publicnode.com'),
  }),
  [base.id]: createPublicClient({
    chain: base,
    transport: http('https://base-rpc.publicnode.com'),
  }),
  [bsc.id]: createPublicClient({
    chain: bsc,
    transport: http('https://bsc-rpc.publicnode.com'),
  }),
  [arbitrum.id]: createPublicClient({
    chain: arbitrum,
    transport: http('https://arbitrum.drpc.org'),
  }),
};


