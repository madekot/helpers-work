import clsx from 'clsx';
import Button from '@/fsd/shared/ui/Button';

interface SaveButtonProps {
    onClick: () => void;
    disabled?: boolean;
    className?: string;
}

export const SaveButton: React.FC<SaveButtonProps> = ({ onClick, disabled, className }) => {
    return (
        <Button
            onClick={onClick}
            disabled={disabled}
            className={clsx(className, { disabled })}
        >
            Сохранить
        </Button>
    );
};