import React, { useContext, useState } from 'react';
import {ProjectsContext} from './ProjectsContext'
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem'

function ChooseText(props) {

    const {texts} = useContext(ProjectsContext)

    const [text, setText] = useState('')

    const onChangeHandler = (event, child) => {

        props.setMainText(child.value)
    }

    return (
        <React.Fragment>
                    <TextField select
                        value={text}
                        onChange={(event, child) => { setText(child.value)}}
                        helperText="Select a text."
                        >
                        {
                            texts.map((text) => (
                                <MenuItem key={text.location} value={text.text}>
                                    {text.location}
                                </MenuItem>
                            ))
                        }

                    </TextField>
        </React.Fragment>
    );
}

export default ChooseText;