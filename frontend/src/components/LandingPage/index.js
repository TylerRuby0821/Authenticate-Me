import React from 'react';
import { NavLink } from 'react-router-dom';
import './LandingPage.css'

function LandingPage() {
    return (
			<div className='landing__main'>
        <div className='landing__container'>
          <h1 className="main__header"> Jumblur</h1>
					<section>
						<header>
							<div className="header__text"> Post stuff, find stuff, talk about stuff, find people who like the same stuff.</div>
						</header>
						<div className="landing__form--container">
							<div className="landing__form">
								<div>
									<NavLink className="button__getStarted" to='/signup'>Get Started</NavLink>
								</div>
								<div>
									<NavLink className="button__login" to='/login'>Log In</NavLink>

								</div>
							</div>
						</div>
					</section>
        </div>
			</div>
    )
}

export default LandingPage;
