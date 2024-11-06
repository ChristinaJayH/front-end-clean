// src/components/StepOne.tsx

import React, { useState } from "react";

interface StepOneProps {
    onNext: (data: { address: string }) => void;
}

const StepOne: React.FC<StepOneProps> = ({ onNext }) => {
    const [address, setAddress] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onNext({ address });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Address:
                <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                />
            </label>
            <button type="submit">Next</button>
        </form>
    );
};

export default StepOne;
