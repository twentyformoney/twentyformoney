import styles from '/styles/Navbar.module.scss'
export default function Navbar(){
    return(
        <navbar>
        <div className={styles.Navbar}>
          <h1>Twentyformoney</h1>
            <div className={styles.Container_head}>
              <div className={styles.Containerselect_head}>
                <span> About</span>
              </div>
              <div className={styles.Containerselect_head}>
                <span> Projects</span>
              </div>
            </div>
        </div>
        </navbar>
    )
}