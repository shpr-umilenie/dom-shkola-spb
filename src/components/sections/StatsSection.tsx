import { Card } from "@/components/ui/card";

const stats = [
  {
    number: "500+",
    label: "Семей прошли обучение",
    description: "Успешно завершили программу подготовки"
  },
  {
    number: "15",
    label: "Обучающих модулей",
    description: "Презентации, вебинары и практические материалы"
  },
  {
    number: "50+",
    label: "Часов контента",
    description: "Видеоматериалы и интерактивные занятия"
  },
  {
    number: "24/7",
    label: "Доступ к материалам",
    description: "Учитесь в удобное для вас время"
  }
];

export function StatsSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Наши результаты
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Цифры, которые говорят о качестве нашей образовательной платформы
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="p-6 text-center shadow-card hover:shadow-card-hover transition-smooth">
              <div className="space-y-2">
                <div className="text-3xl md:text-4xl font-bold text-gradient-primary">
                  {stat.number}
                </div>
                <div className="font-semibold text-lg">
                  {stat.label}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.description}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}