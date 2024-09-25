import React from 'react'
import style from './LeftComponent.module.css'
import createpost from '../../../assets/images/createpost.webp'
import aiContent from '../../../assets/images/aiContent.webp'

const LeftComponent = () => {
  return (
    <div className={style.LeftComponent}>
        <div className={style.createPost}>
            <div className={style.PostSlogan}>
                <h1>Create and Shedule Content <span className={style.coloredQuicker}> quicker</span></h1>
            </div>
            <div className={style.buttonCreatePost}>
                <img width='180' height='90' src={createpost} alt="createPost" />
            </div>
        </div>
        <div className={style.useAI}>
            <div className={style.writeText}>
                <h1>Write Your Content<br/> using AI</h1>
            </div>
            <div className={style.aiContentDiv}>
                <img width='190' height='200' src={aiContent} alt="createPost" />
            </div>
        </div>
    </div>
  )
}

export default LeftComponent