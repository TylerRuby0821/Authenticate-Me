import {useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {Redirect} from 'react-router-dom'
import { csrfFetch } from '../../store/csrf'
import { getAllPosts } from '../../store/post'
import './Post.css'

function Post() {
  const sessionUser = useSelector(state => state.session.user)
  const dispatch = useDispatch()

  useEffect(()=> {
    dispatch(getAllPosts())
  }, [dispatch])

  const posts = useSelector((store) => Object.values(store.post))

  if(!sessionUser) return <Redirect to='/login'/>

  return (
    <div>
      {posts.map(post => (
        <section className='post__container'>
          {/* <> */}
            <div className="post__title--container">
              {post.title}
            </div>

            {post.type === 'text' || post.type === 'chat' || post.type === 'quote' ?

            <div className="post__content--container">
             {post.content}
            </div>

            : post.type === 'image' || post.type === 'link' ?
            <img src={post.content} width='320' height='500'></img>

            : post.type ==='video' ?
            <video width="320" height="240" src={post.content}></video>
            :
            <audio controls src={post.content} type="audio/mpeg"></audio>
           }
         {/* </> */}
        </section>
      ))}
      </div>

    )
}

export default Post;
