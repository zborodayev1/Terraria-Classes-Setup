import { Link } from 'react-router-dom'
import styles from '../../../../css/App.module.scss'

export const AvangerEmblem = () => {
  return (
    <div className={styles.main}>
      <div className=' p-2 roundet-md'>
        <h1>The Avenger Emblem is a Hardmode accessory that grants 12% increased damage to all weapons.</h1>
        {/* bufs */}
      <div>
        <h1 className='font-bold mt-3'>The stat bonuses are:</h1>
        <div className='ml-3'>
            <h1>+12% increased damage to all weapons.</h1>
        </div>
      </div>
        <div className='flex'>
              <div className='w-52 p-2'>
                  <h1 className='' >Result</h1>
                  <div className='flex'>
                      <img className='' src='https://terraria.wiki.gg/images/c/c3/Avenger_Emblem.png'/> <h1 className='mt-2 ml-2  font-bold' >Avanger Emblem</h1>
                  </div>
              </div>   
              <div className='w-52 p-2'>
                  <h1 className='' >Ingridients</h1>
                  <div className='flex mt-2' >
                      <img className='' src='https://terraria.wiki.gg/images/d/d7/Warrior_Emblem.png'/> <Link to='/meleeAcs/warriorEmblem' className='ml-1 text-sm mt-2  hover:underline hover:text-blue-500 duration-200 ' >Warrior Emblem</Link>
                  </div>
                  <div className='flex mt-2' >
                      <img className='' src='https://terraria.wiki.gg/images/8/80/Soul_of_Fright.png'/> <h1  className='ml-1 text-sm ' >Soul of Fright</h1><h1 className='ml-1 text-sm text-white/75'>x20</h1>
                  </div>
                  <div className='flex mt-2' >
                      <img className='' src='https://terraria.wiki.gg/images/3/39/Soul_of_Might.png'/> <h1 className='ml-2 text-sm ' >Soul of Might</h1><h1 className='ml-1 text-sm text-white/75'>x20</h1>
                  </div>
                  <div className='flex mt-2' >
                      <img className='' src='https://terraria.wiki.gg/images/0/0f/Soul_of_Sight.png'/> <h1 className='ml-2 text-sm  ' >Soul of Sight</h1><h1 className='ml-1 text-sm text-white/75'>x20</h1>
                  </div>
              </div>
              <div className='w-52 p-2'>
                  <h1 className='' >Crafting station</h1> 
                  <div className='flex' >
                      <img className='' src='https://terraria.wiki.gg/images/1/17/Tinkerer%27s_Workshop.png'/> <h1 className='text-base ml-2 ' >Tinkerer Workshop</h1>
                  </div>
              </div>
          </div>
      </div>
    </div>
  )
}
