import './App.css'
import { Card } from './assets/Card'

function App() {
  const profiles = [
    {
      id: 1,
      name: "Mark",
      title: "Frontend developer",
      bio: "I like to work with different frontend technologies and play video games."
    },{
      name: "Tiffany",
      title: "Engineering manager",
      bio: "I have worked in tech for 15 years and love to help people grow in this industry."
    },{
      name: "Doug",
      title: "Backend developer",
      bio: "I have worked in tech for 15 years and love to help people grow in this industry."
    }
  ];
  return (
    <>
      <div className="flex-container">
        {profiles.map(
          (profile) => (
            <Card
              key={profile.id}
              name={profile.name}
              title={profile.title}
              bio={profile.bio}
            />
          )
        )}
      </div>
    </>
  )
}

export default App
