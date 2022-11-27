import styled from "styled-components";

const StyledProjects = styled.section`
        display: flex;
        width: 80%;
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
        padding: 40px;
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
                    <a href="#"><img src="https://raw.githubusercontent.com/AriaPerciliano/WatcherZ/main/public/image.png" alt="" /></a>
                    <h3>Clone do Youtube</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt amet animi ut eaque dolorum mollitia fugiat exercitationem optio sint. Nihil, officia ullam vel sed ducimus est quae quo officiis aspernatur?</p>
                    <StyledTags>
                        #ReactJS #NextJS #Styled-components #Supabase
                    </StyledTags>
                </div>
                <div>
                    <a href="#"><img src="https://raw.githubusercontent.com/AriaPerciliano/WatcherZ/main/public/image.png" alt="" /></a>
                    <h3>Clone do Youtube</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt amet animi ut eaque dolorum mollitia fugiat exercitationem optio sint. Nihil, officia ullam vel sed ducimus est quae quo officiis aspernatur?</p>
                    <StyledTags>
                        #Teste #Teste #Teste #Teste
                    </StyledTags>
                </div>
                <div>
                    <a href="#"><img src="https://raw.githubusercontent.com/AriaPerciliano/WatcherZ/main/public/image.png" alt="" /></a>
                    <h3>Clone do Youtube</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt amet animi ut eaque dolorum mollitia fugiat exercitationem optio sint. Nihil, officia ullam vel sed ducimus est quae quo officiis aspernatur?</p>
                    <StyledTags>
                        #Teste #Teste #Teste #Teste
                    </StyledTags>
                </div>
            </section>
        </StyledProjects>
    )
}