import styles from './Nav.styles';
import Paragraph from '../../Text/Paragraph';

export type NavProps = {
    title?: string,
};

const Nav = (props: NavProps) => {
    return (
        <nav>
            <div className={styles.container}>
                <div className={styles.main}>
                    <div className={styles.col1}>
                        <div className={styles.logo}>
                            Logo
                        </div>
                    </div>
                    <div className={styles.col2_desktop}>
                        {props.title && <Paragraph size={48} weight='bold' color={'black'}>{props.title}</Paragraph>}
                    </div>
                    <div className={styles.col2_mobile}>
                        <Paragraph size={16} weight='bold' color={'white'}>?</Paragraph>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Nav;