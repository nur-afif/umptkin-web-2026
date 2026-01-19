"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Banknote,
  Calendar,
  CheckCircle2,
  CreditCard,
  FileText,
  Hash,
} from "lucide-react";

export default function FormKlarifikasiRegistrasi() {
  const [dataPendaftaran, setDataPendaftaran] = useState<{
    biodata: Record<string, string>;
    pendidikan: Record<string, string>;
  } | null>(null);
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

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    const stored = window.localStorage.getItem("formPendaftaran");
    if (stored) {
      try {
        setDataPendaftaran(JSON.parse(stored));
      } catch (error) {
        console.error("Gagal membaca data pendaftaran:", error);
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-primary/5 p-4">
      <div className="w-full max-w-5xl mx-auto">
        <Card className="border-0 shadow-2xl">
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

          <div className="px-6 py-4 bg-primary/5 border-b border-primary/10">
            <p className="text-sm text-gray-600 leading-relaxed">
              Pastikan data pembayaran dan pernyataan kebenaran sudah sesuai sebelum dikirim.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="p-8 space-y-8">
            {dataPendaftaran && (
              <div className="space-y-6">
                <div className="flex items-center gap-2 pb-2 border-b border-gray-200">
                  <FileText className="h-5 w-5 text-primary" />
                  <h4 className="font-semibold text-gray-800">Data Pendaftaran</h4>
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
            )}

            <div className="space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-gray-200">
                <CreditCard className="h-5 w-5 text-primary" />
                <h4 className="font-semibold text-gray-800">Form Pembayaran</h4>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">
                    Metode Pembayaran <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <select
                      required
                      value={formData.pembayaran.metode}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          pembayaran: { ...formData.pembayaran, metode: e.target.value },
                        })
                      }
                      className="w-full rounded-xl border-2 border-gray-200 bg-white px-4 py-2 pl-10 text-sm text-gray-700 focus:border-primary focus:outline-none transition-colors appearance-none cursor-pointer"
                    >
                      <option value="">Pilih metode</option>
                      <option value="transfer">Transfer Bank</option>
                      <option value="virtual_account">Virtual Account</option>
                      <option value="loket">Loket/Pembayaran Langsung</option>
                    </select>
                    <Banknote className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">
                    Bank <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <select
                      required
                      value={formData.pembayaran.bank}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          pembayaran: { ...formData.pembayaran, bank: e.target.value },
                        })
                      }
                      className="w-full rounded-xl border-2 border-gray-200 bg-white px-4 py-2 pl-10 text-sm text-gray-700 focus:border-primary focus:outline-none transition-colors appearance-none cursor-pointer"
                    >
                      <option value="">Pilih bank</option>
                      <option value="bni">BNI</option>
                      <option value="bri">BRI</option>
                      <option value="bca">BCA</option>
                      <option value="mandiri">Mandiri</option>
                    </select>
                    <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">
                    No. Referensi <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      required
                      value={formData.pembayaran.noReferensi}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          pembayaran: { ...formData.pembayaran, noReferensi: e.target.value },
                        })
                      }
                      className="w-full rounded-xl border-2 border-gray-200 bg-white px-4 py-2 pl-10 text-sm text-gray-700 focus:border-primary focus:outline-none transition-colors"
                      placeholder="Masukkan nomor referensi"
                    />
                    <Hash className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">
                    Tanggal Pembayaran <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      required
                      value={formData.pembayaran.tanggalBayar}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          pembayaran: { ...formData.pembayaran, tanggalBayar: e.target.value },
                        })
                      }
                      className="w-full rounded-xl border-2 border-gray-200 bg-white px-4 py-2 pl-10 text-sm text-gray-700 focus:border-primary focus:outline-none transition-colors"
                    />
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                  </div>
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
