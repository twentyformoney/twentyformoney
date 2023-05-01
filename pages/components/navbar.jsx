import Link from 'next/link'
import styles from '/styles/Navbar.module.scss'
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons";
import { useRouter } from "next/router";
import { useState } from 'react';
export default function Navbar() {
    const router = useRouter();
    const [active, setActive] = useState(false);
    return (
        <navbar>
            <div className={styles.Navbar}>
                <div className={styles.NavLeft}>
                    <Link href='/'><h1>Twentyformoney</h1></Link>
                    <div className={active ? styles.ActiveOption : styles.Option}>
            
                        <div className={styles.Container_head}>
                            <Link href='/about'>
                                <li className={router.pathname=="/about"?styles.active : ''}>
                                    <span>About</span>
                                </li>
                            </Link>
                            <Link href='/project'>
                                <li className={styles.Containerselect_head}>
                                    <span>Project</span>
                                </li>
                            </Link>
                        </div>
                    </div> 
                </div>
                <div className={styles.NavRight}>
                    <div className={styles.BurgerOpsi} onClick={() => setActive(!active)}>
                        <IconContext.Provider value={{ color: "white", size: "1.5em" }}>
                            <FaBars />
                        </IconContext.Provider>
                    </div>
                </div>
            </div>
        </navbar>
    )
}