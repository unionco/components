import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`
  :root {
    --base-font: ${(props: any) => props.theme.fonts.body};
    --heading-font: ${(props: any) => props.theme.fonts.heading};
  }

  *, *::before, *::after {
    box-sizing: inherit;
    font-variant-numeric: lining-nums;
    -webkit-font-smoothing: antialiased;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  body,
  html,
  li,
  ol,
  ul {
    margin: 0;
    padding: 0;
  }

  ol,
  ul {
    list-style: none;
  }

  body {
    font-family: var(--base-font);
  }

  html {
    box-sizing: border-box;
    font-size: 100%;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: var(--heading-font);
  }

  p {
    margin: 0;
  }
`;

export default Global;
