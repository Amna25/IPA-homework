import React,{useState, useEffect} from 'react'

export const FilmBox = () => {


    const [filmName, setFilmName] = useState([])

    useEffect(() => { 
        fetchFilm()
    }, [])

    const fetchFilm = () => {
        fetch("https://ghibliapi.herokuapp.com/films")
        .then(request => request.json())
        .then(data => setFilmName(data))
    }
    return (
        <div>
            <h1> I am a Film Box</h1>
        </div>
    )
}
