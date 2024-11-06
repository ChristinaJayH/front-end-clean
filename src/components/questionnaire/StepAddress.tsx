// src/components/StepAddress.tsx

import React, { useState } from "react";

interface StepAddressProps {
    onNext: (data: { address: string }) => void;
}

const StepAddress: React.FC<StepAddressProps> = ({ onNext }) => {
    const [address, setAddress] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onNext({ address });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Address:
                <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} required />
            </label>
            <button type="submit">Next</button>
        </form>
    );
};

export default StepAddress;
