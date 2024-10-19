import { useEffect, useState } from 'react';
import CustomSelect from '../CustomSelect/CustomSelect';
import CustomRangeSlider from '../CustomRangeSlider/CustomRangeSlider';
import { SingleValue } from 'react-select';
import Logo from '../Logo/Logo';
import HeightControls from '../HeightControls/HeightControls';
import Button from '../Button/Button';
import SavedCalculations from '../SavedCalculations/SavedCalculations';

interface SavedCalculation {
    materialLabel: string;
    height: number;
    sheetsCount: number;
}

const SheetCalculator = () => {
    const [height, setHeight] = useState<number>(0);
    const [sheetsCount, setSheetsCount] = useState<number>(0);
    const [material, setMaterial] = useState<SingleValue<{ label: string; value: string; thickness: number }> | null>(null);
    const [savedCalculations, setSavedCalculations] = useState<SavedCalculation[]>([]);

    const handleMaterialChange = (selectedMaterial: SingleValue<{ label: string; value: string; thickness: number }> | null) => {
        setMaterial(selectedMaterial);
        setHeight(0);
        setSheetsCount(0);
    };

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

    const saveCalculation = () => {
        if (!material || height === 0) {
            return
        };

        const roundedHeight = Math.round(height * 100) / 100;
        const newCalculation: SavedCalculation = {
            materialLabel: material.label,
            height: roundedHeight,
            sheetsCount,
        };

        const firstCalculation = savedCalculations[0];

        const isSameAsFirst =
            firstCalculation &&
            firstCalculation.materialLabel === newCalculation.materialLabel &&
            firstCalculation.height === newCalculation.height &&
            firstCalculation.sheetsCount === newCalculation.sheetsCount;

        if (!isSameAsFirst) {
            const updatedCalculations = [newCalculation, ...savedCalculations];

            if (updatedCalculations.length > 7) {
                updatedCalculations.pop();
            }

            setSavedCalculations(updatedCalculations);
            localStorage.setItem('savedCalculations', JSON.stringify(updatedCalculations));
        }
    };

    useEffect(() => {
        const storedCalculations = localStorage.getItem('savedCalculations');
        if (storedCalculations) {
            setSavedCalculations(JSON.parse(storedCalculations));
        }
    }, []);

    return (
        <div style={{ maxWidth: 390, fontSize: 16, padding: 16, display: 'flex', flexDirection: 'column' }}>
            <h2 style={{ color: 'rgb(0, 123, 255)' }}>Калькулятор <br />Количества листов в стопе</h2>

            <CustomSelect onMaterialChange={handleMaterialChange} material={material} />

            <CustomRangeSlider onHeightChange={handleHeightChange} height={height} disabled={!material} />

            <HeightControls decreaseHeight={decreaseHeight} increaseHeight={increaseHeight} sheetsCount={sheetsCount} material={material} />

            <Button onClick={saveCalculation} disabled={!height} style={{ marginTop: 20 }}>
                Сохранить
            </Button>

            <SavedCalculations savedCalculations={savedCalculations} />

            <div style={{ margin: 'auto auto 0 auto', opacity: 0.7 }}>
                <Logo />
            </div>
        </div>
    );
};

export default SheetCalculator;
