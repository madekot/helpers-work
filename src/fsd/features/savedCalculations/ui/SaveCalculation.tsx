import { useDuplicateCalculation } from '../model/useDuplicateCalculation';
import { notifySaveSuccess } from '..';


interface SaveButtonProps {
    onClick: () => void;
    disabled?: boolean;
    className?: string;
}

interface SaveCalculationProps {
    material: { label: string } | null;
    height: number;
    sheetsCount: number;
    storedCalculations: Array<{ materialLabel: string, height: number, sheetsCount: number }>;
    saveCalculation: (calculation: { materialLabel: string, height: number, sheetsCount: number }) => void;
    className?: string;
    RenderSave: ({ }: SaveButtonProps) => React.ReactElement;
}

export const SaveCalculation: React.FC<SaveCalculationProps> = ({ material, height, sheetsCount, storedCalculations, saveCalculation, className, RenderSave }) => {
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
        <RenderSave onClick={handleSave} disabled={!height || isDuplicateCalculation} className={className} />
    );
};

