import React from 'react';
import styles from 'styled-components';
import img from '../assets/images/myImage.png';

const Wrapper = styles.div`
display: flex;
flex-direction: column;
margin-top: 100px;
align-items: center;

 p {
     color: black;
     margin: 7px;
 }

`;

const Image = styles.div`
background-repeat: no repeat;
background-position: center;
background-image: url(${img});
background-size: cover;
width: 160px;
height: 170px;
border-radius: 50%;
margin-bottom: 10px;
`;

const Link = styles.a`

text-decoration: none;
color: black;
font-weight: bold;

:hover {
    color: white;
}
`;

const Content = () => {
  return (
    <Wrapper>
      <Image />
      <p>Hi, My name is Sara, a passionate computer science engineer.</p>
      <p>
        To get in touch please do not hesitate to send me an{' '}
        <Link href="mailto:sara.ahrari97@gmail.com">email</Link>.
      </p>
    </Wrapper>
  );
};

export default Content;
