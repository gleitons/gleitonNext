import Link from 'next/link'
import styles from './links.module.css'
export default function LinksMap({link, icone, desc}) {
    return (
        <Link href={link} >
            <div className={styles.Isociais}>
                {icone}
                <p>{desc}</p>
            </div>
        </Link>
    )
};
