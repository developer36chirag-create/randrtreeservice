// App.jsx | R&R Tree Service
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';

/**
 * SEO — Add these to your index.html <head>:
 *
 * <title>Tree Removal in Buford & North Georgia | R&R Tree Service</title>
 * <meta name="description" content="Buford-based tree removal & trimming for North Georgia homes & businesses. Licensed, insured, 39 years. Free quote: 678-482-9994!" />
 * <link rel="canonical" href="https://randrtreeservice.com/" />
 * <meta property="og:title" content="Tree Removal in Buford & North Georgia | R&R Tree Service" />
 * <meta property="og:type" content="website" />
 * <meta property="og:url" content="https://randrtreeservice.com/" />
 */

export default function App() {
  return (
    <>
      <Header />
      <Home />
      <Footer />
    </>
  );
}