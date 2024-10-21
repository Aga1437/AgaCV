import RowRiwayat from "./rowRiwayat";

export default function RiwayatPendidikan() {
    return (
        <div className="container mx-auto p-2 text-center">
            <div className="container mx-auto p-2 text-center pt-20">
                <h2 className="text-2x1">Riwayat Pendidikan</h2>
            </div>
            <RowRiwayat jenjang="SD" sekolah="SDN Kencana Indah 1" tahun="2010 - 2016" />
            <RowRiwayat jenjang="SMP" sekolah="SMPN 3 Rancaekek" tahun="2016 - 2019" />
            <RowRiwayat jenjang="SMA" sekolah="SMK Lugina Rancaekek" tahun="2019 - 2021" />
            <RowRiwayat jenjang="Perguruan Tinggi" sekolah="Masoem University" tahun="2022 - 2026" />
        </div>
    );
}