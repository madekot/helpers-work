import Select, { SingleValue } from 'react-select';

const papers = [
    { label: 'Матовая мелованная бумага 105гр.', value: 'matte_105', thickness: 0.0095 },
    { label: 'Матовая мелованная бумага 115гр.', value: 'matte_115', thickness: 0.0100 },
    { label: 'Матовая мелованная бумага 130гр.', value: 'matte_130', thickness: 0.0110 },
    { label: 'Матовая мелованная бумага 150гр.', value: 'matte_150', thickness: 0.0130 },
    { label: 'Матовая мелованная бумага 170гр.', value: 'matte_170', thickness: 0.0148 },
    { label: 'Матовая мелованная бумага 200гр.', value: 'matte_200', thickness: 0.0174 },
    { label: 'Матовая мелованная бумага 250гр.', value: 'matte_250', thickness: 0.0230 },
    { label: 'Матовая мелованная бумага 300гр.', value: 'matte_300', thickness: 0.0276 },

    { label: 'Глянцевая мелованная бумага 105гр.', value: 'glossy_105', thickness: 0.0087 },
    { label: 'Глянцевая мелованная бумага 115гр.', value: 'glossy_115', thickness: 0.0085 },
    { label: 'Глянцевая мелованная бумага 130гр.', value: 'glossy_130', thickness: 0.0100 },
    { label: 'Глянцевая мелованная бумага 150гр.', value: 'glossy_150', thickness: 0.0120 },
    { label: 'Глянцевая мелованная бумага 170гр.', value: 'glossy_170', thickness: 0.0134 },
    { label: 'Глянцевая мелованная бумага 200гр.', value: 'glossy_200', thickness: 0.0158 },
    { label: 'Глянцевая мелованная бумага 250гр.', value: 'glossy_250', thickness: 0.0197 },
    { label: 'Глянцевая мелованная бумага 300гр.', value: 'glossy_300', thickness: 0.0237 },

    { label: 'Офсетная бумага 80гр.', value: 'offset_80', thickness: 0.0100 },
    { label: 'Офсетная бумага 160гр.', value: 'offset_160', thickness: 0.0187 },

    { label: 'Глянцевый мелованный двухсторонний Картон 300гр.', value: 'cardboard_300', thickness: 0.0360 },
    { label: 'Глянцевый мелованный односторонний Картон 230гр.', value: 'cardboard_230', thickness: 0.0320 },
    { label: 'Глянцевый мелованный односторонний Картон 270гр.', value: 'cardboard_270', thickness: 0.0340 },
];

interface CustomSelectProps {
    material: SingleValue<{ label: string; value: string; thickness: number }>;
    onMaterialChange: (newValue: SingleValue<{ label: string; value: string; thickness: number }>) => void;
}

const CustomSelect = ({ material, onMaterialChange }: CustomSelectProps) => {
    return (
        <div style={{ marginBottom: 20 }}>
            <Select
                options={papers}
                value={material}
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
                    })
                }}
            />
        </div>
    );
};

export default CustomSelect;
