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

interface MoustacheProps {
    size?: size;
}

const Moustache: React.FC<MoustacheProps> = ({ size = 'medium' }) => {
    return (
        <div className={`moustache--${size}`}>
            <div className="moustache__left">
                <div className="moustache__balls"></div>
            </div>
            <div className="moustache__middle"></div>
            <div className="moustache__right">
                <div className="moustache__balls"></div>
            </div>
        </div>
    );
};

export default Moustache;
