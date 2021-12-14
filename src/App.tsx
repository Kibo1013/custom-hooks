import { UserCard } from "./components/UserCard";
import "./styles.css";

const userProfile = {
  id: 1,
  name: "sekine",
  mail: "aaa@aaaa.com",
  address: "aaa bbb ccccc"
};

export default function App() {
  return (
    <div className="App">
      <UserCard userProfile={userProfile} />
    </div>
  );
}
