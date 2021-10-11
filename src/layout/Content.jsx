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
    min-height: 100vh;
    padding-top: 10vh;
    
    
    @media screen and (min-width: 900px) {
        margin-left: 30%;
    }

    @media screen and (min-width: 1300px) {
        margin-left: 20%;
    }
`

export default Content