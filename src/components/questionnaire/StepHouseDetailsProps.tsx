// src/components/StepHouseDetails.tsx

import React, { useState } from "react";

interface StepHouseDetailsProps {
    onNext: (data: { bedrooms: number; bathrooms: number; squareFeet: number }) => void;
}

const StepHouseDetails: React.FC<StepHouseDetailsProps> = ({ onNext }) => {
    const [bedrooms, setBedrooms] = useState(0);
    const [bathrooms, setBathrooms] = useState(0);
    const [squareFeet, setSquareFeet] = useState(0);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onNext({ bedrooms, bathrooms, squareFeet });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Bedrooms:
                <input type="number" value={bedrooms} onChange={(e) => setBedrooms(parseInt(e.target.value) || 0)} required />
            </label>
            <label>
                Bathrooms:
                <input type="number" value={bathrooms} onChange={(e) => setBathrooms(parseInt(e.target.value) || 0)} required />
            </label>
            <label>
                Square Feet:
                <input type="number" value={squareFeet} onChange={(e) => setSquareFeet(parseInt(e.target.value) || 0)} required />
            </label>
            <button type="submit">Next</button>
        </form>
    );
};

export default StepHouseDetails;
