import React,{useState, useEffect} from 'react'
import FavouriteFilm from '../components/FavouriteFilm'
import FilmItem from '../components/FilmItem'
import Film from '../components/Film'



 const FilmBox = () => {
    const [films, setFilms] = useState([])
    const [selectFilm, setSelectFilm] = useState('')

    useEffect(() => { 
        fetchFilm()
    }, [])

    const fetchFilm = () => {
        fetch("https://ghibliapi.herokuapp.com/films")
        .then(request => request.json())
        .then(data => setFilms(data))
    }

    const handleFilmSelected = id =>{
        setSelectFilm(id)
    }

    const handleFavouriteToggle = (id) => {
        const updatedFilms = films.map((film) => {
            if(film.id === id ){
                film.favourite = !film.favourite
            }
            return film
        })
        setFilms(updatedFilms)
    }

    
    const selectedtFilm = films.find(film => film.id === selectFilm)
    return (
        <div>
            <h1> I am a Film Box</h1>
            <FilmItem  films={films}  onSelectedFilms={handleFilmSelected}/>
            <FavouriteFilm films={films} onFilmSelected={handleFilmSelected}/>
            <Film film={selectedtFilm } onFavouritetoggle= {handleFavouriteToggle}/>

           
        </div>
    )
}
export default FilmBox;