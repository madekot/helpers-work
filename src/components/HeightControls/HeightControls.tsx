import React from 'react';
import Button from '../Button/Button';
import { SingleValue } from 'react-select';

interface HeightControlsProps {
    decreaseHeight: (decrement: number) => void;
    increaseHeight: (increment: number) => void;
    sheetsCount: number;
    material: SingleValue<{
        label: string;
        value: string;
        thickness: number;
    }>;
}

const HeightControls: React.FC<HeightControlsProps> = ({ decreaseHeight, increaseHeight, sheetsCount, material }) => {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: 16, alignItems: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                <Button onClick={() => decreaseHeight(1)} disabled={!material}>- 1 cm</Button>
                <Button onClick={() => decreaseHeight(0.1)} disabled={!material}>- 0,1 cm</Button>
            </div>
            <div style={{ textAlign: 'center', width: 150 }}>
                <b style={{ fontSize: 28 }}>{sheetsCount} листов</b>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                <Button onClick={() => increaseHeight(1)} disabled={!material}>+ 1 cm</Button>
                <Button onClick={() => increaseHeight(0.1)} disabled={!material}>+ 0,1 cm</Button>
            </div>
        </div>
    );
};

export default HeightControls;
