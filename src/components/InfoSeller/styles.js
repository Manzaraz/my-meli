import styled, {css} from "styled-components";
import { FaMedal, FaCheckCircle } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import { MdTimer } from "react-icons/md";
import { IoChatboxOutline } from "react-icons/io5";

const iconsCSS = css`
    width: 22.5px;
    height: 22.5px;

`;


export const Container = styled.div`
    padding: 32px 16px;
    margin: 0 20px 20px;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    border: thin solid var(--border);
    border-radius: 5px 5px 5px 5px;
`;

export const Card = styled.div`
    display : flex ;
    align-items: center;
    margin: 20px;
    >div{
        margin-left: 5px;
        >p{
            font-size: 16px;
            line-height: 20px;
            color: var(--text1);
        }
        >strong{
            font-size: 14px;
            color: var(--text2);
            font-weight: normal;
        }
        >.platinum{
            color: var(--green);

        }
    }
`;

export const LocationIcon = styled(GoLocation)`
    margin: 0;
    opacity: .55;
    margin-top: -2.5rem ;
    ${iconsCSS}
    
    `;
export const PlatinumIcon = styled(FaMedal)`
    margin: 0;
    margin-top: -2.5rem ;
    color: var(--green);
    ${iconsCSS}


`;

export const Title = styled.h5`
    font-size: 18px;
    margin-bottom: 20px;
    line-height: 22.5px;
    color: var(--text1);
`;
export const Reputation = styled.div`
    margin-top: 33px;
    display: flex;
    flex-direction: column;
    align-items: center;

`;
export const Caja = styled.ol`
    list-style: none;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 0;
    padding: 0 4px;
    >li{
        width: 100%;
        height: 8px;
        &:nth-child(1){
            background-color: var(--reputation1);
        }
        &:nth-child(2){
            background-color: var(--reputation2);
        }
        &:nth-child(3){
            background-color: var(--reputation3);
        }
        &:nth-child(4){
            background-color: var(--reputation4);
        }
        &:nth-child(5){
            background-color: var(--reputation5);
        }
        
    }
`;
export const Row = styled.div`
    margin-top: 10px;
    display: flex;
    align-items: flex-start;
    >div {
        width: 33%;
        padding: 0 10px;
        display: flex;
        flex-direction: column;
        text-align: center;
        >strong {
            font-size: 24px;
            font-weight: normal;
            height: 30px;
        }
        >span{
            font-size: 11px;
            font-weight: light;
            color: var(--text1);
        }
        position: relative;
        & + div{
            &:before {
                content: "";
                position: absolute;
                left: 0;
                top: 50%;
                transform: translate(-50%);
                height: 36px;
                border-left: thin solid var(--border);
            }
        }
    }
`;
export const SupportIcon = styled(IoChatboxOutline)`
    font-size: large;
    align-self: center;
    
`;
export const CheckIcon = styled(FaCheckCircle)`
    align-self: center;
    color: var(--green);
    size: 5px;
    margin-top: -20px;
    margin-right: -25px;
    background-color: var(--white);
`;
export const ClockIcon = styled(MdTimer)`
    font-size: large;
    align-self: center;
`;
export const Link = styled.a`
    margin-top: 24px;
    color: var(--blue1);
    text-decoration: none;
    font-size: 14px;
    text-align: center;
    line-height: 18.9px;
`;