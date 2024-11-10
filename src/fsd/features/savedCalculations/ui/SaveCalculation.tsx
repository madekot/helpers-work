import { useDuplicateCalculation } from '../model/useDuplicateCalculation';
import { SaveButton, notifySaveSuccess } from '..';

interface SaveCalculationProps {
    material: { label: string } | null;
    height: number;
    sheetsCount: number;
    storedCalculations: Array<{ materialLabel: string, height: number, sheetsCount: number }>;
    saveCalculation: (calculation: { materialLabel: string, height: number, sheetsCount: number }) => void;
    className?: string;
}

export const SaveCalculation: React.FC<SaveCalculationProps> = ({ material, height, sheetsCount, storedCalculations, saveCalculation, className }) => {
    const isDuplicateCalculation = useDuplicateCalculation(material?.label || '', height, sheetsCount, storedCalculations);

    const handleSave = () => {
        if (!material) {
            return;
        }

        const newCalculation = { materialLabel: material.label, height, sheetsCount };

        if (material && height > 0) {
            saveCalculation(newCalculation);
            notifySaveSuccess();
        }
    };

    return (
        <SaveButton onClick={handleSave} disabled={!height || isDuplicateCalculation} className={className} />
    );
};

