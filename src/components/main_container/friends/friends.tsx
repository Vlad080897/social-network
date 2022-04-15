import { FriendsType } from '../../../types/types'
import s from '../friends/friends.module.css'
import FriendsElements from './friendsElements/friendsElements'


const Friends: React.FC<IPropsFriendsPage> = (props) => {
    debugger
    let friendsElements = Object.values(props.friends).map(el => 
    <FriendsElements name={el.name} city={el.city} age={el.age} />)


    return (
        <div className={s.friends_container}>
            {friendsElements}
        </div>
    )
}

export default Friends

type IPropsFriendsPage = {
    friends: Array<FriendsType>
}



