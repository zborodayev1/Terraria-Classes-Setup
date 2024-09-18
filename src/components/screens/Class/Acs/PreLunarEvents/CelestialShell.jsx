import { Link } from "react-router-dom"
import styles from '../../../../css/App.module.scss'



export const CelestialShell = () => {
  return (
    <div className={styles.main} >
        <h1><a className="font-bold">The Celestial Shell</a> is a Hardmode, post-Golem accessory that combines the stat-boosting powers of the Celestial Stone with the transformation powers of the Moon Shell, allowing both of their effects to happen simultaneously while taking only one accessory slot.</h1>
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
                <h1>Cannot drown in water</h1>
                <h1>Can swim in water and honey</h1>
                <h1>Move at regular speed in water</h1>
            </div>
        </div>
        <div>
            <h1 className="font-bold">Crafting</h1>
            <div className='flex'>
              <div className='p-2'>
                  <h1 className='' >Result</h1>
                  <div className='flex'>
                      <img className='' src='https://terraria.wiki.gg/images/e/ee/Celestial_Shell.png'/> <h1  className='mt-2 ml-2  font-bold ' >Celestial Shell</h1>
                  </div>
              </div>   
              <div className='p-2'>
                  <h1 className='' >Ingridients</h1>
                  <div className='flex mt-2' >
                    <img className='' src='https://terraria.wiki.gg/images/c/c5/Celestial_Stone.png'/> <Link to='/acs/CelestialStone' className='mt-2 ml-2 hover:underline hover:text-blue-500 duration-200  ' >Celestial Stone</Link>
                  </div>
                  <div className='flex mt-2' >
                      <img className='' src='https://terraria.wiki.gg/images/0/00/Moon_Shell.png'/> <Link to='/acs/MoonShell' className='ml-1 hover:underline hover:text-blue-500 duration-200 ' >Moon Shell</Link>
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
