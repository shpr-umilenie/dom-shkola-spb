import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BookOpen, Users, MessageCircle, ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative py-16 md:py-24">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-soft opacity-50" />
      
      <div className="container mx-auto max-w-6xl px-4 relative">
        <div className="text-center space-y-6 mb-12">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="text-gradient-primary">Образовательный ресурс</span>
            <br />
            <span className="text-foreground">ШПР "Умиление"</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Подготовка и поддержка кандидатов в приёмные родители 
            и действующих приёмных семей Санкт-Петербурга и Ленинградской области
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              Изучить материалы
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8">
              О центре "Умиление"
            </Button>
          </div>
        </div>

        {/* Quick access cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-6 shadow-card hover:shadow-card-hover transition-smooth cursor-pointer group">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-primary-soft rounded-lg group-hover:bg-primary group-hover:text-white transition-smooth">
                <BookOpen className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold">Презентации</h3>
                <p className="text-sm text-muted-foreground">
                  Обучающие материалы и руководства
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6 shadow-card hover:shadow-card-hover transition-smooth cursor-pointer group">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-accent-soft rounded-lg group-hover:bg-accent group-hover:text-white transition-smooth">
                <Users className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold">Вебинары</h3>
                <p className="text-sm text-muted-foreground">
                  Записи онлайн-занятий с экспертами
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6 shadow-card hover:shadow-card-hover transition-smooth cursor-pointer group">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-secondary rounded-lg group-hover:bg-muted-foreground group-hover:text-white transition-smooth">
                <MessageCircle className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold">Поддержка</h3>
                <p className="text-sm text-muted-foreground">
                  FAQ и контакты специалистов
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}