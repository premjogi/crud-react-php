import React, { Component } from 'react'
import axios from 'axios'
import { Redirect, Link } from 'react-router-dom'
class RecordsList extends Component {

    constructor(props) {
        super(props)

        this.state = {
            redirect: false
        }
        this.delete = this.delete.bind(this)
    }


    delete = () => {
        axios.delete('http://localhost/reactCrud/delete.php?id=' + this.props.obj.id)
            .then(
                this.setState({
                    redirect: true
                })
            )
            .catch(error => console.log(error))
    };
    render() {
        const { redirect } = this.state
        if (redirect) {
            return <Redirect to='/view' />
        }
        return (
            <React.Fragment>
                <tr>
                    <td>{this.props.obj.first_name}</td>
                    <td>{this.props.obj.last_name}</td>
                    <td>{this.props.obj.email}</td>
                    <td>
                        <Link className="btn btn-primary" to={"/edit/" + this.props.obj.id} >Edit</Link>
                    </td>
                    <td><button onClick={this.delete} className="btn btn-danger">Delete</button></td>
                </tr>
            </React.Fragment>
        )
    }
}

export default RecordsList
