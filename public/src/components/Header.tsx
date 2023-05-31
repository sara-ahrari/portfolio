import React from 'react';
import styles from 'styled-components';
import github from '../assets/logos/githublogo.svg';
import linkedin from '../assets/logos/linkedinlogo.svg';

const StyledHeader = styles.header`
display: flex; 
flex-direction: row;
justify-content: space-between;
align-items: center;
margin-top: 5vmin;
margin-left: 20vmin; 
margin-right: 20vmin;

a {
    padding-left: 15px;
}
 
p {
    font-weight: bold;
}

img {
    
    &:hover {
        filter: invert(100%);
    }
}
`;

const Header = () => {
    return (
        <StyledHeader>
            <p>Sara Ahrari</p>
            <nav>
                <a href="https://github.com/sara-ahrari">
                    <img src={github} alt="githubLogo" />
                </a>
                <a href="https://www.linkedin.com/in/sara-ahrari/">
                    <img src={linkedin} alt="linkedinLogo" />
                </a>
            </nav>
        </StyledHeader>
    );
};

export default Header;
