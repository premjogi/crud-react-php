import axios from 'axios';
import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
export class Insert extends Component {
    constructor(props) {
        super(props)
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            message: '',
            redirect: false
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.changeHandler = this.changeHandler.bind(this);
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault()
        const obj = {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            email: this.state.email,
        }
        axios.get(`http://localhost/reactCrud/insert.php?first_name=${obj.first_name}&last_name=${obj.last_name}&email=${obj.email}`)
            .then(response => console.log(response)).catch(err => console.log(err))
        this.setState({
            first_name: '',
            last_name: '',
            email: '',
            message: alert('Data inserted Successfully...!!!'),
            redirect: true
        })
    }

    render() {
        const { redirect } = this.state
        if (redirect) {
            return <Redirect to="/view" />
        }
        const { first_name, last_name, email, message } = this.state
        return (
            <div style={{ marginTop: 10 }}>
                <h3>Add New User</h3>
                <h1>{message}</h1>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>First Name:</label>
                        <input type="text" className="form-control"
                            value={first_name}
                            name="first_name"
                            onChange={this.changeHandler} />
                    </div>
                    <div className="form-group">
                        <label>Last Name:</label>
                        <input type="text" className="form-control"
                            value={last_name}
                            name="last_name"
                            onChange={this.changeHandler} />
                    </div>
                    <div className="form-group">
                        <label>Email:</label>
                        <input type="email" className="form-control"
                            value={email}
                            name="email"
                            onChange={this.changeHandler} />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Register" className="btn btn-success" />
                    </div>
                </form>
            </div>
        )
    }
}

export default Insert
