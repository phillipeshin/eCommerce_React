import styled from 'styled-components';

/* Styled Component extension for the shopping cart button */
export const ButtonContainer = styled.button`                                                          
text-transform: capitalize;
font-size: 1.4rem;
background: transparent;
font-weight: bold;
border: 0.075rem solid var(--lightPurple);
border-color: ${props => props.cart ? "var(--mainPink)" : "var(--lightPurple)"};
color: ${prop => prop.cart ? "var(--mainPink)" : "var(--lightPurple)"};
border-radius: 0.5rem;
padding: 0.2rem 0.5rem;
cursor: pointer;
margin: 0.2rem 0.5rem 0.2rem 0;
transition: all 0.5s ease-in-out;
&:hover {
    background: ${prop => prop.cart ? "var(--mainPink)" : "var(--lightPurple)"};
    color: var(--mainPurple);
}
&:focus {
    outline: none;
}
`;