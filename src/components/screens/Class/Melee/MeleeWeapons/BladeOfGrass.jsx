import styles from '../../../../css/App.module.scss'

export const BladeOfGrass = () => {
  return (
    <div className={styles.main}>
        <h1><a className='font-bold'>The Blade of Grass</a> is a pre-Hardmode sword crafted using materials from the Underground Jungle. It has a decent size and swing reach, and has a 1/4 (25%) chance of inflicting the Poisoned debuff for 7 seconds upon striking enemies.

Blade of Grass is roughly equal to the Volcano in size, making it one of the largest swords in pre-Hardmode. When swung, it fires a small, green Leaf Blade projectile that flies upwards in a circle, leaving behind a green particle effect resembling leaves. The Leaf Blade projectile can pass through blocks, has 20 armor penetration,[2] can automatically target enemies within a radius of 9.375 tiles, deals 25% base damage (4 base damage), can pierce one enemy, and has the same chance to inflict Poisoned for the same duration as the sword itself.

The Blade of Grass is one of the key ingredients in crafting the Nights Edge.

Its best modifier is Legendary.</h1>    
<h1 className='text-xl mt-2'>Crafting:</h1>
    <div className='flex'>
        <img src='https://terraria.wiki.gg/images/b/b6/Stinger.png' />
        <h1>x12</h1>
    </div>
    <div className='flex'>
        <img src='https://terraria.wiki.gg/images/6/61/Jungle_Spores.png' />
        <h1>x15</h1>
    </div>
    <div className='flex'>
        <img src='https://terraria.wiki.gg/images/f/ff/Vine.png' />
        <h1>x3</h1>
    </div>
    <h1>crafting station</h1>
    <img src='https://terraria.wiki.gg/images/c/c3/Iron_Anvil.png'/>
    </div>
  )
}
