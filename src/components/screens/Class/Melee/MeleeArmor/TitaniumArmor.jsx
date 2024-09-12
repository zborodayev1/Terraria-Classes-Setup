import { Link } from 'react-router-dom'
import styles from '../../../../css/App.module.scss'

export const TitaniumArmor = () => {
  return (
    <div className={styles.main}>
        <h1 className=' p-2 roundet-md' ><a className='font-bold'>Titanium armor </a>is a Hardmode armor set crafted from Titanium Bars, and is the alternative to Adamantite armor. Like many Hardmode armors, it has three different headgear/helmet options, allowing the player to focus on magical, melee, or ranged combat. Crafting a one-helmet set requires 59 Titanium Bars, made from  236 /  295 Titanium Ore. Crafting all five pieces requires 85 Titanium Bars or  340 /  425 Titanium Ore.</h1>    
      <div className=''>
        <div className=''>
          <h1 className='' >Crafting</h1>
          <div className='flex'>
              <div className='w-44 p-2'>
                  <h1 className='' >Result</h1>
                  <div className='flex'>
                      <img className='' src='https://terraria.wiki.gg/images/7/72/Titanium_armor.png'/> <h1 className='mt-2 ml-2' >Titanium armor</h1>
                  </div>
              </div>   
              <div className='w-44 p-2 ml-2'>
                  <h1 className='' >Ingridients</h1>
                  <div className='flex mt-2' >
                      <img className='' src='https://terraria.wiki.gg/images/9/94/Titanium_Bar.png'/> <h1 className='ml-1 text-sm' >Titanium Bar x59</h1>
                  </div>
              </div>
              <div className='w-44 p-2'>
                  <h1 className='' >Crafting station</h1> 
                  <div className='flex' >
                      <img className='w-8 h-4' src='https://terraria.wiki.gg/images/3/3d/Mythril_Anvil.png'/> <Link to='/wiki/items/hardModeAnvils' className='text-base ml-2  text-blue-500 hover:underline' >Mythril Anvil</Link>
                  </div>
                  <div className='flex' >
                      <img className='w-8 h-4' src='https://terraria.wiki.gg/images/d/dc/Orichalcum_Anvil.png'/> <Link to='/wiki/items/hardModeAnvils' className='text-base ml-2 text-blue-500 hover:underline' >Orichalcum Anvil</Link>
                  </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}
