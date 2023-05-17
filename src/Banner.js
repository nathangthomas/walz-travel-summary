import React from "react";
import styled from 'styled-components';
import './styles/banner.css';

const BannerContainer = styled.div`
    height: 250px;
    background-color: #ebe9f4;
    border-style: solid;
    border-width: 20px;
    border-color: var(--background-color);
    margin-right: 20px;
    margin-left: 20px;
    margin-bottom: -70px;
`

const Banner = () => {
  return (
    <BannerContainer>
    </BannerContainer>
  );
};

export default Banner;
