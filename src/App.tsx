import { ThemeProvider } from "styled-components";

import { Button } from "./components";
import { GlobalStyle, defaultTheme } from "./styles";

const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Button variant="primary" />
      <Button variant="secondary" />
      <Button variant="danger" />
      <Button variant="success" />
      <Button />
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;
