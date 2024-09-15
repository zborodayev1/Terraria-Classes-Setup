
import { Link } from 'react-router-dom'
import styles from '../../../../css/App.module.scss'

export const TerrasparkBoots = () => {
  return (
    <div className={styles.main}>
        <h1 className='' ><a className='font-bold'>The Terraspark Boots </a>are a pre-Hardmode accessory crafted by combining Frostspark Boots and Lava Waders at a Tinkerers Workshop, providing the benefits of both items. They are the final upgrade of the Hermes/Sailfish/Flurry/Dunerider and Water Walking Boots.</h1>    
      <div>
        <div>
          <h1 >Crafting</h1>
          <div className='flex'>
              <div className='flex'>
              <div className='w-52 p-2'>
                  <h1 >Result</h1>
                  <div className='flex'>
                      <img src='https://terraria.wiki.gg/images/b/ba/Terraspark_Boots.png'/> <h1 to='/meleeWeapons/nightsEdge' className='mt-2 ml-2 font-bold' >Terraspark Boots</h1>
                  </div>
              </div>   
              <div className='w-52 p-2'>
                  <h1 >Ingridients</h1>
                  <div className='flex mt-2' >
                      <img src='https://terraria.wiki.gg/images/1/19/Frostspark_Boots.png'/> <Link to='/acs/FrostsparkBoots' className='mt-2 ml-2 hover:underline hover:text-blue-500 duration-200 ' >Frostspark Boots</Link>
                  </div>
                  <div className='flex mt-2' >
                      <img src='https://terraria.wiki.gg/images/1/1a/Lava_Waders.png'/> <Link to='/acs/LavaWaders' className='ml-1 text-sm hover:underline hover:text-blue-500 duration-200'>Lava Waders</Link>
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
    </div>
  )
}
          
