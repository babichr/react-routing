import React from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
// import { Field , reduxForm }  from "redux-form";
import { getLoginData } from "../../actions/actions";
import { Form, Text } from "react-form";

class Login extends React.Component{

	render(){


		const { hendleSubmit, loginForm, onSubmit } = this.props;

		return(
			<section className="login">
				<div className="container">
					<div className="row">
						<div className="col-md-4 col-md-offset-4">
							<Form onSubmit={(values) => { hendleSubmit(values) }} >
								{({submitForm}) => {
									return (
										<form onSubmit={submitForm}>
											<h3> Registration </h3>
											<div className="form-group">
												<label>Login</label>
												<Text type="text"  field="login" className="form-control" />
											</div>
											<div className="form-group">
												<label>Email</label>
												<Text type="email" field="email" className="form-control" />
											</div>
											<div className="form-group">
												<label>Password</label>
												<Text type="password" field="password" className="form-control" />
											</div>
											<button type='submit' className="btn btn-primary btn-block">Login</button>
										</form>
									)
								}}
							</Form>
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
	hendleSubmit: (values) => { dispatch(getLoginData(values)) }
});

Login = connect(mapStateToProps, mapDispatchToProps)(Login);
export default Login;