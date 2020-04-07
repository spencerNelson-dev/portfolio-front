import React, {useContext} from 'react';
import {ProjectsContext} from './ProjectsContext'

function ContactMe(props) {
    const {texts} = useContext(ProjectsContext)

    const getText = (location) => {
  
      let rtnValue = ''
  
      for(let element of texts){
          if(element.location === location){
              rtnValue = element.text
          }
      }
  
      return rtnValue
  }

    return (
        <div>
           {getText('ContactMe')}
        </div>
    );
}

export default ContactMe;