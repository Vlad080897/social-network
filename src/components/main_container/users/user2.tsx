import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import { getCurrentPage, getFollowing, getIsLogged, getLoader, getUsersFilter, getUsersForComponent } from "../../../redux/selectors";
import { getUsers, startFollowUser, stopFollowUser } from "../../../redux/userPageReducer2";
import Loader from "../../app/loader/loader";
import userPhotoBlock from '../../img/images.png';
import Login from "../login/login";
import Paginator from "../paginator/paginator";
import s from '../users/user2.module.css';
import UserSearchForm from "./userSearchForm";
const querystring = require('querystring');



export const User2: React.FC = React.memo(() => {

    const users = useSelector(getUsersForComponent)
    const isLogged = useSelector(getIsLogged)
    const filter = useSelector(getUsersFilter)
    const following = useSelector(getFollowing)
    const currentPage = useSelector(getCurrentPage)
    const loader = useSelector(getLoader)
    const dispatch = useDispatch()

    const history = useHistory()



    useEffect(() => {

        const currentFilter: currentFilter = querystring.parse(history.location.search.substr(1))

        if (Object.values(currentFilter).length === 0 || typeof currentFilter['term'] === 'undefined' || typeof currentFilter['friends'] === 'undefined') {
            debugger
            currentFilter.term = ''
            currentFilter.friends = null
        }
        /*

        /Manual realization of urlKeys parse/ 

        let obj = {
            term: '',
            friends: null,

        }
        
        let termTransform = history.location.search.substr(1).split('&').map((el) => {
            return el.split('=')
        })

        termTransform.forEach((el: Array<string>, index) => {
            if (el[index] === 'undefined') {
                el[index] = ''
            }
            if (el[index] === 'null') {
                el[index] = null as unknown as string
            }
            //@ts-ignore
            return obj[el[0]] = el[1]
        })
        debugger
        */
        dispatch(getUsers(currentPage, currentFilter.term, currentFilter.friends));

    }, [])

    useEffect(() => {
        //const correctFilterTerm = filter.term.replace(/[^A-Za-zА-Яа-яЁё]/g, "");
        history.push({
            pathname: '/users',
            search: `?term=${filter.term}&friends=${filter.choosenFriends}`
        }
        )
    }, [filter])

    if (!isLogged) {
        return <Login />
    }


    return (
        <>


            <div className={s.container}>
                <UserSearchForm />
                <Paginator />
                {loader ?
                    <Loader isLoading={true} />
                    :
                    users.map((u) => {
                        return <div>
                            <NavLink to={'/profile/' + u.id}>
                                <img src={u.photos.small === null ? userPhotoBlock : u.photos.small} alt="" />
                            </NavLink>
                            <div>
                                <span>{u.name} </span>
                            </div>
                            {u.followed === true ? <button disabled={following.some(id => id === u.id)} onClick={() => dispatch(stopFollowUser(u.id))}>unFollow</button>
                                :
                                <button onClick={() => dispatch(startFollowUser(u.id))} disabled={following.some(id => id === u.id)}>Follow</button>}

                        </div>
                    })
                }


            </div>
        </>
    )
})

type currentFilter = {
    term: string,
    friends: boolean | null
    [props: string]: string | boolean | null
}
