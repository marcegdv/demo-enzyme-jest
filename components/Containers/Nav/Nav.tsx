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
                        {props.title &&
                            <div className={styles.con1_title_desktop}>
                                <Paragraph size={48} weight='bold' color={'black'}>{props.title}</Paragraph>
                            </div>
                        }
                        {props.title &&
                            <div className={styles.con1_title_mobile}>
                                <Paragraph size={24} weight='bold' color={'black'}>{props.title}</Paragraph>
                            </div>
                        }
                    </div>
                    <div className={styles.col2_desktop}>
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