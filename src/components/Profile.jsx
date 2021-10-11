import { Redirect, useHistory } from "react-router"
import Form from "./StyledForm"

const Profile = ({ userId, setUserId }) => {
    const history = useHistory()

    const user = {
        "username": "TestUsername",
        "email": "Test@email.com",
        "password": "",
        "firstName": "TestFName",
        "lastName": "TestLName",
        "phoneNumber": "+38123456789",
        "personalNumber": "01011970123456",
        "image": "..."
    }
    // const user = null

    return user ? (
        <Form>
            <h2>Мој профил:</h2>
            <button style={{padding: '1px'}} onClick={() => {
                setUserId(null)
                localStorage.removeItem('userId')
                history.push('/')
            }}>Одјави се</button>
            <input style={{display: 'inline'}} type="text" defaultValue={user.firstName} />
            <input type="text" defaultValue={user.lastName} />
            <input type="text" disabled value={user.email} />
            <input type="text" defaultValue={user.phoneNumber} />
            <input type="text" disabled value={user.personalNumber} />
            <button type="submit">Промени информације</button>
        </Form>
    ) : <Redirect to='/login' />
}

export default Profile