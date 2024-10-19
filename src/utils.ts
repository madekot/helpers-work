export const getSheetLabel = (sheetsCount: number): string => {
    const lastDigit = sheetsCount % 10;
    const lastTwoDigits = sheetsCount % 100;

    if (lastTwoDigits >= 11 && lastTwoDigits <= 19) {
        return 'листов'; // Исключение для чисел от 11 до 19
    }

    if (lastDigit === 1) {
        return 'лист';
    }

    if (lastDigit >= 2 && lastDigit <= 4) {
        return 'листа';
    }

    return 'листов';
};

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