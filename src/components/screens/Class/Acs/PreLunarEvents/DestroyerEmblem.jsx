import { Link } from 'react-router-dom'
import styles from '../../../../css/App.module.scss'

export const DestroyerEmblem = () => {
  return (
    <div className={styles.main}>
      <div className=' p-2 roundet-md'>
        <h1>The Destroyer Emblem is a Hardmode, post-Golem accessory that gives the player 10% increased damage and 8% increased critical strike chance.</h1>
        {/* bufs */}
      <div>
        <h1 className='font-bold mt-3'>The stat bonuses are:</h1>
        <div className='ml-3'>
            <h1>+10% increased damage to all weapons.</h1>
            <h1>+8% increased critical strike chance</h1>
        </div>
      </div>
        <div className='flex'>
              <div className='w-52 p-2'>
                  <h1 className='' >Result</h1>
                  <div className='flex'>
                      <img className='' src='https://terraria.wiki.gg/images/5/5a/Destroyer_Emblem.png'/> <h1 className='mt-2 ml-2  font-bold' >Destroyer Emblem</h1>
                  </div>
              </div>   
              <div className='w-52 p-2'>
                  <h1 className='' >Ingridients</h1>
                  <div className='flex mt-2' >
                      <img className='' src='https://terraria.wiki.gg/images/c/c3/Avenger_Emblem.png'/> <Link to='/acs/AvangerEmblem' className='ml-1 text-sm mt-2  hover:underline hover:text-blue-500 duration-200 ' >Avanger Emblem</Link>
                  </div>
                  <div className='flex mt-2' >
                      <img className='' src='https://terraria.wiki.gg/images/f/f1/Eye_of_the_Golem.png'/> <h1  className='ml-1 text-sm ' >Eye of the Golem</h1>
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
