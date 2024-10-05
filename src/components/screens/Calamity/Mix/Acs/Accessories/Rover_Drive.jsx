 

import styles from '../../../../../css/App.module.scss'

export const Rover_Drive = () => {
  return (
    <div className={styles.main}>
        <h1 className='p-2 border border-gray-600  rounded-md bg-[#101017]' ><a className='font-bold  '>The Rover Drive</a> is a Pre-Hardmode accessory that is dropped by Wulfrum Rovers. When equipped for 10 seconds without taking damage, a protective matrix covers its user, which grants 10 defense and 20 matrix durability. If the player gets hit, durability is lost instead of health by the amount of damage taken, without naturally regenerating itself back. Once all 20 durability is depleted, the shield breaks and requires 10 seconds to recharge. Taking a hit while recharging resets the timer..</h1>    
      <div>
      <h1 className='font-bold my-2 py-1 w-3/6 text-center border border-gray-600  rounded-md bg-[#101017] mt-5'>Used in</h1>
        <div className='border border-gray-600 rounded-md p-2 w-3/6 h-40 bg-[#101017]'>
          <div className='flex'>
              <div className='w-52'>
                  <h1 className='font-bold border border-gray-600 dark:bg-slate-100 bg-[#1c1f20] text-center rounded-md mb-1'>Result</h1>
                  <div className='flex mt-3'>
                    <img className='' src='/Lunic_Corps_Vest.webp'/> <h1 className=' ml-2 ' >Lunic Corps Vest</h1>
                  </div>
              </div>   
                <div className='border border-gray-300 h-36 ml-2' >
              </div>
              <div className='w-52 ml-2'>
                  <h1 className='font-bold border border-gray-600 dark:bg-slate-100 bg-[#1c1f20] text-center rounded-md mb-1'>Ingridients</h1>
                  <div className='flex mt-3' >
                    <img className='' src='/Rover_Drive.webp'/> <h1 className='ml-1 text-sm ' >Rover Drive</h1>
                  </div>
                  <div className='flex mt-3' >
                    <img className='' src='/Astral_Bar.webp'/> <h1 className='ml-1 text-sm ' >Astral Bar</h1><h1 className='ml-1 text-sm text-white/75'>x11</h1>
                  </div>
                  <div className='flex mt-3' >
                    <img className='' src='/Chlorophyte_Bar.webp'/> <h1 className='ml-1 text-sm ' >Chlorophyte Bar</h1><h1 className='ml-1 text-sm text-white/75'>x11</h1>
                  </div>
              </div>
              <div className='border border-gray-300 h-36 ml-2' ></div>
              <div className='w-52 ml-2'>
                  <h1 className='font-bold border border-gray-600 dark:bg-slate-100 bg-[#1c1f20] text-center rounded-md mb-1'>Crafting station</h1> 
                  <div className='flex' >
                      <img className='' src='/Ancient_Manipulator.webp'/> <h1 className='text-base ml-2' >Ancient Manipulator</h1>
                  </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}
          


         