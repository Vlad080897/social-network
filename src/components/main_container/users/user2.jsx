import React from "react";
import userPhotoBlock from '../../img/images.png'
import { NavLink } from "react-router-dom";
import Paginator from "../paginator/paginator";
import s from '../users/user2.module.css'

const User2 = (props) => {
    debugger
    return (
        <>
            <div className={s.container}>
                <Paginator totalItemsCount={props.state.totalUserCount} portion={props.state.portion}
                    currentPage={props.state.currentPage} pageHasChanged={props.pageHasChanged}
                />
                {props.state.users.map((u) => {
                    return <div>
                        <NavLink to={'/profile/' + u.id}>
                            <img src={u.photos.small === null ? userPhotoBlock : u.photos.small} alt="" />
                        </NavLink>
                        <div>
                            <span>{u.name} </span>
                        </div>
                        {u.followed === true ? <button disabled={props.state.following.some(id => id === u.id)} onClick={() => props.unFollowUser(u.id)}>unFollow</button>
                            :
                            <button onClick={() => props.followUser(u.id)} disabled={props.state.following.some(id => id === u.id)}>Follow</button>}

                    </div>
                })}


            </div>
        </>
    )
}

export default User2