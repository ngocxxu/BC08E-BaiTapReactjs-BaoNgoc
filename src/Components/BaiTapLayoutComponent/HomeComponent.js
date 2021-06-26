import React, { Component } from 'react';

import HeaderComponent from './HeaderComponent';
// import BodyComponent from './BodyComponent';
import BannedComponent from './BannedComponent';
import ItemComponent from './ItemComponent';
import FooterComponent from './FooterComponent';

export default class componentName extends Component {
	render() {
		return (
			<div className="App">
				<HeaderComponent></HeaderComponent>
                {/* <BodyComponent></BodyComponent> */}
                <BannedComponent></BannedComponent>
                <ItemComponent></ItemComponent>
                <FooterComponent></FooterComponent>
			</div>
		);
	}
}
