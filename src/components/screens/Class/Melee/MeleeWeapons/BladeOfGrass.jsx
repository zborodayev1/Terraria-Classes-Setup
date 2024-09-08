import styles from '../../../../css/App.module.scss'

export const BladeOfGrass = () => {
  return (
    <div className={styles.main}>
        <h1 className='bg-slate-50 p-3 rounded-md border-4 border-gray-50' ><a className='font-bold'>The Blade of Grass</a> is a pre-Hardmode sword crafted using materials from the Underground Jungle. It has a decent size and swing reach, and has a 1/4 (25%) chance of inflicting the Poisoned debuff for 7 seconds upon striking enemies.

Blade of Grass is roughly equal to the Volcano in size, making it one of the largest swords in pre-Hardmode. When swung, it fires a small, green Leaf Blade projectile that flies upwards in a circle, leaving behind a green particle effect resembling leaves. The Leaf Blade projectile can pass through blocks, has 20 armor penetration,[2] can automatically target enemies within a radius of 9.375 tiles, deals 25% base damage (4 base damage), can pierce one enemy, and has the same chance to inflict Poisoned for the same duration as the sword itself.

The Blade of Grass is one of the key ingredients in crafting the Nights Edge.

Its best modifier is Legendary.</h1>    
      <div className='mt-4 flex justify-between'>
        <div className=' bg-slate-200 rounded-md border-4 border-gray-100 w-96'>
          <h1 className='text-center p-2 rounded-sm bg-gray-50' >Crafting</h1>
          <div className='flex'>
              <div className='w-44 p-2'>
                  <h1 className='text-center border border-gray-500 h-7 mb-2 bg-slate-50 rounded-md text-base' >Result</h1>
                  <div className='flex'>
                      <img className='w-12 h-12' src='https://terraria.wiki.gg/images/8/85/Blade_of_Grass.png'/> <h1 className='mt-2 ml-2' >Blade of Grass</h1>
                  </div>
              </div>   
              <div className='w-44 p-2'>
                  <h1 className='text-center border text-base border-gray-500 h-7 mb-2 bg-slate-50 rounded-md' >Ingridients</h1>
                  <div className='flex mt-2' >
                      <img className='w-4 h-5' src='https://terraria.wiki.gg/images/b/b6/Stinger.png'/> <h1 className='ml-1 text-sm' >Stingers x12</h1>
                  </div>
                  <div className='flex mt-2' >
                      <img className='w-5 h-4' src='https://terraria.wiki.gg/images/6/61/Jungle_Spores.png'/> <h1 className='ml-2 text-sm' >Jungle Spores x15</h1>
                  </div>
                  <div className='flex mt-2' >
                      <img className='w-4 h-6' src='https://terraria.wiki.gg/images/f/ff/Vine.png'/> <h1 className='ml-2 text-sm' >Vine x3</h1>
                  </div>
              </div>
              <div className='w-44 p-2'>
                  <h1 className='border border-gray-500 h-7 mb-2 text-center rounded-md bg-slate-50 text-sm' >Crafting station</h1> 
                  <div className='flex' >
                      <img className='w-8 h-4' src='https://terraria.wiki.gg/images/c/c3/Iron_Anvil.png'/> <h1 className='text-base ml-2' >Iron Anvil</h1>
                  </div>
              </div>
          </div>
      </div>
        <div className='flex bg-slate-200 rounded-md border-4 border-gray-100 w-96 '>
          <div className='w-44 p-2'>

          </div>
        </div>
      </div>
    </div>
  )
}
