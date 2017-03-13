import React from "react";
import { connect } from "react-redux";
import { removeMessage } from "../../actions/actions";


class LoginMessage extends React.Component{
    render(){
        const { message, close } = this.props;
        {
            if ( JSON.stringify(message) === JSON.stringify({}) ){
                return null
            }else{
                return(
                    <div className={ `alert ${message.type} alert-dismissable` } >
                        <div onClick={ close } className="close">×</div>
                        {
                            message.message
                        }
                    </div>
                )
            }
        }
    }
}


const mapStateToProps = ( state ) => ({
    message: state.newUserResponse,
});

const mapDispatchToProps = ( dispatch ) => ({
    close: ( ) => { dispatch( removeMessage() ) }
});

LoginMessage = connect(mapStateToProps, mapDispatchToProps)(LoginMessage);
export default LoginMessage;