import React from 'react'
import friendsPhoto from '../../img/friends.png'
import s from '../friends/friends.module.css'
import FriendsElements from './friendsElements/friendsElements'


const Friends = (props) => {
    debugger
    let arrFriends = Object.values(props.friends.friendsPage)
    const friendsElements = arrFriends.map(el => <FriendsElements name={el.name} city={el.city} age={el.age} />)
    

    return (
        <div className={s.friends_container}>
            {friendsElements}
        </div>
    )
}

export default Friends