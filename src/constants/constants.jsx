import { ApolloClient, InMemoryCache } from "@apollo/client";
const uniswapImage ='https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984/logo.png';

const pancakeswapImage ='https://docs.pancakeswap.finance/~gitbook/image?url=https%3A%2F%2F2612825755-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fcollections%252F-MHREX7DHcljbY5IkjgJ%252Ficon%252FW38rmBbaxxiYbRRRJfLW%252FGroup%252053654.png%3Falt%3Dmedia%26token%3Dfebc62b9-a084-4928-b23b-1f3cb931b7c9&width=32&dpr=4&quality=100&sign=4e091a0d&sv=2';

const radyumswapImage ='https://icons.llamao.fi/icons/protocols/raydium?w=48&h=48';

const orcaImage ='https://icons.llamao.fi/icons/protocols/orca?w=48&h=48';

const etherium = {
    'uniswapv3': {
        'client': new ApolloClient({
            cache: new InMemoryCache(),
            uri: "https://gateway.thegraph.com/api/218dc818056cf96d635e61b39cdecd99/subgraphs/id/5zvR82QoaXYFyDEKLZ9t6v9adgnptxYpKpSbxtgVENFV",
        }),
        'icon': uniswapImage
    },
    'uniswapv2': {
        'client': new ApolloClient({
            cache: new InMemoryCache(),
            uri: "https://gateway.thegraph.com/api/218dc818056cf96d635e61b39cdecd99/subgraphs/id/A3Np3RQbaBA6oKJgiwDJeo5T3zrYfGHPWFYayMwtNDum",
        }),
        'icon': uniswapImage
    },
    'pancakeswapv2': {
        'client': new ApolloClient({
            cache: new InMemoryCache(),
            uri: "https://open-platform.nodereal.io/ccc1f67e16294a9293ec936eaff02d35/pancakeswap-free/graphql",
        }),
        'icon': pancakeswapImage
    },
}
const polygon = {
    'uniswapv3': {
        'client': new ApolloClient({
            cache: new InMemoryCache(),
            uri: "https://gateway.thegraph.com/api/218dc818056cf96d635e61b39cdecd99/subgraphs/id/3hCPRGf4z88VC5rsBKU5AA9FBBq5nF3jbKJG7VZCbhjm",
        }),
        'icon': uniswapImage
    },
}
const base = {
    'uniswapv3': {
        'client': new ApolloClient({
            cache: new InMemoryCache(),
            uri: "https://gateway.thegraph.com/api/218dc818056cf96d635e61b39cdecd99/subgraphs/id/43Hwfi3dJSoGpyas9VwNoDAv55yjgGrPpNSmbQZArzMG",
        }),
        'icon': uniswapImage
    },
}
const bsc = {
    'uniswapv3': {
        'client': new ApolloClient({
            cache: new InMemoryCache(),
            uri: "https://gateway.thegraph.com/api/218dc818056cf96d635e61b39cdecd99/subgraphs/id/F85MNzUGYqgSHSHRGgeVMNsdnW1KtZSVgFULumXRZTw2",
        }),
        'icon': uniswapImage
    },

}
const optimism = {
    'uniswapv3': {
        'client': new ApolloClient({
            cache: new InMemoryCache(),
            uri: "https://gateway.thegraph.com/api/218dc818056cf96d635e61b39cdecd99/subgraphs/id/Cghf4LfVqPiFw6fp6Y5X5Ubc8UpmUhSfJL82zwiBFLaj",
        }),
        'icon': uniswapImage
    },
}

const solana = {
    'raydiumv1': {
        'client': new ApolloClient({
            cache: new InMemoryCache(),
            uri: "https://programs.shyft.to/v0/graphql/?api_key=qFXt-buNCCIgGBTq&network=mainnet-beta",
        }),
        'icon': radyumswapImage
    },
    'orcav2': {
        'client': new ApolloClient({
            cache: new InMemoryCache(),
            uri: "https://thegraph.com/explorer/subgraphs/5uxAUcxNjZnvLhBF3dQk1gxXDYZwjaamohQrndWi8UNL?view=Query&chain=arbitrum-one",
        }),
        'icon': orcaImage
    },
    'orcav3': {
        'client': new ApolloClient({
            cache: new InMemoryCache(),
            uri: "https://thegraph.com/explorer/subgraphs/Bo8bE9LWnqeq1NMyCMq8HYag5jVVdZBBdW8EkSq2jgp5?view=Query&chain=arbitrum-one",
        }),
        'icon': orcaImage
    },
}

const cello = {
    'uniswapv3': {
        'client': new ApolloClient({
            cache: new InMemoryCache(),
            uri: "https://gateway.thegraph.com/api/218dc818056cf96d635e61b39cdecd99/subgraphs/id/ESdrTJ3twMwWVoQ1hUE2u7PugEHX3QkenudD6aXCkDQ4",
        }),
        'icon': uniswapImage
    },
}

