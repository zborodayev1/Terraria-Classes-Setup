import { Link } from "react-router-dom"
import styles from '../../../../../css/App.module.scss'
import { PreBossesAcs } from "../../../Acs/PreBosses/PreBossesAcs"


export const SumPreBosses = () => {
  return (
    <div className={styles.main}>
        <div className="flex ml-3">
            <div>
             <div className='flex'>
                  <h1 className='text-xl my-2'>Pre Bosses</h1>
                  <div className='bg-[#004cc6] w-4 h-6 ml-2 mt-3'></div>
                </div>  
              <div>
                <div className='border border-gray-600 rounded-lg p-3 bg-[#101017] '>
                  <h1 className='mb-2 font-bold' >Weapons:</h1>
                  <div className='flex'>
                    <img className='' src='https://terraria.wiki.gg/images/a/a0/Snapthorn.png'/> <Link className='h-6' to={'/sum/Snapthorn'}><h1 className='ml-1 hover:underline hover:text-blue-500 duration-200'>Snapthorn</h1></Link>
                  </div>
                  <div className='flex mt-3'>
                    <img className='' src='https://terraria.wiki.gg/images/d/de/Flinx_Staff.png'/> <Link className='h-6' to={'/sum/FlinxStaff'}><h1 className='ml-1 hover:underline hover:text-blue-500 duration-200'>Flinx Staff</h1></Link>
                  </div>
                </div>
                  <div className='border border-gray-600 rounded-lg p-3 bg-[#101017] mt-3'>
                    <h1 className="font-bold">Armor:</h1>
                    <div className='flex'>
                      <img className='' src='https://terraria.wiki.gg/images/9/94/Platinum_armor.png' /> <Link className='h-6 mt-3' to={'/meleeArmor/platinumArmor'}><h1 className='ml-1 hover:underline hover:text-blue-500 duration-200'>Platinum armor</h1></Link>
                    </div>
                    <div className='flex mt-2'>
                      <img className='' src='https://terraria.wiki.gg/images/9/93/Flinx_Fur_Coat.png' /> <Link className='' to={'/sum/FlinxFurCoat'}><h1 className='ml-1 hover:underline hover:text-blue-500 duration-200'>Flinx Fur Coat</h1></Link>
                    </div>
                </div>
                <div className='border border-gray-600 rounded-lg p-3 bg-[#101017] mt-3'>
                    <h1 className="font-bold" >Buffs:</h1>
                    <div className='flex'>
                      <img src='https://terraria.wiki.gg/images/3/3b/Sharpening_Station.png' /> <Link className='h-6' to={'/meleeBafs/sharpeningStation'}><h1 className='ml-1 hover:underline hover:text-blue-500 duration-200'>Sharpening Station</h1></Link>
                    </div>
                    <div className='flex mt-2'>
                      <img src='https://terraria.wiki.gg/images/d/d7/Wrath_Potion.png' /> <Link className='h-6 mt-2' to={'/meleeBafs/wrathPotion'}><h1 className='ml-1 hover:underline hover:text-blue-500 duration-200'>Wrath Potion</h1></Link>
                    </div>
                    <div className='flex mt-2'>
                      <img src='https://terraria.wiki.gg/images/e/ec/Rage_Potion.png' /> <Link className='h-6 mt-2' to={'/meleeBafs/rage'}><h1 className='ml-1 hover:underline hover:text-blue-500 duration-200'>Rage Potion</h1></Link>
                    </div>
                    <div className='flex mt-2'>
                      <img src='https://terraria.wiki.gg/images/9/91/Summoning_Potion.png' /> <Link className='h-6 mt-2' to={'/sum/SummoningPotion'}><h1 className='ml-1 hover:underline hover:text-blue-500 duration-200'>Summoning Potion</h1></Link>
                    </div>
                </div>
              </div>
            </div>
            <div className="mt-3">
              <PreBossesAcs/>
            </div>
            <div className='border border-gray-600 rounded-lg p-3 bg-[#101017] mt-11 ml-3  h-44'>
              <h1 className='mb-2 font-bold' >Summoner Accessories:</h1>
              <div>
                <div className="flex">
                  <img src="https://terraria.wiki.gg/images/9/9d/Feral_Claws.png"/><Link className="ml-2  hover:underline hover:text-blue-500 duration-200" to='/sum/FeralClaws' >Feral Claws</Link >
                </div>
              </div>
            </div>
          </div>
    </div>
  )
}
