import React from 'react'

 const FavouriteFilm = ({films, onFilmSelected}) => {

    const favouriteFilm = films.filter( film => film.favourite)
    // const handleFavClick = (film) => {
    //     onFilmSelected(film.id)
    // }
    return (
       <>
       <h3>Favourite Films</h3>
       <ul>
           {favouriteFilm.map(film => {
            return(
                <li key = {film.id}>
               <button onClick={() =>onFilmSelected(film.id)}>{film.title}</button>
               </li>
            )
           })}
       </ul>
       </>
    )
}
export default FavouriteFilm;
