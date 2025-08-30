import React from 'react';
import Header from './components/Header';
import { Routes, Route, useParams, Navigate } from 'react-router-dom';
import Footer from './components/Footer';
import LandingPage from './pages/landingPage.jsx';
import AboutUsPage from './pages/AboutUsPage.jsx';
import ProductsPage from './pages/ProductsPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import Privacy_Policy_Page from './pages/Privacy_Policy_Page.jsx';
import Safety_Quality from './pages/Safety_Quality.jsx';
import OurTeamPage from './pages/OurTeamPage.jsx';
import PagesData from './Data/PagesData.js';
import MainContentContainer from './MainContentContainer.jsx';
 


function App() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      {/* <div className="w-[98%] h-[99vh] bg-white rounded-3xl shadow-lg overflow-auto no-scrollbar my-3"> */}
      <MainContentContainer>
        <div className='min-h-full'>
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/products" element={<Navigate to="/products/1" replace />} />
              <Route path="/products/:id" element={<ProductWrapper />} />
              <Route path="/about" element={<AboutUsPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/privacy-policy" element={<Privacy_Policy_Page />} />
              <Route path="/safety-quality" element={<Safety_Quality />} />
              <Route path="/our-team" element={<OurTeamPage />} />
              <Route
                path="*"
                element={
                  <div className="flex items-center justify-center min-h-screen">
                    <h2 className="text-7xl text-red-700">404 Not Found</h2>
                  </div>
                }
              />
            </Routes>

          </main>
          <Footer />
        </div>
      </MainContentContainer>
    </div>
  );
}

function ProductWrapper() {
  const { id } = useParams();
  const product = PagesData.find(item => item.id === parseInt(id));
  if (!product) {
    return (<div className="flex items-center justify-center min-h-screen">
                    <h2 className="text-7xl ">Product not found</h2>
                  </div>);
  }
  return <ProductsPage product={product} />;
}

export default App;