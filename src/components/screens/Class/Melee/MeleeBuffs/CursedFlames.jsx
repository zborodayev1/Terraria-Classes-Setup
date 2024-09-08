import styles from '../../../../css/App.module.scss'

export const CursedFlames = () => {
  return (
    <div className={styles.main}>
        <h1>The Flask of Cursed Flames is a Hardmode flask that causes melee weapons and whips to inflict the Cursed Inferno debuff for 3–6 seconds on enemies hit. Melee weapons that fire projectiles will also inflict the debuff on enemies hit by the projectiles (except for the Flairons bubbles).

The Flask of Cursed Flames cannot be used in conjunction with other flasks, and using it will remove any existing flask effects.  Like all other flasks, the effect will not be canceled when the player dies.

The Flask of Cursed Flames will inflict the Cursed Flames debuff in PvP scenarios.</h1>
<h1 className='text-xl mt-2'>Crafting:</h1>
    <div className='flex'>
        <img src='https://terraria.wiki.gg/images/1/16/Bottled_Water.png' />
        <h1>x1</h1>
    </div>
    <div className='flex'>
        <img src='https://terraria.wiki.gg/images/1/19/Cursed_Flame.png' />
        <h1>x2</h1>
    </div>
    <h1>crafting station</h1>
    <img src='https://terraria.wiki.gg/images/6/6a/Imbuing_Station.png'/>
    </div>
  )
}
