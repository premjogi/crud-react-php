import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
export class Edit extends Component {
    constructor(props) {
        super(props)
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            redirect: false
        }
        this.changeHandler = this.changeHandler.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        axios.get('http://localhost/reactCrud/getById.php?id=' + this.props.match.params.id)
            .then(response => {
                this.setState({
                    first_name: response.data.first_name,
                    last_name: response.data.last_name,
                    email: response.data.email,
                })
            }).catch(error => console.log(error))
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault()
        const obj = {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            email: this.state.email,
        }
        axios.post(`http://localhost/reactCrud/update.php?id=${this.props.match.params.id}&first_name=${obj.first_name}&last_name=${obj.last_name}&email=${obj.email}`, obj)
            .then(response => this.setState({ redirect: true }))
            .catch(error => console.log(error))
    }

    render() {
        const { redirect } = this.state
        if (redirect) {
            return <Redirect to="/view" />
        }
        const { first_name, last_name, email } = this.state
        return (
            <div style={{ marginTop: 10 }}>
                <h3 className="text text-warning" align="center">Edit User</h3>
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
                        <input type="submit" value="Update" className="btn btn-success" />
                    </div>
                </form>
            </div>
        )
    }
}

export default Edit
