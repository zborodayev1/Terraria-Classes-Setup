import { Link } from "react-router-dom"
import styles from '../../../../../css/App.module.scss'
import { PreHardModeAcs } from "../../../Acs/PreHardMode/PreHardModeAcs"


export const MagePreHardmode = () => {
  return (
    <div className={styles.main}>
        <div className='ml-3 flex'>
          <div>
          <div className='flex'>
                  <h1 className='text-xl my-2'>Pre Hard Mode</h1>
                  <div className='bg-[#d30ca1] w-4 h-6 ml-2 mt-3'></div>
                </div>  
            <div className='ml-2 w-72'>
              <div className='border border-gray-600 rounded-lg p-3  bg-[#101017] '> 
                <h1 className="font-bold">Weapons:</h1>
                  <div className='flex'>
                    <img className='h-5' src='https://terraria.wiki.gg/images/0/03/Bee_Gun.png'/> <Link className='h-6' to={'/mage/BeeGun'}><h1 className='ml-1 hover:underline hover:text-blue-500 duration-200'>Bee Gun</h1></Link>
                  </div>
              </div>
              <div className='border border-gray-600 rounded-lg p-3  bg-[#101017] mt-3'>
                <h1 className="font-bold">Armor:</h1>
                <div className='flex'>
                  <img className='w-7 h-12' src='https://terraria.wiki.gg/images/d/d4/Jungle_armor.png' /> <Link className='h-6 mt-2' to={'/mage/JungleArmor'}><h1 className='ml-1 hover:underline hover:text-blue-500 duration-200'>Jungle Armor</h1></Link>
                </div>
              </div>
              <div className='border border-gray-600 rounded-lg p-3  bg-[#101017] mt-3'>
                  <h1 className="font-bold">Buffs:</h1>
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
                      <img src='https://terraria.wiki.gg/images/c/cc/Mana_Regeneration_Potion.png' /> <Link className='h-6 mt-2' to={'/mage/ManaRegenerationPotion'}><h1 className='ml-1 hover:underline hover:text-blue-500 duration-200'>Mana Regeneration Potion </h1></Link>
                    </div>
                    <div className='flex mt-2'>
                      <img src='https://terraria.wiki.gg/images/2/2c/Magic_Power_Potion.png' /> <Link className='h-6 mt-2' to={'/mage/MagicPowerPotion'}><h1 className='ml-1 hover:underline hover:text-blue-500 duration-200'>Magic Power Potion</h1></Link>
                    </div>
              </div>
            </div>
            </div>
            <div className="mt-3">
              <PreHardModeAcs/>
            </div>
          </div>
    </div>
  )
}
