import React, { Component } from 'react';

class PhoneForm extends Component {
    state = {
        name: '',
        phone: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onCreate(this.state);
        this.setState({
            name: '',
            phone: ''
        });
    }
    
    render() {
        return (
            <form>
                <input value={this.state.name} placeholder="이름" onChange={this.handleChange} name="name" />
                <input value={this.state.phone} placeholder="전화번호" onChange={this.handleChange} name="phone" />
                <button type="submit" onClick={this.handleSubmit}>등록</button>
            </form>
        );
    }
}

export default PhoneForm;