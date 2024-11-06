// src/components/StepAdditionalRooms.tsx

import React, { useState } from "react";

interface StepAdditionalRoomsProps {
    onNext: (data: { additionalRooms: string[] }) => void;
}

const StepAdditionalRooms: React.FC<StepAdditionalRoomsProps> = ({ onNext }) => {
    const [selectedRooms, setSelectedRooms] = useState<string[]>([]);

    const options = ["Baseboards", "Walls", "Inside Refrigerator", "Inside Oven"];

    const handleCheckboxChange = (room: string) => {
        setSelectedRooms(prevSelected =>
            prevSelected.includes(room)
                ? prevSelected.filter(item => item !== room)
                : [...prevSelected, room]
        );
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onNext({ additionalRooms: selectedRooms });
    };

    return (
        <form onSubmit={handleSubmit}>
            <fieldset>
                <legend>Select Additional Rooms or Features</legend>
                {options.map((option) => (
                    <label key={option}>
                        <input
                            type="checkbox"
                            value={option}
                            checked={selectedRooms.includes(option)}
                            onChange={() => handleCheckboxChange(option)}
                        />
                        {option}
                    </label>
                ))}
            </fieldset>
            <button type="submit">Next</button>
        </form>
    );
};

export default StepAdditionalRooms;
