import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Search() {
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const search = async (e) => {
        const address = e.target.value;
        if (address.trim() === '') {
            setResults([]); // Clear results if input is empty
            return;
        }

        setLoading(true);
        setError(null); // Clear previous errors

        try {
            const response = await fetch(`https://api.mobula.io/api/1/search?input=${address}`);
            if (!response.ok) {
                throw new Error('Failed to fetch results');
            }

            const data = await response.json(); // Await the response.json() to get the actual data
            setResults(data.data);
        } catch (error) {
            console.log(error);
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    // Log results when they change
    useEffect(() => {
        if (!results) {
            console.log(results);
        }
    }, [results]);

    const formatNumber = (number) => {
        if (number === undefined || number === null || isNaN(number)) {
            return '0.00'; // Return a default value if the number is undefined, null, or not a number
        }
        if (number >= 1000000000) {
            return `${(number / 1000000000).toFixed(2)}B`;  // Format for billions (B)
        } else if (number >= 1000000) {
            return `${(number / 1000000).toFixed(2)}M`;  // Format for millions (M)
        } else if (number >= 1000) {
            return `${(number / 1000).toFixed(2)}K`;  // Format for thousands (K)
        }
        return `${number.toFixed(2)}`;  // For values under 1000, no suffix
    };

    const formatBlockchains = (blockchains) => {
        if (blockchains && blockchains.length > 1) {
            return `Assets (${blockchains.length})`;  // If multiple blockchains, return the count
        }
        return 'Asset';
    };

    const renderAssets = () => {
        return (
            <div>
                {results && results.length > 0 && (
                    <div>
                        <h2>Assets ({results.length})</h2>
                        <ul className="asset-list">
                            {results.map((result, index) => (
                                <Link to={`/asset/${result.name}`} key={index}>
                                    <li className="Searchlogo">
                                        <img src={result.logo} alt={result.name} className="asset-logo" />
                                        <div className="asset-info">
                                            <span>{result.name}</span>
                                            <span className="asset-price">{formatNumber(result.price)}</span>
                                        </div>
                                    </li>
                                </Link>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        );
    };

    const renderPairs = () => {
        return (
            <div>
                {results && results.length > 0 && (
                    <div>
                        <h2>Pairs ({results[0]?.pairs?.length || 0})</h2>
                        <ul className="pair-list">
                            {results[0]?.pairs?.map((pair, index) => (
                                <li key={index} className="pair-item">
                                    <span>
                                        {pair.token1?.symbol} / {pair.token2?.symbol}

                                    </span>
                                    <span className="pair-liquidity">Liquidity: {formatNumber(pair.liquidity)}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        );
    };

    return (
        <div>
            
            <div className="form-group has-search">
                <span className="fa fa-search form-control-feedback"></span>
                <input
                    type="text"
                    onChange={search}
                    className="form-control text-black bg-black text-white"
                    placeholder="Search for token, pair, wallet, ens, token address etc.."
                />
            </div>

            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}

            <div className="search-results">
                {renderAssets()}
                {renderPairs()}
            </div>
        </div>
    );
}