import consts from '../consts'

let DUMMY_DATA = [
    {
        "_id": 0,
        "title": "Task Manager",
        "text": "I've created a simple task app and added Google signin using OAuth2. The front end is created in React.js and the backend is run on Node.js with a MongoDB database. The sight utilized authentication and authorization.",
        "liveLink": "https://sn-todo.herokuapp.com",
        "gitHubLinks": ["https://github.com/spencerNelson-dev/to-do-ui",
                        "https://github.com/spencerNelson-dev/to-do-api"],
        "imgSrc": "task-tracker.png"
    }
]

const getProjects = () => {

     return fetch(`${consts.uriBase}${consts.projectsRoute}`,{
        method:"GET"
    })
    .then(httpResponse => {
        if(!httpResponse.ok){
            throw new Error("Could not get all projects")
        }

        return httpResponse.json()
    })
    .then(result => {

        // if there are no projects found
        // use the hard coded data
        if (result === []){
            return DUMMY_DATA
        }

        return result
    })
    .catch(error => {
        console.log(error)
        // if there is an error
        // use the dummy data
        return DUMMY_DATA
    })
}



export default getProjects