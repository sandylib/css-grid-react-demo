
import styles from './App.module.css';
import Header from './Header/Header';

function App() {
  return (
    
    <div className={styles.app}>
       
       <header className={styles.header}>
        <Header />
      </header>
      <div className={styles.sidebar}>

      </div>
   
    
    <div className={styles.content}>
       {/* homework is doing the header part of the this block */}
      
    </div>
    <div className={styles.footer}>

    </div>
    </div>
  
  );
}

export default App;
