import { ApolloClient, InMemoryCache } from "@apollo/client";
const etheriumSwapGraph = {
    'UniswapV2':  new ApolloClient({
        cache: new InMemoryCache(),
        uri: "https://gateway.thegraph.com/api/218dc818056cf96d635e61b39cdecd99/subgraphs/id/5zvR82QoaXYFyDEKLZ9t6v9adgnptxYpKpSbxtgVENFV",
    })
}
const polygonTestnetSwapGraph = {
   
}
const baseSwapGraph = {

}
const bscSwapGraph = {

}
const optimismSwapGraph = {

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

}
export const clients = {
    '1': etheriumSwapGraph,
    '10': optimismSwapGraph,
    '56': bscSwapGraph,
    '97': bscTestnetSwapGraph,
    '137':polygonTestnetSwapGraph,
    '8453': baseSwapGraph,
    '1116': coreSwapGraph,
    '16507': genesysSwapGraph,
    '42161': arbitrumSwapGraph,
    '11155111': sepoliaSwapGraph,
}