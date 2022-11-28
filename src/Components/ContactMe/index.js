import styled from "styled-components";

const StyledContact = styled.footer`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
    section {

    }
    p {
        padding: 10px;
        font-size: 1.3em;
        margin: auto;
        margin-top: 20px;
        margin-bottom: 10px;
        width: 60%;
    }
    div {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }
    img {
        height: 75px;
        width: 75px;
        padding: 5px;
    }
    h2 {
        display: flex;
        width: 80%;
        padding: 20px 10px 10px;
        margin: auto;
        justify-content: left;
        background-color: #0a0612;
        border-bottom: 3px solid rebeccapurple;
    }
    button {
        background-color: blueviolet;
        height: 60px;
        padding: 20px;
        font-size: 1.3em;
        color: rgb(236, 217, 255);
        cursor: pointer;
        border-radius: 10px;
        border: none;
    }
`;

export default function Contact() {
    return(
        <StyledContact>
        <h2>Onde me encontrar?</h2>
        <section>
            <p>Caso meu portfólio tenha sido de seu interesse. Esses são os principais meios de me contatar:</p>
                <div>
                    <a href="https://github.com/AriaPerciliano" target="_blank"><img src="https://raw.githubusercontent.com/AriaPerciliano/Portfolio/master/public/icons8-github-480.png" alt="Github" /></a>
                    <a href="https://www.linkedin.com/in/aria-perciliano/" target="_blank"><img src="https://raw.githubusercontent.com/AriaPerciliano/Portfolio/master/public/icons8-linkedin-480.png" alt="Linkedin" /></a>
                    <a href="https://discordapp.com/users/214174128582819851" target="_blank"><img src="https://raw.githubusercontent.com/AriaPerciliano/Portfolio/master/public/icons8-discord-480.png" alt="Discord" /></a>
                    <a href="mailto:arianotfound404@gmail.com" target="_blank"><img src="https://raw.githubusercontent.com/AriaPerciliano/Portfolio/master/public/icons8-gmail-logo-480.png" alt="Email" /></a>
                </div>
        </section>
        </StyledContact>
    )
}