import { HeightRangeSlider, useHeightCalculation } from '@/fsd/features/heightAdjustment';
import { MaterialSelect, useMaterial } from '@/fsd/features/materialAdjustment';
import { CalculationList, SaveButton, notifySaveAlready, notifySaveSuccess, useSavedCalculations } from '@/fsd/features/savedCalculations';
import { Logo } from '@/fsd/widgets/Logo';
import { getSheetLabel } from '@/fsd/shared/lib/utils/getSheetLabel';
import Button from '@/fsd/shared/ui/Button';
import styles from './SheetCalculator.module.scss';
import { isObjectDuplicate } from '@/fsd/shared/lib/utils/isObjectDuplicate';

const SheetCalculator = () => {
    const { material, setMaterial } = useMaterial();
    const { height, sheetsCount, handleHeightChange, increaseHeight, decreaseHeight } = useHeightCalculation(material);
    const { storedCalculations, saveCalculation } = useSavedCalculations();

    const handleSave = () => {
        if (!material) {
            return
        }

        const newCalculation = { materialLabel: material.label, height, sheetsCount };
        const lastCalculation = storedCalculations[storedCalculations.length - 1];

        if (isObjectDuplicate(newCalculation, lastCalculation)) {
            notifySaveAlready();
            return
        }

        if (material && height > 0) {
            saveCalculation({ materialLabel: material.label, height, sheetsCount });
            notifySaveSuccess();
        }
    };

    return (
        <>
            <section className={styles.container}>
                <h2 className={styles.title}>Калькулятор <br /> количества листов</h2>
                <MaterialSelect onMaterialChange={setMaterial} selectedMaterial={material} />
                <HeightRangeSlider onHeightChange={handleHeightChange} height={height} disabled={!material} />
                <div className={styles.heightControls}>
                    <div className={styles.heightControlsColumn}>
                        <Button onClick={() => decreaseHeight(1)} disabled={!material}>- 1 cm</Button>
                        <Button onClick={() => decreaseHeight(0.1)} disabled={!material}>- 0.1 cm</Button>
                    </div>
                    <div className={styles.sheetsCount}>
                        <b className={styles.sheetsCountLabel}>
                            {sheetsCount} <br /> {getSheetLabel(sheetsCount)}
                        </b>
                    </div>
                    <div className={styles.heightControlsColumn}>
                        <Button onClick={() => increaseHeight(1)} disabled={!material}>+ 1 cm</Button>
                        <Button onClick={() => increaseHeight(0.1)} disabled={!material}>+ 0.1 cm</Button>
                    </div>
                </div>
                <SaveButton onClick={handleSave} disabled={!height} className={styles.saveButton} />
                <CalculationList savedCalculations={storedCalculations} maxItemsToShow={5} />
            </section>
            <Logo className={styles.logo} />
        </>
    );
};

export default SheetCalculator;
