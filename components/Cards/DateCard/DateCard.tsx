import React from 'react';
import Paragraph from '../../Text/Paragraph';
import styles from './DateCard.styles';
import * as Utils from '../../../utilities/dateFunctions';

export type DateCardProps = {
    dateTime: Date;
};

const DateCard = (props: DateCardProps) => {
    
    const year: string = props.dateTime.getFullYear().toString();
    const monthName: string = Utils.monthName(props.dateTime);
    const dayName: string = Utils.dayName(props.dateTime);
    const dayOfMonth: string = props.dateTime.getDate().toString();
    const timeOfDate: string = Utils.formatTimeHHMM(props.dateTime) + ' hs.';

    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <div>
                    <Paragraph size={24} weight='bold' color={'white'}>{monthName}</Paragraph>
                </div>
                <div>
                    <Paragraph size={24} weight='bold' align={'right'} color={'white'}>{year}</Paragraph>
                </div>
            </div>
            <div className={styles.bodyCard}>
                <div>
                    <Paragraph size={24} weight='bold' align={'center'} color={'Normal2'}>{dayName}</Paragraph>
                    <Paragraph size={72} weight='bold' align={'center'} color={'Normal2'}>{dayOfMonth}</Paragraph>
                </div>
                <div>
                    <Paragraph size={24} weight='bold' align={'center'} color={'Normal2'}>{timeOfDate}</Paragraph>
                </div>
            </div>
        </div>
    );
};

export default DateCard;