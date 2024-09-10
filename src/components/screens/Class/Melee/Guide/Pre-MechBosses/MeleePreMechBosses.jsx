import { Link } from 'react-router-dom'

export const MeleePreMechBosses = () => {
  return (
    <div>
        <div className='ml-3'>
            <div>
              <h1 className='text-xl my-2'>Pre-Mech Bosses</h1>
            </div>  
            <div className='ml-2'>
              <div className='border border-gray-600 rounded-lg p-3 bg-slate-100 mt-3'>
                <h1>Weapons:</h1>
                <div className='flex'>
                  <img className='w-12 h-12' src='https://terraria.wiki.gg/images/e/ea/Ice_Sickle.png'/> <Link className='h-6 mt-2' to={'/meleeWeapons/iceSickle'}><h1 className=' text-forWiki-links hover:underline ml-1'>Ice Sickle </h1></Link>
                </div>
                <div className='flex'>
                  <img  src='https://terraria.wiki.gg/images/d/d2/Shadowflame_Knife.png'/> <Link className='h-6 mt-2' to={'/meleeWeapons/shadowflameKnife'}><h1 className=' text-forWiki-links hover:underline ml-1'>Shadowflame Knife </h1></Link>
                </div>
              </div>
              <div className='border border-gray-600 rounded-lg p-3 bg-slate-100 mt-3'>
                <h1>Armor:</h1>
                <div className='flex'>
                  <img src='https://terraria.wiki.gg/images/2/24/Titanium_armor_%28old%29.png' /> <Link className='h-6 mt-2' to={'/meleeArmor/titanumArmor'}><h1 className=' text-forWiki-links hover:underline ml-1'>Titanium armor</h1></Link>
                </div>
              </div>
              <div className='border border-gray-600 rounded-lg p-3 bg-slate-100 mt-3'>
                <h1>Buffs:</h1>
                <div className='flex'>
                  <img src='https://terraria.wiki.gg/images/f/f6/Sake.png' /> <Link className='h-6 mt-2' to={'/meleeBafs/sake'}><h1 className=' text-forWiki-links hover:underline ml-1'>Sake</h1></Link>
                </div>
                <div className='flex'>
                  <img src='https://terraria.wiki.gg/images/7/71/Flask_of_Ichor.png' /> <Link className='h-6 mt-2' to={'/meleeBafs/ichor'}><h1 className=' text-forWiki-links hover:underline ml-1'>Ichor</h1></Link>
                  <h1 className='mt-2 italic mx-2'>or</h1>
                  <img src='https://terraria.wiki.gg/images/0/08/Flask_of_Cursed_Flames.png' /> <Link className='h-6 mt-2' to={'/meleeBafs/cursedFlames'}><h1 className=' text-forWiki-links hover:underline ml-1'>Cursed flames</h1></Link>
                </div>
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
              <div className='border border-gray-600 rounded-lg p-3 bg-slate-100 mt-3'>
                <h1>Accessories:</h1>
                <div className='flex'>
                  <img src='https://terraria.wiki.gg/images/d/d7/Warrior_Emblem.png' /> <Link className='h-6 mt-2' to={'/meleeAcs/warriorEmblem'}><h1 className=' text-forWiki-links hover:underline'>Warrior Emblem</h1></Link>
                </div>
                <div className='flex'>
                  <img src='https://terraria.wiki.gg/images/0/05/Berserker%27s_Glove.png' /> <Link className='h-6 mt-2' to={'/meleeAcs/berserkerGlove'}><h1 className=' text-forWiki-links hover:underline'>Berserker glove</h1></Link>
                </div>
              </div>
            </div>
          </div>
    </div>
  )
}
