import { Link } from 'react-router-dom'
import styles from '../../../../../css/App.module.scss'
import { PreLunarEventsAcs } from '../../../Acs/PreLunarEvents/PreLunarEventsAcs'

export const MeleePreLunarEvents= () => {
  return (
    <div className={styles.main} >
        <div className='ml-3 '>
          <div className='flex'>
              <div>
              <div className='flex'>
                  <h1 className='text-xl my-2 font-bold'>Pre Lunar Events</h1>
                  <div className='bg-red-600 w-4 h-6 ml-2 mt-3'></div>
                </div>  
                <div className='ml-2'>
                  <div className='border border-gray-600 rounded-lg p-3  bg-[#101017]  mt-3'>
                    <h1 className='font-bold'>Weapons:</h1>
                    <div className='flex mb-2'>
                      <img className='' src='/Terra_Blade.webp'/> <Link className='h-6 mt-2' to={'/melee/TerraBlade'}><h1 className=' mt-2  hover:underline hover:text-blue-500 duration-200 ml-2'>Terra Blade</h1></Link>
                    </div>
                    
                  </div>
                  <div className='border border-gray-600 rounded-lg p-3  bg-[#101017]  mt-3'>
                    <h1 className='font-bold'>Armor:</h1>
                    <div className='flex'>
                      <img src='/Beetle_armor.webp' /> <Link className='h-6 mt-2' to={'/melee/BeetleArmor'}><h1 className='  hover:underline hover:text-blue-500 duration-200 ml-1'>Beetle armor</h1></Link>
                    </div>
                  </div>
                  <div className='border border-gray-600 rounded-lg p-3  bg-[#101017]  mt-3'>
                    <h1 className='font-bold'>Buffs:</h1>
                    <div className='flex'>
                      <img src='/Sake.webp' /> <Link className='h-6 mt-2' to={'/buffs/sake'}><h1 className=' hover:underline  hover:text-blue-500 duration-200 ml-2'>Sake</h1></Link>
                    </div>
                    <div className='flex mt-2'>
                      <img src='/Flask_of_Ichor.webp' /> <Link className='h-6 mt-2' to={'/buffs/ichor'}><h1 className='  hover:underline hover:text-blue-500 duration-200 ml-2'>Ichor</h1></Link>
                      <h1 className='mt-2 italic mx-2'>or</h1>
                      <img src='Flask_of_Cursed_Flames.webp' /> <Link className='h-6 mt-2' to={'/buffs/cursedFlames'}><h1 className=' hover:underline  hover:text-blue-500 duration-200 ml-2'>Cursed flames</h1></Link>
                    </div>
                      <div className='flex mt-2'>
                        <img src='/Sharpening_Station.webp' /> <Link className='h-6' to={'/buffs/sharpeningStation'}><h1 className=' hover:underline hover:text-blue-500 duration-200 ml-2'>Sharpening Station</h1></Link>
                      </div>
                      <div className='flex mt-2'>
                        <img src='/Wrath_Potion.webp' /> <Link className='h-6 mt-2' to={'/buffs/wrathPotion'}><h1 className='ml-2  hover:underline hover:text-blue-500 duration-200'>Wrath Potion</h1></Link>
                      </div>
                      <div className='flex mt-2'>
                        <img src='/Rage_Potion.webp' /> <Link className='h-6 mt-2' to={'/buffs/rage'}><h1 className='ml-2  hover:underline hover:text-blue-500 duration-200'>Rage Potion</h1></Link>
                      </div>
                      
                  </div>
                </div>
              </div>
              
              <div className='ml-3 mt-11'>
                <div className='border border-gray-600 rounded-lg p-3  bg-[#101017]  mt-3 '>
                    <h1 className='font-bold'>Melee Accessories:</h1>
                    <div className='p-2' > 
                      <div className='flex '>
                        <img className='w-7 h-7' src='/Warrior_Emblem.webp' /> <Link className='h-6' to={'/melee/warriorEmblem'}><h1 className='  hover:underline hover:text-blue-500 duration-200 ml-2'>Warrior Emblem</h1></Link>
                      </div>
                      <div className='flex mt-2'>
                        <img  src='/Berserkers_Glove.webp' /> <Link className='h-6 mt-2' to={'/melee/berserkerGlove'}><h1 className=' hover:underline  hover:text-blue-500 duration-200 ml-2'>Berserker glove</h1></Link>
                      </div>
                      <div className='flex mt-2'>
                        <img  src='/Fire_Gauntlet.webp' /> <Link className='h-6 mt-2' to={'/melee/fireGauntlet'}><h1 className='  hover:underline hover:text-blue-500 duration-200 ml-2'>Fire Gauntlet</h1></Link>
                      </div>
                    </div>
                  </div>
              </div>
              <div className='mt-3' >
                <PreLunarEventsAcs/>
              </div>
            </div>
          </div>
    </div>
  )
}
