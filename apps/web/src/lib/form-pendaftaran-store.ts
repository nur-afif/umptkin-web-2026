export type FormPendaftaranData = {
  biodata: Record<string, string>;
  pendidikan: Record<string, string>;
};

let cachedFormPendaftaran: FormPendaftaranData | null = null;

export const setFormPendaftaranData = (data: FormPendaftaranData) => {
  cachedFormPendaftaran = data;
};

export const getFormPendaftaranData = () => cachedFormPendaftaran;

export const clearFormPendaftaranData = () => {
  cachedFormPendaftaran = null;
};
