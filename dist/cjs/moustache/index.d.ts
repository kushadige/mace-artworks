import React from 'react';
import './styles.scss';
type size = 'smallest' | 'xsmall' | 'small' | 'medium' | 'large' | 'huge' | 'responsive';
interface MoustacheProps {
    size?: size;
}
declare const Moustache: React.FC<MoustacheProps>;
export default Moustache;
