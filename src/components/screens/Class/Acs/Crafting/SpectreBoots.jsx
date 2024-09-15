import { Link } from 'react-router-dom'
import styles from '../../../../css/App.module.scss'

export const SpectreBoots = () => {
  return (
    <div className={styles.main}>
        <h1 className='' ><a className='font-bold'>Spectre Boots</a> are an accessory crafted from Rocket Boots and either Flurry Boots, Hermes Boots, Dunerider Boots, or Sailfish Boots, and combine their functionality. During flight, they emit a white/blue cloud trail, but unlike the Rocket Boots, they do not produce any light. Their flight time is about 1.6 seconds, identical to Rocket Boots.

The effects of Spectre and Rocket Boots do not stack, though they do stack with Wings to increase flight time.</h1>    
      <div>
        <div>
          <h1 >Crafting</h1>
          <div className='flex'>
              <div className='w-44 p-2'>
                  <h1 className='w-52' >Result</h1>
                  <div className='flex'>
                      <img  src='https://terraria.wiki.gg/images/2/28/Spectre_Boots.png'/> <h1  className='mt-2 ml-2 font-bold' >Spectre Boots</h1>
                  </div>
              </div>   
              <div className='w-52 p-2'>
                  <h1 >Ingridients</h1>
                  <div className='flex mt-2' >
                      <img  src='https://terraria.wiki.gg/images/2/29/Hermes_Boots.png'/> <Link to='/acs/HermesBoots' className='ml-1 text-sm hover:underline hover:text-blue-500 duration-200' >Hermes Boots</Link>
                  </div>
                  <div className='flex mt-2' >
                      <img  src='https://terraria.wiki.gg/images/2/2b/Rocket_Boots.png'/> <Link to='/acs/RocketBoots' className='ml-1 text-sm hover:underline hover:text-blue-500 duration-200' >Rocket Boots</Link>
                  </div>
              </div>
              <div className='w-52 p-2'>
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
                      <img src='https://terraria.wiki.gg/images/2/2c/Lightning_Boots.png'/> <Link to='/acs/LightningBoots' className='mt-2 ml-2  hover:underline hover:text-blue-500 duration-200' >Lightning Boots</Link>
                  </div>
              </div>   
              <div className='w-52 p-2'>
                  <h1 >Ingridients</h1>
                  <div className='flex mt-2' >
                      <img src='https://terraria.wiki.gg/images/2/28/Spectre_Boots.png'/> <h1 className='ml-1 text-sm font-bold' >Spectre Boots</h1>
                  </div>
                  <div className='flex mt-2' >
                      <img src='https://terraria.wiki.gg/images/f/f4/Anklet_of_the_Wind.png'/> <h1 className='ml-1 text-sm' >Anklet of the Wind</h1>
                  </div>
                  <div className='flex mt-2' >
                      <img className='w-5 h-2' src='https://terraria.wiki.gg/images/6/6d/Aglet.png'/> <h1 className='ml-2 text-sm' >Aglet</h1>
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
          
