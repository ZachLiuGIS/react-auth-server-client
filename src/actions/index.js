import axios from "axios";
import history from "../utils/historyUtils";

const ROOT_URL = "http://localhost:3090";

export function signinUser({ email, password }) {
    return function(dispatch) {
        // Submit email/password to the server
        const signinUrl = `${ROOT_URL}/signin`;
        axios.post(signinUrl, {
            email,
            password
        })
            .then((response) => {
                history.push("/feature");
            })
            .catch(() => {

            });

        // If request is good...
        // Update state to indicate user is authenticated
        // Save the JWT token
        // redirect to the route '/feature'

        // If request is bad...
        // Show an error to the user
    }
}
