import styles from '../../../../css/App.module.scss'

export const CursedFlames = () => {
  return (
    <div className={styles.main}>
        <h1 className='' >The Flask of Cursed Flames is a Hardmode flask that causes melee weapons and whips to inflict the Cursed Inferno debuff for 3–6 seconds on enemies hit. Melee weapons that fire projectiles will also inflict the debuff on enemies hit by the projectiles (except for the Flairons bubbles).

The Flask of Cursed Flames cannot be used in conjunction with other flasks, and using it will remove any existing flask effects.  Like all other flasks, the effect will not be canceled when the player dies.

The Flask of Cursed Flames will inflict the Cursed Flames debuff in PvP scenarios.</h1>
<div className=' w-96'>
          <h1 className='' >Crafting</h1>
          <div className='flex'>
              <div className='w-44 p-2'>
                  <h1 className='' >Result</h1>
                  <div className='flex'>
                      <img className='w-5 h-7' src='https://terraria.wiki.gg/images/0/08/Flask_of_Cursed_Flames.png'/> <h1 className='ml-2 font-bold' >Flask of Cursed Flames</h1>
                  </div>
              </div>   
              <div className='w-44 p-2'>
                  <h1 className='' >Ingridients</h1>
                  <div className='flex mt-2' >
                      <img className='w-5 h-6' src='https://terraria.wiki.gg/images/1/16/Bottled_Water.png'/> <h1 className='ml-1 text-sm' >Botteled water</h1>
                  </div>
                  <div className='flex mt-2' >
                      <img className='w-3 h-4' src='https://terraria.wiki.gg/images/1/19/Cursed_Flame.png'/> <h1 className='ml-2 text-sm' >Cursed Flame</h1><h1 className='ml-1 text-sm  text-white/75'>x2</h1>
                  </div>
              </div>
              <div className='w-44 p-2'>
                  <h1 className='' >Crafting station</h1> 
                  <div className='flex' >
                      <img className='w-8 h-8' src='https://terraria.wiki.gg/images/6/6a/Imbuing_Station.png'/> <h1 className='text-base ml-2' >Imbuing Station</h1>
                  </div>
              </div>
          </div>
        </div>
    </div>
  )
}
