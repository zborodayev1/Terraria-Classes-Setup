import styles from '../../../../css/App.module.scss'

export const FireGauntlet = () => {
  return (
    <div className={styles.main}>
        <h1 className='p-2 roundet-md' ><a className='font-bold'>The Fire Gauntlet</a> is a Hardmode accessory that boosts melee weapons in the following ways:

Both the weapon sprite and projectile emit orange light particles that gives off light
Hellfire 
They cause the  Hellfire
+100% knockback
 +12% 
 +12% 
 They gain autoswing 
 +10% size on some melee weapons</h1>
<div className=' w-96'>
          <h1 >Crafting</h1>
          <div className='flex'>
              <div className='w-44 p-2'>
                  <h1  >Result</h1>
                  <div className='flex'>
                      <img className='w-7 h-8' src='https://terraria.wiki.gg/images/8/8a/Fire_Gauntlet.png'/> <h1 className='ml-2 font-bold' >Fire Gauntlet</h1>
                  </div>
              </div>   
              <div className='w-44 p-2'>
                  <h1  >Ingridients</h1>
                  <div className='flex mt-2' >
                      <img className='w-7 h-7' src='https://terraria.wiki.gg/images/3/33/Magma_Stone.png'/> <h1 className='ml-1 text-sm' >Magma Stone</h1>
                  </div>
                  <div className='flex mt-2' >
                      <img className='w-6 h-7' src='https://terraria.wiki.gg/images/2/21/Mechanical_Glove.png'/> <h1 className='ml-2 text-sm' >Mechanical Glove</h1>
                  </div>
              </div>
              <div className='w-44 p-2'>
                  <h1 >Crafting station</h1> 
                  <div className='flex' >
                      <img className='w-7 h-6' src='https://terraria.wiki.gg/images/1/17/Tinkerer%27s_Workshop.png'/> <h1 className='text-base ml-2' >Tinkerers Workshop</h1>
                  </div>
              </div>
          </div>
        </div>
    </div>
  )
}
