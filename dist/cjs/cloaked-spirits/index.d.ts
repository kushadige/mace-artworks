import React from 'react';
import './styles.scss';
type size = 'smallest' | 'xsmall' | 'small' | 'medium' | 'large' | 'huge' | 'responsive';
interface CloakedSpiritsProps {
    size?: size;
}
declare const CloakedSpirits: React.FC<CloakedSpiritsProps>;
export default CloakedSpirits;
