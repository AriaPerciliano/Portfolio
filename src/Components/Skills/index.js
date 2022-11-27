import styled from "styled-components";

const StyledSkills = styled.section`
        color: rgb(236, 217, 255);
        background-color: #0a0612;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        width: 100%;
    section {
        display: flex;
        flex-direction: column;
        justify-content: left;
        justify-items: left;
    }
    .SkillBoxes {
        display: flex;
        flex-direction: row;
    }
    #skills {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: left;
        justify-items: left;
        width: 80vw;
    }
    #SkillText {
        display: flex;
        flex-direction: column;
        justify-content: left;
        justify-items: left;
        align-items: center;
    }
    p   {
        font-size: 1.3em;
        margin: auto;
    }
    button {
        background-color: blueviolet;
        color: rgb(236, 217, 255);
        height: 60px;
        padding: 20px;
        font-size: 1.3em;
        border-radius: 10px;
        border: none;
        cursor: pointer;
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
    h3 {
        margin: auto;
        font-size: 1.5em;
    }
`;

const StyledSkillBox = styled.div`
    height: 106px;
    width: 106px;
    background-color: #150c25;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background-repeat: no-repeat;
    background-position: center;
    transition: ease 0.3s;
    margin: 20px;
    :hover {
        background-color: #1f1137;
        transform: scale(1.05);
    }
    img {
        height: 100px;
        width: 100px;
    }
`;
const StyledSkillText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    p {
        padding: 20px;
    }
`;

export default function Skills() {
    return (
        <StyledSkills>
            <h2>Habilidades</h2>
            <section id="skills">
                <section>
                    <div className="SkillBoxes">
                        <StyledSkillBox>
                            <img src="https://raw.githubusercontent.com/AriaPerciliano/Portfolio/main/public/icons8-html-5-480.png"/>
                        </StyledSkillBox>
                        <StyledSkillBox>
                            <img src="https://raw.githubusercontent.com/AriaPerciliano/Portfolio/main/public/icons8-css3-480.png"/>
                        </StyledSkillBox>
                        <StyledSkillBox>
                            <img src="https://raw.githubusercontent.com/AriaPerciliano/Portfolio/main/public/icons8-javascript-480.png"/>
                        </StyledSkillBox>
                        <StyledSkillBox>
                            <img src="https://raw.githubusercontent.com/AriaPerciliano/Portfolio/main/public/icons8-github-480.png"/>
                        </StyledSkillBox>
                    </div>
                    <div className="SkillBoxes">
                        <StyledSkillBox>
                            <img src="https://raw.githubusercontent.com/AriaPerciliano/Portfolio/main/public/icons8-react-native-480.png"/>
                        </StyledSkillBox>
                        <StyledSkillBox>
                            <img src="https://raw.githubusercontent.com/AriaPerciliano/Portfolio/main/public/icons8-next.js-480.png"/>
                        </StyledSkillBox>
                        <StyledSkillBox>
                            <img src="https://raw.githubusercontent.com/AriaPerciliano/Portfolio/main/public/icons8-styled-components-480.png"/>
                        </StyledSkillBox>
                        <StyledSkillBox>
                            <img src="https://raw.githubusercontent.com/AriaPerciliano/Portfolio/main/public/icons8-git-480.png"/>
                        </StyledSkillBox>
                    </div>
                </section>
                <StyledSkillText>
                    <h3>HTML</h3>
                    <p><strong>HTML</strong> é uma <em>Linguagem de Marcação de Hipertexto</em> utilizada no desenvolvimento de paginas na web. HTML é basicamente o responsável pela estrutura dos conteúdos da página. Eu possuo cerca de 3 meses de experiência com HTML.</p>
                </StyledSkillText>
            </section>
        </StyledSkills>
    )
}