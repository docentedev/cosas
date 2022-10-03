import Healding from './components/Healding'
import Profile from './components/Profile'
import styles from './App.module.css'
import Job from './components/Job'
import jobsData from './jobs.json'

function App() {
  return (
    <div className={styles.App}>
      <div className="container">
        <div className="columns">
          <div className="column is-one-quarter">
            <Profile />
          </div>
          <div className="column">
            <Healding />
            <h3 className="tag is-success mt-4">Experiencia</h3>
            {jobsData.map((job: any) => (
              <Job key={job.id} {...job} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;
