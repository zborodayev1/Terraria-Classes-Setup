import styles from '../../../../css/App.module.scss'

export const WarriorEmblem = () => {
  return (
    <div className={styles.main}>
      <div className=''>
        <h1>The Warrior Emblem is a Hardmode accessory that increases melee damage by 15%. It has a 1/4 (25%) chance to drop from the Wall of Flesh.</h1>
      </div>
      {/* bufs */}
      <div>
        <h1 className='font-bold mt-3'>The stat bonuses are:</h1>
        <div className='ml-3'>
            <h1>+15% increased melee damage</h1>
        </div>
      </div>
    </div>
  )
}
