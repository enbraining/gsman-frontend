'use client';

import styled from 'styled-components';

export const StyledInfo = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  color: black;
  background-color: white;
  transition-duration: 300ms;
  width: 16rem;
  height: 18rem;
  border-radius: 1rem;

  .details {
    transition-duration: 300ms;
    opacity: 0;
  }

  :hover img {
    left: 100px;
    width: 18rem;
  }
`;

export const StyledMain = styled.main`
  display: flex;
  min-height: 100vh;
  background-color: black;
  background-size: cover;
  padding: 5rem 0;
  color: white;
  box-shadow: 0 20px 10px #aaaaaa3b;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
