import { Link } from 'react-router-dom'
import styles from '../../../css/App.module.scss'


export const CalMeleeMain = () => {

  return (
    <div className={styles.main}>
      <h1 className='p-2 border border-gray-600  rounded-md bg-[#101017] mb-2'>
      <a className="font-bold ">The melee class</a> is powerful, sporting high defense and damage as well as decent crowd control. 
        It utilizes weapons such as swords, spears, sickles, boomerangs, flails, and yoyos. 
        Many melee weapons have a short attack range, and those that are viable at a distance tend to do lower damage than their close-range counterparts. 
        Melee users are good at taking lots of hits without losing lots of health, which helps with tougher enemies and Bosses. 
        Melee is generally the most straight-forward class, 
        as using the weapons and dealing decent damage with them doesnt require any help.
      </h1>
      <div className='flex justify-center'>
          <h1 className='text-2xl '>Pre-Hardmode</h1>
          <div className='bg-red-600 w-4 h-6 mt-1 ml-2'></div>
      
      </div>
        <div className='flex justify-between border border-gray-600 rounded-lg p-3 bg-[#101017] mt-3'>
          <div >
            <Link to='/cal/melee/pre-bosses' className='flex justify-center text-center font-bold  hover:underline hover:text-blue-500 duration-150' >Pre Bosses</Link>  
          </div>
          <div>
            <Link to='/cal/melee/Pre_Eater_of_Worlds' className='text-center font-bold  hover:text-blue-500 duration-150 hover:underline' >Pre-Eater of Worlds / Brain of Cthulhu</Link>
          </div>
          <div>
            <Link to='/melee/MeleePreMechBosses' className='text-center font-bold  hover:text-blue-500 duration-150 hover:underline' >Pre-The Hive Mind / The Perforators</Link>
          </div>
          <div>
            <Link to='/melee/MeleePrePlantera' className='text-center font-bold  hover:text-blue-500 duration-150 hover:underline' >Pre-Skeletron</Link>
          </div>
          <div>
            <Link to='/melee/MeleePreGolem' className='text-center font-bold  hover:text-blue-500 duration-150 hover:underline' >Pre-Wall of Flesh </Link>
          </div>
        </div>  
        <div className='flex justify-center mt-3'>
          <h1 className='text-2xl '>Hardmode</h1>
          <div className='bg-red-600 w-4 h-6 mt-1 ml-2'></div>
      </div>
        <div className='flex justify-between border border-gray-600 rounded-lg p-3 bg-[#101017] mt-3'>
          <div >
            <Link to='/melee/MeleePreBosses' className='flex justify-center text-center font-bold  hover:underline hover:text-blue-500 duration-150' >Pre-Mechanical Bosses</Link>  
          </div>
          <div>
            <Link to='/melee/MeleePreHardMode' className='text-center font-bold  hover:text-blue-500 duration-150 hover:underline' >Post-Mechanical Boss 1 </Link>
          </div>
          <div>
            <Link to='/melee/MeleePreMechBosses' className='text-center font-bold  hover:text-blue-500 duration-150 hover:underline' >Post-Mechanical Boss 2</Link>
          </div>
          <div>
            <Link to='/melee/MeleePrePlantera' className='text-center font-bold  hover:text-blue-500 duration-150 hover:underline' >Pre-Plantera</Link>
          </div>
          <div>
            <Link to='/melee/MeleePreGolem' className='text-center font-bold  hover:text-blue-500 duration-150 hover:underline' >Pre-Golem </Link>
          </div>
          <div>
            <Link to='/melee/MeleePreLunarEvents' className='text-center font-bold  hover:text-blue-500 duration-150 hover:underline' >Post-Golem</Link>
          </div> 
          <div>
            <Link to='/melee/MeleePreLunarEvents' className='text-center font-bold  hover:text-blue-500 duration-150 hover:underline' >Pre-Lunar Events</Link>
          </div> 
          <div>
            <Link to='/melee/MeleePreLunarEvents' className='text-center font-bold  hover:text-blue-500 duration-150 hover:underline' >Pre-Moon Lord</Link>
          </div> 
        </div>  
        <div className='flex justify-center mt-3'>
          <h1 className='text-2xl '>Post-Moon Lord</h1>
          <div className='bg-red-600 w-4 h-6 mt-1 ml-2'></div>
        </div>
        <div className='flex justify-between border border-gray-600 rounded-lg p-3 bg-[#101017] mt-3'>
          <div >
            <Link to='/melee/MeleePreBosses' className='flex justify-center text-center font-bold  hover:underline hover:text-blue-500 duration-150' >Pre-Providence</Link>  
          </div>
          <div>
            <Link to='/melee/MeleePreHardMode' className='text-center font-bold  hover:text-blue-500 duration-150 hover:underline' >Pre-Polterghast</Link>
          </div>
          <div>
            <Link to='/melee/MeleePreMechBosses' className='text-center font-bold  hover:text-blue-500 duration-150 hover:underline' >Pre-Devourer of Gods</Link>
          </div>
          <div>
            <Link to='/melee/MeleePrePlantera' className='text-center font-bold  hover:text-blue-500 duration-150 hover:underline' >Pre-Plantera</Link>
          </div>
          <div>
            <Link to='/melee/MeleePreGolem' className='text-center font-bold  hover:text-blue-500 duration-150 hover:underline' >Pre-Yharon</Link>
          </div>
          <div>
            <Link to='/melee/MeleePreLunarEvents' className='text-center font-bold  hover:text-blue-500 duration-150 hover:underline' >Pre-Exo Mechs/Supreme Witch, Calamitas</Link>
          </div> 
          <div>
            <Link to='/melee/MeleePreLunarEvents' className='text-center font-bold  hover:text-blue-500 duration-150 hover:underline' >Endgame</Link>
          </div> 
        </div>  
    </div>  
  )
}


         