import { Link } from 'react-router-dom'
import styles from '../../../../../css/App.module.scss'
import { PreMechBossesAcs } from '../../../Acs/PreMechBosses/PreMechBossesAcs'

export const SumPreMechBosses = () => {
  return (
    <div className={styles.main} >
        <div className='ml-3 '>  
            <div className='flex'>
                  <h1 className='text-xl my-2'>Pre-Mech Bosses</h1>
                  <div className='bg-[#004cc6] w-4 h-6 ml-2 mt-3'></div>
            </div>  
            <div className='flex'>
              <div className='ml-2'>
                <div className='border border-gray-600 rounded-lg p-3 bg-[#101017]  mt-3'>
                  <h1 className='font-bold'>Weapons:</h1>
                  <div className='flex'>
                    <img className='' src='https://terraria.wiki.gg/images/c/cd/Cool_Whip.png'/> <Link to={'/sum/CoolWhip'}><h1 className=' mt-3 hover:underline hover:text-blue-500 duration-200 ml-2'>Cool Whip</h1></Link>
                  </div>
                  <div className='flex mt-3'>
                    <img className='' src='https://terraria.wiki.gg/images/6/65/Spider_Staff.png'/> <Link to={'/sum/SpiderStaff'}><h1 className=' mt-3 hover:underline hover:text-blue-500 duration-200 ml-2'>Spider Staff</h1></Link>
                  </div>
                </div>
                <div className='border border-gray-600 rounded-lg p-3 bg-[#101017]  mt-3'>
                  <h1 className='font-bold'>Armor:</h1>
                  <div className='flex'>
                    <img src='https://terraria.wiki.gg/images/0/08/Spider_armor.png' /> <Link className='h-6 mt-2' to={'/sum/SpiderArmor'}><h1 className='   hover:underline hover:text-blue-500 duration-200 ml-1'>Spider armor</h1></Link>
                  </div>
                </div>
                <div className='border border-gray-600 rounded-lg p-3 bg-[#101017]  mt-3'>
                  <h1 className='font-bold'>Buffs:</h1>
                  <div className='flex'>
                    <img src='https://terraria.wiki.gg/images/f/f6/Sake.png' /> <Link className='h-6 mt-2' to={'/meleeBafs/sake'}><h1 className='   hover:underline hover:text-blue-500 duration-200  ml-2'>Sake</h1></Link>
                  </div>
                  <div className='flex mt-2'>
                    <img src='https://terraria.wiki.gg/images/7/71/Flask_of_Ichor.png' /> <Link className='h-6 mt-2' to={'/meleeBafs/ichor'}><h1 className='   hover:underline hover:text-blue-500 duration-200 ml-2'>Ichor</h1></Link>
                    <h1 className='mt-2 italic mx-2'>or</h1>
                    <img src='https://terraria.wiki.gg/images/0/08/Flask_of_Cursed_Flames.png' /> <Link className='h-6 mt-2' to={'/meleeBafs/cursedFlames'}><h1 className='   hover:underline hover:text-blue-500 duration-200 ml-2'>Cursed flames</h1></Link>
                  </div>
                    <div className='flex mt-2'>
                      <img src='https://terraria.wiki.gg/images/3/3b/Sharpening_Station.png' /> <Link className='h-6' to={'/meleeBafs/sharpeningStation'}><h1 className='  hover:underline hover:text-blue-500 duration-200 ml-2'>Sharpening Station</h1></Link>
                    </div>
                    <div className='flex mt-2'>
                      <img src='https://terraria.wiki.gg/images/d/d7/Wrath_Potion.png' /> <Link className='h-6 mt-2' to={'/meleeBafs/wrathPotion'}><h1 className='ml-2   hover:underline hover:text-blue-500 duration-200'>Wrath Potion</h1></Link>
                    </div>
                    <div className='flex mt-2'>
                      <img src='https://terraria.wiki.gg/images/e/ec/Rage_Potion.png' /> <Link className='h-6 mt-2' to={'/meleeBafs/rage'}><h1 className='ml-2   hover:underline hover:text-blue-500 duration-200'>Rage Potion</h1></Link>
                    </div>
                    <div className='flex mt-2'>
                      <img src='https://terraria.wiki.gg/images/9/91/Summoning_Potion.png' /> <Link className='h-6 mt-2' to={'/sum/SummoningPotion'}><h1 className='ml-1 hover:underline hover:text-blue-500 duration-200'>Summoning Potion</h1></Link>
                    </div>
                </div>
                
              </div>
              <div>
                <PreMechBossesAcs/>
              </div>
              <div className='border border-gray-600 rounded-lg p-3 bg-[#101017] mt-3 ml-3 h-44'>
              <h1 className='mb-2 font-bold' >Summoner Accessories:</h1>
              <div>
                <div className="flex">
                  <img src="https://terraria.wiki.gg/images/9/9d/Feral_Claws.png"/><Link className="ml-2  hover:underline hover:text-blue-500 duration-200" to='/sum/FeralClaws' >Feral Claws</Link >
                </div>
                <div className="flex mt-3">
                  <img src="https://terraria.wiki.gg/images/2/2f/Pygmy_Necklace.png"/><Link className="ml-2  hover:underline hover:text-blue-500 duration-200" to='/sum/PygmyNecklace' >Pygmy Necklace</Link >
                </div>
                <div className="flex mt-3">
                  <img src="https://terraria.wiki.gg/images/7/70/Summoner_Emblem.png"/><Link className="ml-2  hover:underline hover:text-blue-500 duration-200" to='/sum/SummonerEmblem' >Summoner Emblem</Link >
                </div>
              </div>
            </div>
              </div>
              
          </div>  
          
    </div>
  )
}
