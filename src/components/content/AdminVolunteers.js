import React from 'react';
import { connect } from 'react-redux';
// import mapStoreToProps from './redux/mapStoreToProps';
import { Column, Row } from 'simple-flexbox';
import { StyleSheet, css } from 'aphrodite';
import SidebarComponent from '../sidebar/SidebarComponent';
import HeaderComponent from '../header/HeaderComponent';
import AdminMain from '../content/AdminMain';
import Volunteers from '../content/Volunteers';

const styles = StyleSheet.create({
    container: {
        height: '100%',
        minHeight: '100vh',
        width: '100%',
        marginRight: '2%',
        marginLeft: '0%'
    },
    content: {
        marginTop: 54
    },
    mainBlock: {
        backgroundColor: '#F7F8FC',
        padding: 30
    }
});

class AdminVolunteers extends React.Component {

    state = { selectedItem: '' };

    componentDidMount() {
        window.addEventListener('resize', this.resize);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.resize);
    }

    resize = () => this.forceUpdate();

    render() {
        const { selectedItem } = this.state;
        return (
            <Row className={css(styles.container)}>
                <SidebarComponent selectedItem={selectedItem} onChange={(selectedItem) => this.setState({ selectedItem })} />
                <Column flexGrow={1} className={css(styles.mainBlock)}>
                    <HeaderComponent title={selectedItem} />
                    <div className={css(styles.content)}>
                        <AdminMain />
                        <Volunteers />
                    </div>
                </Column>
            </Row>
        );
    }
}

export default AdminVolunteers;