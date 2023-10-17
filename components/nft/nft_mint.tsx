'use client'
import React, { useState } from 'react';

const MintNFTComponent: React.FC = () => {
    const [step, setStep] = useState<number>(0);
    const [userChoices, setUserChoices] = useState<string[]>([]);

    const options: string[][] = [
        ["Option 1A", "Option 1B", "Option 1C"],
        ["Option 2A", "Option 2B", "Option 2C"],
        // ... add more options arrays for more steps
    ];

    const handleOptionClick = (choice: string): void => {
        const updatedChoices = [...userChoices, choice];
        setUserChoices(updatedChoices);
        if (step < options.length - 1) {
            setStep(prevStep => prevStep + 1);
        } else {
            console.log("Final choices:", updatedChoices);
            // Here, you can send the choices to the backend or perform other actions
        }
    };

    return (
        <div>
            {options[step].map((option, index) => (
                <button key={index} onClick={() => handleOptionClick(option)}>
                    {option}
                </button>
            ))}
        </div>
    );
};

export default MintNFTComponent;


