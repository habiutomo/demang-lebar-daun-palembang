import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactMessageSchema } from "@shared/schema";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

interface ContactFormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactSection() {
  const { toast } = useToast();
  
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(insertContactMessageSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const submitMutation = useMutation({
    mutationFn: (values: ContactFormValues) => {
      return apiRequest("POST", "/api/contact", values);
    },
    onSuccess: () => {
      toast({
        title: "Pesan Terkirim",
        description: "Terima kasih telah menghubungi kami!",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Gagal Mengirim Pesan",
        description: `Terjadi kesalahan: ${error.message}`,
        variant: "destructive",
      });
    },
  });

  function onSubmit(values: ContactFormValues) {
    submitMutation.mutate(values);
  }

  return (
    <section id="kontak" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-2">Hubungi Kami</h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            Silakan menghubungi kami jika Anda memiliki pertanyaan atau membutuhkan
            informasi lebih lanjut.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/2">
            <Card className="bg-light h-full">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-6">Informasi Kontak</h3>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-primary rounded-full w-10 h-10 flex items-center justify-center text-white flex-shrink-0 mt-1">
                      <MapPin size={18} />
                    </div>
                    <div className="ml-4">
                      <h4 className="font-bold text-primary">Alamat</h4>
                      <p className="text-gray-600">
                        Jl. Demang Lebar Daun No. 123, Kecamatan Ilir Barat I, Kota
                        Palembang, Sumatera Selatan 30137
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-primary rounded-full w-10 h-10 flex items-center justify-center text-white flex-shrink-0 mt-1">
                      <Phone size={18} />
                    </div>
                    <div className="ml-4">
                      <h4 className="font-bold text-primary">Telepon</h4>
                      <p className="text-gray-600">(0711) 123456</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-primary rounded-full w-10 h-10 flex items-center justify-center text-white flex-shrink-0 mt-1">
                      <Mail size={18} />
                    </div>
                    <div className="ml-4">
                      <h4 className="font-bold text-primary">Email</h4>
                      <p className="text-gray-600">info@kelurahandemanglebardalun.go.id</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-primary rounded-full w-10 h-10 flex items-center justify-center text-white flex-shrink-0 mt-1">
                      <Clock size={18} />
                    </div>
                    <div className="ml-4">
                      <h4 className="font-bold text-primary">Jam Pelayanan</h4>
                      <p className="text-gray-600">Senin - Jumat: 08.00 - 16.00 WIB</p>
                      <p className="text-gray-600">Sabtu - Minggu: Tutup</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="font-bold text-primary mb-3">Media Sosial</h4>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="bg-primary hover:bg-blue-700 text-white w-10 h-10 rounded-full flex items-center justify-center transition duration-300"
                    >
                      <Facebook size={18} />
                    </a>
                    <a
                      href="#"
                      className="bg-primary hover:bg-blue-700 text-white w-10 h-10 rounded-full flex items-center justify-center transition duration-300"
                    >
                      <Twitter size={18} />
                    </a>
                    <a
                      href="#"
                      className="bg-primary hover:bg-blue-700 text-white w-10 h-10 rounded-full flex items-center justify-center transition duration-300"
                    >
                      <Instagram size={18} />
                    </a>
                    <a
                      href="#"
                      className="bg-primary hover:bg-blue-700 text-white w-10 h-10 rounded-full flex items-center justify-center transition duration-300"
                    >
                      <Youtube size={18} />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="lg:w-1/2">
            <Card className="bg-light">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-6">Kirim Pesan</h3>

                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Nama Lengkap</FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                disabled={submitMutation.isPending}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                type="email"
                                disabled={submitMutation.isPending}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Subjek</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              disabled={submitMutation.isPending}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Pesan</FormLabel>
                          <FormControl>
                            <Textarea
                              {...field}
                              rows={5}
                              disabled={submitMutation.isPending}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      className="w-full bg-primary hover:bg-blue-800 text-white"
                      disabled={submitMutation.isPending}
                    >
                      {submitMutation.isPending ? "Mengirim..." : "Kirim Pesan"}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-10 bg-light p-4 rounded-lg shadow-md">
          <h3 className="font-bold text-xl text-primary mb-4">Lokasi Kami</h3>
          <div className="h-96 bg-gray-300 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-10 w-10 mx-auto mb-2 text-gray-500" />
              <p className="text-gray-500">Peta Kelurahan Demang Lebar Daun</p>
              <p className="text-sm text-gray-400 mt-2">
                Jl. Demang Lebar Daun No. 123, Kecamatan Ilir Barat I, Kota Palembang
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
