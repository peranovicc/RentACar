import styled from "styled-components"
import { black } from "../constants"

const Content = (props) => {
    return (
        <StyledContent>
            {props.children}
        </StyledContent>
    )
}

const StyledContent =  styled.main`
    background-color: ${black};
    min-height: 100vh;
    padding-top: 10vh;
    @media screen and (min-width: 768px) {
        margin-left: 20%;
    }
`

export default Content