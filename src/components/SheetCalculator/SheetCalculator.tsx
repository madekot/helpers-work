import { useState } from 'react';
import CustomSelect from '../CustomSelect/CustomSelect';
import CustomRangeSlider from '../CustomRangeSlider/CustomRangeSlider';
import Logo from '../Logo/Logo';
import HeightControls from '../HeightControls/HeightControls';
import Button from '../Button/Button';
import SavedCalculations from '../SavedCalculations/SavedCalculations';
import Head from 'next/head';
import { SingleValue } from 'react-select';
import { useHeightCalculation, useSavedCalculations } from '@/hooks';

const SheetCalculator = () => {
    const [material, setMaterial] = useState<SingleValue<{ label: string; value: string; thickness: number }> | null>(null);

    const { height, sheetsCount, handleHeightChange, increaseHeight, decreaseHeight } = useHeightCalculation({ material });
    const { savedCalculations, saveCalculation } = useSavedCalculations();

    const handleMaterialChange = (selectedMaterial: SingleValue<{ label: string; value: string; thickness: number }> | null) => {
        setMaterial(selectedMaterial);
        handleHeightChange(0);
    };

    const handleSave = () => {
        if (!material || height === 0) {
            return;
        }

        const newCalculation = {
            materialLabel: material.label,
            height: Math.round(height * 100) / 100,
            sheetsCount,
        };

        saveCalculation(newCalculation);
    };

    return (
        <div style={{ fontSize: 16, padding: 16, maxWidth: 768, minWidth: 400, margin: '0 auto' }}>
            <Head>
                <title>Калькулятор листов в стопе</title>
                <meta name="description" content="Калькулятор для определения количества листов в стопе" />
            </Head>
            <h2 style={{ color: 'rgb(0, 123, 255)' }}>Калькулятор <br /> Количества листов в стопе</h2>

            <CustomSelect onMaterialChange={handleMaterialChange} material={material} />

            <CustomRangeSlider onHeightChange={handleHeightChange} height={height} disabled={!material} />

            <HeightControls decreaseHeight={decreaseHeight} increaseHeight={increaseHeight} sheetsCount={sheetsCount} material={material} />

            <Button onClick={handleSave} disabled={!height} style={{ marginTop: 20, width: '100%' }}>
                Сохранить
            </Button>

            <SavedCalculations savedCalculations={savedCalculations} />

            <div style={{ margin: 'auto auto 0 auto', opacity: 0.7, width: 100 }}>
                <Logo />
            </div>
        </div>
    );
};

export default SheetCalculator;
