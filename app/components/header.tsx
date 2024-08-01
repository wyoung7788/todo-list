import Image from "next/image";
import styles from '@/app/ui/home.module.css'
export default function Header(){
    return (
        <main>
        <div className={styles['image-wrapper']}/>
        <Image
            src="/mountains.jpg"
            layout="fill"
            alt="Mountain background"
            className={styles['image']}
            priority
        />
        </main>
    )
}