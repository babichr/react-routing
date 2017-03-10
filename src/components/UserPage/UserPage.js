import React from "react";

class UserPage extends React.Component{
    render(){

        return(
           <section className="user-page">
               <div className="container">
                   <div className="row">
                       <div className="col-md-4 col-md-offset-4">
                           <h4>Hello user id: { this.props.params.id } </h4>
                       </div>
                   </div>
               </div>
           </section>
        )
    }
}

export default UserPage;