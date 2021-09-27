import styled, {css} from "styled-components"
import {
    // HiOutlineLocationMarker,
    HiOutlineChatAlt2,
    HiOutlineClock
} from "react-icons/hi"
import { FaMedal } from "react-icons/fa";
import { GoLocation } from "react-icons/go";

const iconsCSS = css`
    width: 25px;
    height: 25px;
    opacity: .8;
`;

export const Container = styled.div`
    padding: 32px 16px;
    margin: 0 auto;
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
export const Caja = styled.div`
`;
export const LocationIcon = styled(GoLocation)`
    margin: 0;
    opacity: .55;
    margin-top: -2.7rem ;
    ${iconsCSS}
    
    `;
export const PlatinumIcon = styled(FaMedal)`
    margin: 0;
    margin-top: -2.7rem ;
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
`;
export const Row = styled.div`
`;
export const Link = styled.a`
`;