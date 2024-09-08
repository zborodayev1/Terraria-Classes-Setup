import { Link } from "react-router-dom"
import styles from '../css/App.module.scss'

export const Home = () => {
  return (
    <div className={styles.main}>
        <div className="flex justify-between">
            <div >
                <h1 className="text-2xl pb-2 " >Authors comments</h1>
                <p className="mb-1 italic ml-2">I worked in <a className=" text-blue-500 hover:underline" href="https://code.visualstudio.com/" >Vs code</a>,</p>
                <p className="italic ml-2" >I had to remake the react app</p>
                <p className="italic ml-2" >4 times because npm doesnt work)</p>
            </div>
            <div >
                <h1 className="text-2xl flex justify-center" >Terraria class <Link className="text-blue-500 hover:underline duration-150 mx-2 " to={'/class'}>Guide</Link></h1>
                <h1 className="flex justify-center text-xl m-2" >This is my joint project on terraria with manukek</h1>
                <h1 className="text-lime-50/50" >P.s: in this guide there will be only relevant types of armor and weapons in the passage,</h1>
                <h1 className="text-lime-50/50" >for example, there will be no swords made of wood, short swords, etc.</h1>
            </div>
            <div>
                <h1 className="text-xl mb-2" >what libraries did i use to write this site?</h1>
                <div className="grid" >
                    <a href="https://ru.legacy.reactjs.org/"  className="ml-2 text-blue-500 hover:underline italic" >React</a>
                    <a href="https://tailwindcss.com" className="ml-2 text-blue-500 hover:underline italic" >Tailwind css</a>
                    <a href="https://tailwindcss.com"  className="ml-2 text-blue-500 hover:underline italic" >Sass</a>
                    <a href="https://sass-lang.com/"  className="ml-2 text-blue-500 hover:underline italic" >React router dom</a>
                </div>
            </div>
          </div>  
    </div>
  )
}
