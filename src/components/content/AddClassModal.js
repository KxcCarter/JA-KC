import React, { useState, useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import swal from 'sweetalert';

// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name TemplateFunction with the name for the new component.

function AddClassModal(props) {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({
            type: 'FETCH_PROGRAMS',
        });
    }, [dispatch]);

    const programData = props.store.programsReducer.map((item, index) => {
        return { title: item.title, sesssion: item.sessions, program_id: item.id };
    });


    const [heading, setHeading] = useState('Functional Component');


    const addClass = () => {

        swal({
            title: `Which Class would you like to assign?
            ${programData}
            `,

            buttons: true,
            dangerMode: true,
        })
            .then((willAssign) => {
                if (willAssign) {

                    return (

                        <h1>ASSIGNED YEAH BOY</h1>
                    )


                    swal("Great!  Class has been assigned", {
                        icon: "success",
                    });
                } else {
                    swal("No Class has been assigned");
                }
            });





    }
    return (
        <div>
            <button onClick={addClass}>{alert}ADD</button>
        </div>
    );
}

export default connect(mapStoreToProps)(AddClassModal);
