import React from 'react'
import './Explore.css'


export default function Explore({ selectedItem }) {
    // console.log(selectedItem)
    return (
        <>
            <div className='exploreContainer'>
                <h1>Explore</h1>
                <p>What are you gonna watch today ?</p>
                <div className='banner'>
                    <div className='bannerContent'>
                        <img src={selectedItem.banner} alt="" />
                        <div className='overlayBanner'></div>
                    </div>

                    <div className='bannerDes'>
                        <h1>{selectedItem.movieName}</h1>
                        <p>{selectedItem.description}</p>
                    </div>

                </div>
            </div>

        </>
    )
}