import { Link } from 'react-router-dom'
import styles from '../../../css/App.module.scss'

export const MeleeMain = () => {
  return (
    <div className={styles.mainClasses}>
      <h1>
      <a className="font-bold">The melee class</a> is powerful, sporting high defense and damage as well as decent crowd control. 
        It utilizes weapons such as swords, spears, sickles, boomerangs, flails, and yoyos. 
        Many melee weapons have a short attack range, and those that are viable at a distance tend to do lower damage than their close-range counterparts. 
        Melee users are good at taking lots of hits without losing lots of health, which helps with tougher enemies and Bosses. 
        Melee is generally the most straight-forward class, 
        as using the weapons and dealing decent damage with them doesnt require any help.
      </h1>
      <div className="flex justify-start" >
        <img className="mt-3 mr-3" src='https://terraria.wiki.gg/images/f/f9/Solar_Flare_armor.png'/>
        <img className="mt-1" src='https://terraria.wiki.gg/images/6/66/Zenith.png'/>
      </div>
      <div>
        <h1 className='text-2xl mb-2 mt-2'>Guide</h1>
      </div>
      <div className='flex justify-between'>
          <Link to='/melee/MeleePreBosses' className='w-30  text-center font-bold  text-forWiki-links hover:underline' >Pre Bosses</Link>
          <Link to='/melee/MeleePreHardMode' className='w-30 text-center font-bold  text-forWiki-links hover:underline' >Pre HardMode</Link>
          <Link to='/melee/MeleePreMechBosses' className='w-30 text-center font-bold  text-forWiki-links hover:underline' >Pre Mech Bosses</Link>
          <Link to='/melee/MeleePrePlantera' className='w-30 text-center font-bold  text-forWiki-links hover:underline' >Pre Plantera</Link>
          <Link to='/melee/MeleePreGolem' className='w-30 text-center font-bold  text-forWiki-links hover:underline' >Pre Golem</Link>
          <Link to='/melee/MeleePreLunarEvents' className='w-30 text-center font-bold  text-forWiki-links hover:underline' >Pre Lunar Events</Link>
          <Link to='/melee/MeleeEndgame' className='w-30 text-center font-bold  text-forWiki-links hover:underline' >End game</Link>
      </div>  
    </div>  
  )
}
