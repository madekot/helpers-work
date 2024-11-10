export const isObjectDuplicate = (newCalculation: object, lastCalculation: object | null): boolean => {
    if (!lastCalculation) return false;
    return JSON.stringify(newCalculation) === JSON.stringify(lastCalculation);
};
