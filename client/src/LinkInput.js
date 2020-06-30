import React from "react";

class LinkInput extends React.Component{
    state = {
        link: ''
    }

    render(){
        return(
            <form>
                <input placeholder='Insert Link' value={this.state.link} />
            </form>

        );
    }

}

export default LinkInput;