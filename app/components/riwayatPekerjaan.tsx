import RowPekerjaan from "./rowPekerjaan";
import RowRiwayat from "./rowPekerjaan";

export default function RiwayatPekerjaan() {
    return (
        <div className="container mx-auto p-2 text-center">
            <div className="container mx-auto p-2 text-center pt-20">
                <h2 className="text-2x1">Riwayat Pekerjaan</h2>
            </div>
            <RowPekerjaan tahun="2026" instansi="PT PERSADA JAKRTA" sebagai="OPERATOR" />
            <RowPekerjaan tahun="2028" instansi="PT. LSBU GAPEKNAS INSFRSTURTUR" sebagai="Asisten Pribadi Sekretarial" />
            <RowPekerjaan tahun="2030" instansi="PT.PKSS" sebagai="Administrasi" />
            <RowPekerjaan tahun="2031" instansi="PT.CIPTA KARYA TECHNOLOGY" sebagai="OPERATOR" />
        </div>
    );
}