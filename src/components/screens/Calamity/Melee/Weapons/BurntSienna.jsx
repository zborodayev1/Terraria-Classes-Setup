
import styles from '../../../../css/App.module.scss'

export const BurntSienna = () => {
  return (
    <div className={styles.main}>
        <h1 className='p-2 border border-gray-600  rounded-md bg-[#101017]' ><a className='font-bold  '>The Burnt Sienna</a> is a Pre-Hardmode broadsword that <a className='underline'>drops from Tomb Crawlers</a>. When swung, the blade releases cosmetic light particles. Upon killing an enemy, three small, bright-yellow orbs will shoot out, which will heal the player for 3 HP when picked up.

Its best modifier is Legendary.</h1>    
      <div>
        <div className='w-72 p-1 mt-3 bg-[#101017]  border border-gray-600 '>
            <div className='flex justify-center'>
                <h1 className='bg-[#1c1f20] rounded-sm w-72 text-center py-1 dark:bg-slate-400'>Burnt Sienna</h1>
            </div>
            <div className='flex justify-center mt-2'>
                    <img src='/Burnt_Sienna.webp'/>
            </div>
            <div className='flex justify-center'>
                <h1 className='mt-2 bg-[#1c1f20] rounded-sm w-72 text-center dark:bg-slate-400'>Statistics</h1>
            </div>
            <div className='flex justify-center mt-2'>
                <div className='text-sm'>
                    <h1 className='mt-2'><a className='font-bold'>Type Weapon </a>– Crafting material</h1>
                    <h1 className='mt-2'><a className='font-bold'>Damage</a> 32 True melee</h1>
                    <h1 className='mt-2 mb-2'><a className='font-bold'>Critical chance</a> 4%</h1>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
          


         