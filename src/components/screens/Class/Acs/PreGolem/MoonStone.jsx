import { Link } from 'react-router-dom'
import styles from '../../../../css/App.module.scss'

export const MoonStone = () => {
  return (
    <div className={styles.main} >
      <div>
        <h1 ><a className='underline'><a className='font-bold'>The Moon Stone</a> is a Hardmode accessory which has a 1/35 (2.86%) / 69/1225 (5.63%) chance to drop from Vampires during the Solar Eclipse event.</a> It grants the same stat bonuses as the Sun Stone, but these bonuses will only activate during the night or during a Solar Eclipse.</h1>
      </div>
      {/* bufs */}
      <div>
        <h1 className='font-bold mt-3'>The stat bonuses are:</h1>
        <div className='ml-3'>
            <h1>+10% melee speed</h1>
            <h1>+10% damage (all types)</h1>
            <h1>+2% critical strike chance</h1>
            <h1>+1 HP/s health regeneration</h1>
            <h1>+4 defense</h1>
            <h1>+15% mining speed</h1>
            <h1>+0.5 minion knockback</h1>
        </div>
      </div>
      <div className='mt-2' >
        <h1 className='font-bold'>Obtained from</h1>
        <div>
          <div className='mt-2 flex'>
            <img src='https://terraria.wiki.gg/images/0/0b/Vampire.gif'/> <h1 className='mt-2 mx-2'>Vampire</h1> <h1 className='mt-2 text-sm text-white/75'>1%</h1>
          </div>
          <div className='mt-2 flex'>
            <img src='https://terraria.wiki.gg/images/1/19/Vampire_Bat.gif'/> <h1 className='mt-2 mx-2'>Vampire</h1> <h1 className='mt-2 text-sm text-white/75'>1%</h1>
          </div>
        </div>
      </div>
      {/* used in */}
      <div>
      <div className=''>
          <h1 className='' >Used in</h1>
          <div className='flex'>
              <div className='p-2'>
                  <h1 className='' >Result</h1>
                  <div className='flex'>
                      <img className='' src='https://terraria.wiki.gg/images/c/c5/Celestial_Stone.png'/> <Link to='/acs/CelestialStone' className='mt-2 ml-2 hover:underline hover:text-blue-500 duration-200  ' >Celestial Stone</Link>
                  </div>
              </div>   
              <div className='p-2'>
                  <h1 className='' >Ingridients</h1>
                  <div className='flex mt-2' >
                      <img className='' src='https://terraria.wiki.gg/images/0/0a/Sun_Stone.png'/> <h1 className='ml-1 text-sm ' >Sun Stone</h1>
                  </div>
                  <div className='flex mt-2' >
                      <img className='' src='https://terraria.wiki.gg/images/3/35/Moon_Stone.png'/> <h1 className='ml-1 text-sm font-bold' >Moon Stone</h1>
                  </div>
              </div>
              <div className='p-2'>
                  <h1 className='' >Crafting station</h1> 
                  <div className='flex' >
                      <img className='' src='https://terraria.wiki.gg/images/1/17/Tinkerer%27s_Workshop.png'/> <h1 className='text-base ml-2 ' >Tinkerer Workshop</h1>
                  </div>
              </div>
          </div>
        </div>
      </div>

    </div>
  )
}
