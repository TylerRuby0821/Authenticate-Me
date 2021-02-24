import React from 'react'
import {useSelector} from 'react-redux'
import {Redirect} from 'react-router-dom'
import './Dashboard.css'

function Dashboard() {
    const sessionUser = useSelector(state => state.session.user)

    if (!sessionUser) return <Redirect to='/login'/>
    return (
            <div className="dashboard__container">
                <div className="content__container">
                    <div className="content__container--inner">
                        <div className="content__container--posts">
                            <div className="profile__pic">
                             profile pic
                            </div>
                            <ul className= "content__post--types">
                            <li className='post__types post__selection--1'>
                                <button className="post__button">
                                    <span className="post__button--photo"></span>
                                    Text
                                </button>
                            </li>
                            <li className='post__types post__selection--2'>
                                <button className="post__button">
                                    <span className="post__button--photo"></span>
                                    Photo
                                </button>
                            </li>
                            <li className='post__types post__selection--3'>
                                <button className="post__button">
                                    <span className="post__button--photo"></span>
                                    Quote
                                </button>
                            </li>
                            <li className='post__types post__selection--4'>
                                <button className="post__button">
                                    <span className="post__button--photo"></span>
                                    Link
                                </button>
                                </li>
                            <li className='post__types post__selection--5'>
                                <button className="post__button">
                                    <span className="post__button--photo"></span>
                                    Chat
                                </button>
                            </li>
                            <li className='post__types post__selection--6'>
                                <button className="post__button">
                                    <span className="post__button--photo"></span>
                                    Audio
                                </button>
                            </li>
                            <li className='post__types post__selection--7'>
                                <button className="post__button">
                                    <span className="post__button--photo"></span>
                                    Video
                                </button>
                            </li>
                            </ul>
                        </div>
                        <div className="content__feed">
                            Input Feed Here
                        </div>
                    </div>
                </div>
            </div>



    )
}

export default Dashboard;
