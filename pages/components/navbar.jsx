import Link from 'next/link'
import styles from '/styles/Navbar.module.scss'
export default function Navbar() {
    return (
        <navbar>
            <div className={styles.Navbar}>
                <Link href='/'><h1>Twentyformoney</h1></Link>
                <div className={styles.Container_head}>
                    <Link href='/about'>
                        <div className={styles.Containerselect_head}>
                            <span>About</span>
                        </div>
                    </Link>
                    <Link href='/project'>
                        <div className={styles.Containerselect_head}>
                            <span>Project</span>
                        </div>
                    </Link>
                </div>
            </div>
        </navbar>
    )
}