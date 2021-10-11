import { useHistory } from "react-router"
import { Link } from "react-router-dom"
import Form from "./StyledForm"

const Login = ({ setUserId }) => {
    const history = useHistory()

    const handleLogin = (e) => {
        e.preventDefault()
        localStorage.setItem('userId','1')
        setUserId('1')
        history.push('/')
    }

    return (
        <Form>
            <h2>Пријави се</h2>
            <input name="usernameemail" required type="text" placeholder="Корисничко име / Е-адреса" />
            <input required type="password" placeholder="Шифра" />
            <button type="submit" onClick={handleLogin}>Пријавите се</button>
            <h3>Уколико немате налог - <Link to="/register">регистрација</Link></h3>
        </Form>
    )
}

export default Login