import React from "react";
import User from "../User/User";
import { getUsers } from "../../actions/actions";
import { connect } from "react-redux";

class Users extends React.Component{

    componentWillMount(){
        this.props.getList()
    }

    render(){

        const {  users } = this.props;
        if  ( users.length ) {
            return (
                <section className="users">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 col-md-offset-4">
                                {
                                    users.map( (item, i) => {
                                        return(
                                            <User key={i} data={item} />
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </section>
            );
        }else{
            return null
        }
    }
}


const mapStateToProps = ( state ) => ({
    users: state.users
});

const mapDispatchToProps = ( dispatch ) => ({
    getList: () =>  dispatch(getUsers())
});

Users = connect(mapStateToProps, mapDispatchToProps)(Users);

export default Users;