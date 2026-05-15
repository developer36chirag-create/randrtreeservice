import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import Services from './pages/Services';
import TreeTrimming from './pages/Treetrimming';
import Treeremoval from './pages/Treeremoval';
import About from './pages/About';
import Stumpgrinding from './pages/Stumpgrinding';
import Firewood from './pages/Firewood';
import Areas from './pages/Areas';
import Retentionpond from './pages/Retentionpond';
import Testimonials from './pages/Testimonials';
import Gallery from './pages/Gallery';



export default function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/tree-trimming-in-atlanta" element={<TreeTrimming />} />
        <Route path="/tree-removal-in-atlanta" element={<Treeremoval />} />
        <Route path="/stump-grinding" element={<Stumpgrinding />} />
        <Route path="/firewood-delivery" element={<Firewood />} />
        <Route path="/areas-we-serve" element={<Areas />} />
        <Route path="/retention-pond-maintenance" element={<Retentionpond />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}