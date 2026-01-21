"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  CheckCircle2,
  CreditCard,
  FileText,
} from "lucide-react";
import { getFormPendaftaranData } from "@/lib/form-pendaftaran-store";

export default function FormKlarifikasiRegistrasi() {
  const router = useRouter();
  const [dataPendaftaran] = useState(() => getFormPendaftaranData());
  const [formData, setFormData] = useState({
    pembayaran: {
      metode: "",
      bank: "",
      noReferensi: "",
      tanggalBayar: "",
    },
    klarifikasi: {
      pernyataanBenar: false,
      setuju: false,
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Data klarifikasi:", formData);
    if (typeof window !== "undefined") {
      window.alert("Form klarifikasi berhasil dikirim!");
    }
  };

  const handleEditPendaftaran = () => {
    router.push("/form-pendaftaran");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-primary/5 p-4">
      <div className="w-full max-w-5xl mx-auto">
        <Card className="border-0 bg-transparent shadow-none">
          <div className="bg-gradient-to-r from-primary to-primary/80 px-6 py-4 rounded-t-2xl">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center">
                <CheckCircle2 className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Klarifikasi Registrasi</h3>
                <p className="text-sm text-white/80">Lengkapi pembayaran dan konfirmasi data</p>
              </div>
            </div>
          </div>

          <div className="px-6 py-4">
            <p className="text-sm text-gray-600 leading-relaxed">
              Pastikan data pembayaran dan pernyataan kebenaran sudah sesuai sebelum dikirim.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="p-8 space-y-8">
            {dataPendaftaran ? (
              <div className="space-y-6">
                <div className="flex items-center justify-between gap-4 pb-2 border-b border-gray-200">
                  <div className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-primary" />
                    <h4 className="font-semibold text-gray-800">Pendaftaran</h4>
                  </div>
                  <Button
                    type="button"
                    variant="outline"
                    className="h-10 rounded-xl border-2 text-sm font-semibold hover:bg-gray-50 transition-colors"
                    onClick={handleEditPendaftaran}
                  >
                    Edit Data
                  </Button>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-3">
                    <h5 className="text-sm font-semibold text-gray-700">Biodata Diri</h5>
                    <div className="space-y-2 text-sm text-gray-700">
                      <p><span className="font-semibold">No. KTP/NIK:</span> {dataPendaftaran.biodata.noKTP || "-"}</p>
                      <p><span className="font-semibold">Nama:</span> {dataPendaftaran.biodata.nama || "-"}</p>
                      <p><span className="font-semibold">Jenis Kelamin:</span> {dataPendaftaran.biodata.jenisKelamin || "-"}</p>
                      <p><span className="font-semibold">Tempat Lahir:</span> {dataPendaftaran.biodata.tempatLahir || "-"}</p>
                      <p><span className="font-semibold">Tanggal Lahir:</span> {dataPendaftaran.biodata.tanggalLahir || "-"}</p>
                      <p><span className="font-semibold">Agama:</span> {dataPendaftaran.biodata.agama || "-"}</p>
                      <p><span className="font-semibold">No. Telp/HP:</span> {dataPendaftaran.biodata.noTelp || "-"}</p>
                      <p><span className="font-semibold">E-mail:</span> {dataPendaftaran.biodata.email || "-"}</p>
                      <p><span className="font-semibold">Provinsi:</span> {dataPendaftaran.biodata.provinsi || "-"}</p>
                      <p><span className="font-semibold">Kota/Kabupaten:</span> {dataPendaftaran.biodata.kotaKabupaten || "-"}</p>
                      <p><span className="font-semibold">Alamat:</span> {dataPendaftaran.biodata.alamat || "-"}</p>
                      <p><span className="font-semibold">Nama Ayah:</span> {dataPendaftaran.biodata.namaAyah || "-"}</p>
                      <p><span className="font-semibold">Nama Ibu:</span> {dataPendaftaran.biodata.namaIbu || "-"}</p>
                      <p><span className="font-semibold">Gaji Ortu/Wali:</span> {dataPendaftaran.biodata.gajiOrtu || "-"}</p>
                      <p><span className="font-semibold">Peserta Berkebutuhan Khusus:</span> {dataPendaftaran.biodata.pesertaKhusus || "-"}</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h5 className="text-sm font-semibold text-gray-700">Pendidikan SMA Sederajat</h5>
                    <div className="space-y-2 text-sm text-gray-700">
                      <p><span className="font-semibold">NISN:</span> {dataPendaftaran.pendidikan.nisn || "-"}</p>
                      <p><span className="font-semibold">NPSN:</span> {dataPendaftaran.pendidikan.npsn || "-"}</p>
                      <p><span className="font-semibold">Nama Sekolah:</span> {dataPendaftaran.pendidikan.namaSekolah || "-"}</p>
                      <p><span className="font-semibold">Status Sekolah:</span> {dataPendaftaran.pendidikan.statusSekolah || "-"}</p>
                      <p><span className="font-semibold">Provinsi:</span> {dataPendaftaran.pendidikan.provinsi || "-"}</p>
                      <p><span className="font-semibold">Kota:</span> {dataPendaftaran.pendidikan.kota || "-"}</p>
                      <p><span className="font-semibold">Kecamatan:</span> {dataPendaftaran.pendidikan.kecamatan || "-"}</p>
                      <p><span className="font-semibold">Jenis Sekolah:</span> {dataPendaftaran.pendidikan.jenisSekolah || "-"}</p>
                      <p><span className="font-semibold">Akreditasi:</span> {dataPendaftaran.pendidikan.akreditasi || "-"}</p>
                      <p><span className="font-semibold">Alamat Sekolah:</span> {dataPendaftaran.pendidikan.alamat || "-"}</p>
                      <p><span className="font-semibold">Pernah Pesantren:</span> {dataPendaftaran.pendidikan.pernahPesantren || "-"}</p>
                      {dataPendaftaran.pendidikan.pernahPesantren === "pernah" && (
                        <>
                          <p><span className="font-semibold">Nama Pesantren:</span> {dataPendaftaran.pendidikan.namaPesantren || "-"}</p>
                          <p><span className="font-semibold">Lama Pesantren:</span> {dataPendaftaran.pendidikan.lamaPesantren || "-"}</p>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-2">
                    <h5 className="text-lg font-semibold text-gray-800">Data pendaftaran belum ada</h5>
                    <p className="text-sm text-gray-600 max-w-md">
                      Silakan isi form pendaftaran terlebih dahulu agar datanya tampil di sini.
                    </p>
                  </div>
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div className="mt-6 flex justify-end">
                  <Button
                    type="button"
                    variant="outline"
                    className="h-11 rounded-xl border-2 text-sm font-semibold hover:bg-gray-50 transition-colors"
                    onClick={handleEditPendaftaran}
                  >
                    Isi Form Pendaftaran
                  </Button>
                </div>
              </div>
            )}

            <div className="space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-gray-200">
                <CreditCard className="h-5 w-5 text-primary" />
                <h4 className="font-semibold text-gray-800">Form Pembayaran</h4>
              </div>

              <div className="space-y-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-2">
                    <h5 className="text-2xl font-bold text-primary">Pembayaran</h5>
                    <p className="text-sm text-gray-600 max-w-md">
                      Pembayaran dilakukan melalui Bank Mandiri (Teller, ATM, Livin by Mandiri),
                      maupun dari bank lainnya (ATM dan Transfer).
                    </p>
                  </div>
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <CreditCard className="h-6 w-6 text-primary" />
                  </div>
                </div>

                <div>
                  <h6 className="text-sm font-semibold text-gray-800">RINCIAN PEMBAYARAN</h6>
                  <div className="mt-3 border-t border-gray-200">
                    <div className="grid grid-cols-[50px_1fr_100px] md:grid-cols-[60px_1fr_140px] text-xs md:text-sm font-semibold text-gray-700 py-3">
                      <span>No</span>
                      <span>Deskripsi</span>
                      <span className="text-right">Harga Rp.</span>
                    </div>
                    <div className="grid grid-cols-[50px_1fr_100px] md:grid-cols-[60px_1fr_140px] text-sm text-gray-700 py-3 border-t border-gray-100">
                      <span>1</span>
                      <span>Biaya pendaftaran</span>
                      <span className="text-right">200.000</span>
                    </div>
                    <div className="flex items-center justify-end gap-2 pt-4 border-t border-gray-100">
                      <span className="text-sm text-gray-600">Total Rp.</span>
                      <span className="text-lg font-semibold text-gray-900">200.000</span>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center">
                  <Button
                    type="button"
                    className="h-12 px-10 rounded-xl bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white text-sm font-semibold shadow-lg shadow-primary/25 transition-all hover:shadow-xl"
                  >
                    Bayar
                  </Button>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-gray-200">
                <FileText className="h-5 w-5 text-primary" />
                <h4 className="font-semibold text-gray-800">Form Klarifikasi</h4>
              </div>

              <div className="space-y-3">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    required
                    checked={formData.klarifikasi.pernyataanBenar}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        klarifikasi: { ...formData.klarifikasi, pernyataanBenar: e.target.checked },
                      })
                    }
                    className="mt-1 h-4 w-4 text-primary focus:ring-primary cursor-pointer"
                  />
                  <span className="text-sm text-gray-700">
                    Saya menyatakan bahwa data yang saya isi pada form pendaftaran sudah benar dan
                    lengkap.
                  </span>
                </label>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    required
                    checked={formData.klarifikasi.setuju}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        klarifikasi: { ...formData.klarifikasi, setuju: e.target.checked },
                      })
                    }
                    className="mt-1 h-4 w-4 text-primary focus:ring-primary cursor-pointer"
                  />
                  <span className="text-sm text-gray-700">
                    Saya menyetujui syarat dan ketentuan yang berlaku pada proses registrasi.
                  </span>
                </label>
              </div>
            </div>

            <div className="flex gap-3 pt-4 border-t border-gray-200">
              <Button
                type="button"
                variant="outline"
                className="flex-1 h-12 rounded-xl border-2 text-sm font-semibold hover:bg-gray-50 transition-colors"
              >
                Simpan Draft
              </Button>
              <Button
                type="submit"
                className="flex-1 h-12 rounded-xl bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white text-sm font-semibold shadow-lg shadow-primary/25 transition-all hover:shadow-xl"
              >
                Kirim Klarifikasi
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
}
