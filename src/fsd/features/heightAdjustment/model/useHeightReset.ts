import { useEffect } from 'react';
import { MaterialOption } from '../../materialAdjustment';

export const useHeightReset = (material: MaterialOption | null, resetHeight: (value: number) => void) => {
    useEffect(() => {
        resetHeight(0);
    }, [material, resetHeight]);
};
