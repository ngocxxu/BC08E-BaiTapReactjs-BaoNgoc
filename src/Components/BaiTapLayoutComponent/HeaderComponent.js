import React, { Component } from 'react';

export default class HeaderComponent extends Component {
	render() {
		return (
			<header className="header" style={{ backgroundColor: '#212529' }}>
				<div className="container">
					<nav className="navbar navbar-expand-sm navbar-dark" >
						<a className="navbar-brand" href="#">
							Start Bootstrap
						</a>
						<button
							className="navbar-toggler d-lg-none"
							type="button"
							data-toggle="collapse"
							data-target="#collapsibleNavId"
							aria-controls="collapsibleNavId"
							aria-expanded="false"
							aria-label="Toggle navigation"
						/>
						<div className="collapse navbar-collapse" id="collapsibleNavId">
							<ul className="navbar-nav ml-auto mt-2 mt-lg-0">
								<li className="nav-item active">
									<a className="nav-link" href="#">
										Home <span className="sr-only">(current)</span>
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="#">
										About
									</a>
								</li>
								<li className="nav-item dropdown">
									<a
										className="nav-link dropdown-toggle"
										href="#"
										id="dropdownId"
										data-toggle="dropdown"
										aria-haspopup="true"
										aria-expanded="false"
									>
										Contact
									</a>
									<div className="dropdown-menu" aria-labelledby="dropdownId">
										<a className="dropdown-item" href="#">
											Action 1
										</a>
										<a className="dropdown-item" href="#">
											Action 2
										</a>
									</div>
								</li>
							</ul>
						</div>
					</nav>
				</div>
			</header>
		);
	}
}
