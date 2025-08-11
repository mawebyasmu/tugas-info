import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

interface NavigationProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export const Navigation = ({ activeSection, onSectionChange }: NavigationProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home", emoji: "🏠" },
    { id: "informatika", label: "Informatika & Kemampuan Umum", emoji: "💻" },
    { id: "berpikir", label: "Berpikir Komputasional", emoji: "🧠" },
    { id: "kuis", label: "Kuis Total", emoji: "🏆" },
  ];

  const handleItemClick = (sectionId: string) => {
    onSectionChange(sectionId);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-center py-4 space-x-2">
          {navItems.map((item) => (
            <Button
              key={item.id}
              onClick={() => handleItemClick(item.id)}
              variant={activeSection === item.id ? "default" : "ghost"}
              className={`transition-all duration-300 ${
                activeSection === item.id
                  ? "btn-hero shadow-lg"
                  : "hover:bg-muted/50"
              }`}
            >
              <span className="mr-2">{item.emoji}</span>
              {item.label}
            </Button>
          ))}
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center justify-between py-4">
          <h2 className="text-lg font-bold text-gradient">Informatika Kelas X</h2>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4 space-y-2 animate-fade-in">
            {navItems.map((item) => (
              <Button
                key={item.id}
                onClick={() => handleItemClick(item.id)}
                variant={activeSection === item.id ? "default" : "ghost"}
                className={`w-full justify-start transition-all duration-300 ${
                  activeSection === item.id
                    ? "btn-hero"
                    : "hover:bg-muted/50"
                }`}
              >
                <span className="mr-2">{item.emoji}</span>
                {item.label}
              </Button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};