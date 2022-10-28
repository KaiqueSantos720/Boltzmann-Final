import React from 'react'
import "./Search.css"
import { useEffect } from 'react'  
import {useResetComponentMessage} from "../../hooks/useResetComponentMessage"
import {useDispatch, useSelector} from 'react-redux'
import {useQuery} from "../../hooks/useQuery"
import { searchPhotos, like } from '../../slices/photoSlice'
import PhotoItem from '../../components/PhotoItem'
import LikeContainer from '../../components/LikeContainer'
import { Link } from 'react-router-dom'

const Search = () => {
    const query = useQuery()
    const search = query.get("q")

    const dispatch = useDispatch()
    const resetMessage = useResetComponentMessage(dispatch)

    const {user} = useSelector((state) => state.auth)
    const {photos, loading} = useSelector((state) => state.photo)

    //carregar photos
    useEffect(() => {
        dispatch(searchPhotos(search))
    }, [dispatch, search])

    const handleLike = (photo) => {
        dispatch(like(photo._id))
        resetMessage()
    }

    if(loading){
        return <p>Carregando...</p>
    }

    return (
        <div id='search'>
            <h2>Você está buscando por: {search}</h2>
            {photos && photos.map((photo) => (
                <div key={photo._id}>
                    <PhotoItem photo={photo} />
                    <LikeContainer photo={photo} user={user} handleLike={handleLike} />
                    <Link className="btn" to={`/photos/${photo._id}`}>Ver Mais</Link>
                </div>
            ))}
            {photos && photos.length === 0 && (
                <h2 className="no-photos">
                    Não foram encontrados resultados
                </h2>
            )}
        </div>
    )
}

export default Search