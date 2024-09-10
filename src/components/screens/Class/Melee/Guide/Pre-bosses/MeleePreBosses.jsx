import { Link } from "react-router-dom"
import styles from '../../../../../css/App.module.scss'


export const MeleePreBosses = () => {
  return (
    <div className={styles.main}>
        <div className="flex">
            <div className='ml-2 p-2 w-72'>
              <h1 className='text-xl'>Pre Bosses</h1>
              <div className='border border-gray-600 rounded-lg p-3 bg-slate-100 '>
                <h1 className='mb-2 font-bold' >Weapons:</h1>
                <div className='flex'>
                  <img className='w-12 h-12' src='https://terraria.wiki.gg/images/8/85/Blade_of_Grass.png'/> <Link className='h-6 mt-3' to={'/meleeWeapons/bladeofgrass'}><h1 className='ml-1 text-forWiki-links hover:underline'>Blade of grass</h1></Link>
                </div>
                <div className='flex'>
                  <img className='w-12 h-12' src='https://terraria.wiki.gg/images/2/2d/Starfury.png'/> <Link className='h-6 mt-3' to={'/meleeWeapons/starfury'}><h1 className='ml-1 text-forWiki-links hover:underline'>Starfury</h1></Link>
                </div>
              </div>
                <div className='border border-gray-600 rounded-lg p-3 bg-slate-100 mt-3'>
                  <h1>Armor:</h1>
                  <div className='flex'>
                    <img className='w-7 h-12' src='https://terraria.wiki.gg/images/9/94/Platinum_armor.png' /> <Link className='h-6 mt-3' to={'/meleeArmor/platinumArmor'}><h1 className='ml-1 text-forWiki-links hover:underline'>Platinum armor</h1></Link>
                  </div>
              </div>
              <div className='border border-gray-600 rounded-lg p-3 bg-slate-100 mt-3'>
                  <h1>Buffs:</h1>
                  <div className='flex'>
                    <img src='https://terraria.wiki.gg/images/3/3b/Sharpening_Station.png' /> <Link className='h-6' to={'/meleeBafs/sharpeningStation'}><h1 className='ml-1 text-forWiki-links hover:underline'>Sharpening Station</h1></Link>
                  </div>
                  <div className='flex mt-2'>
                    <img src='https://terraria.wiki.gg/images/d/d7/Wrath_Potion.png' /> <Link className='h-6 mt-2' to={'/meleeBafs/wrathPotion'}><h1 className='ml-1 text-forWiki-links hover:underline'>Wrath Potion</h1></Link>
                  </div>
                  <div className='flex mt-2'>
                    <img src='https://terraria.wiki.gg/images/e/ec/Rage_Potion.png' /> <Link className='h-6 mt-2' to={'/meleeBafs/rage'}><h1 className='ml-1 text-forWiki-links hover:underline'>Rage Potion</h1></Link>
                  </div>
              </div>
            </div>
            <div>
              <h1 className="p-2 text-xl ">Stage Bosses</h1>
              <div className='border border-gray-600 rounded-lg p-3 w-72 bg-slate-100 h-56'>
                <div className="flex">
                  <img className="w-28 h-40" src="https://terraria.wiki.gg/images/7/70/Eye_of_Cthulhu_%28Phase_1%29.gif" />
                  <h1 className="">Eye of Cthulhu <h1>max hp: <a>1400/2800,</a> <a className="text-forWiki-expert">2366/3640</a>, <a className="text-forWiki-master" >3016/4641</a></h1> <h1>damage: 23,<h1 className="text-forWiki-expert">36/40</h1><h1 className="text-forWiki-master">54/60</h1></h1></h1>

                </div>
              </div>
            </div>
          </div>
    </div>
  )
}
