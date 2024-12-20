import { ApolloClient, InMemoryCache } from "@apollo/client";
const etherium = {
    'uniswapv3': new ApolloClient({
        cache: new InMemoryCache(),
        uri: "https://gateway.thegraph.com/api/218dc818056cf96d635e61b39cdecd99/subgraphs/id/5zvR82QoaXYFyDEKLZ9t6v9adgnptxYpKpSbxtgVENFV",
    }),
    'uniswapv2': new ApolloClient({
        cache: new InMemoryCache(),
        uri: "https://gateway.thegraph.com/api/218dc818056cf96d635e61b39cdecd99/subgraphs/id/A3Np3RQbaBA6oKJgiwDJeo5T3zrYfGHPWFYayMwtNDum",
    }),
    'pancakeswapv2': new ApolloClient({
        cache: new InMemoryCache(),
        uri: "https://open-platform.nodereal.io/ccc1f67e16294a9293ec936eaff02d35/pancakeswap-free/graphql",
    })
}
const polygon = {
    'uniswapv3': new ApolloClient({
        cache: new InMemoryCache(),
        uri: "https://gateway.thegraph.com/api/218dc818056cf96d635e61b39cdecd99/subgraphs/id/3hCPRGf4z88VC5rsBKU5AA9FBBq5nF3jbKJG7VZCbhjm",
    })
}
const base = {
    'uniswapv3': new ApolloClient({
        cache: new InMemoryCache(),
        uri: "https://gateway.thegraph.com/api/218dc818056cf96d635e61b39cdecd99/subgraphs/id/43Hwfi3dJSoGpyas9VwNoDAv55yjgGrPpNSmbQZArzMG",
    })
}
const bsc = {
    'uniswapv3': new ApolloClient({
        cache: new InMemoryCache(),
        uri: "https://gateway.thegraph.com/api/218dc818056cf96d635e61b39cdecd99/subgraphs/id/F85MNzUGYqgSHSHRGgeVMNsdnW1KtZSVgFULumXRZTw2",
    })

}
const optimism = {
    'uniswapv3': new ApolloClient({
        cache: new InMemoryCache(),
        uri: "https://gateway.thegraph.com/api/218dc818056cf96d635e61b39cdecd99/subgraphs/id/Cghf4LfVqPiFw6fp6Y5X5Ubc8UpmUhSfJL82zwiBFLaj",
    })
}

const solana = {
    'Raydium': new ApolloClient({
        cache: new InMemoryCache(),
        uri: "https://programs.shyft.to/v0/graphql/?api_key=qFXt-buNCCIgGBTq&network=mainnet-beta",
    })
}

const cello = {
    'uniswapv3': new ApolloClient({
        cache: new InMemoryCache(),
        uri: "https://gateway.thegraph.com/api/218dc818056cf96d635e61b39cdecd99/subgraphs/id/ESdrTJ3twMwWVoQ1hUE2u7PugEHX3QkenudD6aXCkDQ4",
    })
}

const avalanche = {
    'uniswapv3': new ApolloClient({
        cache: new InMemoryCache(),
        uri: "https://gateway.thegraph.com/api/218dc818056cf96d635e61b39cdecd99/subgraphs/id/GVH9h9KZ9CqheUEL93qMbq7QwgoBu32QXQDPR6bev4Eo",
    })
}

const arbitrum = {
    'uniswapv3': new ApolloClient({
        cache: new InMemoryCache(),
        uri: "https://gateway-arbitrum.network.thegraph.com/api/6cf38e048c3942dabadc023b4ec7224e/subgraphs/id/FbCGRftH4a3yZugY7TnbYgPJVEv2LvMT6oF1fxPe9aJM",
    })
}
export const clients = {
    'etherium': { 
        'graph': etherium,
        'icon': 'img/crypto/etherium.png',
    },
    'optimism': { 
        'graph': optimism,
        'icon': 'https://icons.llamao.fi/icons/chains/rsz_optimism.jpg',
    },
    'bsc': { 
        'graph': bsc,
        'icon': 'https://icons.llamao.fi/icons/chains/rsz_binance.jpg',
    },
    'polygon': { 
        'graph': polygon,
        'icon': 'https://icons.llamao.fi/icons/chains/rsz_polygon.jpg',
    },
    'base': { 
        'graph': base,
        'icon': 'https://icons.llamao.fi/icons/chains/rsz_base.jpg',
    },
    'avalanche': { 
        'graph': avalanche,
        'icon': 'https://icons.llamao.fi/icons/chains/rsz_avalanche.jpg',
    },
    'cello': { 
        'graph': cello,
        'icon': 'https://icons.llamao.fi/icons/chains/rsz_celo.jpg',
    },
    'arbitrum': { 
        'graph': arbitrum,
        'icon': 'https://icons.llamao.fi/icons/chains/rsz_arbitrum.jpg',
    },
    'solana': { 
        'graph': solana,
        'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAASFBMVEVHcExYmddlgeAu1r5Irc5Hrc2JU/WKVPYj6q1reeMl5bOJUfWUSP0k5rNQndRcjdsd9KU4xsR9YO5pfOIt2b1DtctJqs9ybugVOp/+AAAAC3RSTlMAHE9DQ09NMjJDT2HHxPcAAACSSURBVCiRxdDBDoMgEEVRUMtUoFpB5f//tIPTyJOkpJumd3uCPlDqf+l7Fdiwbcuyrg/uKRWlad+vWkzPEyqzLRbnSosp3XE3yeZwTTszHg25nsOT5EJIUX4sV7JN7T+ojMYvG+dCSqgaz75HySqehdiMzFF3vgecNN7lYLQG4y5ajLyvlGo7NcUR11R9fY0f9AL+uBAN6GmI1QAAAABJRU5ErkJggg==',
    },
};
