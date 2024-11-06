// src/components/StepTwo.tsx

import React, { useState } from "react";

interface StepTwoProps {
    onNext: (data: { bedrooms: number; bathrooms: number; squareFeet: number }) => void;
}

const StepTwo: React.FC<StepTwoProps> = ({ onNext }) => {
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
                <input
                    type="number"
                    value={bedrooms}
                    onChange={(e) => setBedrooms(Number(e.target.value))}
                    required
                />
            </label>
            <label>
                Bathrooms:
                <input
                    type="number"
                    value={bathrooms}
                    onChange={(e) => setBathrooms(Number(e.target.value))}
                    required
                />
            </label>
            <label>
                Square Feet:
                <input
                    type="number"
                    value={squareFeet}
                    onChange={(e) => setSquareFeet(Number(e.target.value))}
                    required
                />
            </label>
            <button type="submit">Next</button>
        </form>
    );
};

export default StepTwo;
