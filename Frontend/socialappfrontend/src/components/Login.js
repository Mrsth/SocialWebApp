import React from 'react'
import axios from 'axios'



const history = require("history").createBrowserHistory()

export default class Login extends React.Component{

    //  constructor(props){
    //      super(props);
    //  }
   
    handleSubmit=(e)=>{
        e.preventDefault();
        const data ={
            username: this.username,
            password: this.password,
        }

        
            // const history = require("history").createBrowserHistory()
            // console.log(history)

            // axios.post('http://127.0.0.1:8000/api/login/',data)
            // .then(res => {
            //     localStorage.setItem('token', res.token);
            //     console.log(localStorage.getItem('token'))
            //     history.push("/home");
            //     window.location.reload();
            // })

            axios({
                method: 'post',
                url: 'http://127.0.0.1:8000/api/login/',
                data: data
            }).then(res=>{
                localStorage.setItem('token', res.data.token);

                if (localStorage.getItem('token') !== null) {
                    history.push("/home");
                    window.location.reload();
                  }

                
            }).catch(err=>console.log(err))

    
        
    };

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h1>Login Form</h1>
                    <div className="form-control">
                        <label>Username</label>
                        <input type="text" className="form-control" placeholder="User name"
                        onChange={e=> this.username = e.target.value}/>
                    </div>
    
                    <div className="form-control">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="password"
                        onChange={e=> this.password = e.target.value}/>
                    </div>
                    <button>Login</button>
                </form>
            </div>
        );
    }
}
   