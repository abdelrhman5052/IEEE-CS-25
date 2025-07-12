import "./index.css";
import Header from "./Header.jsx";
import Post from "./post.jsx";
import { members } from "./Data/members.js";

function App() {
  return (
    <>
      <Header />
      <div className="p-6 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {members.map((member) => (
          <Post key={member.id} member={member} />
        ))}
      </div>
    </>
  );
}

export default App;
