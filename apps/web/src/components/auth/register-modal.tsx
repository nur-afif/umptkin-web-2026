"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { UserPlus, Hash, Calendar, User, Phone, Mail, X } from "lucide-react";
import { useModalContext } from "@/contexts/modal-context";

export function RegisterModal() {
  const { showRegisterModal, setShowRegisterModal } = useModalContext();
  const [formData, setFormData] = useState({
    nisn: "",
    tanggalLahir: "",
    nama: "",
    telpon: "",
    email: "",
  });

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Register data:", formData);
    alert(
      "Registrasi berhasil! Silahkan cek email Anda untuk username dan password."
    );
    setShowRegisterModal(false);
    setFormData({
      nisn: "",
      tanggalLahir: "",
      nama: "",
      telpon: "",
      email: "",
    });
  };

  if (!showRegisterModal) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="w-full max-w-lg rounded-2xl bg-white shadow-2xl animate-in fade-in zoom-in duration-300">
        <div className="bg-gradient-to-r from-primary to-primary/80 px-6 py-5 rounded-t-2xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center">
                <UserPlus className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white">Registrasi NISN</h3>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setShowRegisterModal(false)}
              className="text-white/80 hover:text-white hover:bg-white/10"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
        </div>
        <div className="px-6 py-4 bg-primary/5 border-b border-primary/10">
          <p className="text-sm text-gray-600 leading-relaxed">
            Data yang Anda masukkan akan divalidasi lebih lanjut. Jika dikemudian hari ditemukan ketidaksesuaian atau data yang Anda berikan tidak benar maka akan didiskualifikasi.
          </p>
        </div>
        <form onSubmit={handleRegisterSubmit} className="p-6 space-y-4 max-h-[60vh] overflow-y-auto">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
              <Hash className="h-4 w-4 text-primary" />
              NISN <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                type="number"
                required
                maxLength={12}
                value={formData.nisn}
                onChange={(e) =>
                  setFormData({ ...formData, nisn: e.target.value })
                }
                className="w-full rounded-xl border-2 border-gray-200 bg-gray-50 px-4 py-3 pl-10 text-sm focus:border-primary focus:bg-white focus:outline-none transition-colors"
                placeholder="Masukkan 12 digit NISN"
              />
              <Hash className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
              <Calendar className="h-4 w-4 text-primary" />
              Tanggal Lahir <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                type="date"
                required
                value={formData.tanggalLahir}
                onChange={(e) =>
                  setFormData({ ...formData, tanggalLahir: e.target.value })
                }
                className="w-full rounded-xl border-2 border-gray-200 bg-gray-50 px-4 py-3 pl-10 text-sm focus:border-primary focus:bg-white focus:outline-none transition-colors"
              />
              <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
              <User className="h-4 w-4 text-primary" />
              Nama Lengkap
            </label>
            <div className="relative">
              <input
                type="text"
                maxLength={50}
                value={formData.nama}
                onChange={(e) =>
                  setFormData({ ...formData, nama: e.target.value })
                }
                className="w-full rounded-xl border-2 border-gray-200 bg-gray-50 px-4 py-3 pl-10 text-sm focus:border-primary focus:bg-white focus:outline-none transition-colors"
                placeholder="Masukkan nama lengkap sesuai ijazah"
              />
              <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
              <Phone className="h-4 w-4 text-primary" />
              No. Telp/HP <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                type="tel"
                required
                maxLength={15}
                value={formData.telpon}
                onChange={(e) =>
                  setFormData({ ...formData, telpon: e.target.value })
                }
                className="w-full rounded-xl border-2 border-gray-200 bg-gray-50 px-4 py-3 pl-10 text-sm focus:border-primary focus:bg-white focus:outline-none transition-colors"
                placeholder="Contoh: 081234567890"
              />
              <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
              <Mail className="h-4 w-4 text-primary" />
              E-mail <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                type="email"
                required
                maxLength={50}
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full rounded-xl border-2 border-gray-200 bg-gray-50 px-4 py-3 pl-10 text-sm focus:border-primary focus:bg-white focus:outline-none transition-colors"
                placeholder="Masukkan email aktif"
              />
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            </div>
            <p className="text-xs text-amber-600 bg-amber-50 px-3 py-2 rounded-lg border border-amber-200">
              <strong>Penting:</strong> Username dan password akan dikirimkan via e-mail. Pastikan alamat e-mail valid dan aktif.
            </p>
          </div>
          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              className="flex-1 h-12 rounded-xl border-2 text-sm font-semibold hover:bg-gray-50 transition-colors"
              onClick={() => setShowRegisterModal(false)}
            >
              Batal
            </Button>
            <Button
              type="submit"
              className="flex-1 h-12 rounded-xl bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white text-sm font-semibold shadow-lg shadow-primary/25 transition-all hover:shadow-xl"
            >
              Simpan
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
