import { useSelector } from 'react-redux'
import {Redirect} from 'react-router-dom'

import './Post.css'

function Post(post) {
	const sessionUser = useSelector(state => state.session.user)

	if(!sessionUser) return <Redirect to='/login'/>
    return (
        <section className='post__container'>

          <div className="post__title--container">
            {post.title}
         </div>
         <div className="post__content--container">
            {post.text}
         </div>

        </section>
    )
}

export default Post;
