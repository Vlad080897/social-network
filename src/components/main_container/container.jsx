import React from 'react'
import Navigation from './navigation/index'
import s from '../main_container/container.module.css'
import { Route } from 'react-router-dom'
import UserContainer from './users/user2Container'
import ContextContainer2 from './context/contextContainer2'
import Login from './login/login'
import withSuspense from '../../hoc/lazyComponent'
import { Redirect, Switch } from 'react-router'


const DialogsContainer = React.lazy(() => import('./dialogs/dialogsContainer'));
const NewsContainer = React.lazy(() => import('./news/newsContainer'));
const Music = React.lazy(() => import('./music/music'));
const SettingsContainer = React.lazy(() => import('./settings/settingsContainer'));
const Friends = React.lazy(() => import('../main_container/friends/friends'));


const Container = () => {

    return (

        <div className={s.container1}>

            <Navigation></Navigation>

            <Switch>
                <Route exact path='/'
                    render={() => <Redirect to='/profile' />}>
                </Route>

                <Route path='/profile/:userID?'
                    render={() => <ContextContainer2 />}>
                </Route>
                <Route path='/dialogs'
                    render={withSuspense(DialogsContainer)} ></Route>
                <Route path='/news'
                    render={withSuspense(NewsContainer)}></Route>
                <Route path='/music'
                    render={withSuspense(Music)}></Route>
                <Route path='/settings' render={withSuspense(SettingsContainer)}></Route>
                {/* <Route path='/friends'
                    render={withSuspense(Friends)}></Route> */}
                <Route path='/users'
                    render={() => <UserContainer />} />
                <Route path='/login'
                    render={() => <Login />} />

                <Route path='*'
                    render={() => <div>404 NOT FOUND</div>} />
            </Switch>


        </div>



    )
}

export default Container