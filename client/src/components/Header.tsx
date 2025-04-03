import { useState } from "react";
import { Link } from "wouter";
import { cn } from "@/lib/utils";
import { MenuIcon, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import MobileMenu from "./ui/MobileMenu";

const navLinks = [
  { href: "#beranda", label: "Beranda" },
  { href: "#profil", label: "Profil" },
  { href: "#layanan", label: "Layanan" },
  { href: "#berita", label: "Berita" },
  { href: "#galeri", label: "Galeri" },
  { href: "#kontak", label: "Kontak" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-3">
          {/* Logo */}
          <div className="flex items-center">
            <div className="h-12 w-12 mr-3 bg-primary rounded-full flex items-center justify-center text-white">
              <span className="text-xl font-bold">KD</span>
            </div>
            <div>
              <h1 className="text-primary font-bold text-xl md:text-2xl">Kelurahan Demang Lebar Daun</h1>
              <p className="text-secondary text-xs md:text-sm">Kota Palembang, Sumatera Selatan</p>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleMobileMenu} 
            className="md:hidden"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-primary" />
            ) : (
              <MenuIcon className="h-6 w-6 text-primary" />
            )}
          </Button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-primary hover:text-accent font-medium transition duration-300"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href.substring(1));
                }}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Mobile Navigation */}
        <MobileMenu 
          isOpen={mobileMenuOpen} 
          links={navLinks} 
          onLinkClick={(href) => scrollToSection(href.substring(1))} 
        />
      </div>
    </header>
  );
}
