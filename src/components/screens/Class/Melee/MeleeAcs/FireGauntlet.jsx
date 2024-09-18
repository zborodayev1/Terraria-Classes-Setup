import styles from '../../../../css/App.module.scss'

export const FireGauntlet = () => {
  return (
    <div className={styles.main}>
        <h1 className='' ><a className='font-bold'>The Fire Gauntlet</a> is a Hardmode accessory that boosts melee weapons in the following ways:

Both the weapon sprite and projectile emit orange light particles that gives off light
 </h1>
 {/* bufs */}
    <div className='my-3'>
            <h1 className='font-bold mt-3'>The stat bonuses are:</h1>
            <div className='ml-3'>
                <h1>+100% knockback</h1>
                <h1>+12% damage</h1>
                <h1>+12% attack speed </h1>
                <h1>They gain autoswing (also applies to whips)</h1>
                <h1>+10% size on some melee weapons</h1>
            </div>
    </div>
<div className=''>
          <h1 className='font-bold'>Crafting</h1>
          <div className='flex'>
              <div className=' p-2'>
                  <h1  className='font-bold'>Result</h1>
                  <div className='flex'>
                      <img className='w-7 h-8' src='https://terraria.wiki.gg/images/8/8a/Fire_Gauntlet.png'/> <h1 className='ml-2 font-bold' >Fire Gauntlet</h1>
                  </div>
              </div>   
              <div className=' p-2'>
                  <h1  className='font-bold'>Ingridients</h1>
                  <div className='flex mt-2' >
                      <img className='w-7 h-7' src='https://terraria.wiki.gg/images/3/33/Magma_Stone.png'/> <h1 className='ml-1 text-sm' >Magma Stone</h1>
                  </div>
                  <div className='flex mt-2' >
                      <img className='w-6 h-7' src='https://terraria.wiki.gg/images/2/21/Mechanical_Glove.png'/> <h1 className='ml-2 text-sm' >Mechanical Glove</h1>
                  </div>
              </div>
              <div className=' p-2'>
                  <h1 className='font-bold'>Crafting station</h1> 
                  <div className='flex' >
                      <img className='w-7 h-6' src='https://terraria.wiki.gg/images/1/17/Tinkerer%27s_Workshop.png'/> <h1 className='text-base ml-2' >Tinkerers Workshop</h1>
                  </div>
              </div>
          </div>
        </div>
    </div>
  )
}
