import axios from "axios";
const GET_FORM_VALUE = "GET_FORM_VALUE";
const SAVE_USER = "SAVE_USER";


export const getLoginData = ( values ) => {
	return function(dispatch) {
		axios.post( "api/create-user", values )
			.then(response => {
				dispatch({
					type: SAVE_USER,
					payload: response.data
				});
			})
			.catch(response => dispatch(errorHandler(response.data.error)))
	}

}
