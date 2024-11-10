import { useCallback, useEffect, useMemo, useState } from 'react';
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

    const saveCalculation = useCallback((newCalculation: SavedCalculation) => {
        const updatedCalculations = [...storedCalculations, newCalculation];
        setStoredCalculations(updatedCalculations);
        saveCalculations(updatedCalculations);
    }, [storedCalculations]);

    const clearCalculations = useCallback(() => {
        setStoredCalculations([]);
        saveCalculations([]);  // очищаем данные в хранилище
    }, []);

    return useMemo(() => ({
        storedCalculations,
        saveCalculation,
        clearCalculations,
    }), [storedCalculations, saveCalculation, clearCalculations]);
};
