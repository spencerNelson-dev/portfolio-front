import React, { useState, useEffect } from 'react'
import consts from '../consts'
import getProjects from './projects'


const ProjectsContext = React.createContext()

const ProjectsProvider = (props) => {

    const [projects, setProjects] = useState([])
    const [images, setImages] = useState([])
    const [texts, setTexts] = useState([])

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

    const getTexts = () => {

        return fetch(`${consts.uriBase}${consts.textsRoute}`,{
            method: "GET"
        })
        .then(httpResonse => {
            if(!httpResonse.ok){
                throw new Error("Failed to fetch texts.")
            }

            return httpResonse.json()
        })
        .then(result => {
            setTexts(result)
        })
        .catch(error => {
            console.log(error)
            setImages([])
        })
    }


    useEffect( () => {

        //only go to the server the
        //first time the app loads
        // for projects, images and texts
        if( projects.length === 0){

            getProjects()
            .then(result => {
                setProjects(result)
            })
        }
        if(images.length === 0){
            getImgNames()
        }
        if(texts.length === 0){
            getTexts()
        }
    },[images.length, projects.length, texts.length])

    return (
        <ProjectsContext.Provider value={{ projects, setProjects, images, setImages, texts, setTexts }}>
            {props.children}
        </ProjectsContext.Provider>
    )
}

const ProjectsConsumer = ProjectsContext.Consumer
export { ProjectsProvider, ProjectsConsumer, ProjectsContext}

