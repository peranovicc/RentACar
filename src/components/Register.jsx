import Form from "./StyledForm"
import { Link } from "react-router-dom"


const Register = () => {
    return (
        <>
        <Form>
            <h2>Региструј се</h2>
            <input required type="text" placeholder="Корисничко име..." />
            <input required type="email" placeholder="Е-адреса..." />
            <input required type="password" placeholder="Шифра..." />
            <input required type="password" placeholder="Потврди шифру..." />
            <button type="submit">Потврди регистрацију</button>
            <h3>Уколико већ имате налог - <Link to="/login">Пријава</Link></h3>
        </Form>
        </>
    )
}

export default Register