import { Link } from "react-router-dom"


export const MeleePreHardMode = () => {
  return (
    <div>
        <div className='ml-3'>
            <div>
              <h1 className='text-xl my-2'>Pre Hardmode</h1>
            </div>  
            <div className='ml-2 '>
              <div className='border border-gray-600 rounded-lg p-3 bg-slate-100 '>
                <h1 >Weapons:</h1>
                <div className='flex'>
                  <img className='w-12 h-12' src='https://terraria.wiki.gg/images/9/98/Night%27s_Edge.png'/> <Link className='h-6 mt-2' to={'/meleeWeapons/nightsEdge'}><h1 className='ml-1 text-forWiki-links hover:underline'>Nights Edge </h1></Link>
                </div>
              </div>
              <div className='border border-gray-600 rounded-lg p-3 bg-slate-100 mt-3'>
                <h1>Armor:</h1>
                <div className='flex'>
                  <img className='w-7 h-12' src='https://terraria.wiki.gg/images/f/f1/Molten_armor.png' /> <Link className='h-6 mt-2' to={'/meleeArmor/moltenArmor'}><h1 className='ml-1 text-forWiki-links hover:underline'>Molten armor</h1></Link>
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
          </div>
    </div>
  )
}
