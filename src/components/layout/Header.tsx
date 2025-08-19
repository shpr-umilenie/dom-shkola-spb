import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Heart, Users, BookOpen, MessageCircle, Phone, ExternalLink } from "lucide-react";

const navigation = [
  { name: "Презентации", href: "/presentations", icon: BookOpen },
  { name: "Вебинары", href: "/webinars", icon: Users },
  { name: "Статьи", href: "/articles", icon: BookOpen },
  { name: "FAQ", href: "/faq", icon: MessageCircle },
  { name: "Контакты", href: "/contacts", icon: Phone },
  { name: "Полезные ссылки", href: "/links", icon: ExternalLink },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Heart className="h-8 w-8 text-primary" />
          <div className="flex flex-col">
            <span className="text-xl font-bold text-gradient-primary">
              Школа приёмного родительства
            </span>
            <span className="text-xs text-muted-foreground">
              Ленинградская область
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1">
          {navigation.map((item) => (
            <Button key={item.name} variant="ghost" size="sm" className="h-9">
              <item.icon className="h-4 w-4 mr-2" />
              {item.name}
            </Button>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="sm">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-80">
            <div className="flex items-center space-x-2 mb-6">
              <Heart className="h-6 w-6 text-primary" />
              <span className="font-semibold">Школа приёмного родительства</span>
            </div>
            <nav className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <Button key={item.name} variant="ghost" className="justify-start h-12">
                  <item.icon className="h-5 w-5 mr-3" />
                  {item.name}
                </Button>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}