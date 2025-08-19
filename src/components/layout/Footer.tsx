import { Heart, MessageCircle, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container mx-auto max-w-6xl px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* О проекте */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <Heart className="h-5 w-5 text-white" />
              </div>
              <span className="font-semibold">ШПР "Умиление"</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Образовательный ресурс для кандидатов в приёмные родители 
              и действующих приёмных семей Санкт-Петербурга и Ленинградской области.
            </p>
          </div>

          {/* Контакты */}
          <div className="space-y-4">
            <h3 className="font-semibold">Контакты</h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <MessageCircle className="h-4 w-4" />
                <a href="https://t.me/your_channel" className="hover:text-primary transition-colors">
                  Сообщество в Telegram
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <span className="h-4 w-4 text-primary font-bold">VK</span>
                <a href="https://vk.com/centr_umilenie" className="hover:text-primary transition-colors">
                  Центр "Умиление" ВКонтакте
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <span className="h-4 w-4 text-accent font-bold">🌐</span>
                <a href="http://shpr-umilenie.ru/" className="hover:text-primary transition-colors">
                  shpr-umilenie.ru
                </a>
              </div>
            </div>
          </div>

          {/* Полезные ссылки */}
          <div className="space-y-4">
            <h3 className="font-semibold">Полезные ссылки</h3>
            <div className="space-y-2 text-sm">
              <a href="https://www.gov.spb.ru/" className="block text-muted-foreground hover:text-primary transition-colors">
                Правительство СПб
              </a>
              <a href="https://usynovite.ru/" className="block text-muted-foreground hover:text-primary transition-colors">
                Усыновите.ру
              </a>
              <a href="https://changeonelife.ru/" className="block text-muted-foreground hover:text-primary transition-colors">
                Измени одну жизнь
              </a>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 Образовательный ресурс ШПР "Умиление". Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}