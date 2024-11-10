import { useState, useEffect } from 'react';
import { MaterialOption } from '../../materialAdjustment';
import { calculateSheetsCount } from './calculateSheetsCount';

export const useHeightCalculation = (material: MaterialOption | null) => {
    const [height, setHeight] = useState<number>(0);
    const [sheetsCount, setSheetsCount] = useState<number>(0);

    const handleHeightChange = (value: number | number[]) => {
        const newHeight = Array.isArray(value) ? value[0] : value;
        setHeight(newHeight);
        setSheetsCount(calculateSheetsCount(newHeight, material));
    };

    const increaseHeight = (increment: number) => {
        setHeight((prevHeight) => {
            const newHeight = parseFloat((prevHeight + increment).toFixed(2));
            setSheetsCount(calculateSheetsCount(newHeight, material));
            return newHeight;
        });
    };

    const decreaseHeight = (decrement: number) => {
        setHeight((prevHeight) => {
            const newHeight = parseFloat((Math.max(prevHeight - decrement, 0).toFixed(2)));
            setSheetsCount(calculateSheetsCount(newHeight, material));
            return newHeight;
        });
    };

    useEffect(() => {
        setHeight(0);
        setSheetsCount(0);
    }, [material]);

    return { height, sheetsCount, handleHeightChange, increaseHeight, decreaseHeight };
};
