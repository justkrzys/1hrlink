import React from "react";
import axios from "axios";

class LinkInput extends React.Component{
    state = {
        link: ''
    }

    onSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        axios
            .post('localhost:5000', this.state)
            .then(response =>{
            console.log(response)
        })
            .catch(error => {
                console.log(error)
            })

        this.setState({
            link:''
        })
    }

    render(){
        return(
            <form>
                <input placeholder='Insert Link'
                       value={this.state.link}
                       onChange={e => this.setState({ link: e.target.value})}
                />
                <button onClick={e => this.onSubmit(e)}>Submit</button>
            </form>

        );
    }

}

export default LinkInput;