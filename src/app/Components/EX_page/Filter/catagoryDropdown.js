'use client'
import { useState } from "react";

const CategoryDropdown = () => {
    const categories = [
        'Mobiles',
        'Electronics',
        'Vehicles',
        'Home & Living',
        'Pets & Animals',
        'Property',
        "Women's Fashion & Beauty",
        "Men's Fashion & Grooming",
        'Hobbies, Sports & Kids',
        'Business & Industry',
        'Essentials',
        'Education',
        'Agriculture',
        'Services',
        'Jobs',
        'Overseas Jobs',
    ];

    const [selectedCategory, setSelectedCategory] = useState('');

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    return (
        <div className="w-full mt-4 shadow">
            <select className="rounded h-10 bg-gray-300 focus:outline-none" value={selectedCategory} onChange={handleCategoryChange}>
                <option className="opacity-[0.5]" value="">Select a Category</option>
                {categories.map((category, index) => (
                    <option key={index} value={category}>
                        {category}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default CategoryDropdown;
