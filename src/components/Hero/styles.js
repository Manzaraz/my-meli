import styled from "styled-components";

export const Container = styled.div`
    padding-top: 12px;
    max-width: 900;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    `;
export const Row = styled.div`
    >a{
        max-height: 18px;
        font-size: 14px;
        text-decoration: none;
        padding: 2.5px 0;
        transition: all 300ms ease-in-out;
        &.back {
            color: var(--black);
        }
        & + a{
            padding-left: 10px;
            margin-left: 10px;
            border-left: 1px solid var(--border);
            color: var(--blue3);
            
        }
        &:hover {
            color: var(--blue1);
        }
    }
    `;