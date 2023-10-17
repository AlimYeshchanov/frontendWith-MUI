import Rightbar from "./components/Rightbar";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Navbar from "./components/Navbar";
import { Box, Stack, ThemeProvider, createTheme } from "@mui/material";
import Add from "./components/Add";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState("dark")
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    }
  })

  return (
    <ThemeProvider theme={darkTheme}>
    <Box backgroundColor={"background.default"} color={"text.primary"}>
      <Navbar/>
      <Stack direction="row" spacing={2} justifyContent="space-between">
      <Sidebar setMode={setMode} mode={mode}/>
      <Feed/>
      <Rightbar/>
      </Stack>
      <Add/>
    </Box>
    </ThemeProvider>
  );
}

export default App;
