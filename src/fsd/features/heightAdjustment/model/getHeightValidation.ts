import { DECREMENT_ONE, DECREMENT_POINT_ONE } from './constants';

export const getHeightValidation = (height: number) => ({
    canDecreaseByOne: height >= DECREMENT_ONE,
    canDecreaseByPointOne: height >= DECREMENT_POINT_ONE,
});