import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, BookOpen, Users, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const Presentations = () => {
  const presentations = [
    {
      id: 1,
      title: "Дорога к приемному родительству",
      description: "Пошаговый путеводитель по процессу усыновления от ШПР до создания семьи",
      duration: "15-20 минут",
      slides: 10,
      path: "/presentations/adoptive-path"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto max-w-6xl px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Презентации
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Интерактивные презентации для кандидатов в приёмные родители и действующих семей
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {presentations.map((presentation) => (
            <Card key={presentation.id} className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <BookOpen className="h-8 w-8 text-primary" />
                  <span className="text-sm text-muted-foreground bg-muted px-2 py-1 rounded">
                    {presentation.slides} слайдов
                  </span>
                </div>
                <CardTitle className="group-hover:text-primary transition-colors">
                  {presentation.title}
                </CardTitle>
                <CardDescription>
                  {presentation.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 mr-1" />
                    {presentation.duration}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Users className="h-4 w-4 mr-1" />
                    Все уровни
                  </div>
                </div>
                <Link to={presentation.path}>
                  <Button className="w-full group">
                    Открыть презентацию
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-muted/50 rounded-lg p-8">
            <h2 className="text-2xl font-semibold mb-4">Скоро будут добавлены новые презентации</h2>
            <p className="text-muted-foreground mb-6">
              Мы работаем над созданием новых образовательных материалов для приёмных семей
            </p>
            <Link to="/contacts">
              <Button variant="outline">
                Предложить тему
              </Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Presentations;