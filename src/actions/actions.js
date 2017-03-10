import axios from "axios";
const GET_FORM_VALUE = "GET_FORM_VALUE";
const SAVE_USER = "SAVE_USER";
const GET_USERS = "GET_USERS";


export const getLoginData = ( values ) => {
	return function(dispatch) {
		axios.post( "api/create-user", values )
			.then(response => {
				dispatch({
					type: SAVE_USER,
					payload: response.data
				});
			})
			.catch(response => console.log(response.data.error))
	}
};

export const getUsers = () => {
    return function (dispatch) {
        axios.get("api/users-list")
            .then( response =>{
                    dispatch({
                        type: GET_USERS,
                        payload: response.data
                    });
            })
            .catch( response => console.log(response.data) )
    }
};
