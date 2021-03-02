import React, { Fragment, useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GiftExpertApp = () => {

    const [categories, setCategories] = useState(['Naruto']);
   
    return (
        <Fragment>
            <AddCategory setCategories={setCategories}/>
            <hr/>
            {
                categories.map((category,i) =>(
                    <GifGrid 
                        key={category}
                        category={category}
                    />))
            }
        </Fragment>
    )
}
