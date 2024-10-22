import { useEffect, useState } from 'react';
import { SingleValue } from 'react-select';
import { toast } from 'react-toastify';

interface SavedCalculation {
    materialLabel: string;
    height: number;
    sheetsCount: number;
}

export const useSavedCalculations = () => {
    const [savedCalculations, setSavedCalculations] = useState<SavedCalculation[]>([]);

    const saveCalculation = (newCalculation: SavedCalculation) => {
        const firstCalculation = savedCalculations[0];

        const isSameAsFirst =
            firstCalculation &&
            firstCalculation.materialLabel === newCalculation.materialLabel &&
            firstCalculation.height === newCalculation.height &&
            firstCalculation.sheetsCount === newCalculation.sheetsCount;

        if (isSameAsFirst) {
            toast.info('Это значение уже сохранено.');
            return;
        }

        const updatedCalculations = [newCalculation, ...savedCalculations];

        if (updatedCalculations.length > 7) {
            updatedCalculations.pop();
        }

        setSavedCalculations(updatedCalculations);
        localStorage.setItem('savedCalculations', JSON.stringify(updatedCalculations));
        toast.success('Сохранение прошло успешно!');
    };

    useEffect(() => {
        const storedCalculations = localStorage.getItem('savedCalculations');
        if (storedCalculations) {
            setSavedCalculations(JSON.parse(storedCalculations));
        }
    }, []);

    return {
        savedCalculations,
        saveCalculation,
    };
};

interface UseHeightCalculationProps {
    material: SingleValue<{ label: string; value: string; thickness: number }> | null;
}

export const useHeightCalculation = ({ material }: UseHeightCalculationProps) => {
    const [height, setHeight] = useState<number>(0);
    const [sheetsCount, setSheetsCount] = useState<number>(0);

    const handleHeightChange = (value: number | number[]) => {
        if (!material) {
            return;
        }
        const selectedHeight = Array.isArray(value) ? value[0] : value;
        setHeight(selectedHeight);
        setSheetsCount(Math.floor(selectedHeight / material.thickness));
    };

    const increaseHeight = (increment: number) => {
        if (!material) {
            return;
        }
        const newHeight = Math.min(height + increment, 200);
        handleHeightChange(newHeight);
    };

    const decreaseHeight = (decrement: number) => {
        if (!material) {
            return;
        }
        const newHeight = Math.max(height - decrement, 0);
        handleHeightChange(newHeight);
    };

    return {
        height,
        sheetsCount,
        handleHeightChange,
        increaseHeight,
        decreaseHeight,
    };
};
