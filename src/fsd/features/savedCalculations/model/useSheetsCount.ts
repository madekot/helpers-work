import { useState, useEffect } from 'react';
import { MaterialOption } from '../../materialAdjustment';
import { calculateSheetsCount } from './calculateSheetsCount';

export const useSheetsCount = (height: number, material: MaterialOption | null) => {
    const [sheetsCount, setSheetsCount] = useState<number>(0);

    useEffect(() => {
        if (material) {
            setSheetsCount(calculateSheetsCount(height, material));
        }
    }, [height, material]);

    return { sheetsCount };
};
