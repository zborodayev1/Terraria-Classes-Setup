import { Link } from 'react-router-dom'
import styles from '../../../../../css/App.module.scss'

export const Volcano = () => {
  return (
    <div className={styles.main}>
        <h1 className='' ><a className='font-bold'>The Volcano</a> is a pre-Hardmode sword crafted from Hellstone Bars. It lacks autoswing and has a slow swing speed, but it has the second-longest reach and second-highest damage of all swords in pre-Hardmode.

The Volcano creates an explosion upon hitting an enemy, dealing 75% base damage (30 base damage) to the enemy and all targets in an area around the enemy,[1] and has a 1/2 (50%) chance of inflicting the On Fire! debuff for 3 seconds.[2] Each explosion creates a tall plume of fire and smoke particles.

The Volcano is one of the key ingredients in crafting the Nights Edge.

Its best modifier is Legendary.</h1>    
      <div className=''>
        <div className=''>
          <h1 className='' >Crafting</h1>
          <div className='flex'>
              <div className='w-44 p-2'>
                  <h1 className='w-52' >Result</h1>
                  <div className='flex'>
                      <img className='w-12 h-12' src='https://terraria.wiki.gg/images/c/cf/Volcano.png'/> <h1 className='mt-2 ml-2 font-bold' >Volcano</h1>
                  </div>
              </div>   
              <div className='w-52 p-2'>
                  <h1 className='' >Ingridients</h1>
                  <div className='flex mt-2' >
                      <img className='' src='https://terraria.wiki.gg/images/d/dc/Hellstone_Bar.png'/> <h1 className='ml-1 text-sm ' >Hellstone Bar</h1><h1 className='ml-1 text-sm text-white/75'>x30</h1>
                  </div>
                  <div>
                    <h1 className='ml-1 text-sm text-white/75' >or</h1>
                  </div>
                  <div className='flex ' >
                      <img className='' src='https://terraria.wiki.gg/images/8/8f/Hellstone.png'/> <h1 className='ml-1 text-sm text-white/75 ' >Hellstone</h1><h1 className='ml-1 text-sm text-white/75'>x60</h1>
                  </div>
                  <div className='flex ' >
                      <img className='' src='https://terraria.wiki.gg/images/2/23/Obsidian.png'/> <h1 className='ml-1 text-sm text-white/75 ' >Obsidian</h1><h1 className='ml-1 text-sm text-white/75'>x0</h1>
                  </div>
              </div>
              <div className='w-52 p-2'>
                  <h1 className='' >Crafting station</h1> 
                  <div className='flex' >
                      <img className='w-8 h-4' src='https://terraria.wiki.gg/images/c/c3/Iron_Anvil.png'/> <Link to='/wiki/preHardMode/preHardModeAnvils' className='text-base ml-2  hover:underline hover:text-blue-500 duration-200 ' >Iron Anvil</Link>
                  </div>
                  <div className='flex' >
                      <img className='w-8 h-4' src='https://terraria.wiki.gg/images/3/32/Lead_Anvil.png'/> <Link to='/wiki/preHardMode/preHardModeAnvils' className='text-base ml-2  hover:underline hover:text-blue-500 duration-200 ' >Lead Anvil</Link>
                  </div>
              </div>
          </div>
        </div>
        <div className=''>
          <h1 className='' >Used in</h1>
          <div className='flex'>
              <div className='w-52 p-2'>
                  <h1 className='' >Result</h1>
                  <div className='flex'>
                      <img className='w-12 h-12' src='https://terraria.wiki.gg/images/9/98/Night%27s_Edge.png'/> <Link to='/meleeWeapons/nightsEdge' className='mt-2 ml-2   hover:underline hover:text-blue-500 duration-200 ' >Nights Edge</Link>
                  </div>
              </div>   
              <div className='w-52 p-2'>
                  <h1 className='' >Ingridients</h1>
                  <div className='flex mt-2' >
                      <img className='w-12 h-12' src='https://terraria.wiki.gg/images/1/13/Light%27s_Bane.png'/> <Link to='/meleeWeapons/lightsBane' className='ml-1 text-sm   hover:underline hover:text-blue-500 duration-200 ' >Lights Bane</Link>
                  </div>
                  <div className='flex mt-2' >
                      <img className='w-12 h-14' src='https://terraria.wiki.gg/images/c/c2/Muramasa.png'/> <Link to='/meleeWeapons/muramasa' className='ml-1 text-sm   hover:underline hover:text-blue-500 duration-200 ' >Muramasa</Link>
                  </div>
                  <div className='flex mt-2' >
                      <img className='w-16 h-16' src='https://terraria.wiki.gg/images/8/85/Blade_of_Grass.png'/> <Link to='/meleeWeapons/bladeofgrass' className='ml-1 text-sm  hover:underline hover:text-blue-500 duration-200 ' >Blade of Grass</Link>
                  </div>
                  <div className='flex mt-2' >
                      <img className='w-16 h-16' src='https://terraria.wiki.gg/images/c/cf/Volcano.png'/> <h1 className='ml-2 text-sm  font-bold' >Volcano</h1>
                  </div>
              </div>
              <div className='w-52 p-2'>
                  <h1 className='' >Crafting station</h1> 
                  <div className='flex' >
                      <img className='w-12 h-8 ' src='https://terraria.wiki.gg/images/f/f8/Demon_Altar.png'/> <h1 className='text-base ml-2 ' >Demon altar</h1>
                  </div>
                  <div className='flex mt-2' >
                      <img className='w-12 h-8' src='https://terraria.wiki.gg/images/7/70/Crimson_Altar.png'/> <h1 className='text-base ml-2 ' >Crimson Altar</h1>
                  </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}
          
