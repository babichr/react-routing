import React from "react";
import { connect } from "react-redux";
import { getUserData } from "../../actions/actions";

class UserPage extends React.Component{

    componentWillMount(){
        this.props.hendleUserData(this.props.params.id)
    }

    render(){

        const { user } = this.props;
            if ( user ){
                return(
                    <section className="user-page">
                       <div className="container">
                           <div className="row">
                               <div className="col-md-4 col-md-offset-4">
                                   <h4>Hello  { user.login } </h4>
                               </div>
                           </div>
                       </div>
                    </section>
                )
            }else{
                return ( null )
            }
    }
}

const mapStateToProps = ( state ) => ({
    user: state.currentUser
});

const mapDispatchToProps = ( dispatch ) => ({
    hendleUserData: (id) => { dispatch(getUserData(id)) }
});

UserPage = connect(mapStateToProps, mapDispatchToProps)(UserPage);

export default UserPage;