import React from "react";

class LinkInput extends React.Component{
    state = {
        link: ''
    }

    onSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
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