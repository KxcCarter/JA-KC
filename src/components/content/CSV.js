import React, { useState } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { CSVLink, CSVDownload } from "react-csv";




// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name TemplateFunction with the name for the new component.
function CSV(props) {
    // Using hooks we're creating local state for a "heading" variable with
    // a default value of 'Functional Component'

    const csvData = [
        ["firstname", "lastname", "email"],
        ["Ahmed", "Tomi", "ah@smthing.co.com"],
        ["Raed", "Labes", "rl@smthing.co.com"],
        ["Yezzi", "Min l3b", "ymin@cocococo.com"]
    ];


    return (
        <div>
            <CSVLink data={csvData}>Download me</CSVLink>;
            // or
            <CSVDownload data={csvData} target="_blank" />;

        </div>
    );
}

export default connect(mapStoreToProps)(CSV);




