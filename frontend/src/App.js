import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { Link } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import TaskScreen from './screens/TaskScreen';
import ScalpScreen from './screens/ScalpScreen';
import PlanScreen from './screens/PlanScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProfileScreen from './screens/ProfileScreen';

export default function App() {
    return (
     
        <Router>
            <Header /> 
            <Routes>
            
                
                <Route path="/" element={<HomeScreen /> } >
                </Route>
                <Route path="/login" element={<LoginScreen />} />
                <Route path="/register" element={<RegisterScreen />} />
                <Route path="/profile" element={<ProfileScreen />} />
                <Route path="/tasks" element={<HomeScreen /> } >
                </Route>
                <Route path="/tasks/:id" element={<TaskScreen />} />
                <Route path="/plan/:id" element={<PlanScreen />} />
                <Route path="/tasks/Scalp" element={<ScalpScreen />} />
                
            
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
