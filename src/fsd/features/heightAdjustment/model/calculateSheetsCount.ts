export interface MaterialOption {
    label: string;
    value: string;
    thickness: number;
}

export const calculateSheetsCount = (height: number, material: MaterialOption | null) => {
    return material ? Math.floor(height / material.thickness) : 0;
};