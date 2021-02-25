import React from 'react'
import {useSelector} from 'react-redux'
import {Redirect} from 'react-router-dom'
import './Dashboard.css'
import TextPostModal from '../TextPostModal/index'
import Feed from '../Feed'
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
                                <TextPostModal/>
                            </li>
                            <li className='post__types post__selection--2'>
                                <button className="post__button">
                                    <span className="post__button--photo">
                                        <img src="quotation-marks.jpg"></img>
                                    </span>
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
                            <Feed />
                            <div className="user__div"></div>
                            <div className="post__div"></div>
                        </div>
                    </div>
                </div>
            </div>



    )
}

export default Dashboard;
