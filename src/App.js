
import styles from './App.module.css';
import Header from './Header/Header';
import RaceHeader from './RaceHeader/RaceHeader';

function App() {
  return (

    <div className={styles.app}>
       
       <header className={styles.header}>
        <Header />
      </header>
      <div className={styles.sidebar}>

      </div>
   
    
    <div className={styles.content}>
       <RaceHeader />
       <div>table</div>
      
    </div>
    <div className={styles.footer}>

    </div>
    </div>
  
  );
}

export default App;
