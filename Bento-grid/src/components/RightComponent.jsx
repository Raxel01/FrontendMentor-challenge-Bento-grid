import React from 'react'
import style from './RightComponent.module.css'
import fivestart from '../../../assets/images/fivestars.webp'
import growfollowers from '../../../assets/images/growfollowers.webp'
import scheduleposts from '../../../assets/images/scheduleposts.webp'
import audienceprofil from '../../../assets/images/audienceprofil.webp'
import multipleplatforms from '../../../assets/images/multipleplatforms.webp'
import schedule from '../../../assets/images/schedule.webp'



const RightComponent = () => {
  return (
    <div className={style.RightComponent}>
      <div className={style.socialMedia10X}>
        <div className={style.teenX}>
            <h1 className={style.tenXtext}>Social Media <span className={style.colorised10}> 10X</span> <br/> Faster With AI</h1>
        </div>

        <div className={style.fivestart}>
          <img className={style.fivestarsImg} width='230' height='35' src={fivestart} alt="five-start" />
          <h1 className={style.fiveStarsCount}>Over 4000 5-star reviews </h1>
        </div>

      </div>

      <div className={style.sheduleToSocialMedia}>
        <h1 className={style.schedulTEXT}>Schedule to <br /> social media.</h1>
        <img className={style.schedulepost} width='250' height='300' src={scheduleposts} alt="followers-growth" />
        <div className={style.optimizeHolder}>
          <p className={style.optimizeParagraph}>Optimize post timings <br />to publish content at <br /> the perfect time for <br />you audience.</p>
        </div>

      </div>
      <div className={style.manageAccounts}>
        <div className={style.socialMediaLinks}>
            <img className={style.socialmediaImages} width='300' height='70' src={multipleplatforms} alt="multipleplatforms" />
        </div>

        <div className={style.managetext}>
          <h1 className={style.holText}> Manage <br /> multiple <br /> accounts and <br /> plateforms.</h1>

        </div>

      </div>
      <div className={style.postingShedule}>
        <div className={style.textShedulHolder}>
            <h1 className={style.textShedule}> Mantain a <br /> consistent <br /> posting <br /> schedule</h1>
        </div>

        <div className={style.SchedulePicHolder}>
          <img src={schedule} alt="schedule.webp" height='135' width='220'/>

        </div>

      </div>
      <div className={style.audienceGrowth}>
          <h1 className={style.percentage}> {'>'} 56%</h1>
        
        <div className={style.fastergrowth}>
          faster audience growth
        </div>
        
        <div className={style.avisHolder}>
          <img width='190' height='70' src={audienceprofil} alt="profilesPic" />
        </div>

      </div>
      <div className={style.GrowFollowers}>
        <img className={style.growthPic} width='210' height='180' src={growfollowers} alt="followers-growth" />
        <p className={style.growText}>Grow followers <br /> with non-stop <br /> content.</p>
      </div>

    </div>
  )
}

export default RightComponent