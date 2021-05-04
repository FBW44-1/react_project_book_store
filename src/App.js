
import { Switch, Route } from 'react-router-dom';
import './App.scss';

import HomePage from './pages/homepage/HomePage';
import Shopping from './pages/shopping/Shopping';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';



function App() {
    return (
        <div id="main-wrapper">
            <Header />
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/shopping" component= {Shopping} />
            </Switch>
            <Footer />
        </div>
    );
}

export default App;
