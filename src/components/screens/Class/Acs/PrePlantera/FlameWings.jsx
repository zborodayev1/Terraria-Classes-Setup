import styles from '../../../../css/App.module.scss'

export const FlameWings = () => {
  return (
    <div className={styles.main}>
        <div>
          <h1 >Crafting</h1>
          <div className='flex'>
              <div className='flex'>
              <div className='w-52 p-2'>
                  <h1 >Result</h1>
                  <div className='flex'>
                      <img src='https://terraria.wiki.gg/images/b/bf/Flame_Wings.png'/> <h1 to='/meleeWeapons/nightsEdge' className='mt-2 ml-2 font-bold' >Flame Wings</h1>
                  </div>
              </div>   
              <div className='w-52 p-2'>
                  <h1 >Ingridients</h1>
                  <div className='flex mt-2' >
                      <img className='w-6 h-6' src='https://terraria.wiki.gg/images/a/a3/Soul_of_Flight.png'/> <h1 className='ml-2 font-bold ' >Soul of Flight x20</h1>
                  </div>
                  <div className='flex mt-2' >
                      <img src='https://terraria.wiki.gg/images/f/f3/Fire_Feather.png'/> <h1  className='ml-1 text-sm font-bold'>Fire Feather</h1>
                  </div>
              </div>
          </div>
          </div>
        </div>
      </div>
  )
}
          