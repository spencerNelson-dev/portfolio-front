
const constants = {

    uriBase: process.env.NODE_ENV !== 'production' ? (
            "http://localhost:3001"
            ) : (
            "" // this is blank because heroku adds the base for us
            )
}



export default constants
