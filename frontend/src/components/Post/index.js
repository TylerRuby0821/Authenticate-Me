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

            : post.type === 'image' ?
            <img src={post.content} width='320' height='500'></img>

            : post.type ==='video' ?
            <iframe
            id="ytplayer"
            type="text/html"
            width="480"
            height="270"
            src={post.content}
            frameborder="0"
            allowfullscreen />

            : post.type === 'link' ?
            <button>
              <a href={post.content}>{post.content}</a>

            </button>

            : post.type === 'audio' ?
            <iframe
            frameborder="0"
            width="400"
            height="200"
            src={post.content}>
            </iframe>
            
            : <h2>Content Type Not Supported!</h2>
           }
         {/* </> */}
        </section>
      ))}
      </div>

    )
}

export default Post;
