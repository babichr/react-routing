import React from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import { Field , reduxForm }  from "redux-form";

class Login extends React.Component{
	render(){

		const { hendleSubmit } = this.props

		return(
			<section className="login">
				<div className="container">
					<div className="row">
						<div className="col-md-4 col-md-offset-4">
							<form action="saveuser">
								<h3> Registration </h3>
								<div className="form-group">
									<label>Login</label>
									<Field type="text" component="input" name="login" className="form-control" />
								</div>
								<div className="form-group">
									<label>Email</label>
									<Field type="email" component="input" name="email" className="form-control" />
								</div>
								<div className="form-group">
									<label>Password</label>
									<Field type="password" component="input" name="password" className="form-control" />
								</div>
								<button className="btn btn-primary btn-block">Login</button>
							</form>
						</div>
					</div>
				</div>
			</section>
		)
	}
}


const mapStateToProps = ( state ) => ({

});

const mapDispatchToProps = ( dispatch ) => ({

});

Login = connect(mapStateToProps, mapDispatchToProps)(Login);

export default reduxForm({
	form: 'registration'
})(Login);