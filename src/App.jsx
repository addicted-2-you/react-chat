import Header from "./Header";
import ChatWindow from "./chat/ChatWindow";

function App() {
  return (
    <div className="h-screen flex flex-col">
      <Header />

      <div className="w-full flex flex-grow justify-center items-center">
        <ChatWindow />
      </div>
    </div>
  );
}

export default App;
