import React from "react";
import { HeaderData } from "../../data/data";
import { Link, IndexLink } from "react-router";

const Header = () => {
	return(
		<header className="header navbar navbar-default navbar-custom">
			<div className="container">
				<ul className="header__menu nav navbar-nav navbar-right">
					{
						HeaderData.map( (item, i) => {
							return(
								<li key={item+i} >
									<Link to={ item.href } className="nav-link header__link" activeClassName="current" >
										{
											item.name
										}
									</Link>
								</li>
							)
						})
					}
				</ul>
			</div>
		</header>
	)
}


export default Header;