const avalanche = {
    'uniswapv3': {
        'client': new ApolloClient({
            cache: new InMemoryCache(),
            uri: "https://gateway.thegraph.com/api/218dc818056cf96d635e61b39cdecd99/subgraphs/id/GVH9h9KZ9CqheUEL93qMbq7QwgoBu32QXQDPR6bev4Eo",
        }),
        'icon': uniswapImage
    },
}

const arbitrum = {
    'uniswapv3': {
        'client': new ApolloClient({
            cache: new InMemoryCache(),
            uri: "https://gateway-arbitrum.network.thegraph.com/api/6cf38e048c3942dabadc023b4ec7224e/subgraphs/id/FbCGRftH4a3yZugY7TnbYgPJVEv2LvMT6oF1fxPe9aJM",
        }),
        'icon': uniswapImage
    },
}
export const clients = {
    'etherium': {
        'graph': etherium,
        'icon': '/img/crypto/etherium.png',
    },
    'arbitrum': {
        'graph': arbitrum,
        'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAnFBMVEVHcEy63veQu9qfzvCfzu+6vMGfzvCg0PGg0PGfzu+fz/H///+ipq77/f7///8hMUf///8UIzqg0PEQrf+Js9IeLUMWKkIHITz19/idn6XU1dgCEC4hJzgnR2NpeotFTl0UWISNuNiCqsdTYXNtkKshO1V/g40Yda8Vi88Qo/U2QVJ5rNDl5+qWyOyMk5wSluF3vetDtPy62/Qxeapv+0azAAAAD3RSTlMAEeV4xPyb3zGpREV4vabElXnOAAABVklEQVQokX2S6ZKCMBCEsTwQ90gmMQnILSJHibq77/9u28FaC3B1/oWv00N6xnGGtV47z2q9EGLxP555QhwOQnizRzYXYh8TxXsh5hO0cUVekGJMUZELdzNu1iVas760TrpB6xWalcS0MUoZoxmVaL26Mc82U0wnQZCmQZBoeKO110M3D5W18zlPl5wHBgcV5u4NbglHOnK+CzkEVsloO4ThjvOzFZg6mkLV+tzXEBwzWaoJNGdcYpz7bS2raApxKYFgqaW8TKAqcMmcIKBGyliNoAlwKeX8RFElre8QhnhkYQVxFUvZjKCG6ymEa1o10UXKTA2gscn0gkZm8K2jO0R8cG0hOGcAJXzv8SF4+0hjs+1BLeXPX/AYGb4f++gigCyT1/vIMOwP7pONjhR8L6Nho96WNluGUJuvbrwmtt7xryVRe31cMNTs87t7tprOy6Xu8Rj9AiYRKklhMZHhAAAAAElFTkSuQmCC',
    },
    'avalanche': {
        'graph': avalanche,
        'icon': 'https://icons.llamao.fi/icons/chains/rsz_avalanche.jpg',
    },
    'base': {
        'graph': base,
        'icon': 'https://dd.dexscreener.com/ds-data/chains/base.png',
    },
    'bsc': {
        'graph': bsc,
        'icon': 'https://dd.dexscreener.com/ds-data/chains/bsc.png',
    },
    'cello': {
        'graph': cello,
        'icon': 'https://dd.dexscreener.com/ds-data/chains/celo.png',
    },
    'optimism': {
        'graph': optimism,
        'icon': 'https://dd.dexscreener.com/ds-data/chains/optimism.png',
    },
    'polygon': {
        'graph': polygon,
        'icon': 'https://icons.llamao.fi/icons/chains/rsz_polygon.jpg',
    },
    'solana': {
        'graph': solana,
        'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAASFBMVEVHcExYmddlgeAu1r5Irc5Hrc2JU/WKVPYj6q1reeMl5bOJUfWUSP0k5rNQndRcjdsd9KU4xsR9YO5pfOIt2b1DtctJqs9ybugVOp/+AAAAC3RSTlMAHE9DQ09NMjJDT2HHxPcAAACSSURBVCiRxdDBDoMgEEVRUMtUoFpB5f//tIPTyJOkpJumd3uCPlDqf+l7Fdiwbcuyrg/uKRWlad+vWkzPEyqzLRbnSosp3XE3yeZwTTszHg25nsOT5EJIUX4sV7JN7T+ojMYvG+dCSqgaz75HySqehdiMzFF3vgecNN7lYLQG4y5ajLyvlGo7NcUR11R9fY0f9AL+uBAN6GmI1QAAAABJRU5ErkJggg==',
    },
};
