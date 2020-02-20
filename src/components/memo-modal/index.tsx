import React, { useState, FormEvent } from 'react'
import { SketchPicker } from 'react-color'

import { ModalProps } from '../types'

const Index:React.FC<ModalProps> = ({ title, description, background, onClick }) => {

    const [isUpdate, setIsUpdate] = useState(false)
    const [memoTitle, setTitle] = useState(title)
    const [memoDescription, setDescription] = useState(description)
    const [memoBackground, setBackground] = useState(background)

    const changeToUpdate = () => {
        setIsUpdate(true)
    }

    const changeToMemo = () => {
        setIsUpdate(false)
    }

    const onTitleChange = (e: React.FormEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const onDescriptionChange = (e: React.FormEvent<HTMLInputElement>) => {
        setDescription(e.currentTarget.value)
    }

    const onBackgroundChange = (color: any) => {
        setBackground(color.hex)
    }

    const sendToUpdate = (e: FormEvent) => {
        e.preventDefault()
        fetch('http://localhost:5000/memo', {
            method: 'put',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title: memoTitle, description: memoDescription, background: memoBackground })
        })
    }

    return (
        <div className="memo-modal" style={{background: background}}>
            {isUpdate ? 
                (
                    <form className="modal-form" method="put" onSubmit={(e) => sendToUpdate(e)}>
                        <label>Title</label>
                        <input type="text" name="title" value={memoTitle} onChange={onTitleChange}/><br/>
                        <label>description</label>
                        <input type="text" name="description" value={memoDescription} onChange={onDescriptionChange}/><br/>
                        <label>background</label>
                        <SketchPicker color={memoBackground} onChangeComplete={onBackgroundChange} /><br/>
                        <button type="submit">send</button>
                        <button onClick={changeToMemo}>cancel</button>
                    </form>
                )
                :
                (
                    <div className="modal-contents">
                        <h1>{title}</h1>
                        <hr className="line" />
                        <h3>{description}</h3>
                        <button onClick={changeToUpdate}>Update</button>
                        <button onClick={() => onClick()}>Close</button>
                    </div>
                )
            }
        </div>
    )
}

export default Index