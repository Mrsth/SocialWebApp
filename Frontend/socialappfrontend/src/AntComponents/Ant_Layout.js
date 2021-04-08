import React from 'react'
import {Layout, Menu} from 'antd';
import {Link, useHistory} from 'react-router-dom'

const { Header} = Layout;

export default function Ant_Layout(props){
    let history = useHistory();
    const handleLogout = () =>{
        history.push('/antlogin')
        sessionStorage.removeItem("token")
        sessionStorage.removeItem("username")
    }
    
    return(
        <div>
            <Header>
                <div className="logo" />
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                    <Menu.Item key="2">
                        <Link to="/anthome">Home</Link>
                    </Menu.Item>
                    <Menu.Item key="1">
                        <Link to="/antdash">Profile</Link>
                    </Menu.Item>
                    <Menu.Item key="3" onClick={handleLogout}>
                       Logout
                    </Menu.Item>
                </Menu>
            </Header>
        </div>
    );
}