import React from 'react';
import styles from './Button.module.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    onClick: () => void;
    children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ onClick, disabled, children, ...rest }) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`${styles.customButton} ${disabled ? styles.disabled : ''}`} // Применяем классы из SCSS
            {...rest}
        >
            {children}
        </button>
    );
};

export default Button;
