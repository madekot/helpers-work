import { useState, useCallback, useMemo } from 'react';

export const useHeightAdjuster = () => {
    const [height, setHeight] = useState<number>(0);

    const handleHeightChange = useCallback((value: number | number[]) => {
        const newHeight = Array.isArray(value) ? value[0] : value;
        setHeight(newHeight);
    }, []);

    const increaseHeight = useCallback((increment: number) => {
        setHeight((prevHeight) => parseFloat((prevHeight + increment).toFixed(2)));
    }, []);

    const decreaseHeight = useCallback((decrement: number) => {
        setHeight((prevHeight) => parseFloat((Math.max(prevHeight - decrement, 0).toFixed(2))));
    }, []);

    return useMemo(() => ({
        height,
        handleHeightChange,
        increaseHeight,
        decreaseHeight,
    }), [height, handleHeightChange, increaseHeight, decreaseHeight]);
};
