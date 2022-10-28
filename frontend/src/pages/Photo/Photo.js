import "./Photo.css"
import { uploads } from '../../utils/config'
import Message from '../../components/Message'
import { Link, useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getPhoto, like, comment } from "../../slices/photoSlice"
import PhotoItem from "../../components/PhotoItem"
import LikeContainer from "../../components/LikeContainer"
import {useResetComponentMessage} from "../../hooks/useResetComponentMessage"

const Photo = () => {
    const {id} = useParams()

    const dispatch = useDispatch()
    const {user} = useSelector((state) => state.auth)
    const {photo, loading, error, message} = useSelector((state) => state.photo)

    const resetMessage = useResetComponentMessage(dispatch)

    const [commentText, setCommentText] = useState("")

    useEffect(() => {
        dispatch(getPhoto(id))
    }, [dispatch, id])

    const handleLike = () => {
        dispatch(like(photo._id))
        resetMessage()
    }

    //inserir um comentario
    const handleComment = (e) => {
        e.preventDefault()

        const commentData = {
            comment: commentText,
            id: photo._id
        }

        dispatch(comment(commentData))
        setCommentText("")
        resetMessage()
    }

    if(loading){
        return <p>Carregando...</p>
    }

    return (
        <div id="photo">
            <PhotoItem photo={photo} />
            <LikeContainer photo={photo} user={user} handleLike={handleLike} />
            <div className="message-container">
                {error && <Message msg={error} type='error' />}
                {message && <Message msg={message} type='success' />}
            </div>
            <div className="comments">
                {photo.comments && (
                    <>
                        <h3>Comentários: {photo.comments.length}</h3>
                        <form onSubmit={handleComment}>
                            <input type="text" placeholder="Insira seu comentário" onChange={(e) => setCommentText(e.target.value)} value={commentText || ""} />
                            <input type="submit" value='Enviar' />
                        </form>
                        {photo.comments.length === 0 && <p>Não há comentários</p>}
                        {photo.comments.map((comment) => (
                            <div key={comment.comment} className="comment">
                                <div className="author">
                                    {comment.userImage && (
                                        <img src={`${uploads}/users/${comment.userImage}`} alt={comment.userName} />
                                    )}
                                    <Link to={`/users/${comment.userId}`}><p>{comment.userName}</p></Link>
                                </div>
                                <p>{comment.comment}</p>
                            </div>
                        ))}
                    </>
                )}
            </div>
        </div>
    )
}

export default Photo