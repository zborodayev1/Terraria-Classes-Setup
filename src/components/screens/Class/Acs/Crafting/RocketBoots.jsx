import { Link } from 'react-router-dom'
import styles from '../../../../css/App.module.scss'

export const RocketBoots = () => {
  return (
    <div className={styles.main}>
        <h1 className='bg-forWiki-bgBrown p-2 roundet-md' ><a className='font-bold'>Rocket Boots</a> are an accessory that allows a player to fly for a period of around 1.6 seconds (100 game frames). They require a jump from midair to activate (a double-jump, or a jump while falling). During flight, they emit a jet animation that produces a good deal of light. Rocket Boots are purchased from the Goblin Tinkerer for 5.

Flight time is reset immediately when the player lands on any solid object, or latches onto a surface with a Hook (even if the grapple is released early).

If the Cloud in a Bottle is also equipped, its double-jump effect will engage first; pressing and holding the jump key afterward while still in midair will then activate the Rocket Boots.</h1>    
      <div>
        <div>
          <h1 >Used in</h1>
          <div className='flex'>
              <div className='w-52 p-2'>
                  <h1 >Result</h1>
                  <div className='flex'>
                      <img  src='https://terraria.wiki.gg/images/2/28/Spectre_Boots.png'/> <Link to='/acs/SpectreBoots' className='mt-2 ml-2   hover:underline hover:text-blue-500 duration-200' >Spectre Boots</Link>
                  </div>
              </div>   
              <div className='w-52 p-2'>
                  <h1 >Ingridients</h1>
                  <div className='flex mt-2' >
                      <img  src='https://terraria.wiki.gg/images/2/29/Hermes_Boots.png'/> <Link to='/acs/HermesBoots' className='ml-1 text-sm   hover:underline hover:text-blue-500 duration-200' >Hermes Boots</Link>
                  </div>
                  <div className='flex mt-2' >
                      <img  src='https://terraria.wiki.gg/images/2/2b/Rocket_Boots.png'/> <h1  className='ml-1 text-sm font-bold' >Rocket Boots</h1>
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
          
