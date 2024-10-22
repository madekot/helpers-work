import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CustomSelect from '../CustomSelect/CustomSelect';
import CustomRangeSlider from '../CustomRangeSlider/CustomRangeSlider';
import Logo from '../Logo/Logo';
import HeightControls from '../HeightControls/HeightControls';
import Button from '../Button/Button';
import SavedCalculations from '../SavedCalculations/SavedCalculations';
import Head from 'next/head';
import { SingleValue } from 'react-select';
import { useHeightCalculation, useSavedCalculations } from '@/hooks';
import styles from './SheetCalculator.module.scss';

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

        try {
            const newCalculation = {
                materialLabel: material.label,
                height: Math.round(height * 100) / 100,
                sheetsCount,
            };
            saveCalculation(newCalculation);
        } catch {
            toast.error('Произошла ошибка при сохранении. Попробуйте снова.');
        }
    };

    return (
        <div className={styles.container}>
            <Head>
                <title>Калькулятор листов в стопе</title>
                <meta name="description" content="Калькулятор для определения количества листов в стопе" />
            </Head>
            <h2 className={styles.title}>Калькулятор <br /> Количества листов в стопе</h2>

            <CustomSelect onMaterialChange={handleMaterialChange} material={material} />

            <CustomRangeSlider onHeightChange={handleHeightChange} height={height} disabled={!material} />

            <HeightControls decreaseHeight={decreaseHeight} increaseHeight={increaseHeight} sheetsCount={sheetsCount} material={material} />

            <Button onClick={handleSave} disabled={!height} className={styles.saveButton}>
                Сохранить
            </Button>

            <SavedCalculations savedCalculations={savedCalculations} />

            <div className={styles.logoContainer}>
                <Logo />
            </div>

            <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} closeOnClick pauseOnHover />
        </div>
    );
};

export default SheetCalculator;
