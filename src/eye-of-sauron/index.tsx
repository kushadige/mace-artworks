import React from 'react';
import './styles.scss';

type size =
    | 'smallest'
    | 'xsmall'
    | 'small'
    | 'medium'
    | 'large'
    | 'huge'
    | 'responsive';

interface EyeofSauronProps {
    size?: size;
}

const EyeofSauron: React.FC<EyeofSauronProps> = ({ size = 'medium' }) => {
    return (
        <div className={`eye--${size}`}>
            <div className="pupil"></div>
        </div>
    );
};

export default EyeofSauron;
