import {
    DECREMENT_ONE,
    DECREMENT_POINT_ONE,
    HEIGHT_INCREMENT_ONE,
    HEIGHT_INCREMENT_POINT_ONE,
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
    SaveButton,
    SaveCalculation,
    useSavedCalculations,
    useSheetsCount
} from '@/fsd/features/savedCalculations';

import { getSheetLabel } from '@/fsd/shared/lib/utils/getSheetLabel';
import { Logo } from '@/fsd/widgets/Logo';
import styles from './SheetCalculator.module.scss';
import Button from '@/fsd/shared/ui/Button';

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

                <HeightControls
                    leftColumn={
                        <>
                            <Button onClick={() => decreaseHeight(DECREMENT_ONE)} disabled={!material || !canDecreaseByOne}>- {DECREMENT_ONE} cm</Button>
                            <Button onClick={() => decreaseHeight(DECREMENT_POINT_ONE)} disabled={!material || !canDecreaseByPointOne}>- {DECREMENT_POINT_ONE} cm</Button>
                        </>
                    }
                    middleColumn={
                        <b className={styles.sheetsCountLabel}>
                            {sheetsCount} <br /> {getSheetLabel(sheetsCount)}
                        </b>
                    }
                    rightColumn={
                        <>
                            <Button onClick={() => increaseHeight(HEIGHT_INCREMENT_ONE)} disabled={!material}>+ {HEIGHT_INCREMENT_ONE} cm</Button>
                            <Button onClick={() => increaseHeight(HEIGHT_INCREMENT_POINT_ONE)} disabled={!material}>+ {HEIGHT_INCREMENT_POINT_ONE} cm</Button>
                        </>
                    }
                />
                <HeightRangeSlider onHeightChange={handleHeightChange} height={height} disabled={!material} />

                <SaveCalculation
                    material={material}
                    height={height}
                    sheetsCount={sheetsCount}
                    storedCalculations={storedCalculations}
                    saveCalculation={saveCalculation}
                    className={styles.saveButton}
                    RenderSave={(props) => <SaveButton {...props} />}
                />

                <CalculationList savedCalculations={storedCalculations} maxItemsToShow={MAX_ITEMS_TO_SHOW} />
            </section >
            <Logo className={styles.logo} />
        </>
    );
};

export default SheetCalculator;
