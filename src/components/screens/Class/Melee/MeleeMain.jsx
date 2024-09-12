import { Link } from 'react-router-dom'
import styles from '../../../css/App.module.scss'

export const MeleeMain = () => {
  return (
    <div className={styles.main}>
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
      <div className='flex justify-center'>
        <h1 className='text-2xl mb-2 mt-2'>Guide</h1>
      </div>
      <div className='flex justify-between border border-gray-600 rounded-lg p-3 bg-slate-100 mt-3 '>
        <div>
          <Link to='/melee/MeleePreBosses' className='w-30  text-center font-bold  text-blue-500 hover:underline' >Pre Bosses</Link>  
          <img src='https://terraria.wiki.gg/images/7/70/Eye_of_Cthulhu_%28Phase_1%29.gif'/>
        </div>
        <div>
          <Link to='/melee/MeleePreHardMode' className='w-30 text-center font-bold   text-blue-500 hover:underline' >Pre HardMode</Link>
          <img className='h-40' src='https://terraria.wiki.gg/images/c/c0/Wall_of_Flesh.gif' />
        </div>
        <div>
          <Link to='/melee/MeleePreMechBosses' className='w-30 text-center font-bold   text-blue-500 hover:underline' >Pre Mech Bosses</Link>
          <img src='https://terraria.wiki.gg/images/6/67/Skeletron_Prime_head.gif'/>
        </div>
        <div>
          <Link to='/melee/MeleePrePlantera' className='w-30 text-center font-bold   text-blue-500 hover:underline' >Pre Plantera</Link>
          <img src='https://terraria.wiki.gg/images/9/9e/Plantera_%28First_form%29.gif'/>
        </div>
        <div>
          <Link to='/melee/MeleePreGolem' className='w-30 text-center font-bold   text-blue-500 hover:underline' >Pre Golem</Link>
          <img className='h-32' src='https://terraria.wiki.gg/images/c/ce/Golem.png'/>
        </div>
        <div>
          <Link to='/melee/MeleePreLunarEvents' className='w-30 text-center font-bold   text-blue-500 hover:underline' >Pre Lunar Events</Link>
          <img className='h-32' src='https://terraria.wiki.gg/images/1/1c/Lunatic_Cultist.gif'/>
        </div>
        <div>
          <Link to='/melee/MeleeEndgame' className='w-30 text-center font-bold   text-blue-500 hover:underline' >End game</Link>
          <img className='h-32' src='https://terraria.wiki.gg/images/1/13/Moon_Lord.gif' />
        </div>  
      </div>  
    </div>  
  )
}
