import React from 'react'

export const FilmItem = ({films, onSelectedFilms}) => {

    const handleChange = event => {
        onSelectedFilms(event.target.value)
    }
    return (
        <select defaultValue=" " onChange={handleChange}>
        <option value="" disabled> Choose a Film</option>{
            films.map(film => {
               return(<option key={film.id}
                value = {film.id}>{film.title}</option>
               )
            })
            
        }
        

        </select>
    )
}


export default FilmItem;
