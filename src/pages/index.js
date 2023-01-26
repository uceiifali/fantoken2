import DigitalHockey from '@/Components/DigitalHockey';
import Footer from '@/Components/Footer';
import Navbar from '@/Components/Navbar';
import Vote from '@/Components/Vote';

// pages/index.js
export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      {/* <DigitalHockey /> */}
      <Vote />
      <Footer />
    </div>
  );
}
