import  styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 12px;
    /* border: thin dotted #ee2244; */
    `;
export const Panel = styled.div`
    background-color: var(--white);
    box-shadow: var(--panel);
    display: grid;
    grid-template-columns: 67fr 28fr;
    
    `;
export const Column = styled.div`

`;
export const Galery = styled.div`
    display: flex;  
    align-items: center;
    justify-content: center;
    height: 530px;
    /* border: thin dotted #ee2244; */

    >img{
        height: 75%;
    }
`;

export const Description = styled.div`
    border-top: 1px solid var(--border);
    width: 88%; 
    margin: 0 auto;
    padding: 40px 0;

    >h5{
        color: var(--text1);
        font-size: 24px;
        margin-bottom: 32px;
        line-height: 30px;
    }
    >p{
        font-size: 20px;
        color: var(--text3);
        /* line-height: 27px; */
    }
    >hr{
        border-top: 1px solid var(--text3);
    }
`;

export const Section = styled.section`
    padding: 32px 16px ;
    margin: 0 20px 20px;
    border:  thin solid var(--border);
    border-radius: 5px 5px 5px 5px;
    border-bottom: none;
    display: flex;
    flex-direction: column;
    >h5 {
        font-size: 18px;
        margin-bottom: 28px;
        color: var(--text1);
        line-height: 22.5px;
    }
    >article {
        display: flex;
        flex-direction: column;
        line-height: 18.9px;
        >span + span {
            margin: 24px 0px;
        }
        .title {
            font-size: 16x;
            color: var(--text1);
            line-height: 21.6px;
            margin-bottom: 12px;
        }
        .description {
            font-size: 14px;
            color: var(--text2);
        }
        >a {
            font-size: 14px;
            color: var(--blue3);
            text-decoration: none;
        }
    }

`;
export const Link = styled.a`
    color: var(--blue3);
    text-decoration: none;
    font-size: 14px;
    text-align: center;
    transition: all .4s ease-in-out;
    cursor: pointer;

    &:hover{
        color: var(--blue1);
    }
`;