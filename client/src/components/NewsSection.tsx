import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar } from "lucide-react";
import { formatDate } from "@/lib/utils";

interface NewsCardProps {
  date: Date;
  title: string;
  content: string;
  imageAlt: string;
}

function NewsCard({ date, title, content, imageAlt }: NewsCardProps) {
  return (
    <Card className="bg-light overflow-hidden shadow-md">
      <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
        <span className="text-gray-500">{imageAlt}</span>
      </div>
      <CardContent className="p-6">
        <div className="flex items-center mb-3 text-sm text-gray-500">
          <Calendar className="mr-2 h-4 w-4" />
          <span>{formatDate(date)}</span>
        </div>
        <h3 className="font-bold text-xl text-primary mb-3">{title}</h3>
        <p className="text-gray-600 mb-4">{content}</p>
        <a
          href="#"
          className="text-primary hover:text-accent font-medium inline-flex items-center"
        >
          Baca Selengkapnya
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

export default function NewsSection() {
  const news = [
    {
      date: new Date(2023, 3, 20),
      title: "Kegiatan Posyandu Balita Bulan April",
      content: "Posyandu Balita telah dilaksanakan pada tanggal 10 April 2023 di Balai Kelurahan dengan diikuti oleh 45 balita.",
      imageAlt: "Kegiatan Posyandu Balita",
    },
    {
      date: new Date(2023, 3, 15),
      title: "Jadwal Vaksinasi Covid-19 Booster",
      content: "Vaksinasi Covid-19 dosis booster akan dilaksanakan pada tanggal 25-26 April 2023 di Puskesmas Demang Lebar Daun.",
      imageAlt: "Vaksinasi Covid-19",
    },
    {
      date: new Date(2023, 3, 12),
      title: "Perbaikan Jalan di RT 05",
      content: "Perbaikan jalan di wilayah RT 05 telah selesai dilaksanakan. Warga diharapkan dapat menjaga kebersihan jalan.",
      imageAlt: "Perbaikan Jalan",
    },
  ];

  return (
    <section id="berita" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-2">Berita & Pengumuman</h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            Informasi terbaru seputar kegiatan dan pengumuman penting di Kelurahan Demang
            Lebar Daun.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {news.map((item, index) => (
            <NewsCard
              key={index}
              date={item.date}
              title={item.title}
              content={item.content}
              imageAlt={item.imageAlt}
            />
          ))}
        </div>

        <div className="text-center">
          <Button className="bg-primary hover:bg-blue-800 text-white">
            Lihat Semua Berita
          </Button>
        </div>
      </div>
    </section>
  );
}
