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

interface CatProps {
    size?: size;
}

const Cat: React.FC<CatProps> = ({ size = 'medium' }) => {
    return (
        <div className={`cat--${size}`}>
            <div className="head">
                <div className="ears">
                    <div className="ears__left"></div>
                    <div className="ears__right"></div>
                </div>
                <div className="face">
                    <div className="eyes">
                        <div className="eyes__left"></div>
                        <div className="eyes__right"></div>
                    </div>
                    <div className="mouth"></div>
                </div>
            </div>
            <div className="body">
                <div className="paw"></div>
            </div>
        </div>
    );
};

export default Cat;
