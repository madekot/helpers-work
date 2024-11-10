// useMaterial.ts
import { useState } from 'react';
import { MaterialOption } from './materialOptions';


export const useMaterial = () => {
    const [material, setMaterial] = useState<MaterialOption | null>(null);

    return { material, setMaterial };
};
