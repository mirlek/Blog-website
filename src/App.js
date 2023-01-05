import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ArticlePage from './pages/ArticlePage';
import ArticlesListPage from './pages/ArticlesListPage';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1> My awesome blog</h1>
          <div id='page-body'>
            <Routes>
              <Route path="/" element= {<HomePage />} />
              <Route path="/about" element= {<AboutPage />} />
              <Route path="/articles" element= {<ArticlePage />} />
              <Route path="/articles/:articleId" element= {<ArticlesListPage />} />
            </Routes>
          </div>
    </div>
    </BrowserRouter>
    
  );
}

export default App;
