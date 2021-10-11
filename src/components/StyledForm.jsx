import styled from "styled-components"
import { black, cyan } from "../constants"

const Form = styled.form`
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: space-around;
    height: 90vh;
    width: 100%;
    margin: auto;
    padding: 4% 5% 1% 5%;
    background-color: ${black};
    color: ${cyan};
    box-shadow: rgba(50, 50, 93, 0.25) 0px 60px 30px -12px, ${cyan} 0px 18px 30px -18px;

    a {
        color: ${cyan};
    }
    а:visited {
        color: ${cyan};
    }

    * {
        margin: auto;
        margin-bottom: 2rem;
        height: 2rem;
        font-size: 1.1rem;
    }

    input{
        border: none;
        border-bottom: 1px gray solid;
        outline: none;
        background-color: ${black};
        color: ${cyan};
        width: 100%;
        padding-left: 0.5rem;
    }

    input:focus{
        border-bottom: 1px ${cyan} solid;
    }


    button {
        text-decoration: none;
        color: ${cyan};
        padding: 25px 10px;
        border: 1px ${cyan} solid;
        display:flex;
        align-items:center;
        justify-content:center;
        align-self: center;
        box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.5);
        background-color: ${black};
        cursor: pointer;

        :active{
            text-decoration: none;
            box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.5);
        }

        :hover{
            background-color: ${cyan};
            color: ${black};
        }
    }
    @media screen and (min-width: 768px) {
        height: 80vh;
        width: 40%;
        h2{
            font-size: 2rem;
        }
    }
`

export default Form