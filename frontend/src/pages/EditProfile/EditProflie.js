import { uploads } from '../../utils/config'
import {useSelector, useDispatch} from "react-redux"
import { profile, resetMessage, updateProfile } from '../../slices/userSlice'
import React, { useEffect, useState } from 'react'
import "./EditProfile.css"
import Message from '../../components/Message'

const EditProflie = () => {

    const dispatch = useDispatch()
    const {user, message, error, loading} = useSelector((state) => state.user)

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [profileImage, setProfileImage] = useState("")
    const [bio, setBio] = useState("")
    const [previewImage, setPreviewImage] = useState("")

    //load user data
    useEffect(() => {
        dispatch(profile())
    }, [dispatch])

    //preencher form com os dados do user
    useEffect(() => {
        if(user){
            setName(user.name)
            setEmail(user.email)
            setBio(user.bio)
        }
    }, [user])

    const handleSubmit = async(e) => {
        e.preventDefault()
        // pegar states do user e colocando num objeto
        const userData = {
            name
        }

        if(profileImage){
            userData.profileImage = profileImage
        }

        if(bio){
            userData.bio = bio
        }

        if(password){
            userData.password = password
        }

        //construir form-data
        const formData = new FormData()

        const userFormData = Object.keys(userData).forEach((key) => formData.append(key, userData[key]))

        formData.append("user", userFormData)

        await dispatch(updateProfile(formData))

        setTimeout(() => {
            dispatch(resetMessage())
        }, 2000);
    }

    const handleFile = (e) => {
        const image = e.target.files[0]
        setPreviewImage(image)
        setProfileImage(image)
    }

    return (
        <div id='edit-profile'>
            <h2>Edite seus dados</h2>
            <p className="subtitle">Adicione uma imagem de perfil e uma descrição</p>
            {(user.profileImage || previewImage) && (
                <img className='profile-image' src={previewImage ? URL.createObjectURL(previewImage) : `${uploads}/users/${user.profileImage}`} alt="" />
            )}
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Nome' onChange={(e) => setName(e.target.value)} value={name || ""} />
                <input type="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)} value={email || ""} />
                <label >
                    <span>Imagem de Perfil:</span>
                    <input type="file" onChange={handleFile} />
                </label>
                <label >
                    <span>Descrição:</span>
                    <input type="text" placeholder='Descrição' onChange={(e) => setBio(e.target.value)} value={bio || ""} />
                </label>
                <label >
                    <span>Alterar Senha</span>
                    <input type="password" placeholder='Nova Senha' onChange={(e) => setPassword(e.target.value)} value={password || ""} />
                </label>
                {!loading && <input type="submit" value='Atualizar' />}
                {loading && <input type="submit" value='Aguarde...' disabled />}
                {error && <Message msg={error} type="error" />}
                {message && <Message msg={message} type="success" />}
            </form>
        </div>
    )
}

export default EditProflie