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
            <h2 className="post__title--container">
              {post.title}
            </h2>

            {post.type === 'text' || post.type === 'chat' || post.type === 'quote' ?

            <div className="post__content--container">
             {post.content}
            </div>

            : post.type === 'image' ?
            <div className="image__div">
              <img className= "content__picture"src={post.content}></img>
            </div>

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
         <div className="bottom__icons--bar"></div>
        </section>
      ))}
      </div>

    )
}

export default Post;
