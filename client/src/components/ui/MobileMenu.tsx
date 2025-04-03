import { cn } from "@/lib/utils";

interface MobileMenuProps {
  isOpen: boolean;
  links: { href: string; label: string }[];
  onLinkClick: (href: string) => void;
}

export default function MobileMenu({ isOpen, links, onLinkClick }: MobileMenuProps) {
  return (
    <nav
      className={cn(
        "md:hidden pb-4 overflow-hidden transition-all duration-300 ease-in-out",
        isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
      )}
    >
      <div className="flex flex-col space-y-3">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-primary hover:text-accent font-medium transition duration-300 py-2"
            onClick={(e) => {
              e.preventDefault();
              onLinkClick(link.href);
            }}
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
