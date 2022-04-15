import React from 'react'
import s from '../friendsElements/friends_elements.module.css'
import friendsPhoto from '../../../img/friends.png'

const FriendsElements: React.FC<IPropsForFriendsElements> = (props) => {
    debugger
    return (
        <div className={s.friends_container}>
            <img src={friendsPhoto} alt="friendsPhotoErr" />
            <div>Имя: {props.name}</div>
            <div>Город: {props.city}</div>
            <div> Возраст: {props.age}</div>
        </div>
    )
}

export default FriendsElements

type IPropsForFriendsElements = {
    name: string
    city: string
    age: number
}

