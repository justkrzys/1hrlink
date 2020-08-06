import React from "react";

class Redirect extends React.Component {
    constructor(props){
        super(props);
        let {id} = this.props.match.params;
        console.log("here");
        if (typeof id !== 'undefined') {
            console.log(id);
            let url = "http://localhost:5000/" + id;
            window.location.assign(url);
        }
    }

    render() {
        return null;
    }
}

export default Redirect;