import React from 'react'
import catVacation from '../../../../img/catvacation.jpg';
import s from '../newPosts/new_post.module.css'



const NewPosts = (props) => {
    
    return (
        <div className={s.new_post}>
            <img src={catVacation} alt="" />
            <div>{props.newPostText}</div>
        </div>
    )
}

export default NewPosts