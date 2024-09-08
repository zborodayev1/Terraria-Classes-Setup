import styles from '../../../../css/App.module.scss'
export const PlatinumArmor = () => {
  return (
    <div className={styles.main}>
        <h1>Platinum armor. is a pre-Hardmode armor set. It consists of the Platinum Helmet, Platinum Chainmail, and Platinum Greaves. It takes a total of  75 Platinum Bars ( 300  Platinum Ores) to craft a full set.

Its same-tier counterpart is the Gold armor.</h1>
    <h1 className='text-xl mt-2'>Crafting:</h1>
    <div className='flex'>
        <img src='https://terraria.wiki.gg/images/d/d2/Platinum_Bar.png' />
        <h1>x75</h1>
    </div>
    <h1>crafting station</h1>
    <img src='https://terraria.wiki.gg/images/c/c3/Iron_Anvil.png'/>
    </div>
  )
}
