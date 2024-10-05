import { Link } from 'react-router-dom'
import styles from '../../../css/App.module.scss'


export const RangedMain = () => {
  return (
    <div className={styles.main}>
      <h1>
      <a className="font-bold">Rangers</a> are able to attack from a distance, doing high single-target, piercing, or splash damage. They utilize weapons like bows and guns, as well as thrown objects. Ranged users must constantly acquire ammunition, unless using the Endless Quiver or Endless Musket Pouch. This can be done through crafting or purchasing from the Arms Dealer. Rangers have decent defense, and are good at killing enemies while keeping a safe distance. For many weapons that do not use regular ammo (such as the Nail Gun or the Candy Corn Rifle), players can buy the ammo from the Arms Dealer while having the weapon in their inventory. There are different Arrows, Bullets, Darts and Rockets that each have their own use and effect. Using the right one in a situation can make a huge difference.
      </h1>
      <div className="flex" >
        <img className="" src='/Vortex_armor.webp'/>
        <img className="h-8" src='/S.webp'/>
      </div>
      <div className='flex justify-center'>
          <h1 className='text-2xl'>Guide</h1>
          <div className='bg-[#5aceb5] w-4 h-6 mt-1 ml-2'></div>
      </div>
      <div className='flex justify-between border border-gray-600 rounded-lg p-3 bg-[#101017] mt-3 '>
        <div >
          <Link to='/ranged/pre-bosses' className='flex justify-center text-center font-bold  hover:underline hover:text-blue-500 duration-150' >Pre Bosses</Link>  
        </div>
        <div>
          <Link to='/ranged/pre-hardmode' className='text-center font-bold  hover:text-blue-500 duration-150 hover:underline' >Pre HardMode</Link>
        </div>
        <div>
          <Link to='/ranged/pre-mechbosses' className='text-center font-bold  hover:text-blue-500 duration-150 hover:underline' >Pre Mech Bosses</Link>
        </div>
        <div>
          <Link to='/ranged/pre-plantera' className='text-center font-bold  hover:text-blue-500 duration-150 hover:underline' >Pre Plantera</Link>
        </div>
        <div>
          <Link to='/ranged/pre-golem' className='text-center font-bold  hover:text-blue-500 duration-150 hover:underline' >Pre Golem</Link>
        </div>
        <div>
          <Link to='/ranged/pre-lunarevents' className='text-center font-bold  hover:text-blue-500 duration-150 hover:underline' >Pre Lunar Events</Link>
        </div>
        <div>
          <Link to='/ranged/pre-moonlord' className='text-center font-bold  hover:text-blue-500 duration-150 hover:underline' >Pre Moon Lord</Link>
        </div>  
      </div>  
    </div>  
  )
}
