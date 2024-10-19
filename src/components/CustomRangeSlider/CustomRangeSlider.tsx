import { getCentimeterLabel } from '@/utils';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import React from 'react';

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
