import React from 'react'
import usersWithoutPhoto from '../../img/images.png'
import s from './user.module.css'
import Loader from '../../app/loader/loader'
import { NavLink } from 'react-router-dom'




const Users = React.memo((props) => {
    
    let totalPagesCount = Math.ceil(props.totalUsersCount / props.portionUsers)
    const allPages = []

    for (let i = 1; i <= totalPagesCount; i++) {
        allPages.push(i)
    }


    return <div>
        <Loader isLoading={props.isLoading} />
        {allPages.map(p => {
            return <span className={props.currentPage === p ? s.selectes_page : ''} onClick={() => props.onPageChangedThunkCreator(p, props.currentPage)}>{p}</span>;

        })}


        {props.users.map(el => {
            return <div>
                <NavLink to={'/profile/' + el.id}>
                    {<img src={el.photos.small === null ? usersWithoutPhoto : el.photos.small} alt="" className={s.user_default_photo} />}
                </NavLink>
                <div>{el.name}</div>

                {el.followed ?
                    <button disabled={props.following.some(id => id === el.id)} onClick={() => { props.followThunk(el.id) }}>unFollow</button>
                    :
                    <button disabled={props.following.some(id => id === el.id)} onClick={() => { props.unFollowThunk(el.id) }}>Follow</button>
                }
            </div>
        })}
    </div >
})


export default Users