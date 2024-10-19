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
    return (
        <div style={{ marginTop: 20 }}>
            <h3>Сохраненные расчеты:</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
                {savedCalculations.map((calc, index) => (
                    <li key={index} style={{ padding: 5, borderBottom: '1px solid rgb(0, 123, 255)' }}>
                        {calc.materialLabel}: <br></br>{calc.height} см - {calc.sheetsCount} листов
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SavedCalculations;
