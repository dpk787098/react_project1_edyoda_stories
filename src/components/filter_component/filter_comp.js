import React from 'react';
import styles from './filter_comp.module.css';

const FilterComponent = (props) => {
    const {name,selected} = props;
    return ( 
        <div className = {selected ? `${styles.filter_wrapper} ${styles.active}` : `${styles.filter_wrapper}`} >{name}</div>
     );
}
 
export default FilterComponent;