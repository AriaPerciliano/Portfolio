import styled from "styled-components";

const StyledAboutMe = styled.section`
        color: rgb(236, 217, 255);
        background-color: #0a0612;
        display: flex;
        margin: auto;
        flex-direction: column;
        align-items: center;
        text-align: center;
        padding: 40px;
    p {
        width: 70%;
        font-size: 1.3em;
        margin: 15px auto;
    }
    div {
        margin: 20px;
        width: 60%;
    }
    img {
        height: 280px;
        width: 280px;
        border-radius: 50%;
        border: 5px solid rgb(82, 46, 117);
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
`;

export default function AboutMe() {
    return (
    <StyledAboutMe>
        <h2>Sobre Mim</h2>
        <div>
            <img src="https://64.media.tumblr.com/f4415f5db904517acf5d64f0089dedfe/0d32be3001626dad-cc/s540x810/f55b1aa3f6f05fbcc7a91dce7a308a55ce2a927a.pnj" alt="Aria" />
            <p>Olá! Meu nome é <em>Aria Perciliano Lourenço.</em> Estou a cerca de 3 meses estudando para me tornar uma Desenvolvedora Front-End. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit ullam eos quae dicta qui officiis cumque ea aspernatur in eligendi, architecto blanditiis tenetur et voluptatum neque earum asperiores, quisquam recusandae!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, quidem soluta fuga commodi quasi sit consequatur rem et quos distinctio natus repellendus molestiae voluptatum placeat eligendi, sed eveniet, modi voluptas!</p>
        </div>
        <button>Baixar Curriculo</button>
    </StyledAboutMe>
    )
}