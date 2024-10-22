import React from 'react';
import clsx from 'clsx';
import styles from './Button.module.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    onClick: () => void;
    children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ onClick, disabled, children, className, ...rest }) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={clsx(styles.customButton, className)}
            {...rest}
        >
            {children}
        </button>
    );
};

export default Button;
