import { ApolloClient, InMemoryCache } from "@apollo/client";
const etheriumSwapGraph = {
    'UniswapV3': new ApolloClient({
        cache: new InMemoryCache(),
        uri: "https://gateway.thegraph.com/api/218dc818056cf96d635e61b39cdecd99/subgraphs/id/5zvR82QoaXYFyDEKLZ9t6v9adgnptxYpKpSbxtgVENFV",
    }),
    'UniswapV2': new ApolloClient({
        cache: new InMemoryCache(),
        uri: "https://gateway.thegraph.com/api/218dc818056cf96d635e61b39cdecd99/subgraphs/id/A3Np3RQbaBA6oKJgiwDJeo5T3zrYfGHPWFYayMwtNDum",
    }),
    'PancakeSwapV2': new ApolloClient({
        cache: new InMemoryCache(),
        uri: "https://open-platform.nodereal.io/ccc1f67e16294a9293ec936eaff02d35/pancakeswap-free/graphql",
    })
}
const polygonSwapGraph = {
    'UniswapV3': new ApolloClient({
        cache: new InMemoryCache(),
        uri: "https://gateway.thegraph.com/api/218dc818056cf96d635e61b39cdecd99/subgraphs/id/3hCPRGf4z88VC5rsBKU5AA9FBBq5nF3jbKJG7VZCbhjm",
    })
}
const baseSwapGraph = {
    'UniswapV3': new ApolloClient({
        cache: new InMemoryCache(),
        uri: "https://gateway.thegraph.com/api/218dc818056cf96d635e61b39cdecd99/subgraphs/id/43Hwfi3dJSoGpyas9VwNoDAv55yjgGrPpNSmbQZArzMG",
    })
}
const bscSwapGraph = {
    'UniswapV3': new ApolloClient({
        cache: new InMemoryCache(),
        uri: "https://gateway.thegraph.com/api/218dc818056cf96d635e61b39cdecd99/subgraphs/id/F85MNzUGYqgSHSHRGgeVMNsdnW1KtZSVgFULumXRZTw2",
    })
    
}
const optimismSwapGraph = {
    'UniswapV3': new ApolloClient({
        cache: new InMemoryCache(),
        uri: "https://gateway.thegraph.com/api/218dc818056cf96d635e61b39cdecd99/subgraphs/id/Cghf4LfVqPiFw6fp6Y5X5Ubc8UpmUhSfJL82zwiBFLaj",
    })
}

const solMainetSwapGraph = {
    'Raydium': new ApolloClient({
        cache: new InMemoryCache(),
        uri: "https://programs.shyft.to/v0/graphql/?api_key=qFXt-buNCCIgGBTq&network=mainnet-beta",
    })
}

const solDevnetSwapGraph = {
    'Raydium': new ApolloClient({
        cache: new InMemoryCache(),
        uri: "https://programs.shyft.to/v0/graphql/?api_key=qFXt-buNCCIgGBTq&network=devnet",
    })
}

const celloGraph = {
    'UniswapV3': new ApolloClient({
        cache: new InMemoryCache(),
        uri: "https://gateway.thegraph.com/api/218dc818056cf96d635e61b39cdecd99/subgraphs/id/ESdrTJ3twMwWVoQ1hUE2u7PugEHX3QkenudD6aXCkDQ4",
    })
}

const avalancheSwapGraph = {
    'UniswapV3': new ApolloClient({
        cache: new InMemoryCache(),
        uri: "https://gateway.thegraph.com/api/218dc818056cf96d635e61b39cdecd99/subgraphs/id/GVH9h9KZ9CqheUEL93qMbq7QwgoBu32QXQDPR6bev4Eo",
    })
}

const arbitrumSwapGraph = {
    'UniswapV3': new ApolloClient({
        cache: new InMemoryCache(),
        uri: "https://gateway-arbitrum.network.thegraph.com/api/6cf38e048c3942dabadc023b4ec7224e/subgraphs/id/FbCGRftH4a3yZugY7TnbYgPJVEv2LvMT6oF1fxPe9aJM",
    })
}
export const clients = {
    '1': etheriumSwapGraph,
    '10': optimismSwapGraph,
    '56': bscSwapGraph,
    '137': polygonSwapGraph,
    '8453': baseSwapGraph,
    '43114': avalancheSwapGraph,
    '1116': celloGraph,
    '42161': arbitrumSwapGraph,
    '101': solMainetSwapGraph,
    '102': solDevnetSwapGraph
};
