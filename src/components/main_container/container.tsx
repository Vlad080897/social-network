import React from 'react'
import { Redirect, Switch } from 'react-router'
import { Route } from 'react-router-dom'
import withSuspense from '../../hoc/lazyComponent'
import s from '../main_container/container.module.css'
import { ContextContainer } from './context/contextContainer2'
import Login from './login/login'
import { User2 } from './users/user2'



const DialogsContainer = React.lazy(() => import('./dialogs/dialogs'));
const NewsContainer = React.lazy(() => import('./news/newsContainer'));

const SuspendedDialogs = withSuspense(DialogsContainer)
const SuspendedNews = withSuspense(NewsContainer)



const Container: React.FC<ContainerPropsType> = () => {

    return (
        <div className={s.container1}>


            <Switch>
                <Route exact path='/'
                    render={() => <Redirect to='/profile' />}>
                </Route>

                <Route path='/profile/:userID?'
                    render={() => <ContextContainer />}>
                </Route>
                <Route path='/dialogs'
                    render={() => <SuspendedDialogs />} ></Route>
                <Route path='/news'
                    render={() => <SuspendedNews />}></Route>
                {/* <Route path='/music'
                    render={withSuspense(Music)}></Route>
                <Route path='/settings' render={withSuspense(SettingsContainer)}></Route> */}
                {/* <Route path='/friends'
                    render={withSuspense(Friends)}></Route> */}
                <Route path='/users'
                    render={() => <User2 />} />
                <Route path='/login'
                    render={() => <Login />} />

                <Route path='*'
                    render={() => <div>404 NOT FOUND</div>} />
            </Switch>


        </div>
    )
}

export default Container

type ContainerPropsType = {

}