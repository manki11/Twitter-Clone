import React, {Component} from "react"
import {connect} from "react-redux"


export default function (ComponentToBeRendered) {
    class Authenticate extends Component {
        componentWillMount(){
            if(this.props.isAuthenticated=== false){
                this.props.history.push("/signin")
            }
        }

        componentWillUpdate(nextprops){
            if(nextprops.isAuthenticated=== false){
                nextprops.history.push("/signin")
            }
        }

        render(){
            return(
                <ComponentToBeRendered {...this.props}/>
            )
        }
    }
}

function MapStateToProps(state) {
    return {
        isAuthenticated: state.currentUser.isAuthenticated
    }
}

return connect(MapStateToProps)(Authenticate);