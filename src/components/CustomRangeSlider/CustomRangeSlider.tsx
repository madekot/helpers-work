import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import React from 'react';

const getCentimeterLabel = (height: number): string => {
    const integerPart = Math.floor(height); // Получаем целую часть
    const lastDigit = integerPart % 10;
    const lastTwoDigits = integerPart % 100;

    if (lastTwoDigits >= 11 && lastTwoDigits <= 19) {
        return 'сантиметров'; // Исключение для чисел от 11 до 19
    }

    if (lastDigit === 1) {
        return 'сантиметр';
    }

    if (lastDigit >= 2 && lastDigit <= 4) {
        return 'сантиметра';
    }

    return 'сантиметров';
};

interface CustomRangeSliderProps {
    onHeightChange: (value: number | number[]) => void;
    height: number;
    disabled: boolean;
}

const CustomRangeSlider: React.FC<CustomRangeSliderProps> = ({
    onHeightChange,
    height,
    disabled,
}) => {
    const handleChange = (newValue: number | number[]) => {
        const updatedValue = typeof newValue === 'number' ? newValue : newValue[0];
        onHeightChange?.(updatedValue);
    };

    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ flex: 1 }}>
                <label htmlFor="height" style={{ marginRight: 5 }}>Высота стопы:</label>
                <b style={{ fontSize: 22 }}>{height.toFixed(1)} {getCentimeterLabel(height)}</b>
                <div style={{ marginTop: 20, marginBottom: 30, padding: '0 10px' }}>
                    <Slider
                        value={height}
                        min={0}
                        max={200}
                        step={0.1}
                        handleStyle={{ zIndex: 0 }}
                        onChange={handleChange}
                        disabled={disabled}
                    />
                </div>
            </div>
        </div>
    );
};

export default CustomRangeSlider;
