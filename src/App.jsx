import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import Services from './pages/Services';
import TreeTrimming from './pages/Treetrimming';
import Treeremoval from './pages/Treeremoval';
import About from './pages/About';


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
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}