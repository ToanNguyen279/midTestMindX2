import React from 'react'
import './NewRelease.css'


export default function NewRelease({ listItemsKey, itemClick }) {

    const listItems = listItemsKey
    const listProduct = listItems.map(product =>

        <div className='releaseItems' key={product.id} onClick={() => itemClick(product)}>
            <div className='releaseItem'>
                <div className='releaseItemImg'>
                    <img src={product.image} alt="" />
                    <div className='overlay'></div>
                </div>
                <p> Episode {product.episode}</p>
            </div>
            <h2>{product.movieName}</h2>
        </div>

    )

    return (
        <>
            <div className='releaseContainer'>
                <h1>New Release</h1>
                <div className='releaseContent'>
                    {listProduct}
                </div>
            </div>


        </>
    )
}