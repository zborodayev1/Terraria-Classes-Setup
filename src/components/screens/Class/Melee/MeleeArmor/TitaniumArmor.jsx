import styles from '../../../../css/App.module.scss'

export const TitaniumArmor = () => {
  return (
    <div className={styles.main}>
        <h1>Titanium armor is a Hardmode armor set crafted from Titanium Bars, and is the alternative to Adamantite armor. Like many Hardmode armors, it has three different headgear/helmet options, allowing the player to focus on magical, melee, or ranged combat. Crafting a one-helmet set requires 59 Titanium Bars, made from  236 Titanium Ore. Crafting all five pieces requires 85 Titanium Bars or  340 Titanium Ore.</h1>
            <div className='flex'>
            <img src='https://terraria.wiki.gg/images/9/94/Titanium_Bar.png' />
            <h1>x59</h1>
        </div>
        <h1>crafting station</h1>
        <img src='https://terraria.wiki.gg/images/3/3d/Mythril_Anvil.png'/>
        <h1>or</h1>
        <img src='https://terraria.wiki.gg/images/d/dc/Orichalcum_Anvil.png'/>
    </div>
  )
}
