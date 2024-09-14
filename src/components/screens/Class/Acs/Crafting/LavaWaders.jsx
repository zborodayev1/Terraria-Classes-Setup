import { Link } from 'react-router-dom'
import styles from '../../../../css/App.module.scss'

export const LavaWaders = () => {
  return (
    <div className={styles.main}>
        <h1 className='' ><a className='font-bold'>The Lava Waders </a>are an immunity accessory that allow the player to walk on the surface of all liquids, including water, honey, shimmer and even lava, without taking lava damage or triggering the On Fire! debuff (unlike the Water Walking Boots and Obsidian Water Walking Boots, which only allow walking on water, honey, and shimmer).

Lava Waders also allow the player to submerge in lava safely for 7 seconds (press the ▼ Down key to submerge), without incurring lava damage or triggering the On Fire! debuff. The 7-second countdown is signified by a lava meter that displays over the players head, similar to the Breath meter, but displaying flame icons instead of bubbles. Lava immunity time is recharged gradually by exiting lava, the same way breathing time is recharged by exiting water (albeit much more slowly).

All liquids, including lava, can be walked on indefinitely while the Lava Waders are equipped. The countdown only applies when submerged in lava, whereas the player can stand on its surface indefinitely.

Lava Waders additionally provide immunity to the Burning debuff incurred from contact with Meteorite, Hellstone or Hellstone Brick.  It also reduces lavas base damage from 80 to 35.</h1>    
      <div>
        <div>
          <h1 >Crafting</h1>
          <div className='flex'>
              <div className='w-44 p-2'>
                  <h1 className='w-52' >Result</h1>
                  <div className='flex'>
                      <img  src='https://terraria.wiki.gg/images/1/1a/Lava_Waders.png'/> <h1  className='mt-2 ml-2 font-bold' >Lava Waders</h1>
                  </div>
              </div>   
              <div className='p-2'>
                  <h1 >Ingridients</h1>
                  <div className='flex mt-2' >
                      <img  src='https://terraria.wiki.gg/images/5/51/Obsidian_Water_Walking_Boots.png'/> <Link to='/acs/ObsidianWaterWalkingBoots' className='ml-1 text-sm hover:underline hover:text-blue-500 duration-200' >Obsidian Water Walking Boots</Link>
                  </div>
                  <div className='flex mt-2' >
                      <img  src='https://terraria.wiki.gg/images/9/9b/Lava_Charm.png'/> <h1 className='ml-1 text-sm ' >Lava Charm</h1>
                  </div>
                  <div className='flex mt-2' >
                      <img  src='https://terraria.wiki.gg/images/5/54/Obsidian_Rose.png'/> <h1 className='ml-1 text-sm' >Obsidian Rose</h1>
                  </div>
              </div>
              <div className=' p-2'>
                  <h1 >Crafting station</h1> 
                  <div className='flex' >
                      <img  src='https://terraria.wiki.gg/images/1/17/Tinkerer%27s_Workshop.png'/> <h1 className='text-base ml-2  ' >Tinkerers Workshopr</h1>
                  </div>
              </div>
          </div>
        </div>
        <div>
          <h1 >Used in</h1>
          <div className='flex'>
              <div className='w-52 p-2'>
                  <h1 >Result</h1>
                  <div className='flex'>
                      <img src='https://terraria.wiki.gg/images/b/ba/Terraspark_Boots.png'/> <Link to='/meleeWeapons/nightsEdge' className='mt-2 ml-2  hover:underline hover:text-blue-500 duration-200' >Terraspark Boots</Link>
                  </div>
              </div>   
              <div className='w-52 p-2'>
                  <h1 >Ingridients</h1>
                  <div className='flex mt-2' >
                      <img src='https://terraria.wiki.gg/images/1/19/Frostspark_Boots.png'/> <Link to='/acs/FrostsparkBoots' className='mt-2 ml-2 hover:underline hover:text-blue-500 duration-200' >Frostspark Boots</Link>
                  </div>
                  <div className='flex mt-2' >
                      <img src='https://terraria.wiki.gg/images/1/1a/Lava_Waders.png'/> <h1 className='ml-1 text-sm font-bold'>Lava Waders</h1>
                  </div>
              </div>
              <div className='w-52 p-2'>
                  <h1 >Crafting station</h1> 
                  <div className='flex' >
                      <img  src='https://terraria.wiki.gg/images/1/17/Tinkerer%27s_Workshop.png'/> <h1 className='text-base ml-2 ' >Tinkerers Workshopr</h1>
                  </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}
          
