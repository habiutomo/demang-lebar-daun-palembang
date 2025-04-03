import { BellRing, Calendar, FileText } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface InfoBoxProps {
  icon: React.ReactNode;
  title: string;
  content: string;
  linkText: string;
  href: string;
}

function InfoBox({ icon, title, content, linkText, href }: InfoBoxProps) {
  return (
    <Card className="bg-light border-t-4 border-primary">
      <CardContent className="p-6">
        <div className="flex items-center mb-4">
          <div className="text-primary text-2xl mr-3">{icon}</div>
          <h3 className="font-bold text-xl">{title}</h3>
        </div>
        <p className="mb-4">{content}</p>
        <a
          href={href}
          className="text-primary hover:text-accent font-medium inline-flex items-center"
        >
          {linkText}
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
      </CardContent>
    </Card>
  );
}

export default function InfoBoxes() {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <InfoBox
            icon={<BellRing className="h-6 w-6" />}
            title="Pengumuman"
            content="Jadwal pelayanan administrasi Kelurahan Demang Lebar Daun: Senin-Jumat, 08.00-16.00 WIB."
            linkText="Pengumuman Lainnya"
            href="#berita"
          />
          <InfoBox
            icon={<Calendar className="h-6 w-6" />}
            title="Agenda"
            content="Posyandu Balita setiap tanggal 10 dan Posyandu Lansia setiap tanggal 15 di Balai Kelurahan."
            linkText="Lihat Agenda"
            href="#berita"
          />
          <InfoBox
            icon={<FileText className="h-6 w-6" />}
            title="Dokumen"
            content="Unduh formulir pelayanan administrasi untuk mempercepat proses pelayanan di kelurahan."
            linkText="Download Formulir"
            href="#"
          />
        </div>
      </div>
    </section>
  );
}
