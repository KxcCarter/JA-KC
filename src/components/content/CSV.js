import React, { useState } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { CSVLink, CSVDownload } from "react-csv";
import './CSV.css';



// // Basic functional component structure for React with default state
// // value setup. When making a new component be sure to replace the
// // // component name TemplateFunction with the name for the new component.
function CSV(props) {
    //     //     // Using hooks we're creating local state for a "heading" variable with
    //     //     // a default value of 'Functional Component'

    const csvData = [
        ["firstname", "lastname", "email"],
        ["David", "Walton", "david@mail.com"],
        ["Kenny", "Carter", "kenny@mail.com"],
        ["Ailea", "Patrinely", "ailea@mail.com"],
        ["Skyler", "Burgard", "skyler@mail.com"]
    ];


    return (
        <div>
            <CSVLink className="csvLink" data={csvData}>Export to CSV</CSVLink>

            {/* <CSVDownload data={csvData} target="_blank" />; */}

        </div>
    );
}

export default connect(mapStoreToProps)(CSV);




