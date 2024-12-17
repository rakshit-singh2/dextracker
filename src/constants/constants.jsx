import { ApolloClient, InMemoryCache } from "@apollo/client";
const etheriumSwapGraph = {
    'UniswapV3': new ApolloClient({
        cache: new InMemoryCache(),
        uri: "https://gateway.thegraph.com/api/218dc818056cf96d635e61b39cdecd99/subgraphs/id/5zvR82QoaXYFyDEKLZ9t6v9adgnptxYpKpSbxtgVENFV",
    })
}
const polygonTestnetSwapGraph = {
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

}
const optimismSwapGraph = {
    'UniswapV3': new ApolloClient({
        cache: new InMemoryCache(),
        uri: "https://gateway.thegraph.com/api/218dc818056cf96d635e61b39cdecd99/subgraphs/id/Cghf4LfVqPiFw6fp6Y5X5Ubc8UpmUhSfJL82zwiBFLaj",
    })
}
const sepoliaSwapGraph = {

}
const bscTestnetSwapGraph = {

}
const coreSwapGraph = {

}
const genesysSwapGraph = {

}
const arbitrumSwapGraph = {
    'UniswapV3': new ApolloClient({
        cache: new InMemoryCache(),
        uri: "https://gateway-arbitrum.network.thegraph.com/api/6cf38e048c3942dabadc023b4ec7224e/subgraphs/id/FbCGRftH4a3yZugY7TnbYgPJVEv2LvMT6oF1fxPe9aJM",
    })
}
export const  clients = {
    '1': etheriumSwapGraph,
    '10': optimismSwapGraph,
    '56': bscSwapGraph,
    '97': bscTestnetSwapGraph,
    '137': polygonTestnetSwapGraph,
    '8453': baseSwapGraph,
    '1116': coreSwapGraph,
    '16507': genesysSwapGraph,
    '42161': arbitrumSwapGraph,
    '11155111': sepoliaSwapGraph,
}