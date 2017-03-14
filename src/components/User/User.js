import React from "react";
import { Link } from "react-router";
import { connect } from "react-redux";
import { removeUser } from "../../actions/actions";

class User extends React.Component{
    render(){

        const { data, hendleRemove } = this.props;

        return(
            <div className="user__inner well">
                <div onClick={ ( id ) => { hendleRemove(data._id) } } className="close">×</div>
                <Link to={`/user/${data._id}`} style={ {"display": "block"} } className="user">

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
                </Link>
            </div>
        )
    }
}


const mapStateToProps = ( state ) => ({

});

const mapDispatchToProps = ( dispatch ) => ({
    hendleRemove: ( id ) => { dispatch( removeUser(id) ) }
});

User = connect(mapStateToProps, mapDispatchToProps)(User);

export default User;