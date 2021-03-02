import React, { useState } from 'react'
import PropTypes from 'prop-types';
export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('');
    const handleInputValue = (e)=>{
        let input = e.target.value;
        setInputValue(input);
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        if (inputValue.trim().length > 2) {
            setCategories(cats=>[inputValue,...cats]);
            setInputValue('')
        }
    }


    return (
        <form onSubmit={handleSubmit}>
            <input type="text"
                onChange={handleInputValue}
                placeholder="Buscar GIF's"
                value={inputValue}
            />
        </form>
    )

}
AddCategory.propTypes = {
    setCategories:PropTypes.func.isRequired
}
