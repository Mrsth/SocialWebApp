import React,{Component} from 'react'
import axios from 'axios';

export default class Register extends Component{
    handleSubmit = e =>{
        e.preventDefault();
        const data = {
            username : this.firstname,
            email : this.email,
            password : this.password,
            //confirm_password : this.confirmpassword
        };

        console.log(data)

        axios.post('http://localhost:8000/api/register/', data)
            .then(
                res => {console.log(res)}
            ).catch(err=>{console.log(err)})
    };

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h1>Signup form</h1>
                    <div className="form-control">
                        <label>Uname</label>
                        <input type="text" className="form-control" placeholder="First Name"
                            onChange={e=>this.firstname = e.target.value}/>
                    </div>
                    <div className="form-control">
                        <label>Email</label>
                        <input type="email" className="form-control" placeholder="Text"
                            onChange={e=>{this.email = e.target.value}}/>
                    </div>
                    <div className="form-control">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Password"
                            onChange={e=>{this.password = e.target.value}}/>
                    </div>
                    {/* <div className="form-control">
                        <label>Confirm Password</label>
                        <input type="password" className="form-control" placeholder="Confirm Password"
                            onChange={e=>{this.confirmpassword = e.target.value}}/>
                    </div> */}
    
                    <button className="btn btn-primary btn-block">Sign up</button>
                </form>
            </div>
            )
    }
}

