import React, {Component} from "react";

export default class AuthForm extends Component{
    constructor(props){
        super(props);
        this.state={
            email: "",
            username:"",
            password:"",
            profileImgURL:""
        }
    }

    handleChange= (e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    };

    render(){
        const {email, username, password, profileImgURL}= this.state;
        const {heading, buttonText, signUp}= this.props;
        return(
            <div className="row justify-content-md-center">
                <div className="col-md-6">
                    <form onSubmit={this.handleSubmit}>
                        <h2>{heading}</h2>
                        <label htmlFor="email">Email:</label>
                        <input
                            className="form-control"
                            id="email"
                            name="email"
                            onChange={this.handleChange}
                            value={email}
                            type="text"/>
                        <br/>
                        <label htmlFor="password">Password:</label>
                        <input
                            className="form-control"
                            id="password"
                            name="password"
                            onChange={this.handleChange}
                            value={password}
                            type="password"/>
                        <br/>
                        {signUp && (
                            <div>
                                <label htmlFor="username">Username:</label>
                                <input
                                    className="form-control"
                                    id="username"
                                    name="username"
                                    onChange={this.handleChange}
                                    value={username}
                                    type="text"/>
                                <br/>
                                <label htmlFor="profileImgURL">Profile Image:</label>
                                <input
                                    className="form-control"
                                    id="profileImgURL"
                                    name="profileImgURL"
                                    onChange={this.handleChange}
                                    value={profileImgURL}
                                    type="text"/>
                                <br/>
                            </div>
                        )}
                        <button className="btn btn-success">{buttonText}</button>
                    </form>
                </div>
            </div>
        )
    }
}