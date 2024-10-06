import { Link } from 'react-router-dom'
import styles from '../../../../css/App.module.scss'

export const CalBladeOfGrass = () => {
  return (
    <div className={styles.main}>
        <h1 className='p-2 border border-gray-600  rounded-md bg-[#101017]' ><a className='font-bold  '>The Blade of Grass</a> is a pre-Hardmode sword crafted using materials from the Underground Jungle. It has a decent size and swing reach, and has a 1/4 (25%) chance of inflicting the Poisoned debuff for 7 seconds upon striking enemies.

Blade of Grass is roughly equal to the Volcano in size, making it one of the largest swords in pre-Hardmode. When swung, it fires a small, green Leaf Blade projectile that flies upwards in a circle, leaving behind a green particle effect resembling leaves. The Leaf Blade projectile can pass through blocks, has 20 armor penetration,[2] can automatically target enemies within a radius of 9.375 tiles, deals 25% base damage (4 base damage), can pierce one enemy, and has the same chance to inflict Poisoned for the same duration as the sword itself.

The Blade of Grass is one of the key ingredients in crafting the Nights Edge.

Its best modifier is Legendary.</h1>    
      <div>
        <div className='flex'>
            <div>
                <h1 className='font-bold my-2 py-1 max-w-2xl text-center border border-gray-600  rounded-md bg-[#101017] mt-5'>Crafting</h1>
                <div className='border border-gray-600 rounded-md max-w-2xl p-2  h-44 bg-[#101017]'>
                <div className='flex'>
                    <div className='w-52'>
                        <h1 className='font-bold border dark: dark:bg-slate-100 bg-[#1c1f20] border-gray-600  text-center rounded-md mb-1'>Result</h1>
                        <div className='flex mt-3'>
                        <img className='w-10 h-10' src='/Blade_of_Grass.webp'/> <h1 className='mt-2 ml-2 font-bold' >Blade of Grass</h1>
                        </div>
                    </div>   
                        <div className='border border-gray-300 h-40 ml-2' >
                    </div>
                    <div className='w-52 ml-2'>
                        <h1 className='font-bold border border-gray-600  dark:bg-slate-100 bg-[#1c1f20]  text-center rounded-md mb-1'>Ingridients</h1>
                        <div className='flex mt-3' >
                        <img className='w-4 h-5' src='/Stinger.webp'/> <Link to='/wiki/items/stinger'className='ml-1 text-sm   hover:underline hover:text-blue-500 duration-200  ' >Stingers</Link><h1 className='ml-1 text-sm text-white/75'>x12</h1>
                        </div>
                        <div className='flex mt-3' >
                        <img className='w-5 h-4' src='/Jungle_Spores.webp'/> <Link to='/wiki/items/jungle_Spore'className='ml-2 text-sm   hover:underline hover:text-blue-500 duration-200  ' >Jungle Spores</Link><h1 className='ml-1 text-sm  text-white/75'>x15</h1>
                        </div>
                        <div className='flex mt-3' >
                        <img className='w-4 h-6' src='/Vine.webp'/> <Link to='/wiki/items/vine' className='ml-2 text-sm   hover:underline hover:text-blue-500 duration-200  ' >Vine</Link><h1 className='ml-1 text-sm  text-white/75'>x3</h1>
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
                        <h1 className='bg-[#1c1f20] rounded-sm w-72 text-center border border-gray-600 py-1 dark:bg-slate-400'>Blade of Grass</h1>
                    </div>
                    <div className='flex justify-center mt-2'>
                            <img src='/Blade_of_Grass.webp'/>
                    </div>
                    <div className='flex justify-center'>
                        <h1 className='mt-2 bg-[#1c1f20] rounded-sm w-72 border border-gray-600 text-center dark:bg-slate-400'>Statistics</h1>
                    </div>
                    <div className='flex justify-center mt-2'>
                        <div className='text-sm'>
                            <h1 className='mt-2'><a className='font-bold'>Type Weapon </a>– Crafting material</h1>
                            <h1 className='mt-2'><a className='font-bold'>Damage</a> – 18 melee</h1>
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
          


         