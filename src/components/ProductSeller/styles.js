import styled, {css} from "styled-components";
import { FaShippingFast } from "react-icons/fa";
import { IoChatboxOutline, IoHeartOutline, IoStar, IoReturnDownBack, IoShieldCheckmarkOutline, IoTrophyOutline } from "react-icons/io5";
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
export const Condition = styled.div`
`;




export const Title = styled.h5`
    font-size: 18px;
    margin-bottom: 20px;
    line-height: 22.5px;
    color: var(--text1);
`;


export const Row = styled.article`
    margin-top: 10px;
    display: flex;
    align-items: flex-start;
    >h1 {
        height: 72px;
        width: 279px;
        font-size: 22px;
        line-height: 25.96px;
        font-weight: bold;
        color:  var(--text1);
    }   
`;
export const Rating = styled.article`
    margin-top: 10px;
    display: flex;
    align-items: flex-start;
    align-content: center;
    >span {
        height: 18;
        width: auto;
        font-size: 14 px;
        line-height: 18.9px;
        color: var(--text3);
    }   
`;
export const Price = styled.article`
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    color: var(--text1);
    >.price-title {
        font-size: 36px;
    }   
    >.price-part{
        font-size: 18px;
    }
    >Link {
        font-size: 14px;
    }
`;

export const Shipping = styled.article`
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    >figure{
        margin-top: 10px;
    }
    >span{
        margin-left: 15px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        >p{
            margin-top: 5px;
            font-size: 14px;
            color: var(--text3);
            line-height: 18px;            
        }
        >Link {
            margin-top: 7.5px;
        }
    }   
    .green{
        color: var(--green)
    }
`;
export const BuyBox = styled.article`
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    color: var(--text1);
    >.variations{
        font-size: 16px;
        line-height: 21.6px;
    }   
    >.quantity{
        font-size: 18px;
        line-height: 24.3px;
    }
`;
export const MainActions = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    >form {
        display: flex;
        flex-direction: column;
        align-self: center;
        width: 100%;
        >.action-btn{
            height: 48px;
            margin-top: 10px;
            border-radius: 6px;
            /* box-shadow: rgba(30, 109, 255, .3) 0px 0px 0px 3px  ; */
            background-color: var(--blue4);
            color: var(--blue1);
            cursor: pointer ;
            font-weight: bold;
            transition: all .4s  ease-in-out;
            &.action-btn:hover{
                opacity: .8;
            }
        }
        >.buy{
            color: var(--white);
            background-color: var(--blue3);
        }
    }
    >article {
        margin-top: 20px;
        display: flex;
        flex-direction: row;
        >span{
            margin-left: 10px;
        }
    }
`;
export const SupportIcon = styled(IoChatboxOutline)`
    font-size: large;
    align-self: center;
    
`;

export const HeartIcon = styled(IoHeartOutline)`
    ${iconsCSS}
    margin-top: -50px;
    align-self: center;
    color: var(--blue1);
`;
export const ShipIcon = styled(FaShippingFast)`
    ${iconsCSS}
    margin-top: -50px;
    align-self: center;
    color: var(--green);

`;
export const ReturnsIcon = styled(IoReturnDownBack)`
    ${iconsCSS}
    margin-top: -50px;
    align-self: center;
    color: var(--green);
`;
export const SafeIcon = styled(IoShieldCheckmarkOutline)`
    margin-top: 2.5px;
    align-self: center;
    color: var(--text2);
`;
export const TrophyIcon = styled(IoTrophyOutline )`
    margin-top: 2.5px;
    align-self: center;
    color: var(--text2);
`;
export const StarIcon = styled(IoStar)`
    font-size: x-small;
    align-self: center;
    color: var(--blue1);
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