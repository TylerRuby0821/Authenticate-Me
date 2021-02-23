import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './LandingPage.css'


function LandingPage() {
    return (
		<div className='landing__main'>
        	<div className='landing__container'>
          		<h1 className="main__header"> Jumblur</h1>
					<div>
						<div>
							<div className="header__text"> Post stuff, find stuff, talk about stuff, find people who like the same stuff.</div>
						</div>
						<div className="landing__form--container">
							<div className="landing__form">
									<NavLink className="button__getStarted" to='/signup'>Get Started</NavLink>
									<NavLink className="button__login" to='/login'>Log In</NavLink>
							</div>
						</div>
					</div>
        	</div>
		</div>
    )
}

export default LandingPage;
