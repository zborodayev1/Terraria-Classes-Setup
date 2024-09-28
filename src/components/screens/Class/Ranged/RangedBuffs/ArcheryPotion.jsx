import styles from '../../../../css/App.module.scss'

export const ArcheryPotion = () => {
  return (
    <div className={styles.main}>
        <h1 className='p-2 border border-gray-600  rounded-md bg-[#101017]' ><a className='font-bold  '>The Archery Potion</a> is a buff potion which grants the Archery buff when consumed. The buff increases the damage of arrow-firing weapons by  10% /  20%, as well as the velocity of arrows by 20%. This lasts for 8 minutes / 4 minutes, but can be canceled at any time by right-clicking the icon (Desktop version), by selecting the icon using Cycle Next/Previous Buff and then pressing Remove Buff (Console version), by selecting the icon and canceling it in the equipment menu (Old-gen console version), by double-tapping the buff icon (Mobile version), or by canceling the buff from the buffs screen (Nintendo 3DS version).

In addition to being crafted, Archery Potions can be found in pots, chests, and crates.</h1>    
      <div>
      <h1 className='font-bold my-2 py-1 w-3/6 text-center border border-gray-600  rounded-md bg-[#101017] mt-5'>Crafting</h1>
        <div className='border border-gray-600 rounded-md p-2 w-3/6 h-44 bg-[#101017]'>
          <div className='flex'>
              <div className='w-52'>
                  <h1 className='font-bold border border-gray-600 bg-slate-100  text-center rounded-md mb-1'>Result</h1>
                  <div className='flex mt-3'>
                    <img className='' src='https://terraria.wiki.gg/images/9/9f/Archery_Potion.png'/> <h1 className='ml-2' >Archery potion</h1>
                  </div>
              </div>   
                <div className='border border-gray-300 h-40 ml-2' >
              </div>
              <div className='w-52 ml-2'>
                  <h1 className='font-bold border border-gray-600 bg-slate-100  text-center rounded-md mb-1'>Ingridients</h1>
                  <div className='flex mt-3' >
                    <img className='' src='https://terraria.wiki.gg/images/1/16/Bottled_Water.png'/> <h1 className='ml-1 ' >Botteled water</h1>
                  </div>
                  <div className='flex mt-3' >
                     <img className='' src='https://terraria.wiki.gg/images/0/02/Daybloom.png'/> <h1 className='ml-2 ' >Daybloom</h1>
                  </div> 
                  <div className='flex mt-3' >
                    <img className='' src='https://terraria.wiki.gg/images/a/ae/Lens.png'/> <h1 className='ml-2 ' >Lens</h1>
                  </div>                      
              </div>
              <div className='border border-gray-300 h-40 ml-2' ></div>
              <div className='w-52 ml-2'>
                  <h1 className='font-bold border border-gray-600 bg-slate-100  text-center rounded-md mb-1'>Crafting station</h1> 
                  <div className='flex mt-3' >
                     <img className='' src='https://terraria.wiki.gg/images/4/40/Bottle_%28crafting_station%29.png'/> <h1 className='text-base ml-2' >Placed Bottle</h1>
                  </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}
          


