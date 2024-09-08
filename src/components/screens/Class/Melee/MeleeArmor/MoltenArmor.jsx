import styles from '../../../../css/App.module.scss'

export const MoltenArmor = () => {
  return (
    <div className={styles.main}>
        <h1>Molten armor is an armor set consisting of the Molten Helmet, Molten Breastplate, and Molten Greaves. It has the highest defense of any pre-Hardmode armor set.

            A full set of Molten armor provides the following benefits:

            +25 defense
            +17% melee damage
            +7% melee speed
            +7% melee critical strike chance
            Immunity to the On Fire! debuff
            If the full set is visible, it will leave a fire trail similar to that of the Meteor armor.
            It takes a total of 45 Hellstone Bars to craft a full set of Molten armor, or 135 Hellstone and 45 Obsidian.</h1>

    <h1 className='text-xl mt-2'>Crafting:</h1>
    <div className='flex'>
        <img src='https://terraria.wiki.gg/images/d/dc/Hellstone_Bar.png' />
        <h1>x45</h1>
    </div>
    <h1>crafting station</h1>
    <img src='https://terraria.wiki.gg/images/c/c3/Iron_Anvil.png'/>

    </div>
  )
}
