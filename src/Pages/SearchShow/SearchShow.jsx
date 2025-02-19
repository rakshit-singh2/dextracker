import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function SearchShow() {
    const { name } = useParams();

    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // Fetch the data when the component mounts or `name` changes
    useEffect(() => {
        const fetchResults = async () => {
            setLoading(true);
            try {
                const response = await fetch(`https://api.mobula.io/api/1/search?input=${name}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch results');
                }

                const data = await response.json();
                console.log(data);
                setResults(data.data);
            } catch (error) {
                console.log(error);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchResults();
    }, [name]);

    // Log results when they change
    useEffect(() => {
        if (results.length > 0) {
            console.log(results);
        }
    }, [results]);

    const formatNumber = (number) => {
        if (number === undefined || number === null || isNaN(number)) {
            return '0.00';
        }
        if (number >= 1000000000) {
            return `${(number / 1000000000).toFixed(2)}B`;
        } else if (number >= 1000000) {
            return `${(number / 1000000).toFixed(2)}M`;
        } else if (number >= 1000) {
            return `${(number / 1000).toFixed(2)}K`;
        }
        return `${number.toFixed(2)}`;
    };

    return (
        <div className='page-content-wrapper'>
            {loading ? <p>Loading...</p> : error ? <p>{error}</p> : (
                <div>
                    {results.map((token, index) => (
                        <div key={index} className="token-card">
                            <h1>{token.name}</h1>
                            <img src={token.logo} alt={token.name} style={{ width: 50, height: 50 }} />
                            <p>Symbol: {token.symbol}</p>
                            <p>Price: ${formatNumber(token.price)}</p>
                            <p>Market Cap: {formatNumber(token.market_cap)}</p>
                            <p>Liquidity: {formatNumber(token.liquidity)}</p>
                            <p>24h Volume: {formatNumber(token.volume)}</p>
                            
                            <div>
                                <strong>Blockchains:</strong>
                                <ul>
                                    {token.blockchains.map((blockchain, idx) => (
                                        <li key={idx}>{blockchain}</li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <strong>Contracts:</strong>
                                <ul>
                                    {token.contracts.map((contract, idx) => (
                                        <li key={idx}><a href={`https://etherscan.io/address/${contract}`} target="_blank" rel="noopener noreferrer">{contract}</a></li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <strong>Pairs:</strong>
                                <ul>
                                    {token.pairs.map((pair, idx) => (
                                        <li key={idx}>
                                            <div>
                                                <strong>{pair.token0.name} / {pair.token1.name}</strong>
                                                <div>Price: ${formatNumber(pair.price)}</div>
                                                <div>Volume 24h: {formatNumber(pair.volume24h)}</div>
                                                <div>Liquidity: {formatNumber(pair.liquidity)}</div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <a href={token.website} target="_blank" rel="noopener noreferrer">Website</a>
                                <a href={token.twitter} target="_blank" rel="noopener noreferrer">Twitter</a>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
