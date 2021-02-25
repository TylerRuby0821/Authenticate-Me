import React from 'react'
import {useSelector} from 'react-redux'
import {Redirect} from 'react-router-dom'
import './Dashboard.css'
import TextPostModal from '../TextPostModal/textIndex'
import PhotoPostModal from '../PhotoPostModal/photoIndex'
import QuotePostModal from '../QuotePostModal/quoteIndex'
import LinkPostModal from '../LinkPostModal/linkIndex'
import ChatPostModal from '../ChatPostModal/chatIndex'
import AudioPostModal from '../AudioPostModal/audioIndex'
import VideoPostModal from '../VideoPostModal/videoIndex'
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
                                <PhotoPostModal />
                            </li>
                            <li className='post__types post__selection--3'>
                                <QuotePostModal />
                            </li>
                            <li className='post__types post__selection--4'>
                                <LinkPostModal />
                                </li>
                            <li className='post__types post__selection--5'>
                                <ChatPostModal />
                            </li>
                            <li className='post__types post__selection--6'>
                                <AudioPostModal />
                            </li>
                            <li className='post__types post__selection--7'>
                                <VideoPostModal />
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
