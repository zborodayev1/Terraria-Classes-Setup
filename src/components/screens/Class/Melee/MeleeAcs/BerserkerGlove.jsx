import styles from '../../../../css/App.module.scss'

export const BerserkerGlove = () => {
  return (
    <div className={styles.main}>
        <h1>The Berserkers Glove is a Hardmode accessory crafted from the Power Glove and Flesh Knuckles, granting the abilities of both. It grants the following:

+8 defense
+12% increased melee speed
+100% increased melee knockback
+10% increased melee weapon size
+400 aggro
Autoswing for melee weapons and whips</h1>
<h1 className='text-xl mt-2'>Crafting:</h1>
    <div className='flex'>
        <img src='https://terraria.wiki.gg/images/d/d8/Titan_Glove.png' />
    </div>
    <div className='flex'>
        <img src='https://terraria.wiki.gg/images/9/9d/Feral_Claws.png' />
    </div>
    <div className='flex'>
        <img src='https://terraria.wiki.gg/images/b/b9/Flesh_Knuckles.png' />
    </div>
    <h1>crafting station</h1>
    <img src='https://terraria.wiki.gg/images/1/17/Tinkerer%27s_Workshop.png'/>
    </div>
  )
}
