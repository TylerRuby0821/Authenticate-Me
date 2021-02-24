import React, {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {getBlog} from '../../store/blog'

export const Blog = (props) => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getBlog())
    }, [])

    return (
        <div>
            This is a blog
        </div>
    )
}



export default Blog
