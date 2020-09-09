import React, { Component } from 'react';



class AddAdmin extends Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }
    onClick() {
        window.location.href = `mailto:${this.props.email}`;
    }
    render() {
        return <button onClick={this.onClick}>Add Admin User</button>;
    }
}

export default AddAdmin;