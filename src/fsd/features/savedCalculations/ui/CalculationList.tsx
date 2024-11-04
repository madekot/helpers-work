import styles from './CalculationList.module.scss';
import { getSheetLabel } from '@/fsd/shared/lib/utils/getSheetLabel';
import { sliceArray } from '@/fsd/shared/lib/utils/sliceArray';
import { reverseArray } from '@/fsd/shared/lib/utils/reverseArray';

export interface ICalculation {
    materialLabel: string;
    height: number;
    sheetsCount: number;
}

interface SavedCalculationsProps {
    savedCalculations: ICalculation[];
    maxItemsToShow?: number;
}

export const CalculationList: React.FC<SavedCalculationsProps> = ({ savedCalculations, maxItemsToShow }) => {
    const reversedCalculations = reverseArray(savedCalculations);
    const limitedCalculations = sliceArray(reversedCalculations, maxItemsToShow);

    if (limitedCalculations.length === 0) {
        return <h3 className={styles.noCalculations}>У вас пока нет ни одного сохраненного расчета</h3>;
    }

    return (
        <div className={styles.container}>
            <h3 className={styles.title}>Сохраненные расчеты:</h3>
            <ul className={styles.list}>
                {limitedCalculations.map((calc, index) => (
                    <li key={index} className={styles.item}>
                        <div>
                            <span className={styles.materialLabel}>{calc.materialLabel}</span>
                        </div>
                        <div>
                            Высота: <b>{calc.height} см</b> - Листы: <b>{calc.sheetsCount} {getSheetLabel(calc.sheetsCount)}</b>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};
