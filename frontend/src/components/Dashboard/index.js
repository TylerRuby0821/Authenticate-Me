import React from 'react'
import {useSelector} from 'react-redux'
import {Redirect} from 'react-router-dom'
import './Dashboard.css'

function Dashboard() {
    const sessionUser = useSelector(state => state.session.user)

    if (!sessionUser) return <Redirect to='/login'/>
    return (
            <div className="dashboard__container">
                <div>
                    This is your Dashobard!
                </div>
            </div>



    )
}

export default Dashboard;
