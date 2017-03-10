import axios from "axios";
import { browserHistory } from 'react-router';
const GET_FORM_VALUE = "GET_FORM_VALUE";
const SAVE_USER = "SAVE_USER";
const GET_USERS = "GET_USERS";
const GET_USER = "GET_USER";


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
        axios.get("/api/users-list")
            .then( response =>{
                    dispatch({
                        type: GET_USERS,
                        payload: response.data
                    });
            })
            .catch( response => console.log(response.data) )
    }
};

export const getUserData = ( id ) => {
    return function( dispatch ){
        axios.get(`/api/current-user/${id}`)
            .then( response => {
                    dispatch({
                        type: GET_USER,
                        payload: response.data
                    })
            })
            .catch( (response) => { browserHistory.push('/error'),   console.log("erro: " + response.data)  })
    }
};
