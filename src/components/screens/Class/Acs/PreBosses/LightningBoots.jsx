import { Link } from 'react-router-dom'
import styles from '../../../../css/App.module.scss'

export const LightningBoots = () => {
  return (
    <div className={styles.main}>
        <h1 className='bg-forWiki-bgBrown p-2 roundet-md' ><a className='font-bold'>Lightning Boots</a> are an accessory that have essentially the same functionality as Spectre Boots, but with enhanced running speed. Its visual effects do not differ from the Spectre Boots. They have an 8% movement speed bonus compared to the Spectre Boots.</h1>    
      <div>
        <div>
          <h1 >Crafting</h1>
          <div className='flex'>
              <div className='w-52 p-2'>
                  <h1 >Result</h1>
                  <div className='flex'>
                    <img src='https://terraria.wiki.gg/images/2/2c/Lightning_Boots.png'/> <h1 className='mt-2 ml-2 flex' >Lightning Boots</h1>
                  </div>
              </div>   
              <div className='w-52 p-2'>
                  <h1 >Ingridients</h1>
                  <div className='flex mt-2' >
                      <img src='https://terraria.wiki.gg/images/2/28/Spectre_Boots.png'/> <Link to='/acs/SpectreBoots' className='ml-1 text-smhover:underline hover:text-blue-500 duration-200' >Spectre Boots</Link>
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
        <div>
          <h1 >Used in</h1>
          <div className='flex'>
              <div className='w-52 p-2'>
                  <h1 >Result</h1>
                  <div className='flex'>
                      <img src='https://terraria.wiki.gg/images/1/19/Frostspark_Boots.png'/> <Link to='/acs/FrostsparkBoots' className='mt-2 ml-2  hover:underline hover:text-blue-500 duration-200' >Frostspark Boots</Link>
                  </div>
              </div>   
              <div className='w-52 p-2'>
                  <h1 >Ingridients</h1>
                  <div className='flex mt-2' >
                    <img src='https://terraria.wiki.gg/images/2/2c/Lightning_Boots.png'/> <h1 className='mt-2 ml-2 flex' >Lightning Boots</h1>
                  </div>
                  <div className='flex mt-2' >
                      <img src='https://terraria.wiki.gg/images/0/0a/Ice_Skates.png'/> <h1  className='ml-1 text-sm ' >Ice Skates</h1>
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
          
