import React from 'react';
import './styles.scss';
type size = 'smallest' | 'xsmall' | 'small' | 'medium' | 'large' | 'huge' | 'responsive';
interface EyeofSauronProps {
    size?: size;
}
declare const EyeofSauron: React.FC<EyeofSauronProps>;
export default EyeofSauron;
