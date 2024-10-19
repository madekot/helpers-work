import React from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

interface CustomSheetsSliderProps {
    onSheetsCountChange: (value: number) => void;
    sheetsCount: number;
    disabled: boolean;
}

const CustomSheetsSlider: React.FC<CustomSheetsSliderProps> = ({ onSheetsCountChange, sheetsCount, disabled }) => {
    const handleChange = (newValue: number | number[]) => {
        onSheetsCountChange(newValue as number);
    };

    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ flex: 1 }}>
                <label htmlFor="sheets" style={{ marginRight: 5 }}>Количество листов: </label>
                <b>{sheetsCount}</b>
                <Slider
                    value={sheetsCount}
                    min={0}
                    max={1000}
                    step={1}
                    handleStyle={{ zIndex: 0 }}
                    onChange={handleChange}
                    disabled={disabled} // Отключение ползунка
                />
            </div>
        </div>
    );
};

export default CustomSheetsSlider;
