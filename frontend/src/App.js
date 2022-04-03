import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { Link } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import TaskScreen from './screens/TaskScreen';

export default function App() {
    return (
     
        <Router>
            <Header /> 
            <Routes>
            
                
                <Route exact path="/" element={<HomeScreen /> } >
                </Route>
                <Route path="/Task/:_id" element={<TaskScreen />} />
                
            
            </Routes>
            <Footer />
        </Router>
    );
  }

/**function App() {
    return ( 
        <Router>
            <Routes>
                <Header />
                <main className="py-3">
                    <Container>
                        <Route path='/' component={HomeScreen} /> 
                        <Route path='/Daytrading' component={DayTradingScreen} />
                    </Container>
                    
                </main>
                <Footer />
            </Routes>
        </Router>
    );
}
**/
