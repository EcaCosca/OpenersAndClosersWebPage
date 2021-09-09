import styled from 'styled-components'

export const PrivContainer = styled.div`
    color: #111111;
    background: #f9f9f9;

    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
`

export const PrivWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 860px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
`