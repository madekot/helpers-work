import { useMemo } from 'react';
import { isObjectDuplicate } from '@/fsd/shared/lib/utils/isObjectDuplicate';

export const useDuplicateCalculation = (materialLabel: string, height: number, sheetsCount: number, storedCalculations: Array<unknown>) => {
    const lastCalculation = storedCalculations[storedCalculations.length - 1];

    return useMemo(() => {
        if (lastCalculation) {
            return isObjectDuplicate({ materialLabel, height, sheetsCount }, lastCalculation);
        }
        return false;
    }, [lastCalculation, materialLabel, height, sheetsCount]);
};
