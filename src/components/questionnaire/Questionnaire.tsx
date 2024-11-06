import React, { useState } from "react";
import StepAddress from "./StepAddress";
import StepPhone from "./StepPhone"; 
import StepHouseDetails from "./StepHouseDetailsProps";
import StepAdditionalServices from "./StepAdditionalServices";

type FormData = {
    address: string;
    bedrooms: number;
    bathrooms: number;
    squareFeet: number;
    phoneNumber: string;
    additionalServices: string[];
};

const initialFormData: FormData = {
    address: "",
    bedrooms: 0,
    bathrooms: 0,
    squareFeet: 0,
    phoneNumber: "",
    additionalServices: []
};

const Questionnaire: React.FC = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState<FormData>(initialFormData);

    const handleNextStep = (newData: Partial<FormData>) => {
        setFormData(prev => ({ ...prev, ...newData }));
        setStep(step + 1);
    };

    return (
        <div className="questionnaire">
            {step === 1 && <StepAddress onNext={(data) => handleNextStep({ address: data.address })} />}
            {step === 2 && <StepHouseDetails onNext={(data) => handleNextStep({ bedrooms: data.bedrooms, bathrooms: data.bathrooms, squareFeet: data.squareFeet })} />}
            {step === 3 && <StepPhone onNext={(data) => handleNextStep({ phoneNumber: data.phoneNumber })} />}
            {step === 4 && <StepAdditionalServices onNext={(data) => handleNextStep({ additionalServices: data.additionalServices })} />}
            {step > 4 && (
                <div>
                    <h2>Thank you for completing the questionnaire!</h2>
                    <pre>{JSON.stringify(formData, null, 2)}</pre>
                </div>
            )}
        </div>
    );
};

export default Questionnaire;
