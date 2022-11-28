import styled from "styled-components"


const StyledMenu = styled.header`
    display: flex;
    flex-direction: row-reverse;
    height: 60px;
    width: 100vw;
    top: 0px;
    align-items: center;
    justify-content: center;
    padding: 16px;
    gap: 5px;
    position: fixed;
    z-index: 50;
    nav {
        border-bottom: 2px solid rebeccapurple;
        border-radius: 0px 0px 100% 100%;
        padding: 40px;
        background-color: #0a0612;
    }
    a {
        height: 55px;
        align-items: center;
        padding: 30px;
        text-decoration: none;
        color: rgb(236, 217, 255);
        font-size: 1.4em;
    }
    nav {
        opacity: 0;
        top: 0px;
        transition: 1s;
    }
    nav:hover {
        opacity: 1;
        transition: 1s;
    }
`;

export default function Menu () {
    return (
        <StyledMenu>
                <nav>
                    <a href="#">Home</a>
                    <a href="#">Sobre Mim</a>
                    <a href="#">Habilidades</a>
                    <a href="#">Projétos</a>
                </nav>
        </StyledMenu>
    )
}