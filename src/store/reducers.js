export const newUser = ( status, action ) => {
	switch( action.type ){
		case "SAVE_USER": 
			return action.payload
		default:
			return status
	}
}