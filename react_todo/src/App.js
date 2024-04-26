import { AppBar, Toolbar } from "@mui/material";
import { Routes, Route, Navigate } from "react-router-dom";

function MainPage() {

  return(
    <>
      <h1>메인 페이지</h1>
    </>
  );
}

function SubPage1() {

  return(
    <>
      <h1>서브1 페이지</h1>
    </>
  );
}

function App() {
  return (
    <>
    <AppBar position="static">
      <Toolbar>
        <div className="flex-1"></div>
        <div className="font-bold">TODO</div>
        <div className="flex-1"></div>
      </Toolbar>
    </AppBar>
    
    <Routes>
      <Route path="/main" element={<MainPage />} />
      <Route path="/sub1" element={<SubPage1 />} />
      <Route path="*" element={<Navigate to ="/main" />} />
    </Routes>
    </>
  );
}

export default App;
