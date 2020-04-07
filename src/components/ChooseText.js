import React, { useContext, useState } from 'react';
import {ProjectsContext} from './ProjectsContext'
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem'

function ChooseText(props) {

    const {texts} = useContext(ProjectsContext)

    const [fieldText, setFieldText] = useState('')

    const getTextByLocation = (location) => {

        let rtnValue = {}

        for(let element of texts){
            if(element.location === location){
                rtnValue.text = element.text
                rtnValue.id = element._id
            }
        }

        return rtnValue
    }

    const onChangeHandler = (event, child) => {

        setFieldText(child.key)

        let textInfo = getTextByLocation(child.key)

        props.setEditTextId(textInfo.id)
        props.setEditText(textInfo.text)
    }


    return (
        <React.Fragment>
                    <TextField select
                        value={fieldText}
                        onChange={onChangeHandler}
                        helperText="Select a text."
                        >
                        {
                            texts.map((text) => (
                                <MenuItem id={text._id}  key={text.location} value={text.location}>
                                    {text.location}
                                </MenuItem>
                            ))
                        }

                    </TextField>
        </React.Fragment>
    );
}

export default ChooseText;