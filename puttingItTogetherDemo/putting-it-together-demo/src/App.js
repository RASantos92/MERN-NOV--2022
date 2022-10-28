import logo from './logo.svg';
import './App.css';
import { ProfileCard } from './components/ProfileCard';

function App() {

  const profiles = [
    {
      userName: "bobbyB",
      bio: "just a cool cat",
      likes: 0
    },
    {
      userName: "Bilbo Baggins",
      bio: "hairy foot hobbit",
      likes: 3
    },
    {
      userName: "slickRick",
      bio: "just a slick Rick",
      likes: 0
    }
  ]
  return (
    <>
    {
      profiles.map((oneProfile) => {
        return <ProfileCard oneProfile={oneProfile}/>
      })
    }
    
    </>
  );
}

export default App;
