import { Link } from 'react-router-dom'
import styles from '../../../../css/App.module.scss'

export const HermesBoots = () => {
  return (
    <div className={styles.main}>
        <h1 className='bg-forWiki-bgBrown p-2 roundet-md' ><a className='font-bold'>Hermes Boots</a> are an accessory that can be found in Chests in the Underground and Cavern layers. When equipped, they allow the player to gain a movement speed boost after running for a certain distance continuously. The speed will continue increasing until maximum speed is attained. At full sprint, they will increase the players horizontal movement speed to 30 mph. However, if the player runs into a wall without autojumping, the player will stop and have to speed up again. (See Sprinting accessories for more information on the sprint effect).

The Hermes Boots, Flurry Boots, and the Sailfish Boots have identical functionality, with their only differences being aesthetic. In the case of the Hermes Boots, the user will leave a lasting trail of small dust clouds as they run, which persists for a few seconds. The Dunerider Boots function similarly, but additionally grant an even larger boost on sand.

All four listed boots are interchangeable when crafting Spectre Boots.</h1>    
      <div>
        <div>
          <h1 >Used in</h1>
          <div className='flex'>
              <div className='w-52 p-2'>
                  <h1 >Result</h1>
                  <div className='flex'>
                      <img className='' src='https://terraria.wiki.gg/images/2/28/Spectre_Boots.png'/> <Link to='/acs/SpectreBoots' className='mt-2 ml-2  hover:underline hover:text-blue-500 duration-200' >Spectre Boots</Link>
                  </div>
              </div>   
              <div className='w-52 p-2'>
                  <h1 >Ingridients</h1>
                  <div className='flex mt-2' >
                      <img className='' src='https://terraria.wiki.gg/images/2/29/Hermes_Boots.png'/> <h1  className='ml-1 text-sm  font-bold' >Hermes Boots</h1>
                  </div>
                  <div className='flex mt-2' >
                      <img className='' src='https://terraria.wiki.gg/images/2/2b/Rocket_Boots.png'/> <Link to='/acs/RocketBoots' className='ml-1 text-sm  hover:underline hover:text-blue-500 duration-200' >Rocket Boots</Link>
                  </div>
              </div>
              <div className='w-52 p-2'>
                  <h1 >Crafting station</h1> 
                  <div className='flex' >
                      <img className='' src='https://terraria.wiki.gg/images/1/17/Tinkerer%27s_Workshop.png'/> <h1 className='text-base ml-2' >Tinkerers Workshop</h1>
                  </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}
          
