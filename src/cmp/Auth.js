import React, { Component } from 'react'

class Auth extends Component {
    login(){

        console.log("state", this.state)
        fetch('http://localhost:8082/graphql',{
            method: "POST",
            headers:{
                "Accept":"application/json",
                "Content-Type":"application/json",
            },
            body:JSON.stringify(this.state)
        }).then((result)=>{
            result.JSON().then((resp)=>{
                console.log(resp);
            })
        })

        // alert("Login called")
    }
    render() {
        return (
            <div>
                <input type="text"
                    onChange={(e)=>{this.setState({email:e.target.value})}} 
                /><br /><br />
                <input type="text"
                    onChange={(e)=>{this.setState({password:e.target.value})}} 
                /><br /><br />
                <button onClick={()=>this.login()}>Login</button>
            </div>
        )
    }
}

export default Auth;