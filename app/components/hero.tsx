import foto from "../foto.jpg";

export default function Hero() {
    return (
        <div className="text-center">
            <h1 className="text-gray-300 font-bold">CV Online</h1>
            <h2 className="text-3x1">Aga Aprilyan Permana</h2>
            <Profile />
            <p>
                Saya adalah mahasiswa yang sangat berkharisma, jurusan Sistem Informasi dari Universitas Ma'soem.
                Saya bercita-cita menjadi orang yang berbanyak uang saja.
            </p>
        </div>
    );
}

function Profile() {
    return <img src={foto.src} alt="Hisyam Irsyad Athallah" className="fotoku" />;
}