
const constants = {

    uriBase: process.env.NODE_ENV !== 'production' ? (
            "http://localhost:3001"
            ) : (
            "" // this is blank because heroku adds the base for us
            ),

    authRoute: "/api/v1/auth",
    projectsRoute: "/api/v1/projects",
    usersRoute: "/api/v1/users",
    textsRoute: "/api/v1/texts"
}



export default constants
