import React, { Component } from 'react'
import axios from 'axios'
import RecordsList from './RecordsList'
import { Link, NavLink } from 'react-router-dom'
export class View extends Component {
    constructor(props) {
        super(props)

        this.state = {
            students: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost/reactCrud/list.php')
            .then(response => {
                this.setState({
                    students: response.data
                })
            })
            .catch(err => {
                console.log(err)
            })
    }

    studentsList = () => {
        return this.state.students.length ? this.state.students.map((object, i) => <RecordsList key={i} obj={object} />) : "No records"
    }

    render() {
        return (
            <div className="container">
                <br />
                <Link to="/insert" className="btn btn-primary" align="right">Add Student</Link>
                <h1 align="center" className="text text-warning">Students List</h1><br />

                <table className="table table-striped" style={{ marginTop: 20 }}>
                    <thead>
                        <tr>
                            <th>FirstName</th>
                            <th >LastName</th>
                            <th >Email</th>
                            <th colSpan="2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>

                        {this.studentsList()}

                    </tbody>
                </table>
            </div>
        )
    }
}

export default View
