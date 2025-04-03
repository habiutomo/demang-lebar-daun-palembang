import { Button } from "@/components/ui/button";
import { scrollToElement } from "@/lib/utils";

export default function Hero() {
  return (
    <section id="beranda" className="relative bg-primary text-white">
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Selamat Datang di Website Resmi
          </h2>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
            Kelurahan Demang Lebar Daun
          </h3>
          <p className="text-lg mb-8">
            Melayani masyarakat dengan profesional, transparan, dan akuntabel
            demi kesejahteraan warga Kelurahan Demang Lebar Daun.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              className="bg-accent hover:bg-red-700 text-white font-bold py-6 px-8"
              onClick={() => scrollToElement("layanan")}
            >
              Lihat Layanan
            </Button>
            <Button 
              variant="outline" 
              className="bg-white hover:bg-gray-100 text-primary font-bold py-6 px-8"
              onClick={() => scrollToElement("kontak")}
            >
              Hubungi Kami
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
