import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function ProfileSection() {
  return (
    <section id="profil" className="py-16 bg-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-2">Profil Kelurahan</h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-center">
          <div className="lg:w-1/2">
            <div className="rounded-lg shadow-lg w-full h-[400px] bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500">Kantor Kelurahan Demang Lebar Daun</span>
            </div>
          </div>

          <div className="lg:w-1/2">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Tentang Kelurahan Demang Lebar Daun
            </h3>
            <p className="mb-4 text-gray-700">
              Kelurahan Demang Lebar Daun merupakan salah satu kelurahan yang berada di
              Kecamatan Ilir Barat I, Kota Palembang, Provinsi Sumatera Selatan. Kelurahan
              ini memiliki luas wilayah sekitar 300 hektar dengan jumlah penduduk mencapai
              15.000 jiwa.
            </p>
            <p className="mb-6 text-gray-700">
              Nama "Demang Lebar Daun" diambil dari nama salah satu tokoh sejarah Kerajaan
              Sriwijaya yang memiliki peran penting dalam perkembangan sejarah Palembang.
              Kelurahan ini memiliki posisi strategis karena berdekatan dengan pusat kota
              dan fasilitas umum penting di Kota Palembang.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <Card className="bg-white">
                <CardContent className="p-4">
                  <h4 className="font-bold text-primary mb-2">Visi</h4>
                  <p className="text-gray-700">
                    Mewujudkan Kelurahan Demang Lebar Daun yang maju, sejahtera, dan
                    berbudaya.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white">
                <CardContent className="p-4">
                  <h4 className="font-bold text-primary mb-2">Misi</h4>
                  <p className="text-gray-700">
                    Meningkatkan kualitas pelayanan publik dan pemberdayaan masyarakat.
                  </p>
                </CardContent>
              </Card>
            </div>

            <Button className="bg-primary hover:bg-blue-800 text-white">
              Profil Lengkap
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
