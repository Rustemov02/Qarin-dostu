import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Products from './components/Products/Products';
import Service from './components/Service/ServiceDetails'
import Footer from './components/Footer/Footer'
function App() {
  return (
    <div className='relative'>
      <Header />  
      <Main/>
      <Products />
      <Service/>
      <Footer />
    </div>
  );
}

export default App;
