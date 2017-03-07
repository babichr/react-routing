import React from "react";
import Header from "../Header";
import ReactDOM from "react-dom";


class Main extends React.Component{

	constructor( props ){
		super( props );
	}

	render(){
	const { children } = this.props
		return(
			<main style={ { paddingTop: "100px" } } >
				<Header/>
				{
					children
				}
			</main>
		)
	}
}

export default Main;