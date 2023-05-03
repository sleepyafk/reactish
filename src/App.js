import logo from './logo.svg';
import './App.css';
function Header() {

  return( <nav class="navbar navbar-light bg-light">
  <div class="container-fluid">
    <span class="navbar-brand mb-0 h1" text-align="center">Yo one stop shop for memes, music, and games</span>
  </div>
</nav>
)
}
function App() {
  return (
    <Header /> 
  );
}

export default App;
