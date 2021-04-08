import React, { Component } from 'react';

class PhoneForm extends Component {
    state = {
        name: ''
    }
    handleChange = (e) => {
        this.setState({
            name: e.target.value
        })
    }
    render() {
        return (
            <form>
                <input value={this.state.name} placeholder="이름" onChange={this.handleChange} />
                <div>{this.state.name}</div>
            </form>
        );
    }
}

export default PhoneForm;