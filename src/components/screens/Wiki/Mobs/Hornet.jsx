/* eslint-disable no-unused-vars */
import { useState } from "react"
import styles from '../../../css/App.module.scss'

export const Hornet = () => {
    const [isClassic, setIsClassic] = useState(true)
    const [isExpert, setIsExpert] = useState(true)
    const toggleDropdown = () => {
        setIsClassic(!isClassic);
      };
  return (
    <div className={styles.main}>
        <div>
            <h1>The Hornet is a pre-Hardmode flying enemy found in the Underground Jungle. They follow the Flying AI, floating just out of reach and then charging the player, while also firing stinger projectiles (at an increased rate in Expert Mode). The stingers cannot be destroyed with weapons and travel at about the same speed as the darts from a Dart Trap. Stingers have a 1/3 (33.33%) chance to inflict the Poisoned debuff on the player for 10 seconds. In Expert Mode, the chance is 1/3 (33.33%) for 20 seconds and 2/3 (66.67%) for 2–10 seconds.</h1>
            <div className='flex mt-2'>
                <div className=' ml-2'>
                    <div>
                    {!isClassic || !isExpert &&( <button className="text-center border border-transparent focus:border-gray-50 w-24 h-10 focus:border">Classic</button>)}
                    </div>
                    <button className="text-center  border-transparent border-gray-50 w-24 h-10 border" >Classic</button>
                </div>
                <div className=' ml-2'>
                    <button className="text-center border border-transparent focus:border-gray-50 w-24 h-10 focus:border" >Expert</button>
                </div>
                <div className=' ml-2'>
                    <button className="text-center border border-transparent focus:border-gray-50 w-24 h-10 focus:border" >Master</button>
                </div>
            </div>
            <div>
                {isClassic && (
                    <div className="">
                        <div className="flex">
                            <div>
                                <h1 className="text-center border w-32 font-bold" >Name</h1>
                                <div className="flex w-32 border p-2 h-14" > 
                                    <img src="https://terraria.wiki.gg/images/4/45/Hornet.gif"/> <h1 className="text-center w-32 font-bold" >Hornet</h1>
                                </div>
                            </div>
                            <div>
                                <h1 className="text-center border w-32 font-bold">Health</h1>
                                <div className="flex w-32 border p-2 h-14" > 
                                    <h1 className="text-center w-32 font-bold" >48</h1>
                                </div>
                            </div>
                            <div>
                                <h1 className="text-center border w-32 font-bold">Damage</h1>
                                <div className="flex w-32 border p-2 h-14" > 
                                    <h1 className="text-center w-32 font-bold" >26</h1>
                                </div>
                            </div>
                            <div>
                                <h1 className=" text-center border w-32 font-bold">Defense</h1>
                                <div className="flex w-32 border p-2 h-14" > 
                                    <h1 className="text-center w-32 font-bold" >12</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>  
    </div>
  )
}
