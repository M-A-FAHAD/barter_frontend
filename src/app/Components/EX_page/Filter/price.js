'use client'
import React, { useState } from 'react';

export default function Price() {
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');

    const handleMinPriceChange = (e) => {
        setMinPrice(e.target.value);
    };

    const handleMaxPriceChange = (e) => {
        setMaxPrice(e.target.value);
    };

    const handleApplyClick = () => {
        // Your logic for applying the price filter goes here
        console.log('Minimum Price:', minPrice);
        console.log('Maximum Price:', maxPrice);
    };

    return (
        <div className="w-full rounded shadow mt-4">
            <div className="">
                <input
                    type="number"
                    placeholder="Min Price"
                    value={minPrice}
                    onChange={handleMinPriceChange}
                    className="border rounded p-1 m-1 "
                /><br />
                <input
                    type="number"
                    placeholder="Max Price"
                    value={maxPrice}
                    onChange={handleMaxPriceChange}
                    className="border rounded p-1 m-1 "
                />

            </div>
            <div>
                <button
                    onClick={handleApplyClick}
                    className="m-1 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    Apply
                </button>
            </div>
        </div>
    );
}
