import React from 'react'

export const Film = ({film, onFavouritetoggle}) => {

    if(!film){
    return  null   
    }


    const handleClick = () => {
        onFavouritetoggle(film.id)
    }

    const favouriteBtn = film.favourite ? "Remove from favourites" : "Add to favourites"

    return(
        <>
        <h3> Name: {film.title}</h3>
        <img src= {film.image}></img>
        <button onClick={handleClick}>{favouriteBtn}</button>
        </>

    )
   
}
export default Film;
