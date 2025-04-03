import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { 
  UserCheck, 
  Home, 
  FileSignature, 
  Users, 
  Baby, 
  Store
} from "lucide-react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  requirements: string[];
}

function ServiceCard({ icon, title, description, requirements }: ServiceCardProps) {
  return (
    <Card className="bg-white overflow-hidden h-full flex flex-col">
      <CardContent className="p-6 flex-1">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white">
            {icon}
          </div>
          <h3 className="font-bold text-xl text-primary ml-4">{title}</h3>
        </div>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="mt-2">
          <h4 className="font-bold text-sm text-primary mb-2">Persyaratan:</h4>
          <ul className="text-gray-600 text-sm list-disc pl-5 space-y-1">
            {requirements.map((req, index) => (
              <li key={index}>{req}</li>
            ))}
          </ul>
        </div>
      </CardContent>
      <CardFooter className="bg-gray-50 px-6 py-3 border-t">
        <a
          href="#"
          className="text-primary hover:text-accent text-sm font-medium flex items-center"
        >
          Selengkapnya
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </a>
      </CardFooter>
    </Card>
  );
}

export default function ServicesSection() {
  const services = [
    {
      icon: <UserCheck size={20} />,
      title: "Pembuatan KTP",
      description: "Layanan pembuatan Kartu Tanda Penduduk (KTP) bagi warga yang telah memenuhi syarat.",
      requirements: [
        "Surat Pengantar dari RT/RW",
        "Kartu Keluarga",
        "Usia minimal 17 tahun",
      ],
    },
    {
      icon: <Home size={20} />,
      title: "Surat Domisili",
      description: "Layanan pembuatan surat keterangan domisili sebagai bukti tempat tinggal resmi.",
      requirements: [
        "Surat Pengantar dari RT/RW",
        "Fotokopi KTP",
        "Fotokopi Kartu Keluarga",
      ],
    },
    {
      icon: <FileSignature size={20} />,
      title: "Surat Keterangan",
      description: "Layanan pembuatan berbagai surat keterangan untuk keperluan administrasi warga.",
      requirements: [
        "Surat Keterangan Usaha",
        "Surat Keterangan Tidak Mampu",
        "Surat Keterangan Kelahiran",
      ],
    },
    {
      icon: <Users size={20} />,
      title: "Kartu Keluarga",
      description: "Layanan pembuatan dan perubahan Kartu Keluarga (KK) untuk warga kelurahan.",
      requirements: [
        "Surat Pengantar dari RT/RW",
        "Fotokopi KK lama (jika perubahan)",
        "Surat Nikah (untuk KK baru)",
      ],
    },
    {
      icon: <Baby size={20} />,
      title: "Akte Kelahiran",
      description: "Layanan pengurusan akte kelahiran untuk bayi yang baru lahir.",
      requirements: [
        "Surat Keterangan Lahir",
        "Fotokopi KK dan KTP Orang Tua",
        "Fotokopi Buku Nikah",
      ],
    },
    {
      icon: <Store size={20} />,
      title: "Izin Usaha",
      description: "Layanan pembuatan surat izin usaha mikro dan kecil untuk warga kelurahan.",
      requirements: [
        "Surat Pengantar dari RT/RW",
        "Fotokopi KTP",
        "Pas foto 3x4 (2 lembar)",
      ],
    },
  ];

  return (
    <section id="layanan" className="py-16 bg-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-2">Layanan Publik</h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            Berikut adalah berbagai layanan publik yang tersedia di Kelurahan Demang Lebar
            Daun untuk memenuhi kebutuhan administratif warga.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              requirements={service.requirements}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
