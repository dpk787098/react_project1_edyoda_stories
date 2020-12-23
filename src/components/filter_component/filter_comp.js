import React from 'react';
import './filter_comp.css';

const FilterComponent = (props) => {
    const {name,selected} = props;
    return ( 
        <div className = {selected ? "filter_wrapper active" : "filter_wrapper"} >{name}</div>
     );
}
 
export default FilterComponent;