import React from 'react'
import { styled } from 'styled-components';

export default function AdminPanel() {
  return (
    <AdminPanelStyled>AdminPanel</AdminPanelStyled>
  )
}

const  AdminPanelStyled= styled.div`
    background-color: #ffffff;
    height: 250px;
    box-shadow: 0px -6px 8px -2px #0000001a;
    border-radius: 0px 0px 15px 15px;
  
`;