import { Heart, MessageCircle, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container mx-auto max-w-6xl px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* О проекте */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Heart className="h-6 w-6 text-primary" />
              <span className="font-semibold">Школа приёмного родительства</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Образовательная платформа для кандидатов в приёмные родители 
              и действующих приёмных семей Ленинградской области.
            </p>
          </div>

          {/* Контакты */}
          <div className="space-y-4">
            <h3 className="font-semibold">Контакты</h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+7 (XXX) XXX-XX-XX</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>info@example.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MessageCircle className="h-4 w-4" />
                <span>Telegram: @example</span>
              </div>
            </div>
          </div>

          {/* Полезные ссылки */}
          <div className="space-y-4">
            <h3 className="font-semibold">Полезные ссылки</h3>
            <div className="space-y-2 text-sm">
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Министерство образования
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Усыновление.ру
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Благотворительные фонды
              </a>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 Школа приёмного родительства. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}