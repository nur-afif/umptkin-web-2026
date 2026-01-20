"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  CheckCircle2,
  CreditCard,
  FileText,
} from "lucide-react";

export default function FormKlarifikasiRegistrasi() {
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
