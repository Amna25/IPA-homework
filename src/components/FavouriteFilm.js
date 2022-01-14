import React from 'react'

export const FavouriteFilm = ({films, onFilmSelected}) => {

    const favouriteFilm = films.filter( film => film.favourite)
    const handleFavClick = (film) => {
        onFilmSelected(film.id)
    }
    return (
       <>
       <h3>Favourite Films</h3>
       <ul>
           {favouriteFilm.map(film => {
            return(
                <li key = {film.id}>
               <button onClick={handleFavClick}>{film.title}</button>
               </li>
            )
           })}
       </ul>
       </>
    )
}
export default FavouriteFilm;
