import styles from '../../../../css/App.module.scss'

export const Ichor = () => {
  return (
    <div className={styles.main}>
        <h1 className='bg-forWiki-bgBrown p-2 roundet-md' ><a className='font-bold' >Ichor</a> is a Hardmode crafting material dropped by Ichor Stickers in the Underground Crimson and the Tainted Ghoul in the Crimson Underground Desert. It is also obtained from Hematic Crates. It is used to craft many Ichor-related items. It is the Crimson counterpart to the Corruptions Cursed Flame.The Flask of Ichor is a Hardmode flask that causes melee weapons and whips to inflict the Ichor debuff for 10–19 seconds on enemies hit. Melee weapons that fire projectiles will also inflict the debuff on enemies hit by the projectiles (except for the Flairons bubbles).

The Flask of Ichor cannot be used in conjunction with other flasks, and using it will remove any existing flask effects.  Like all other flasks, the effect will not be canceled when the player dies.

The Flask of Ichor will not inflict the Ichor debuff in PvP scenarios</h1>
<div className=' w-96'>
          <h1 className='' >Crafting</h1>
          <div className='flex'>
              <div className='w-44 p-2'>
                  <h1 className='' >Result</h1>
                  <div className='flex'>
                      <img className='w-5 h-7' src='https://terraria.wiki.gg/images/7/71/Flask_of_Ichor.png'/> <h1 className='ml-2 font-bold' >Flask of Ichor</h1>
                  </div>
              </div>   
              <div className='w-44 p-2'>
                  <h1 className='' >Ingridients</h1>
                  <div className='flex mt-2' >
                      <img className='w-5 h-5' src='https://terraria.wiki.gg/images/1/16/Bottled_Water.png'/> <h1 className='ml-1 text-sm' >Botteled water</h1>
                  </div>
                  <div className='flex mt-2' >
                      <img className='w-3 h-4' src='https://terraria.wiki.gg/images/4/47/Ichor.png'/> <h1 className='ml-2 text-sm' >Ichor</h1><h1 className='ml-1 text-sm text-white/75'>x2</h1>
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
