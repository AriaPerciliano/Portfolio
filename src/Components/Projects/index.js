import styled from "styled-components";

const StyledProjects = styled.section`
        display: flex;
        width: 95%;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        gap: 30px;
        margin: auto;
    section {
        width: 100%;
        display: flex;
        flex-direction: row;
    }
    img {
        border-radius: 20px;
        border: none;
        width: 330px;
        height: 200px;
        padding: 10px;
    }
    p {
        padding: 20px;
        font-size: 1.2em;
    }
    div {
        display: flex;
        flex-direction: column;
        width: 100%;
        padding: 20px;
    }
    h2 {
        display: flex;
        width: 100%;
        padding: 20px 10px 10px;
        margin: auto;
        justify-content: left;
        background-color: #0a0612;
        border-bottom: 3px solid rebeccapurple;
    }
`;
const StyledTags = styled.div`
    display: flex;
    margin: auto;
    flex-direction: row;
    justify-content: center;
    text-align: center;
    align-items: center;
    width: 100%;
    font-size: 1.3em;
    font-weight: bold;
    color: blueviolet;
`;

export default function Projects() {
    return (
        <StyledProjects>
            <h2>Projétos</h2>
            <section>
                <div>
                    <a href="https://watcher-z.vercel.app/" target="_blank"><img src="https://raw.githubusercontent.com/AriaPerciliano/WatcherZ/main/public/image.png" alt="" /></a>
                    <h3>Clone do Youtube</h3>
                    <p>O WatcherZ é um clone do Youtube que foi feito durante a Imersão React 5 da Alura, que aconteceu entre os dias 7 e 14 de Novembro de 2022. O projéto conta com diversas funcionalidades: como a possibilidade de filtrar os video; adicionar videos ao site e trocar o tema do site entre Dark e Light Mode.</p>
                    <p>O projéto foi feito utilizando o React através do NextJS, os estilos dos componentes foram feitos dentro do próprio Javascript por meio do Styled-components. O Supabase foi usado para armazenar todos os dados dos videos.</p>
                    <StyledTags>
                        #ReactJS #NextJS #Styled-components #Supabase
                    </StyledTags>
                </div>
                <div>
                    <a href="#"><img src="https://raw.githubusercontent.com/AriaPerciliano/WatcherZ/main/public/image.png" alt="" /></a>
                    <h3>Placeholder</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt amet animi ut eaque dolorum mollitia fugiat exercitationem optio sint. Nihil, officia ullam vel sed ducimus est quae quo officiis aspernatur?</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum at amet rerum provident laboriosam, esse aperiam illo aspernatur exercitationem ipsa reprehenderit eos, atque, earum ab itaque nesciunt! Asperiores, itaque aliquid?</p>
                    <StyledTags>
                        #Teste #Teste #Teste #Teste
                    </StyledTags>
                </div>
                <div>
                    <a href="#"><img src="https://raw.githubusercontent.com/AriaPerciliano/WatcherZ/main/public/image.png" alt="" /></a>
                    <h3>Placeholder`</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt amet animi ut eaque dolorum mollitia fugiat exercitationem optio sint. Nihil, officia ullam vel sed ducimus est quae quo officiis aspernatur?</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum at amet rerum provident laboriosam, esse aperiam illo aspernatur exercitationem ipsa reprehenderit eos, atque, earum ab itaque nesciunt! Asperiores, itaque aliquid?</p>
                    <StyledTags>
                        #Teste #Teste #Teste #Teste
                    </StyledTags>
                </div>
            </section>
        </StyledProjects>
    )
}