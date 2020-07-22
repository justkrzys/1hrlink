import React from "react";
import axios from "axios";

class LinkInput extends React.Component{
    state = {
        link: '',
        time:''
    };

    onSubmit = (e) => {
        e.preventDefault();
        //console.log(this.state);
        axios
            .post('http://localhost:5000/', this.state)
            .then(response =>{
            //console.log(response)
        })
            .catch(error => {
                console.log(error)
            });

        this.setState({
            link:'',
            time:''
        });

    };

    render(){
        return(
            <form>
                <input placeholder='Insert Link'
                       value={this.state.link}
                       onChange={e => this.setState({ link: e.target.value})}
                />
                <input placeholder = 'Insert Time'
                       value={this.state.time}
                       onChange={e => this.setState({ time: e.target.value})}
                />
                <button onClick={e => this.onSubmit(e)}>Submit</button>
            </form>
        );
    }

}

export default LinkInput;