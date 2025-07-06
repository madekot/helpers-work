import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import React from 'react';
import { getCentimeterLabel } from '../../../shared/lib/utils/getCentimeterLabel';

interface Props {
    onHeightChange: (value: number | number[]) => void;
    height: number;
    disabled: boolean;
}

export const HeightRangeSlider: React.FC<Props> = ({
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
                <div style={{marginTop: 20}}>
                    <label htmlFor="height" style={{ marginRight: 5}}>Высота стопы:</label>
                    <b style={{ fontSize: 22 }}>{height.toFixed(1)} {getCentimeterLabel(height)}</b>
                </div>
                <div style={{ marginTop: 30, marginBottom: 40, padding: '0 10px' }}>
                    <Slider
                        value={height}
                        min={0}
                        max={200}
                        step={0.1}
                        onChange={handleChange}
                        disabled={disabled}
                        trackStyle={{
                            backgroundColor: disabled ? '#e0e0e0' : '#007bff',
                            height: 10,
                        }}
                        handleStyle={{
                            borderColor: disabled ? '#e0e0e0' : '#007bff',
                            height: 32,
                            width: 32,
                            marginTop: -14,
                            backgroundColor: disabled ? '#f5f5f5' : '#fff',
                            zIndex: 0,
                            boxShadow: disabled
                                ? 'none'
                                : '0 4px 8px rgba(0, 123, 255, 0.5)',
                        }}
                        railStyle={{
                            backgroundColor: disabled ? '#f5f5f5' : '#ddd',
                            height: 10,
                        }}
                        dotStyle={{
                            backgroundColor: disabled ? '#e0e0e0' : '#007bff',
                            border: 'none',
                        }}
                        activeDotStyle={{
                            borderColor: disabled ? '#e0e0e0' : '#007bff',
                        }}
                    />
                </div>
            </div>
        </div>
    );
};
