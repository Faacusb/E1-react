import styled from "styled-components";

export const SectionProductos = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 20px;
    padding-bottom: 20px;
    
    
    
`;

export const CardsContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    max-width: 1300px;
    height: 500px;
    align-items: center;
    gap: 20px;
    @media (max-width:968px){
        flex-direction: column;
        width: 80%;
        height: auto;
    }
    padding-top: 10px;
    padding-bottom: 20px;

    @media (max-width: 576px) {
        width: 85%;
    }



`;

export const CardsProductoss = styled.div`
    width: 70%;
    height: 350px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    background-color: whitesmoke;
    cursor: pointer;
    img {
        width: 150px;

    }
    @media (max-width: 968px) {
        width: 40%;
        
    }

    @media (max-width:576px) {
        width: 100%;
    }


`;