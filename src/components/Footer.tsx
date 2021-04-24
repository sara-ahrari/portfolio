import React from 'react';
import styles from 'styled-components';

const StyledFooter = styles.footer`
margin-top: auto;
margin-bottom: 5vmin;
color: #5c5c5c;
`;

const Footer = () => {
  return (
    <StyledFooter>
     <small>&copy; 2021 Sara Ahrari</small>
    </StyledFooter>
  );
};

export default Footer;
