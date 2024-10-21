import "./Aga-style.css";
import RiwayatPendidikan from './components/riwayatPendidikan'; 
import Hero from "./components/hero";
import RiwayatPekerjaan from "./components/riwayatPekerjaan";
import WarnaFavorit from "./components/WarnaFavorit"; // Impor komponen baru
import ContactForm from "./components/ContactForm";

export default function Gallery() {
  return (
    <section>
      <Hero />
      <RiwayatPendidikan />
      <RiwayatPekerjaan />
      <WarnaFavorit /> 
      <ContactForm />
    </section>
  )
}
