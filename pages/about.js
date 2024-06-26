import styles from '../styles/Index.module.scss'
export default function about(){
    return (
        <>
   
        <title>About</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        <main className={styles.Main}>
          <div className={styles.BodyImage}>
            <div className={styles.Body}>
            <h1> About Me ?</h1>
                <div className={styles.Desc_about_container}>
                    <div className={styles.Desc_about}>
                        <span><h1>TWENTYFORMONEY</h1> is a talented and versatile digital media professional with expertise in graphic design, video editing, application development using Visual Studio, and website development using HTML, CSS, and JavaScript. With a passion for creativity and technology, <span className='spanBold'>TwentyForMoney</span> has become a proficient multi-disciplinary expert in the digital media industry.</span>
                    </div>
                </div>
            </div>
          </div>
        </main>
        <footer>
          <span> Copyright @ 2023 twentyformoney</span>
        </footer>
    </>
    )
}