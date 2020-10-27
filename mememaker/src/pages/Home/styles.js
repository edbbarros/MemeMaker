import styled from 'styled-components';

export const Wrapper = styled.div `
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

`;

export const Card = styled.div `
    background: #fff;
    width: 550px;
    border-radius: 8px;
    padding: 20px;
    margin-top: 15px;
    box-shadow: 0 6px 10px 0 rgba(0,0,0,0.20);

h2{
    text-align:center;
    font-size: 22px;
    color: #392D2D;
    margin-bottom: 10px;
}

`;
export const Templates =styled.div `
    width: 100%;
    height: 90px;
    background: #eee;
    border-radius: 8px;
    overflow-y: auto;
    display: flex;
    align-items:center;
    padding: 0 15px;
    margin-bottom: 30px;

button{
    border: 0;
    background: transparent;
    margin-right: 10px;
    img{
        width: 53px;
        height: 53px;
      



        }
    }
`;