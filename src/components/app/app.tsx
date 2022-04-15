import { MessageOutlined, UserOutlined } from '@ant-design/icons'
import { Layout, Menu } from 'antd'
import React, { ComponentType } from 'react'
import { connect } from 'react-redux'
import { withRouter } from "react-router"
import { NavLink } from 'react-router-dom'
import { compose } from 'redux'
import { initializedThunk } from '../../redux/appReducer'
import { AppStateType } from '../../redux/redux-store'
import { getInitializedData } from '../../redux/selectors'
import Container from '../main_container/container'
import HeaderContainer from './header/headerContainer'
import Loader from './loader/loader'

const { Header, Content, Footer, Sider } = Layout;

type mapStatePropsType = {
    initialized: boolean
}

type mapDispatchPropsType = {
    initializedThunk: () => void
}

type PropsType = mapStatePropsType & mapDispatchPropsType

class App extends React.Component<PropsType> {

    componentDidMount() {
        this.props.initializedThunk()
    }

    render() {

        if (!this.props.initialized) {
            return <Loader isLoading={true} />
        }

        return (
            <>
                <Layout>
                    <Sider
                        breakpoint="lg"
                        collapsedWidth="0"
                        onBreakpoint={broken => {
                            console.log(broken);
                        }}
                        onCollapse={(collapsed, type) => {
                            console.log(collapsed, type);
                        }}
                    >
                        <div className="logo" />
                        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
                            <Menu.Item key="1" icon={<UserOutlined />}>
                                <NavLink to="/profile"><li>Profile</li></NavLink>
                            </Menu.Item>
                            <Menu.Item key="2" icon={<MessageOutlined />}>
                                <NavLink to="/dialogs" ><li>Chat</li></NavLink>
                            </Menu.Item>
                            <Menu.Item key="3" icon={<UserOutlined />}>
                                <NavLink to='/users'><li>Users</li></NavLink>
                            </Menu.Item>

                        </Menu>
                    </Sider>
                    <Layout>
                        <Header className="site-layout-background" style={{ padding: 0 }}>
                            <HeaderContainer />
                        </Header>
                        <Content style={{ margin: '24px 16px 0' }}>
                            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                                <Container />

                            </div>
                        </Content>
                        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                    </Layout>
                </Layout>
            </>
        )
    }


}

const mapStateToProps = (state: AppStateType) => {
    return {
        initialized: getInitializedData(state),
    }
}


export default compose<ComponentType>(
    connect<mapStatePropsType, mapDispatchPropsType, {}, AppStateType>
        (mapStateToProps, { initializedThunk }),
    withRouter
)(App)