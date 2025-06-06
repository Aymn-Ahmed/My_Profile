import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    transition: all 0.3s ease-in-out;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    background: linear-gradient(135deg, #0d1117, #121212);
    color: ${({ theme }) => theme.palette.text.primary};
    font-family: ${({ theme }) => theme.typography.fontFamily};
    line-height: 1.6;
    min-height: 100vh;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a {
    color: ${({ theme }) => theme.palette.primary.main};
    text-decoration: none;
    transition: color 0.3s ease;
    &:hover {
      color: ${({ theme }) => theme.palette.secondary.main};
    }
  }

  button {
    cursor: pointer;
    font-family: ${({ theme }) => theme.typography.fontFamily};
  }

  /* Glassmorphism card style */
  .glass-card {
    background: rgba(255, 255, 255, 0.05);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(10px);
    border-radius: 12px;
    padding: 16px;
  }

  /* Fade-in animation */
  .fade-in {
    opacity: 0;
    animation: fadeIn 1s ease forwards;
  }

  @keyframes fadeIn {
    to {
      opacity: 1;
    }
  }

  /* Scrollbar styling */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  ::-webkit-scrollbar-track {
    background: #1e1e1e;
  }
  ::-webkit-scrollbar-thumb {
    background: #1e88e5;
    border-radius: 4px;
  }
`;

export default GlobalStyles;
