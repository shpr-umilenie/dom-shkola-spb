import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Video, FileText, HelpCircle, Phone, ExternalLink } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Презентации",
    description: "Интерактивные обучающие материалы по всем аспектам приёмного родительства",
    badge: "15+ материалов",
    color: "bg-primary-soft text-primary"
  },
  {
    icon: Video,
    title: "Вебинары",
    description: "Записи занятий с психологами, юристами и опытными приёмными родителями",
    badge: "Новые каждый месяц",
    color: "bg-accent-soft text-accent"
  },
  {
    icon: FileText,
    title: "Статьи и блог",
    description: "Практические советы, истории семей и экспертные материалы",
    badge: "Регулярные обновления",
    color: "bg-secondary text-secondary-foreground"
  },
  {
    icon: HelpCircle,
    title: "FAQ",
    description: "Ответы на самые частые вопросы кандидатов и приёмных родителей",
    badge: "50+ вопросов",
    color: "bg-muted text-muted-foreground"
  },
  {
    icon: Phone,
    title: "Контакты специалистов",
    description: "Прямая связь с психологами, юристами и координаторами программ",
    badge: "Быстрый ответ",
    color: "bg-destructive/10 text-destructive"
  },
  {
    icon: ExternalLink,
    title: "Полезные ссылки",
    description: "Официальные ресурсы, документы и дополнительные материалы",
    badge: "Проверенные источники",
    color: "bg-primary-soft text-primary"
  }
];

export function FeaturesSection() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Что вы найдёте на платформе
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Комплексные материалы для подготовки и поддержки приёмных семей
            на всех этапах их пути
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 shadow-card hover:shadow-card-hover transition-smooth">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className={`p-3 rounded-lg ${feature.color}`}>
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {feature.badge}
                  </Badge>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-lg">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}