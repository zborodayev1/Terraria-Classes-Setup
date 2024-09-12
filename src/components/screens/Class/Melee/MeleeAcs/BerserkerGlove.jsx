import styles from '../../../../css/App.module.scss'

export const BerserkerGlove = () => {
  return (
    <div className={styles.main}>
        <h1 className='p-2 roundet-md' ><a className='font-bold'>The Berserkers Glove</a> is a Hardmode accessory crafted from the Power Glove and Flesh Knuckles, granting the abilities of both. It grants the following:

+8 defense
+12% increased melee speed
+100% increased melee knockback
+10% increased melee weapon size
+400 aggro
Autoswing for melee weapons and whips</h1>
<div className=' w-96'>
          <h1 >Crafting</h1>
          <div className='flex'>
              <div className='w-44 p-2'>
                  <h1 >Result</h1>
                  <div className='flex'>
                      <img className='w-5 h-7' src='https://terraria.wiki.gg/images/0/05/Berserker%27s_Glove.png'/> <h1 className='ml-2 font-bold' >Berserkers Glove</h1>
                  </div>
              </div>   
              <div className='w-44 p-2'>
                  <h1 >Ingridients</h1>
                  <div className='flex mt-2' >
                      <img className='w-5 h-6' src='https://terraria.wiki.gg/images/2/28/Power_Glove.png'/> <h1 className='ml-1 text-sm' >Power Glove</h1>
                  </div>
                  <div className='flex mt-2' >
                      <img className='w-8 h-6' src='https://terraria.wiki.gg/images/b/b9/Flesh_Knuckles.png'/> <h1 className='ml-2 text-sm' >Flesh Knuckles</h1>
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
