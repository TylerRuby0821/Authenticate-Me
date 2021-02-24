import React from 'react'
import {useSelector} from 'react-redux'
import {Redirect} from 'react-router-dom'

function Dashboard() {
    const sessionUser = useSelector(state => state.session.user)

    if (!sessionUser) return <Redirect to='/login'/>
    return (
        <div className='navbar__placeholder'>
            <div className="dashboard__container">
                <div>
                    This is your Dashobard!
                </div>
            </div>
        </div>


    )
}

export default Dashboard;
