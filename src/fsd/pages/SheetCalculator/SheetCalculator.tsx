import {
    HeightControls,
    HeightRangeSlider,
    MAX_ITEMS_TO_SHOW,
    getHeightValidation,
    useHeightAdjuster,
    useHeightReset,
    useHeightResetNotification
} from '@/fsd/features/heightAdjustment';

import {
    MaterialSelect,
    useMaterial
} from '@/fsd/features/materialAdjustment';

import {
    CalculationList,
    SaveCalculation,
    useSavedCalculations,
    useSheetsCount
} from '@/fsd/features/savedCalculations';

import { getSheetLabel } from '@/fsd/shared/lib/utils/getSheetLabel';
import { Logo } from '@/fsd/widgets/Logo';
import styles from './SheetCalculator.module.scss';

const SheetCalculator = () => {
    const { material, setMaterial } = useMaterial();
    const { height, handleHeightChange, increaseHeight, decreaseHeight } = useHeightAdjuster();
    const { sheetsCount } = useSheetsCount(height, material);
    const { storedCalculations, saveCalculation } = useSavedCalculations();

    useHeightReset(material, handleHeightChange);
    useHeightResetNotification(height, material)

    const { canDecreaseByOne, canDecreaseByPointOne } = getHeightValidation(height);

    return (
        <>
            <section className={styles.container}>
                <h2 className={styles.title}>Калькулятор <br /> количества листов</h2>
                <MaterialSelect onMaterialChange={setMaterial} selectedMaterial={material} />
                <HeightRangeSlider onHeightChange={handleHeightChange} height={height} disabled={!material} />

                <HeightControls
                    decreaseHeight={decreaseHeight}
                    increaseHeight={increaseHeight}
                    canDecreaseByOne={canDecreaseByOne}
                    canDecreaseByPointOne={canDecreaseByPointOne}
                    material={material}
                >
                    <b className={styles.sheetsCountLabel}>
                        {sheetsCount} <br /> {getSheetLabel(sheetsCount)}
                    </b>
                </HeightControls>

                <SaveCalculation
                    material={material}
                    height={height}
                    sheetsCount={sheetsCount}
                    storedCalculations={storedCalculations}
                    saveCalculation={saveCalculation}
                    className={styles.saveButton}
                />

                <CalculationList savedCalculations={storedCalculations} maxItemsToShow={MAX_ITEMS_TO_SHOW} />
            </section>
            <Logo className={styles.logo} />
        </>
    );
};

export default SheetCalculator;
