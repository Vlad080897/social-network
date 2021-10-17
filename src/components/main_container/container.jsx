import React from 'react'
import Navigation from './navigation/index'
import Context from './context/context'
import s from '../main_container/container.module.css'
import Dialogs from './dialogs/dialogs'
import { BrowserRouter, Route } from 'react-router-dom'
import News from './news/news'
import Music from './music/music'
import Settings from './settings/settings'
import Friends from '../main_container/friends/friends'
import NewsContainer from './news/newsContainer'
import UsersContainer from './users/usersContainer'
import User2Container from './users/user2Container'
import ContextContainer from './context/contextContainer'
import ContextContainer2 from './context/contextContainer2'
import Login from './login/login'
import withSuspense from '../../hoc/lazyComponent'


const DialogsContainer = React.lazy(() => import('./dialogs/dialogsContainer'));




const Container = (props) => {

    return (

        <div className={s.container1}>
            <Navigation></Navigation>

            <Route path='/profile/:userID?'
                render={() => <ContextContainer2 />}>
            </Route>
            <Route path='/dialogs'
                render={withSuspense(DialogsContainer)} ></Route>
            <Route path='/news'
                render={() => <NewsContainer newsPage={props.state.newsPage} dispatch={props.dispatch} />}></Route>
            <Route path='/music'
                render={() => <Music />}></Route>
            <Route path='/settings' render={() => <Settings />}></Route>
            <Route path='/friends'
                render={() => <Friends friends={props.friends} />}></Route>
            <Route path='/users'
                render={() => <User2Container />} />
            <Route path='/login'
                render={() => <Login />} />




        </div>



    )
}

export default Container