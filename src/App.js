import React from "react";
import "./css/reset.css";
import "./App.css";
import Header from "./components/Header";
import NavigationMenu from "./components/NavigationMenu";
import Content from "./components/Content";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App container">
      <Header></Header>
      <NavigationMenu></NavigationMenu>
      <Content></Content>
      <Footer
        url="#"
        name={
          <>
            Made with React at <strong>Le Reacteur </strong> by
            <strong> Olivier</strong>
          </>
        }
      ></Footer>
    </div>
  );
}

export default App;
