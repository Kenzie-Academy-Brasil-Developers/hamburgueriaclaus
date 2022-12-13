import { Link } from "react-router-dom";
import styled from "styled-components";

export const LinkStyle = styled (Link) `
    background-color: var(--gray-20);
    color: var(--gray-50);
    text-decoration: none;
    text-align: center;

    :hover {
        background-color: var(--gray-50);
        color: var(--gray-20);
    }
`;
