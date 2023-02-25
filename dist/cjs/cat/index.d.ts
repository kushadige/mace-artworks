import React from 'react';
import './styles.scss';
type size = 'smallest' | 'xsmall' | 'small' | 'medium' | 'large' | 'huge' | 'responsive';
interface CatProps {
    size?: size;
}
declare const Cat: React.FC<CatProps>;
export default Cat;
