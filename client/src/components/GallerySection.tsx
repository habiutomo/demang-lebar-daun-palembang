import { Button } from "@/components/ui/button";

interface GalleryItemProps {
  alt: string;
}

function GalleryItem({ alt }: GalleryItemProps) {
  return (
    <div className="gallery-item overflow-hidden rounded-lg shadow-md cursor-pointer">
      <div className="w-full h-48 md:h-40 lg:h-48 bg-gray-200 flex items-center justify-center transition duration-300 hover:scale-110">
        <span className="text-gray-500">{alt}</span>
      </div>
    </div>
  );
}

export default function GallerySection() {
  const galleryItems = [
    { alt: "Kegiatan Gotong Royong" },
    { alt: "Peringatan HUT RI" },
    { alt: "Rapat Koordinasi" },
    { alt: "Kegiatan PKK" },
    { alt: "Vaksinasi Covid-19" },
    { alt: "Pelatihan UMKM" },
    { alt: "Senam Lansia" },
    { alt: "Musyawarah Warga" },
  ];

  return (
    <section id="galeri" className="py-16 bg-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-2">Galeri Kegiatan</h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            Dokumentasi berbagai kegiatan yang telah dilaksanakan di Kelurahan Demang
            Lebar Daun.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryItems.map((item, index) => (
            <GalleryItem key={index} alt={item.alt} />
          ))}
        </div>

        <div className="text-center mt-10">
          <Button className="bg-primary hover:bg-blue-800 text-white">
            Lihat Semua Foto
          </Button>
        </div>
      </div>
    </section>
  );
}
