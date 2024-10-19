import { getSheetLabel } from '@/utils';
import React from 'react';

interface SavedCalculation {
    materialLabel: string;
    height: number;
    sheetsCount: number;
}

interface SavedCalculationsProps {
    savedCalculations: SavedCalculation[];
}

const SavedCalculations: React.FC<SavedCalculationsProps> = ({ savedCalculations }) => {
    if (!savedCalculations.length) {
        return <h3 style={{ textAlign: 'center' }}>У вас пока нет ни одного сохраненного расчета</h3>
    }

    return (
        <div style={{ marginTop: 20 }}>
            <h3>Сохраненные расчеты:</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
                {savedCalculations.map((calc, index) => (
                    <li key={index} style={{ padding: 5, borderBottom: '1px solid rgb(0, 123, 255)' }}>
                        {calc.materialLabel}: <br></br>{calc.height} см - {calc.sheetsCount} {getSheetLabel(calc.height)}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SavedCalculations;
