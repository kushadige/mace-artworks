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

interface CloakedSpiritsProps {
    size?: size;
}

const CloakedSpirits: React.FC<CloakedSpiritsProps> = ({ size = 'medium' }) => {
    return (
        <div className={`cloaked-spirits--${size}`}>
            <div className="ify">
                <div className="ify__top">
                    <div className="ify__ball"></div>
                </div>
                <div className="ify__bottom"></div>
            </div>
            <div className="ify">
                <div className="ify__top">
                    <div className="ify__ball"></div>
                </div>
                <div className="ify__bottom"></div>
            </div>
            <div className="ify">
                <div className="ify__top">
                    <div className="ify__ball"></div>
                </div>
                <div className="ify__bottom"></div>
            </div>
        </div>
    );
};

export default CloakedSpirits;
