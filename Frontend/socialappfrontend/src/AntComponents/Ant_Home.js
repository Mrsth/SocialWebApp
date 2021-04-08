import React,{useEffect} from 'react'
import { Layout, Breadcrumb } from 'antd';
import AntLayout from '../AntComponents/Ant_Layout'

const {Content, Footer } = Layout;


export default function Ant_Home(props){

    useEffect(()=>{
        if(sessionStorage.getItem('token') === null || sessionStorage.getItem('username') === null){
            props.history.push("/antlogin")
        }
    })

    return(
        <div>
            <AntLayout/>
            <Layout className="layout" style={{height: "100vh", background: "#fff"}}>
                <Content style={{ padding: '0 50px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <div className="site-layout-content">
                    <h1>Welcome to Home {localStorage.getItem("username")}</h1>   
                    <div>
                    Lorem Ipsum is 2 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
                    </div>
                </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
        </div>
    )
}

