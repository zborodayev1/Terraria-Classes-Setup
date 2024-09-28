
import styles from '../../../../css/App.module.scss'

export const Quivers = () => {
  return (
    <div className={styles.main}>
        <h1 className='p-2 border border-gray-600  rounded-md bg-[#101017]' ><a className='font-bold  '>The Quivers</a> is a Hardmode Accessories that boosts arrows and stakes. Unlike the general ranged damage bonuses, it only boosts the damage of the weapons and does not affect damage of the ammo.</h1>    
      <div className='flex'>
        <div>
        <h1 className='font-bold my-2 py-1 text-center border border-gray-600  rounded-md bg-[#101017] mt-5'>Crafting</h1>
            <div className='border border-gray-600 rounded-md p-2 h-56 bg-[#101017]'>
            <div className='flex'>
                <div className='w-52'>
                    <h1 className='font-bold border border-gray-600 bg-slate-100  text-center rounded-md mb-1'>Result</h1>
                    <div className='flex'>
                        <img className='' src='https://terraria.wiki.gg/images/8/8e/Molten_Quiver.png'/> <h1 className='mt-2 ml-2 font-bold' >Molten Quiver</h1>
                    </div>
                    <div className='flex mt-24'>
                        <img className='' src='https://terraria.wiki.gg/images/5/51/Stalker%27s_Quiver.png'/> <h1 className='mt-2 ml-2 font-bold' >Stalker Quiver</h1>
                    </div>
                </div>   
                    <div className='border border-gray-300 h-52 ml-2' >
                </div>
                <div className='w-52 ml-2'>
                    <h1 className='font-bold border border-gray-600 bg-slate-100  text-center rounded-md mb-1'>Ingridients</h1>
                    <div className='flex' >
                        <img className='' src='https://terraria.wiki.gg/images/b/b8/Magic_Quiver.png'/> <h1 className='ml-1 text-sm ' >Magic Quiver</h1>
                    </div>
                    <div className='flex' >
                        <img className='' src='https://terraria.wiki.gg/images/3/33/Magma_Stone.png'/> <h1 className='ml-1 text-sm ' >Magma Stone</h1>
                    </div>
                    <div className='flex mt-16' >
                        <img className='' src='https://terraria.wiki.gg/images/b/b8/Magic_Quiver.png'/> <h1 className='ml-1 text-sm ' >Magic Quiver</h1>
                    </div>
                    <div className='flex' >
                        <img className='' src='https://terraria.wiki.gg/images/9/92/Putrid_Scent.png'/> <h1 className='ml-1 text-sm ' >Putrid Scent</h1>
                    </div>
                </div>
                <div className='border border-gray-300 h-52 ml-2' ></div>
                <div className='w-52 ml-2'>
                    <h1 className='font-bold border border-gray-600 bg-slate-100  text-center rounded-md mb-1'>Crafting station</h1> 
                    <div className='flex' >
                        <img className='' src='https://terraria.wiki.gg/images/1/17/Tinkerer%27s_Workshop.png'/> <h1 className='text-base ml-2 ' >Tinkerer Workshop</h1>
                    </div>
                </div>
            </div>
            </div>
        </div>
        <div className='ml-5'>
            <h1 className='font-bold my-2 py-1 text-center border w-96 border-gray-600  rounded-md bg-[#101017] mt-5'>Obtained from</h1>
            <div className='w-96 my-2 py-1 text-center border h-52 border-gray-600  rounded-md bg-[#101017]'>
                <div className='ml-1 mt-1 flex'>
                    <img className='' src='https://terraria.wiki.gg/images/b/b8/Magic_Quiver.png'/><h1 className='ml-1'>Magic Quiver:</h1>
                </div>
                <div className='flex ml-2'>
                    <img className='' src='https://terraria.wiki.gg/images/3/34/Skeleton_Archer.gif'/><h1 className='mt-4 ml-1'>Skeleton Archer</h1>
                </div>
                <div className='ml-1 mt-5 flex'>
                    <img className='' src='https://terraria.wiki.gg/images/3/33/Magma_Stone.png'/><h1 className='ml-1'>Magma Stone:</h1>
                </div>
                <div className='flex ml-2'>
                    <img className='' src='https://terraria.wiki.gg/images/8/8a/Lava_Bat.gif'/><h1 className='mt-2 ml-1'>Lava Bat</h1>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}
          


         