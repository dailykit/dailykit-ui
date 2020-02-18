import React from "react";

import { StyledCard, Text, Title, Stat, Footer, Img } from './styles'

const Card = ({ children }) => <StyledCard>{children}</StyledCard>;

Card.Title = ({ children }) => <Title>{children}</Title>;

Card.Img = ({ src, alt }) => <Img src={src} alt={alt} />;

Card.Body = ({ children }) => <div>{children}</div>;

Card.Text = ({ children }) => <Text>{children}</Text>;

Card.Stat = ({ children }) => <Stat>{children}</Stat>;

Card.Footer = ({ children }) => <Footer>{children}</Footer>;

export default Card;