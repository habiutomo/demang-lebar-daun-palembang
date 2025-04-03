import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface PositionCardProps {
  position: string;
  name: string;
}

function PositionCard({ position, name }: PositionCardProps) {
  return (
    <Card className="bg-white border border-gray-200">
      <CardContent className="p-4 text-center">
        <h4 className="font-bold text-primary text-sm">{position}</h4>
        <p className="text-gray-700 text-sm">{name}</p>
      </CardContent>
    </Card>
  );
}

export default function StructureSection() {
  const positions = [
    { position: "Sekretaris Lurah", name: "Dewi Lestari, S.AP" },
    { position: "Kasi Pemerintahan", name: "Ahmad Hidayat, S.IP" },
    { position: "Kasi Kesejahteraan", name: "Siti Rahayu, S.Sos" },
    { position: "Kasi Pelayanan", name: "Agus Setiawan, S.E" },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-2">Struktur Organisasi</h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            Struktur organisasi pemerintahan Kelurahan Demang Lebar Daun, Kecamatan Ilir
            Barat I, Kota Palembang.
          </p>
        </div>

        <Card className="bg-light p-8">
          <CardContent className="p-0">
            <div className="mb-8 text-center">
              <Card className="inline-block bg-white border border-gray-200 mb-2">
                <CardContent className="p-4">
                  <h4 className="font-bold text-primary">Lurah</h4>
                  <p className="text-gray-700">Budi Santoso, S.Sos</p>
                </CardContent>
              </Card>
              <div className="w-1 h-8 bg-gray-300 mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
              {positions.map((item, index) => (
                <PositionCard
                  key={index}
                  position={item.position}
                  name={item.name}
                />
              ))}
            </div>

            <div className="text-center">
              <Button className="bg-primary hover:bg-blue-800 text-white text-sm">
                Lihat Struktur Lengkap
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
