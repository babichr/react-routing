import React from "react";
import { Link } from "react-router";

class User extends React.Component{
    render(){

        const { data } = this.props;

        return(
            <Link to={`/user/${data._id}`} style={ {"display": "block"} } className="user well">
                <div className="container-fluid">
                    <div className="row">
                        <div className="user__id">
                            <b>Id: </b>
                            {
                                data._id
                            }
                        </div>
                        <div className="user__login">
                            <b>Login: </b>
                            {
                                data.login
                            }
                        </div>
                        <div className="user__email">
                            <b>Email: </b>
                            {
                                data.email
                            }
                        </div>
                        <div className="user__pasword">
                            <b>Password: </b>
                            {
                                data.password
                            }
                        </div>
                    </div>
                </div>
            </Link>
        )
    }
}

export default User;