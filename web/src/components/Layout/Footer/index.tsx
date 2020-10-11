import React, { useCallback, useState } from 'react';

import { Container } from './styles';

const links = {
  linkedin: 'https://www.linkedin.com/in/vin%C3%ADciuscrisol',
  github: 'https://github.com/ViniciusCrisol',
};

const Footer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleCloseFooter = useCallback(() => {
    setIsOpen(prevState => !prevState);
  }, []);

  return (
    <Container isOpen={isOpen}>
      <p>
        Developed by Vinícius Crisol 10/2020 |
        <a href={links.github} target="_blank">
          &nbsp;Github
        </a>
        <a href={links.linkedin} target="_blank">
          &nbsp;Linkedin
        </a>
      </p>
      <button onClick={handleCloseFooter}>✕</button>
    </Container>
  );
};

export default Footer;
