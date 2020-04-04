import React, { useState, useEffect } from 'react'
import consts from '../consts'
import getProjects from './projects'


const ProjectsContext = React.createContext()

const ProjectsProvider = (props) => {

    const [projects, setProjects] = useState([])
    const [images, setImages] = useState([])

    const getImgNames = () => {

        return fetch(`${consts.uriBase}${consts.projectsRoute}/img`,{
            method: "Get"
        })
        .then(httpResponse => {
            if(!httpResponse.ok){
                throw new Error("Could not get image file names")
            }

            return httpResponse.json()
        })
        .then(imgNames => {

            setImages(imgNames)

        })
        .catch(error => {
            console.log(error)
            setImages([])
        })
    }


    useEffect( () => {

        //only go to the server the
        //first time the app loads
        if( projects.length === 0){

            getProjects()
            .then(result => {
                setProjects(result)
            })
        }
        if(images.length === 0){
            getImgNames()
        }
    },[])

    return (
        <ProjectsContext.Provider value={{ projects, setProjects, images, setImages }}>
            {props.children}
        </ProjectsContext.Provider>
    )
}

const ProjectsConsumer = ProjectsContext.Consumer
export { ProjectsProvider, ProjectsConsumer, ProjectsContext}

