import React, {useState} from 'react';

import {HeaderProps} from '../types/header.types';
import {ChartTypes} from "../types/chart.types";

import '../styles/css/SideBar.styles.css';
import {HeaderContainer, HeaderContent} from '../styles/Header.styled';

const HeaderComponents: React.FC<HeaderProps<ChartTypes>> = ({activeChart, onClickChart}) => {
  const onClick = () => onClickChart(activeChart)

  return <HeaderContent onClick={onClick}> {activeChart} </HeaderContent>
}

const SideBar: React.FC<HeaderProps<ChartTypes>> = ({activeChart, onClickChart}) => {
  return (
    <HeaderContainer>
      <HeaderComponents activeChart={ChartTypes.BAR} onClickChart={onClickChart} />
      <HeaderComponents activeChart={ChartTypes.LINE} onClickChart={onClickChart} />
      <HeaderComponents activeChart={ChartTypes.DOUGHNUT} onClickChart={onClickChart} />
      <HeaderComponents activeChart={ChartTypes.RADAR} onClickChart={onClickChart} />
    </HeaderContainer>
  );
}



export default SideBar;
