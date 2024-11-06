// src/components/StepAdditionalServices.tsx

import React, { useState } from "react";

interface StepAdditionalServicesProps {
    onNext: (data: { additionalServices: string[] }) => void;
}

const StepAdditionalServices: React.FC<StepAdditionalServicesProps> = ({ onNext }) => {
    const [selectedServices, setSelectedServices] = useState<string[]>([]);

    const serviceOptions = [
        "Baseboards",
        "Inside the Fridge",
        "Inside the Oven",
        "Walls"
    ];

    const handleCheckboxChange = (service: string) => {
        setSelectedServices(prev =>
            prev.includes(service)
                ? prev.filter(item => item !== service)
                : [...prev, service]
        );
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onNext({ additionalServices: selectedServices });
    };

    return (
        <form onSubmit={handleSubmit}>
            <fieldset>
                <legend>Select Additional Services</legend>
                {serviceOptions.map((service) => (
                    <label key={service}>
                        <input
                            type="checkbox"
                            value={service}
                            checked={selectedServices.includes(service)}
                            onChange={() => handleCheckboxChange(service)}
                        />
                        {service}
                    </label>
                ))}
            </fieldset>
            <button type="submit">Next</button>
        </form>
    );
};

export default StepAdditionalServices;
