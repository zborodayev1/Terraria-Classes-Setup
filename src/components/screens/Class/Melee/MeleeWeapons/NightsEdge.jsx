import styles from '../../../../css/App.module.scss'

export const NightsEdge = () => {
  return (
    <div className={styles.main}>
        <h1><a className='font-bold'>The Nights Edge</a> is a pre-Hardmode, post-Skeletron sword. When swung, it emits fire-like purple particles, similar to the swords used in crafting it, but the effect is more subtle and does not last as long. It is notable for having, on par with Volcano, the highest base damage of a sword available before entering Hardmode.

A purple aura comes off of the Nights Edge when swung, following the swing and increasing the range at which it can hit enemies. The aura also swings around a second time on its own, further increasing range and even covering behind the player. This aura can break Pots through walls, but cannot damage enemies there. If the blade or its aura strikes an enemy, a purple flash is created. The Nights Edge is also capable of autoswing.

Once in Hardmode, the Nights Edge can be upgraded into the True Nights Edge.

Its best modifier is Legendary.</h1>
<h1 className='text-xl mt-2'>Crafting:</h1>
    <div className='flex'>
        <img src='https://terraria.wiki.gg/images/1/13/Light%27s_Bane.png' />
        <h1>Lights Bane</h1>
    </div>
    <div className='flex'>
        <img src='https://terraria.wiki.gg/images/c/c2/Muramasa.png' />
        <h1>Lights Bane</h1>
    </div>
    <div className='flex'>
        <img src='https://terraria.wiki.gg/images/8/85/Blade_of_Grass.png' />
        <h1>Blade of Grass</h1>
    </div>
    <div className='flex'>
        <img src='https://terraria.wiki.gg/images/c/cf/Volcano.png' />
        <h1>Volcano</h1>
    </div>

    <h1>crafting station</h1>
    <img src='https://terraria.wiki.gg/images/f/f8/Demon_Altar.png'/>
    <h1>or</h1>
    <img src='https://terraria.wiki.gg/images/7/70/Crimson_Altar.png'/>
    </div>
  )
}
