'use client'
import React, { useState } from 'react';

export default function Filterby() {
    const [selectedOrder, setSelectedOrder] = useState('newest');
    const [selectedPriceOrder, setSelectedPriceOrder] = useState('highToLow');
    const [selectedCondition, setSelectedCondition] = useState('used');

    const handleOrderChange = (event) => {
        setSelectedOrder(event.target.value);
    };

    const handlePriceOrderChange = (event) => {
        setSelectedPriceOrder(event.target.value);
    };

    const handleConditionChange = (event) => {
        setSelectedCondition(event.target.value);
    };

    return (
        <div className="border p-4 mt-4 rounded shadow w-[15rem] md:w-[100vw] ">
            <label htmlFor="order-selector" className="block text-sm font-medium text-gray-700">
                Select Order:
            </label>
            <select
                id="order-selector"
                value={selectedOrder}
                onChange={handleOrderChange}
                className="block w-full mt-2 p-2 border rounded-md"
            >
                <option value="newest">Newest on top</option>
                <option value="oldest">Oldest on top</option>
            </select>

            <label htmlFor="price-order-selector" className="block mt-4 text-sm font-medium text-gray-700">
                Select Price Order:
            </label>
            <select
                id="price-order-selector"
                value={selectedPriceOrder}
                onChange={handlePriceOrderChange}
                className="block w-full mt-2 p-2 border rounded-md"
            >
                <option value="highToLow">High to Low</option>
                <option value="lowToHigh">Low to High</option>
            </select>

            <label htmlFor="condition-selector" className="block mt-4 text-sm font-medium text-gray-700">
                Select Condition:
            </label>
            <select
                id="condition-selector"
                value={selectedCondition}
                onChange={handleConditionChange}
                className="block w-full mt-2 p-2 border rounded-md"
            >
                <option value="used">Used</option>
                <option value="new">New</option>
            </select>

            {/* <div className="mt-4">
                {selectedOrder === 'newest' ? <p>Show newest content on top</p> : <p>Show oldest content on top</p>}

                {selectedPriceOrder === 'highToLow' ? <p>Show high to low price</p> : <p>Show low to high price</p>}

                {selectedCondition === 'used' ? <p>Show used items</p> : <p>Show new items</p>}
            </div> */}
        </div >
    );
};


