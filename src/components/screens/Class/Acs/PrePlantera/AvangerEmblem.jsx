import { Link } from 'react-router-dom'
import styles from '../../../../css/App.module.scss'

export const AvangerEmblem = () => {
  return (
    <div className={styles.main}>
      <div className=' p-2 roundet-md'>
        <h1>The Warrior Emblem is a Hardmode accessory that increases melee damage by 15%. It has a 1/4 (25%) chance to drop from the Wall of Flesh.</h1>
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
                      <img className='' src='https://terraria.wiki.gg/images/d/d7/Warrior_Emblem.png'/> <Link to='/mmeleeAcs/warriorEmblem' className='ml-1 text-sm mt-2  hover:underline hover:text-blue-500 duration-200 ' >Warrior Emblem</Link>
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
                      <img className='w-8 h-5 ' src='https://terraria.wiki.gg/images/3/3d/Mythril_Anvil.png'/> <Link to='/wiki/items/hardModeAnvils' className='text-base ml-2  hover:underline hover:text-blue-500 duration-200   ' >Mythril Anvil</Link>
                  </div>
                  <div className='flex' >
                      <img className='w-8 h-5' src='https://terraria.wiki.gg/images/d/dc/Orichalcum_Anvil.png'/> <Link to='/wiki/items/hardModeAnvils' className='text-base ml-2  hover:underline hover:text-blue-500 duration-200  ' >Orichalcum Anvilr</Link>
                  </div>
              </div>
          </div>
      </div>
    </div>
  )
}
