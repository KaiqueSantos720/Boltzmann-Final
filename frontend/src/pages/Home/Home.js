import "./Home.css"
import LikeContainer from '../../components/LikeContainer'
import PhotoItem from '../../components/PhotoItem'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { useResetComponentMessage } from "../../hooks/useResetComponentMessage"
import { useSelector, useDispatch } from "react-redux"
import { getPhotos, like } from "../../slices/photoSlice"

const Home = () => {
    const dispatch = useDispatch()

    const resetMessage = useResetComponentMessage(dispatch)

    const {user} = useSelector((state) => state.auth)
    const {photos, loading} = useSelector((state) => state.photo)

    //carregar todas as fotos
    useEffect(() => {
        dispatch(getPhotos())
    }, [dispatch])

    //like de photo
    const handleLike = (photo) => {
        dispatch(like(photo._id))
        resetMessage()
    }

    if(loading){
        return <p>Carregando...</p>
    }

    return (
        <div id="home">
            {photos && photos.map((photo) => (
                <div key={photo._id}>
                    <PhotoItem photo={photo} />
                    <LikeContainer photo={photo} user={user} handleLike={handleLike} />
                    <Link className="btn" to={`/photos/${photo._id}`}>Ver Mais</Link>
                </div>
            ))}
            {photos && photos.length === 0 && (
                <h2 className="no-photos">
                    Ainda não há fotos publicadas, <Link to={`/users/${user._id}`}>Clique Aqui</Link>
                </h2>
            )}
        </div>
    )
}

export default Home