import { materials } from '../model/materialOptions';
import Select, { SingleValue } from 'react-select';

interface Props {
    selectedMaterial: SingleValue<{ label: string; value: string; thickness: number }>;
    onMaterialChange: (newValue: SingleValue<{ label: string; value: string; thickness: number }>) => void;
}

export const MaterialSelect: React.FC<Props> = ({ selectedMaterial, onMaterialChange }) => {
    return (
        <div style={{ marginBottom: 20 }}>
            <Select
                options={materials}
                value={selectedMaterial}
                onChange={onMaterialChange}
                placeholder={'Выберите или выполните поиск'}
                isClearable
                styles={{
                    control: (base) => ({
                        ...base,
                        padding: '16px',
                        fontWeight: 'bold',
                        lineHeight: 1.4,
                    }),
                    singleValue: (base) => ({
                        ...base,
                        whiteSpace: 'wrap',
                    }),
                }}
            />
        </div>
    );
};