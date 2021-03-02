import React from 'react'
import { UseFetchGifs } from '../hooks/UseFetchGifs'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    const {data:images, loading} = UseFetchGifs(category);
   
    return (
        <>
            <h3 className="animate__animated animate__fadeIn">{category}</h3>
            
            {loading && <p className="animate__animated animate__flash animate__infinite">Loading...</p>}
            
            <div className="cardColumns">
                {
                    images.map( img =>(
                        <GifGridItem 
                            key={img.id}
                            {...img}
                        />
                    ))
                }
            </div>
        </>
    )
}
