import "./styles/Header.css";

const Header = ({ connectionStatus }: { connectionStatus: string }) => {
  return (
    <header>
      <h1>Signal Fire System</h1>
      <div
        className={`connectionStatus ${
          connectionStatus === "connected" ? "connected" : ""
        }`}
      ></div>
    </header>
  );
};

export default Header;
