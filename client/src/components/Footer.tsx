import { Link } from "wouter";
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Kelurahan Demang Lebar Daun</h3>
            <p className="mb-4">
              Melayani masyarakat dengan profesional, transparan, dan akuntabel demi
              kesejahteraan warga Kelurahan Demang Lebar Daun.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-white hover:text-accent transition duration-300"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="text-white hover:text-accent transition duration-300"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="text-white hover:text-accent transition duration-300"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="text-white hover:text-accent transition duration-300"
                aria-label="Youtube"
              >
                <Youtube size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Link Cepat</h3>
            <ul className="space-y-2">
              <li>
                <a href="#beranda" className="hover:text-accent transition duration-300">
                  Beranda
                </a>
              </li>
              <li>
                <a href="#profil" className="hover:text-accent transition duration-300">
                  Profil
                </a>
              </li>
              <li>
                <a href="#layanan" className="hover:text-accent transition duration-300">
                  Layanan
                </a>
              </li>
              <li>
                <a href="#berita" className="hover:text-accent transition duration-300">
                  Berita
                </a>
              </li>
              <li>
                <a href="#galeri" className="hover:text-accent transition duration-300">
                  Galeri
                </a>
              </li>
              <li>
                <a href="#kontak" className="hover:text-accent transition duration-300">
                  Kontak
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Layanan</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-accent transition duration-300">
                  Pembuatan KTP
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition duration-300">
                  Surat Domisili
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition duration-300">
                  Kartu Keluarga
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition duration-300">
                  Akte Kelahiran
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition duration-300">
                  Izin Usaha
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition duration-300">
                  Surat Keterangan
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Kontak</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <MapPin className="mt-1 mr-3 h-4 w-4" />
                <span>
                  Jl. Demang Lebar Daun No. 123, Kecamatan Ilir Barat I, Kota Palembang,
                  Sumatera Selatan 30137
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 h-4 w-4" />
                <span>(0711) 123456</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 h-4 w-4" />
                <span>info@kelurahandemanglebardalun.go.id</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-gray-800 py-4">
        <div className="container mx-auto px-4 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Kelurahan Demang Lebar Daun. Hak Cipta Dilindungi.</p>
        </div>
      </div>
    </footer>
  );
}
