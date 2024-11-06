// src/components/StepPhone.tsx

import React, { useState } from "react";

interface StepPhoneProps {
    onNext: (data: { phoneNumber: string }) => void;
}

const StepPhone: React.FC<StepPhoneProps> = ({ onNext }) => {
    const [phoneNumber, setPhoneNumber] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onNext({ phoneNumber });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Phone Number:
                <input type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />
            </label>
            <button type="submit">Next</button>
        </form>
    );
};

export default StepPhone;
