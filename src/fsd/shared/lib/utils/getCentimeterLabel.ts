
export const getCentimeterLabel = (height: number): string => {
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
