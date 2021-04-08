// import axios from "axios"
import React from "react"


class Home extends React.Component{
    state = {
        
    };

    componentDidMount(){

        // const config = {
        //     headers:{
        //         Authorization: 'Bearer' + localStorage.getItem('token')
        //     }
        // };

     

        // function getLogin(){}
        // axios.get({
        //     method: 'get',
        //     url: 'http://127.0.0.1:8000/api/login/',
        // }, config).then(
        //     res=> {
        //         console.log(res)
        //         // this.setState({
        //         //     user: res.data
        //         // },
        //         // err => {
        //         //     console.log(err)
        //         // }
        //         // );
        //     }
        // )

        
        
    }
    

    render(){
        if(localStorage.getItem('username') !== null){ 
            return(
                <h1>Hello {localStorage.getItem('username')}</h1>
            )
        }else{
            return(
                <div>
                    <h1>Hello unknown user this is home page</h1>
                </div>
            )
        }
    }
        
}

export default Home