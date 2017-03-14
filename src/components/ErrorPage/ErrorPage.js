import React from "react";
import { Link } from "react-router";

const ErrorPage = () => {
	return (
		<section className="error">
			<div className="container">
				<div className="col-md-4 col-md-offset-4">
					<h3 className="error__title"> This page not found </h3>
                    <Link to="/">Back to home</Link>
				</div>
			</div>
		</section>
	)
}

export default ErrorPage;