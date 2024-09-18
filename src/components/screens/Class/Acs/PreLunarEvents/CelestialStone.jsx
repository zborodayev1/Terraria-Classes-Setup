import { Link } from "react-router-dom"
import styles from '../../../../css/App.module.scss'



export const CelestialStone = () => {
  return (
    <div className={styles.main} >
        <h1><a className="font-bold">The Celestial Stone </a>is a Hardmode post-Golem accessory crafted from a Moon Stone and a Sun Stone at the Tinkerers Workshop. It offers the same boosts as its components do, and as such, it is active during both day and night. It can be combined with the Moon Shell to form a Celestial Shell.</h1>
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
        <div>
            <h1 className="font-bold">Crafting</h1>
            <div className='flex'>
                <div className='p-2'>
                    <h1 className='' >Result</h1>
                    <div className='flex'>
                    <img className='' src='https://terraria.wiki.gg/images/c/c5/Celestial_Stone.png'/> <h1 className='mt-2 ml-2 font-bold  ' >Celestial Stone</h1>
                    </div>
                </div>   
                <div className='p-2'>
                    <h1 className='' >Ingridients</h1>
                    <div className='flex mt-2' >
                        <img className='' src='https://terraria.wiki.gg/images/0/0a/Sun_Stone.png'/> <h1 className='ml-1 ' >Sun Stone</h1>
                    </div>
                    <div className='flex mt-2' >
                        <img className='' src='https://terraria.wiki.gg/images/3/35/Moon_Stone.png'/> <Link to='/acs/MoonStone' className='ml-1  hover:underline hover:text-blue-500 duration-200 ' >Moon Stone</Link>
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
        <div className=''>
          <h1 className='' >Used in</h1>
          <div className='flex'>
              <div className='p-2'>
                  <h1 className='' >Result</h1>
                  <div className='flex'>
                      <img className='' src='https://terraria.wiki.gg/images/e/ee/Celestial_Shell.png'/> <Link to='/acs/CelestialShell' className='mt-2 ml-2 hover:underline hover:text-blue-500 duration-200  ' >Celestial Shell</Link>
                  </div>
              </div>   
              <div className='p-2'>
                  <h1 className='' >Ingridients</h1>
                  <div className='flex mt-2' >
                    <img className='' src='https://terraria.wiki.gg/images/c/c5/Celestial_Stone.png'/> <h1 className='mt-2 ml-2 font-bold ' >Celestial Stone</h1>
                  </div>
                  <div className='flex mt-2' >
                      <img className='' src='https://terraria.wiki.gg/images/0/00/Moon_Shell.png'/> <Link to='/acs/MoonShell' className='ml-1  hover:underline hover:text-blue-500 duration-200 ' >Moon Shell</Link>
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
  )
}
