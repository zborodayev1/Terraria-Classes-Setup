import { Link } from 'react-router-dom'
import styles from '../../../../css/App.module.scss'

export const TrueExcalibur = () => {
  return (
    <div className={styles.main}>
        <h1 className='p-2 border border-gray-600  rounded-md bg-[#101017]' ><a className='font-bold  '>The True Excalibur</a> is a Hardmode sword that is a direct upgrade to the Excalibur. It is one of the ingredients necessary to craft the Terra Blade.

The True Excalibur possesses a stronger version of the Excaliburs effect, adding an additional pink aura past the existing yellow aura from its predecessor, which both follow along the swords swing arc to increase its effective range. When the sword or its auras strike enemies, a bright pink and yellow flash is created.

Its best modifier is Legendary.</h1>    
      <div>
      <h1 className='font-bold my-2 py-1 w-3/6 text-center border border-gray-600  rounded-md bg-[#101017] mt-5'>Crafting</h1>
        <div className='border border-gray-600 rounded-md p-2 w-3/6 h-50 bg-[#101017]'>
          <div className='flex'>
              <div className='w-52'>
                  <h1 className='font-bold border border-gray-600 bg-slate-100  text-center rounded-md mb-1'>Result</h1>
                  <div className='flex mt-2'>
                    <img className='w-10 h-10' src='https://terraria.wiki.gg/images/5/51/True_Excalibur.png'/> <h1 className='mt-2 ml-2 font-bold' >True Excalibur</h1>
                  </div>
              </div>   
                <div className='border border-gray-300 h-50 ml-2' >
              </div>
              <div className='w-52 ml-2'>
                  <h1 className='font-bold border border-gray-600 bg-slate-100  text-center rounded-md mb-1'>Ingridients</h1>
                  <div className='flex mt-1' >
                    <img className='w-10 h-10' src='https://terraria.wiki.gg/images/f/fa/Excalibur.png'/> <Link to='/meleeWepons/excalibur' className='ml-1 mt-2 hover:underline hover:text-blue-500 duration-200' >Excalibur</Link>
                  </div>
                  <div className='flex mt-1' >
                     <img className='' src='https://terraria.wiki.gg/images/0/03/Chlorophyte_Bar.png'/> <h1  className='ml-1 ' >Chlorophyte Bar</h1><h1 className='ml-1 text-white/75'>x24</h1>
                  </div>
              </div>
              <div className='border border-gray-300 h-50 ml-2' ></div>
              <div className='w-52 ml-2'>
                  <h1 className='font-bold border border-gray-600 bg-slate-100  text-center rounded-md mb-1'>Crafting station</h1> 
                  <div className='flex' >
                      <img className='w-8 h-5 ' src='https://terraria.wiki.gg/images/3/3d/Mythril_Anvil.png'/> <Link to='/wiki/items/hardModeAnvils' className='text-base ml-2  hover:underline hover:text-blue-500 duration-200   ' >Mythril Anvil</Link>
                  </div>
                  <div className='flex' >
                      <img className='w-8 h-5' src='https://terraria.wiki.gg/images/d/dc/Orichalcum_Anvil.png'/> <Link to='/wiki/items/hardModeAnvils' className='text-base ml-2  hover:underline hover:text-blue-500 duration-200  ' >Orichalcum Anvilr</Link>
                  </div>
              </div>
          </div>
        </div>
        {/* used in */}
        <h1 className='font-bold my-2 py-1 w-3/6 text-center border border-gray-600  rounded-md bg-[#101017] mt-5'>Used in</h1>
        <div className='border border-gray-600 rounded-md p-2 w-3/6 h-50 bg-[#101017]'>
          <div className='flex'>
              <div className='w-52'>
                  <h1 className='font-bold border border-gray-600 bg-slate-100  text-center rounded-md mb-1'>Result</h1>
                  <div className='flex mt-2'>
                    <img className='w-10 h-10' src='https://terraria.wiki.gg/images/4/4d/Terra_Blade.png'/> <Link to='/meleeWeapons/terraBlade' className='mt-2 ml-2  hover:underline hover:text-blue-500 duration-200' >Terra Blade</Link>
                  </div>
              </div>   
                <div className='border border-gray-300 h-50 ml-2' >
              </div>
              <div className='w-52 ml-2'>
                  <h1 className='font-bold border border-gray-600 bg-slate-100  text-center rounded-md mb-1'>Ingridients</h1>
                  <div className='flex mt-1' >
                     <img className='w-10 h-10' src='https://terraria.wiki.gg/images/2/28/True_Night%27s_Edge.png'/> <Link to='/meleeWeapons/trueNightsEdge' className='ml-1 text-sm mt-2  hover:underline hover:text-blue-500 duration-200 ' >True Nights Edge</Link>
                  </div>
                  <div className='flex mt-1' >
                    <img className='w-10 h-10' src='https://terraria.wiki.gg/images/5/51/True_Excalibur.png'/> <Link to='/meleeWeapons/TrueExcalibur' className='ml-1 text-sm mt-2  hover:underline hover:text-blue-500 duration-200 ' >True Excalibur</Link>
                  </div>
                  <div className='flex mt-1' >
                  <img className='' src='https://terraria.wiki.gg/images/e/e3/Broken_Hero_Sword.png'/> <h1 className='ml-2 text-sm ' >Broken Hero Sword</h1>
                  </div>
              </div>
              <div className='border border-gray-300 h-50 ml-2' ></div>
              <div className='w-52 ml-2'>
                  <h1 className='font-bold border border-gray-600 bg-slate-100  text-center rounded-md mb-1'>Crafting station</h1> 
                  <div className='flex mt-3' >
                      <img className='' src='https://terraria.wiki.gg/images/1/17/Tinkerer%27s_Workshop.png'/> <h1 className='text-base ml-2' >Tinkerers Workshop</h1>
                  </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}