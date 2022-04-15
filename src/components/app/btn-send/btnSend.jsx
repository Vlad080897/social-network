import React from 'react'
import s from './btn_send.module.css'
import s2 from '../../main_container/news/news.module.css'



const BtnSend = (props) => {
    return (
        <input type="submit" value="Send" name="new-post" className={s.btn_send} className={s2.news_send} onClick={props.addNewsPost}/>
        )
}

export default BtnSend
