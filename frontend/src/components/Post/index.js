import {useEffect, useState} from 'react'
import { useSelector } from 'react-redux'
import {Redirect} from 'react-router-dom'
import { csrfFetch } from '../../store/csrf'

import './Post.css'

function Post() {
  const sessionUser = useSelector(state => state.session.user)

  useEffect(()=> {
    async function getPosts(){
      const res = await csrfFetch('db/models')
      const data = res.json()
      const posts = await data.Posts.findAll({
        order: [
          ['created_at', 'DESC']
        ],
        limit: 20
      })
    }
  }, [])

  if(!sessionUser) return <Redirect to='/login'/>

  return (
        <section className='post__container'>
          {posts.map(post => {
          <>
            <div className="post__title--container">
              {post.title}
            </div>
            {post.type === 'text' || post.type === 'chat' || post.type === 'quote' ?

            <div className="post__content--container">
             {post.content}
            </div>
            :
            <img>{post.content}</img>
           }
         </>
          })}

        </section>
    )
}

export default Post;
