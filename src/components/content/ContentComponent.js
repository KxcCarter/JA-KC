import React from 'react';
import { Column, Row } from 'simple-flexbox';
import { StyleSheet, css } from 'aphrodite/no-important';
import MiniCardComponent from './MiniCardComponent';


const styles = StyleSheet.create({
    cardsContainer: {
        marginRight: -30,
        marginTop: -30
    },
    cardRow: {
        marginTop: 30,
        '@media (max-width: 768px)': {
            marginTop: 0
        }
    },
    miniCardContainer: {
        flexGrow: 1,
        marginRight: 30,
        '@media (max-width: 768px)': {
            marginTop: 30,
            maxWidth: 'none'
        }
    },
    todayTrends: {
        marginTop: 30
    },
    lastRow: {
        marginTop: 30
    },
    unresolvedTickets: {
        marginRight: 30,
        '@media (max-width: 1024px)': {
            marginRight: 0
        }
    },
    tasks: {
        marginTop: 0,
        '@media (max-width: 1024px)': {
            marginTop: 30,
        }
    }
});



function ContentComponent() {


    return (
        <Column>
            <Row className={css(styles.cardsContainer)} wrap flexGrow={1} horizontal="space-between" breakpoints={{ 768: 'column' }}>
                <Row className={css(styles.cardRow)} wrap flexGrow={1} horizontal="space-between" breakpoints={{ 384: 'column' }}>
                    <MiniCardComponent className={css(styles.miniCardContainer)} title="Completed Classes" value="60" />
                    <MiniCardComponent className={css(styles.miniCardContainer)} title="Classes In Progress" value="16" />
                </Row>
                <Row className={css(styles.cardRow)} wrap flexGrow={1} horizontal="space-between" breakpoints={{ 384: 'column' }}>
                    <MiniCardComponent className={css(styles.miniCardContainer)} title="Total Volunteers" value="43" />
                    <MiniCardComponent className={css(styles.miniCardContainer)} title="Total Students Taught" value="64" />
                </Row>
            </Row>
            {/* <div className={css(styles.todayTrends)}>
                <TodayTrendsComponent />
            </div> */}
            <Row horizontal="space-between" className={css(styles.lastRow)} breakpoints={{ 1024: 'column' }}>
                {/* <UnresolvedTicketsComponent /> */}
                {/* <TasksComponent containerStyles={styles.tasks} /> */}
            </Row>
        </Column>
    );
}

export default ContentComponent;