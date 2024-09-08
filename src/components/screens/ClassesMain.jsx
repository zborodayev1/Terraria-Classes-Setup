 
import { Link } from 'react-router-dom'
import styles from '../css/App.module.scss'
export const Classes = () => {
  return (
    <div className={styles.main}>
        <h1 className="flex mt-3 justify-center text-3xl" >There are 4 classes in Terraria</h1>
        <div className='flex justify-between' >
            <div className='mt-3 text-blue-500 hover:underline' >
                <Link className='text-xl ' to={'/melee'}>Melee</Link>
                <img src='https://terraria.wiki.gg/images/f/f9/Solar_Flare_armor.png'/>
            </div>
            <div className='mt-3 text-blue-500 hover:underline' >
                <Link className='text-xl' to={'/ranged'}>Ranged</Link>
                <img src='https://terraria.wiki.gg/images/6/6e/Vortex_armor.png'/>
            </div>
            <div className='mt-3 text-blue-500 hover:underline' >
                <Link className='text-xl' to={'/magic'}>Magic</Link>
                <img src='https://terraria.wiki.gg/images/9/9e/Nebula_armor.png'/>
            </div>
            <div className='mt-3 text-blue-500 hover:underline' >
                <Link className='text-xl' to={'/summoner'}>Summoner</Link>
                <img src='https://terraria.wiki.gg/images/1/14/Stardust_armor.png'/>
            </div>
        </div>
    </div>
  )
}
