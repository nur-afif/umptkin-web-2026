# uin-samata

This project was created with [Better-T-Stack](https://github.com/AmanVarshney01/create-better-t-stack), a modern TypeScript stack that combines Next.js, Express, ORPC, and more.

## Features

- **TypeScript** - For type safety and improved developer experience
- **Next.js** - Full-stack React framework
- **TailwindCSS** - Utility-first CSS for rapid UI development
- **shadcn/ui** - Reusable UI components
- **Express** - Fast, unopinionated web framework
- **oRPC** - End-to-end type-safe APIs with OpenAPI integration
- **Node.js** - Runtime environment
- **Drizzle** - TypeScript-first ORM
- **PostgreSQL** - Database engine
- **Turborepo** - Optimized monorepo build system

## Getting Started

First, install the dependencies:

```bash
npm install
```

## Database Setup

This project uses PostgreSQL with Drizzle ORM.

1. Make sure you have a PostgreSQL database set up.
2. Update your `apps/server/.env` file with your PostgreSQL connection details.

3. Apply the schema to your database:

```bash
npm run db:push
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3001](http://localhost:3001) in your browser to see the web application.
The API is running at [http://localhost:3000](http://localhost:3000).

## Project Structure

```
uin-samata/
├── apps/
│   ├── web/         # Frontend application (Next.js)
│   └── server/      # Backend API (Express, ORPC)
├── packages/
│   ├── api/         # API layer / business logic
│   └── db/          # Database schema & queries
```

## Available Scripts

### Development
- `npm run dev`: Start all applications in development mode
- `npm run dev:web`: Start only the web application (http://localhost:3001)
- `npm run dev:server`: Start only the server (http://localhost:3000)
- `npm run dev:native`: Start native application (if configured)

### Build & Type Checking
- `npm run build`: Build all applications for production
- `npm run check-types`: Check TypeScript types across all apps

### Database Management
- `npm run db:push`: Push schema changes to database
- `npm run db:studio`: Open Drizzle Studio UI
- `npm run db:generate`: Generate database migrations
- `npm run db:migrate`: Run database migrations
- `npm run db:start`: Start PostgreSQL container
- `npm run db:watch`: Watch database changes
- `npm run db:stop`: Stop PostgreSQL container
- `npm run db:down`: Stop and remove PostgreSQL container

---

## 🎓 UM-PTKIN 2026 Implementation

Website modern untuk pendaftaran Ujian Masuk Perguruan Tinggi Keagamaan Islam Negeri (UM-PTKIN) 2026.

### 🚀 Fitur UM-PTKIN

#### Beranda
- **Hero Section** dengan countdown timer (hingga 30 Mei 2026, 16:00 WIT)
- **Info Tabs** dengan konten lengkap:
  - Pengantar
  - Ketentuan Umum
  - Jadwal Pelaksanaan
  - Biaya Pendaftaran
  - Alur Pendaftaran
  - Materi Ujian
  - Video Tutorial
  - FAQ
- **Auth Boxes** untuk pendaftaran dan login (dengan modals)
- **Helpdesk info** dengan nomor kontak
- **Responsive design** untuk mobile dan desktop

#### Program Studi
- **Daftar 58 PTKIN** lengkap dengan informasi:
  - Nama dan kode PTKIN
  - Alamat lengkap
  - Website
  - Kontak (telp, fax, email)
  - Timezone (WIB/WITA/WIT)
- **Search & Filter**:
  - Cari berdasarkan nama, kode, atau provinsi
  - Filter berdasarkan provinsi
  - Filter berdasarkan timezone
- **Pagination** untuk navigasi halaman
- **Modal Daya Tampung** untuk melihat detail program studi
- **Responsive grid layout** (1, 2, atau 3 kolom)

#### Pendaftaran
- **Halaman Registrasi** (`/signup`) dengan form NISN:
  - Input NISN (12 digit)
  - Input Tanggal Lahir
  - Input Nama Lengkap
  - Input No. Telp/HP
  - Input E-mail
  - Validasi form
  - Alert feedback setelah submit

#### Form Pendaftaran
- **Halaman Form Pendaftaran** (`/form-pendaftaran`) dengan data lengkap:
  - **Biodata Diri**:
    - No. KTP/NIK
    - Nama
    - Jenis Kelamin
    - Tempat Lahir
    - Tanggal Lahir
    - Agama
    - No. Telp/HP
    - E-mail
    - Provinsi
    - Kota/Kabupaten
    - Alamat
    - Nama Ayah
    - Nama Ibu
    - Gaji Ortu/Wali
    - Peserta Berkebutuhan Khusus
  - **Pendidikan SMA Sederajat**:
    - No. NISN (readonly, dari sistem)
    - No. NPSN (readonly)
    - Nama Sekolah (readonly)
    - Status Sekolah
    - Provinsi
    - Kota
    - Kecamatan
    - Jenis Sekolah
    - Akreditasi
    - Alamat
  - **Riwayat Pendidikan Pesantren** (conditional):
    - Pernah mengikuti pendidikan pesantren? (Radio: Pernah/Tidak Pernah)
    - Nama Pesantren (tampil jika Pernah)
    - Lama Pendidikan (6 Bulan - >3 Tahun, tampil jika Pernah)

### 🎨 Design System

- **Primary color**: `#214160` (OKLCH: `oklch(0.40 0.07 255)`)
- **Font**: Poppins (Google Fonts)
- **Modern UI** dengan shadcn/ui components
- **Dark mode support**
- **Smooth animations** dan transitions
- **Mobile-first responsive design**
- **Lucide React** icons untuk consistent icon set

### 💻 Development

#### Tech Stack
- **Frontend**: Next.js 16.1.1 dengan Turbopack
- **Styling**: TailwindCSS
- **UI Components**: shadcn/ui
- **State Management**: React Context API (modals)
- **Icons**: Lucide React
- **TypeScript**: Strict mode enabled
- **Build Tool**: Turborepo for monorepo management

#### Code Quality
- **TypeScript Strict Mode**: All type errors resolved
- **Build Check**: Passes `npm run build`
- **Type Check**: Passes `npm run check-types`
- **Code Style**: Consistent with existing patterns
- **No ESLint**: Not configured (can be added)

### 📦 Struktur File UM-PTKIN

```
apps/web/src/
├── app/
│   ├── program-studi/      # Halaman Program Studi
│   │   └── page.tsx
│   ├── form-pendaftaran/   # Halaman Form Pendaftaran
│   │   └── page.tsx
│   ├── signup/             # Halaman Registrasi
│   │   └── page.tsx
│   ├── layout.tsx          # Root layout dengan navigation & footer
│   └── page.tsx            # Beranda
├── components/
│   ├── navigation.tsx      # Navigation bar dengan helpdesk info
│   ├── hero-section.tsx    # Hero dengan countdown
│   ├── info-tabs.tsx       # Tabs untuk konten informasi
│   ├── auth-boxes.tsx      # Register & Login modals
│   ├── footer.tsx          # Footer dengan kontak
│   ├── ptkin-card.tsx     # Card PTKIN
│   ├── ptkin-modal.tsx    # Modal daftar prodi
│   ├── search-bar.tsx      # Search input
│   ├── pagination.tsx      # Pagination controls
│   ├── countdown.tsx       # Countdown timer
│   └── ui/                 # shadcn/ui components
│       ├── button.tsx
│       ├── card.tsx
│       ├── input.tsx
│       ├── label.tsx
│       ├── checkbox.tsx
│       ├── dropdown-menu.tsx
│       ├── sonner.tsx
│       └── skeleton.tsx
├── contexts/
│   └── modal-context.tsx   # Modal state management
├── data/
│   ├── ptkin-data.ts      # Data 58 PTKIN
│   ├── prodi-data.ts       # Mock data program studi
│   └── info-content.ts     # Konten untuk tabs
└── lib/
    └── utils.ts           # Utility functions
```

### 📄 Data Mock

- **PTKIN**: 58 PTKIN lengkap dengan kontak dan informasi
- **Prodi**: Mock data program studi dengan daya tampung
- **Info Content**: Konten HTML untuk setiap tab informasi

### 📊 Project Statistics

- **TypeScript Files**: 44 files
- **Lines of Code**: ~556,777 total
- **Components**: 10+ reusable components
- **Pages**: 4 main pages (Home, Program Studi, Form Sekolah, Signup)
- **Modals**: 2 interactive modals (Register, Login)
- **Icons**: 20+ Lucide React icons

### 🌐 Deployment

#### Environment Variables

Create `.env` files in both `apps/web` and `apps/server`:

**apps/web/.env**
```env
NEXT_PUBLIC_API_URL=http://localhost:3000
```

**apps/server/.env**
```env
DATABASE_URL=postgresql://user:password@localhost:5432/umptkin
CORS_ORIGIN=http://localhost:3001
PORT=3000
```

#### Production Build
```bash
npm run build
npm run dev:server  # Start production server
npm run dev:web     # Start production web
```

### 🤝 Contributing

1. Fork repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

### 📄 License

This project is created for UM-PTKIN 2026 registration system.

---

**Project Status**: 🚧 Under Development

**Last Updated**: January 2026

### 📞 Helpdesk UM-PTKIN

- **Phone**: 081578901030
- **WA**: 081578901030
- **Email**: info@um.ptkin.ac.id
- **Website**: https://um.ptkin.ac.id

### 🔧 API & Database

#### API Server (Express + oRPC)
- **Express.js** backend server
- **oRPC** for type-safe API endpoints
- **CORS** enabled for frontend communication
- **OpenAPI** integration for API documentation
- **Error handling** with logging

#### Database (PostgreSQL + Drizzle)
- **Drizzle ORM** for type-safe database queries
- **PostgreSQL** database
- **Schema migrations** with Drizzle Kit
- **Database Studio** for visual database management

#### Available Database Scripts
```bash
npm run db:push          # Push schema changes to database
npm run db:studio        # Open Drizzle Studio UI
npm run db:generate      # Generate migrations
npm run db:migrate       # Run migrations
npm run db:start         # Start PostgreSQL container
npm run db:stop          # Stop PostgreSQL container
```

### 📝 Form Validation

#### Biodata Validation
- Required fields: Jenis Kelamin, Tempat Lahir, Agama, No. Telp, Provinsi, Kota/Kabupaten, Alamat, Nama Ayah, Nama Ibu, Gaji Ortu
- Email validation (format check)
- Phone number validation (15 chars max)

#### Pendidikan Validation
- Read-only fields populated from NISN system
- Pesantren fields:
  - Required: Pernah/Tidak Pernah selection
  - Conditional: Nama Pesantren & Lama (required if Pernah)

### 🔄 Form State Management

#### Form Data Structure
```typescript
{
  biodata: {
    noKTP, nama, jenisKelamin, tempatLahir, tanggalLahir,
    agama, noTelp, email, provinsi, kotaKabupaten, alamat,
    namaAyah, namaIbu, gajiOrtu, pesertaKhusus
  },
  pendidikan: {
    nisn, npsn, namaSekolah, statusSekolah, provinsi,
    kota, kecamatan, jenisSekolah, akreditasi, alamat,
    pernahPesantren, namaPesantren, lamaPesantren
  }
}
```

### 🐛 Known Issues & Future Improvements

- Add ESLint configuration for code linting
- Implement proper backend API integration (currently using console.log)
- Add form submission to database via oRPC
- Implement file upload for documents (KTP, Ijazah, etc.)
- Add form draft save functionality (localStorage/DB)
- Implement proper authentication system
- Add loading states for form submissions
- Add form validation error messages
- Implement multi-step form wizard for better UX