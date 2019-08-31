import React from 'react';

class FetchData extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isFetching: false,
            users: []
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result.users)
                    this.setState({
                        isFetching: true,
                        users: result
                    })
                },
                (error) => {
                    this.setState({
                        isFetching: true,
                        error
                    })
                }
            )
    }

    render() {
        const { error, isFetching, users } = this.state
        console.log(typeof users)
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isFetching) {
            return <div>Loading...</div>;
        } else {
            return (

                <ul>
                    {users.map(user => (
                        <li key={user.id}>
                            {user.name}
                        </li>
                    ))}
                </ul>
            );
        }
    }
}

export default FetchData;

