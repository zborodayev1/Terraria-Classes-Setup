import { Link } from 'react-router-dom'
import styles from '../../../../css/App.module.scss'

export const RedtideSpear = () => {
  return (
    <div className={styles.main}>
        <h1 className='p-2 border border-gray-600  rounded-md bg-[#101017]' ><a className='font-bold  '>The Redtide Spear </a>is a craftable Pre-Hardmode spear. When used, it acts like a normal spear. However, if held in the direction the player is running, the player will hold the spear in front of them, gaining immunity to knockback and dealing 35% increased knockback. If the player stops holding, the spear will launch enemies in front of it into the air, dealing up to 50 bonus damage when they fall back to the ground.

Its best modifier is Godly. It cannot get modifiers that affect size.</h1>    
      <div>
        <div className='flex'>
            <div>
                <h1 className='font-bold my-2 py-1 max-w-2xl text-center border border-gray-600  rounded-md bg-[#101017] mt-5'>Crafting</h1>
                <div className='border border-gray-600 rounded-md max-w-2xl p-2  h-44 bg-[#101017]'>
                <div className='flex'>
                    <div className='w-52'>
                        <h1 className='font-bold border dark: dark:bg-slate-100 bg-[#1c1f20] border-gray-600  text-center rounded-md mb-1'>Result</h1>
                        <div className='flex mt-3'>
                        <img className='' src='/Redtide_Spear.webp'/> <h1 className='mt-2 ml-2 font-bold' >Redtide Spear</h1>
                        </div>
                    </div>   
                        <div className='border border-gray-300 h-40 ml-2' >
                    </div>
                    <div className='w-52 ml-2'>
                        <h1 className='font-bold border border-gray-600  dark:bg-slate-100 bg-[#1c1f20]  text-center rounded-md mb-1'>Ingridients</h1>
                        <div className='flex mt-3' >
                            <img className='' src='/Sea_Remains.webp'/> <Link to='/wiki/items/stinger'className='ml-1 text-sm   hover:underline hover:text-blue-500 duration-200  ' >Sea Remains</Link><h1 className='ml-1 text-sm text-white/75'>x4</h1>
                        </div>
                    </div>
                    <div className='border border-gray-300 h-40 ml-2' ></div>
                    <div className='w-52 ml-2'>
                        <h1 className='font-bold border border-gray-600  dark:bg-slate-100 bg-[#1c1f20]  text-center rounded-md mb-1'>Crafting station</h1> 
                        <div className='flex' >
                            <img className='w-8 h-4' src='/Iron_Anvil.webp'/> <Link to='/wiki/preHardMode/preHardModeAnvils' className='text-base ml-2   hover:underline hover:text-blue-500 duration-200  ' >Iron Anvil</Link>
                        </div>
                        <div className='flex' >
                            <img className='w-8 h-4' src='/Lead_Anvil.webp'/> <Link to='/wiki/preHardMode/preHardModeAnvils' className='text-base ml-2   hover:underline hover:text-blue-500 duration-200  ' >Lead Anvil</Link>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            <div className='ml-3'>
                <div className='w-72 p-1 mt-3 bg-[#101017] rounded-md border border-gray-600 '>
                    <div className='flex justify-center'>
                        <h1 className='bg-[#1c1f20] rounded-sm w-72 text-center border border-gray-600 py-1 dark:bg-slate-400'>Redtide Spear</h1>
                    </div>
                    <div className='flex justify-center mt-2'>
                            <img src='/Redtide_Spear.webp'/>
                    </div>
                    <div className='flex justify-center'>
                        <h1 className='mt-2 bg-[#1c1f20] rounded-sm w-72 border border-gray-600 text-center dark:bg-slate-400'>Statistics</h1>
                    </div>
                    <div className='flex justify-center mt-2'>
                        <div className='text-sm'>
                            <h1 className='mt-2'><a className='font-bold'>Type</a>– Weapon</h1>
                            <h1 className='mt-2'><a className='font-bold'>Damage</a> – 25 melee</h1>
                            <h1 className='mt-2 mb-2'><a className='font-bold'>Critical chance</a> – 4%</h1>
                        </div>
                    </div>
                </div>
            </div>  
        </div>
      </div>
    </div>
  )
}
          


         