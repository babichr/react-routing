export const newUser = ( status, action ) => {
	switch( action.type ){
		case "SAVE_USER": 
			return action.payload;
		default:
			return status
	}
};

export const users = ( users={}, action ) => {
	switch(action.type){
        case "GET_USERS":
            return action.payload;
        default:
            return users;
	}
};