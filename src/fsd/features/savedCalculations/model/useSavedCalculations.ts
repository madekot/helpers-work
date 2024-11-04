import { useEffect, useState } from 'react';
import { loadCalculations, saveCalculations } from './storage';

interface SavedCalculation {
    materialLabel: string;
    height: number;
    sheetsCount: number;
}

export const useSavedCalculations = () => {
    const [storedCalculations, setStoredCalculations] = useState<SavedCalculation[]>([]);

    useEffect(() => {
        const saved = loadCalculations();
        setStoredCalculations(saved);
    }, []);

    const saveCalculation = (newCalculation: SavedCalculation) => {
        const updatedCalculations = [...storedCalculations, newCalculation];
        setStoredCalculations(updatedCalculations);
        saveCalculations(updatedCalculations);
    };

    const clearCalculations = () => {
        setStoredCalculations([]);
        clearCalculations();
    };

    return {
        storedCalculations,
        saveCalculation,
        clearCalculations,
    };
};
