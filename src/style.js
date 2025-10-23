// App.jsx (or similar parent component)
import UserCard from './UserCard';
import './UserCard.css'; // Import the custom styles

const userData = {
  name: "Alex Johnson",
  age: 32,
  country: "Canada",
};

function App() {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-5">User Profile Display</h2>
      <UserCard user={userData} />
    </div>
  );
}

export default App;