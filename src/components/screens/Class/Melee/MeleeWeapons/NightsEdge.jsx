import { Link } from 'react-router-dom'
import styles from '../../../../css/App.module.scss'

export const NightsEdge = () => {
  return (
    <div className={styles.main}>
        <h1 className='p-2 border border-gray-600  rounded-md bg-[#101017]' ><a className='font-bold'>The Nights Edge</a> is a pre-Hardmode, post-Skeletron sword. When swung, it emits fire-like purple particles, similar to the swords used in crafting it, but the effect is more subtle and does not last as long. It is notable for having, on par with Volcano, the highest base damage of a sword available before entering Hardmode.

A purple aura comes off of the Nights Edge when swung, following the swing and increasing the range at which it can hit enemies. The aura also swings around a second time on its own, further increasing range and even covering behind the player. This aura can break Pots through walls, but cannot damage enemies there. If the blade or its aura strikes an enemy, a purple flash is created. The Nights Edge is also capable of autoswing.

Once in Hardmode, the Nights Edge can be upgraded into the True Nights Edge.

Its best modifier is Legendary.</h1>
        <h1 className='font-bold my-2 py-1 w-3/6 text-center border border-gray-600  rounded-md bg-[#101017] mt-5'>Crafting</h1>
        <div className='border border-gray-600 rounded-md p-2 w-3/6 h-50 bg-[#101017]'>
          <div className='flex'>
              <div className='w-52'>
                  <h1 className='font-bold border border-gray-600 bg-slate-100  text-center rounded-md mb-1'>Result</h1>
                  <div className='flex mt-2'>
                    <img className='w-10 h-10' src='https://terraria.wiki.gg/images/9/98/Night%27s_Edge.png'/> <Link to='/meleeWeapons/nightsEdge' className='mt-2 ml-2   hover:underline hover:text-blue-500 duration-200  ' >Nights Edge</Link>
                  </div>
              </div>   
                <div className='border border-gray-300 h-50 ml-2' >
              </div>
              <div className='w-52 ml-2'>
                  <h1 className='font-bold border border-gray-600 bg-slate-100  text-center rounded-md mb-1'>Ingridients</h1>
                  <div className='flex mt-1' >
                    <img className='w-10 h-10' src='https://terraria.wiki.gg/images/1/13/Light%27s_Bane.png'/> <Link to='/meleeWeapons/lightsBane' className='ml-1 text-sm    hover:underline hover:text-blue-500 duration-200  ' >Lights Bane</Link>
                  </div>
                  <div className='flex mt-1' >
                  <img className='w-10 h-10' src='https://terraria.wiki.gg/images/c/c2/Muramasa.png'/> <Link to='/meleeWeapons/muramasa' className='ml-1 text-sm    hover:underline hover:text-blue-500 duration-200  ' >Muramasa</Link>
                  </div>
                  <div className='flex mt-1' >
                  <img className='w-10 h-10' src='https://terraria.wiki.gg/images/8/85/Blade_of_Grass.png'/> <h1 className='ml-2 text-sm font-bold' >Blade of Grass</h1>
                  </div>
                  <div className='flex mt-1' >
                  <img className='w-10 h-10' src='https://terraria.wiki.gg/images/c/cf/Volcano.png'/> <Link to='/meleeWeapons/volcano' className='ml-2 text-sm    hover:underline hover:text-blue-500 duration-200  ' >Volcano</Link>
                  </div>
                  
              </div>
              <div className='border border-gray-300 h-50 ml-2' ></div>
              <div className='w-52 ml-2'>
                  <h1 className='font-bold border border-gray-600 bg-slate-100  text-center rounded-md mb-1'>Crafting station</h1> 
                  <div className='flex mt-3' >
                      <img className='' src='https://terraria.wiki.gg/images/1/17/Tinkerer%27s_Workshop.png'/> <h1 className='text-base ml-2' >Tinkerers Workshop</h1>
                  </div>
              </div>
          </div>
        </div>
    </div>
  )
}
