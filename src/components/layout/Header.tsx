import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Heart, Users, BookOpen, MessageCircle, Phone, ExternalLink, Video, HelpCircle, FileText } from "lucide-react";
import { Link } from "react-router-dom";

const navigation = [
  { name: "Презентации", href: "/presentations", icon: FileText },
  { name: "Вебинары", href: "/webinars", icon: Video },
  { name: "Статьи", href: "/articles", icon: BookOpen },
  { name: "FAQ", href: "/faq", icon: HelpCircle },
  { name: "Контакты", href: "/contacts", icon: Phone },
  { name: "Полезные ссылки", href: "/links", icon: ExternalLink },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
              <Heart className="h-6 w-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-gradient-primary">
                ШПР "Умиление"
              </span>
              <span className="text-xs text-muted-foreground">
                СПб и Ленинградская область
              </span>
            </div>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1">
          {navigation.map((item) => (
            <Link key={item.name} to={item.href}>
              <Button variant="ghost" size="sm" className="h-9">
                <item.icon className="h-4 w-4 mr-2" />
                {item.name}
              </Button>
            </Link>
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
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <Heart className="h-5 w-5 text-white" />
              </div>
              <span className="font-semibold">ШПР "Умиление"</span>
            </div>
            <nav className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <Link key={item.name} to={item.href}>
                  <Button variant="ghost" className="justify-start h-12 w-full">
                    <item.icon className="h-5 w-5 mr-3" />
                    {item.name}
                  </Button>
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}