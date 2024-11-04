interface SavedCalculation {
    materialLabel: string;
    height: number;
    sheetsCount: number;
}

const STORAGE_KEY = 'savedCalculations';

export const loadCalculations = (): SavedCalculation[] => {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
};

export const saveCalculations = (calculations: SavedCalculation[]) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(calculations));
};

export const clearCalculations = () => {
    localStorage.removeItem(STORAGE_KEY);
};
