// Универсальная функция для получения данных по ключу
export const getItem = <T>(key: string): T | null => {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
};

// Универсальная функция для сохранения данных по ключу
export const setItem = <T>(key: string, value: T) => {
    localStorage.setItem(key, JSON.stringify(value));
};

// Универсальная функция для удаления данных по ключу
export const removeItem = (key: string) => {
    localStorage.removeItem(key);
};