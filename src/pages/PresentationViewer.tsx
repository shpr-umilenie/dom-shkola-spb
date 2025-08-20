import { useState, useEffect } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Home, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const PresentationViewer = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = 10;

  const slides = [
    {
      id: 1,
      title: "Дорога к приемному родительству",
      content: (
        <div className="flowchart-container max-w-4xl mx-auto">
          <div className="space-y-6">
            {[
              { icon: "📚", title: "ШПР", subtitle: "Школа приемных родителей" },
              { icon: "🏢", title: "Опека по месту жительства" },
              { icon: "📋", title: "Комитет по социальной политике", subtitle: "Получение номера кандидата в региональном государственном банке данных" },
              { icon: "🏛️", title: "Районные опеки" },
              { icon: "👶", title: "Посещение ребенка" },
              { icon: "⚖️", title: "Суд", subtitle: "Усыновление" },
              { icon: "🏠", title: "Семья", subtitle: "Забираете ребенка домой" },
              { icon: "📝", title: "Периодические встречи/отчеты", subtitle: "Опека/попечительство/семья" }
            ].map((step, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="bg-card border rounded-lg p-6 w-full max-w-md text-center shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-4xl mb-3">{step.icon}</div>
                  <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                  {step.subtitle && (
                    <p className="text-sm text-muted-foreground">{step.subtitle}</p>
                  )}
                </div>
                {index < 7 && (
                  <ChevronRight className="h-6 w-6 text-muted-foreground my-2 rotate-90" />
                )}
              </div>
            ))
            }
          </div>
        </div>
      )
    },
    {
      id: 2,
      title: "Опека по месту жительства",
      content: (
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="bg-card border rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-4 text-primary">С чем идти в Опеку?</h3>
              <div className="space-y-3">
                {[
                  { icon: "👫", title: "Оба супруга", desc: "Приходят вместе на прием" },
                  { icon: "📜", title: "Заключение ШПР", desc: "Свидетельство об окончании школы приемных родителей" },
                  { icon: "🆔", title: "Паспорт, СНИЛС", desc: "Документы, удостоверяющие личность" },
                  { icon: "💍", title: "Свидетельство о браке", desc: "Документ о регистрации брака" }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <span className="text-xl">{item.icon}</span>
                    <div>
                      <div className="font-medium">{item.title}</div>
                      <div className="text-sm text-muted-foreground">{item.desc}</div>
                    </div>
                  </div>
                ))
                }
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-card border rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-4 text-primary">Опека выдает перечень документов</h3>
              <div className="space-y-3">
                {[
                  { icon: "🏥", title: "Медицинская комиссия", desc: "Заключение от терапевта" },
                  { icon: "📄", title: "Форма 7 и 9", desc: "Справки о жилом помещении" },
                  { icon: "🚔", title: "Справка об отсутствии судимости", desc: "Через Госуслуги или МВД" },
                  { icon: "💼", title: "Справка с работы", desc: "Из отдела кадров" },
                  { icon: "📖", title: "Автобиография", desc: "Личная биография" },
                  { icon: "💰", title: "2-НДФЛ за 12 месяцев", desc: "Подтверждение доходов" }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <span className="text-xl">{item.icon}</span>
                    <div>
                      <div className="font-medium">{item.title}</div>
                      <div className="text-sm text-muted-foreground">{item.desc}</div>
                    </div>
                  </div>
                ))
                }
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 3,
      title: "Комитет по социальной политике",
      content: (
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 text-center">
            <h3 className="font-semibold text-lg mb-2">Адрес</h3>
            <p className="text-muted-foreground">
              "Невская ратуша" Санкт-Петербург, улица Новгородская 20А<br/>
              тел. +7(812)576-26-33(31)
            </p>
          </div>
          
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="bg-card border rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-4 text-primary">Что приносят</h3>
              <div className="space-y-3">
                {[
                  { icon: "👫", title: "Оба супруга", desc: "Приходят вместе на прием" },
                  { icon: "📋", title: "Заключение опеки", desc: "Документ из органов опеки" },
                  { icon: "📜", title: "Заключение ШПР", desc: "Свидетельство об окончании школы" },
                  { icon: "🆔", title: "Документы", desc: "Паспорт, СНИЛС, свидетельство о браке" },
                  { icon: "📂", title: "Пакет документов", desc: "Все собранные ранее документы" }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <span className="text-xl">{item.icon}</span>
                    <div>
                      <div className="font-medium">{item.title}</div>
                      <div className="text-sm text-muted-foreground">{item.desc}</div>
                    </div>
                  </div>
                ))
                }
              </div>
            </div>
            
            <div className="bg-card border rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-4 text-primary">Процедуры</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="text-xl">✍️</span>
                  <div>
                    <div className="font-medium">Заявление о постановке на учёт</div>
                    <div className="text-sm text-muted-foreground">Заполняется на месте</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-xl">🔢</span>
                  <div>
                    <div className="font-medium">Присвоение номера кандидата</div>
                    <div className="text-sm text-muted-foreground">В региональном государственном банке данных</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 4,
      title: "Районные опеки",
      content: (
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="bg-card border rounded-lg p-6">
            <h3 className="font-semibold text-lg mb-4 text-primary">
              Основные моменты
            </h3>
            <div className="space-y-3">
              <p className="text-muted-foreground">
                Встаете на учет непосредственно в выбранных районных опеках.
              </p>
              <p className="text-sm text-muted-foreground italic">
                В опеках, где расположены Дома Ребенка (Дом малютки) при поиске
                младенца / малыша до 4х лет.
              </p>
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <div className="bg-card border rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-4 text-primary">
                Документы
              </h3>
              <div className="space-y-3">
                {[
                  {
                    icon: "📂",
                    title: "Пакет документов + копии",
                    desc: "Все документы с копиями",
                  },
                  {
                    icon: "📃",
                    title: "Доверенность на супруга / супругу",
                    desc: "Нотариальная доверенность",
                  },
                  {
                    icon: "✍️",
                    title: "Заявление",
                    desc: "Заполняется на месте",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <span className="text-xl">{item.icon}</span>
                    <div>
                      <div className="font-medium">{item.title}</div>
                      <div className="text-sm text-muted-foreground">
                        {item.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-card border rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-4 text-primary">
                Важные советы
              </h3>
              <div className="space-y-3">
                {[
                  {
                    icon: "🚫",
                    title: "Не ограничивайте себя в выборе",
                    desc: "Цвет глаз, волос, пол",
                  },
                  {
                    icon: "📞",
                    title: "Эпизодически звоните",
                    desc: "Узнавайте появились ли дети",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <span className="text-xl">{item.icon}</span>
                    <div>
                      <div className="font-medium">{item.title}</div>
                      <div className="text-sm text-muted-foreground">
                        {item.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 5,
      title: "Вам позвонили!",
      content: (
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="bg-card border rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-4 text-primary">
                Основные процедуры
              </h3>
              <div className="space-y-3">
                {[
                  {
                    icon: "📋",
                    title: "Направление на посещение",
                    desc: "Опека выдает направление (10 рабочих дней на принятие решения)",
                  },
                  {
                    icon: "👶",
                    title: "Знакомство с ребенком",
                    desc: "Возможность ознакомится с медицинской картой и личным делом",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <span className="text-xl">{item.icon}</span>
                    <div>
                      <div className="font-medium">{item.title}</div>
                      <div className="text-sm text-muted-foreground">
                        {item.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-card border rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-4 text-primary">
                Ваши права и возможности
              </h3>
              <div className="space-y-3">
                {[
                  {
                    icon: "🏥",
                    title: "Дополнительные медицинские обследования",
                    desc: "Вы имеете право на дополнительные медицинские обследования ребенка",
                  },
                  {
                    icon: "🚶",
                    title: "Прогулки и визиты",
                    desc: "Можно погулять, сходить к вам в гости. По согласию с сотрудниками Детского дома",
                  },
                  {
                    icon: "🎁",
                    title: "Расходные материалы в дар",
                    desc: "Привезите в Детский дом расходные материалы в дар (памперсы, пеленки и т.д.)",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <span className="text-xl">{item.icon}</span>
                    <div>
                      <div className="font-medium">{item.title}</div>
                      <div className="text-sm text-muted-foreground">
                        {item.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 6,
      title: "Вы согласны взять ребенка",
      content: (
        <div className="max-w-4xl mx-auto space-y-8">
          <p className="text-xl font-semibold text-center">Возможные варианты</p>
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="bg-card border rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-4 text-primary">Усыновление</h3>
              <div className="space-y-3">
                {[
                  {
                    icon: "🏛️",
                    title: "Опека по месту ДД",
                    desc: "Обращение в органы опеки по месту детского дома",
                  },
                  {
                    icon: "📄",
                    title: "Заявление в суд",
                    desc: "Подача заявления в судебные органы",
                  },
                  {
                    icon: "⚖️",
                    title: "Судебное заседание",
                    desc: "Рассмотрение дела судом",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <span className="text-xl">{item.icon}</span>
                    <div>
                      <div className="font-medium">{item.title}</div>
                      <div className="text-sm text-muted-foreground">
                        {item.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-card border rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-4 text-primary">
                Опека / Попечение / Приемная семья
              </h3>
              <div className="space-y-3">
                {[
                  {
                    icon: "🏛️",
                    title: "Опека по месту ДД",
                    desc: "Обращение в органы опеки по месту детского дома",
                  },
                  {
                    icon: "📋",
                    title: "Порядок передачи в семью",
                    desc: "Порядок, предусмотренный для передачи в семью",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <span className="text-xl">{item.icon}</span>
                    <div>
                      <div className="font-medium">{item.title}</div>
                      <div className="text-sm text-muted-foreground">
                        {item.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 7,
      title: "Усыновление",
      content: (
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="bg-card border rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-4 text-primary">
                Юридические аспекты
              </h3>
              <div className="space-y-3">
                {[
                  {
                    icon: "👨‍👩‍👧‍👦",
                    title: "Юридически ребенок не отличается от кровного",
                    desc: "Полные родительские права и обязанности",
                  },
                  {
                    icon: "⚖️",
                    title: "Права родителя",
                    desc: "Все права как у биологических родителей",
                  },
                  {
                    icon: "📝",
                    title: "Изменение данных",
                    desc: "Ваши фамилия, отчество, дата рождения (ребенок до 1 года, разница 3 месяца)",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <span className="text-xl">{item.icon}</span>
                    <div>
                      <div className="font-medium">{item.title}</div>
                      <div className="text-sm text-muted-foreground">
                        {item.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-card border rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-4 text-primary">
                Выплаты. Единовременные
              </h3>
              <div className="space-y-3">
                {[
                  {
                    icon: "🏛️",
                    title: "Федеральная",
                    desc: "~22 тыс. рублей (до 7 лет) / ~206 тыс. рублей (> 7 лет / ребенок-инвалид)",
                  },
                  {
                    icon: "🏢",
                    title: "Региональная",
                    desc: "~ 179 тыс. рублей",
                  },
                  {
                    icon: "👶",
                    title: "Материнский капитал",
                    desc: "Право на получение материнского капитала",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <span className="text-xl">{item.icon}</span>
                    <div>
                      <div className="font-medium">{item.title}</div>
                      <div className="text-sm text-muted-foreground">
                        {item.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 8,
      title: "Опека / Попечительство",
      content: (
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="grid gap-8 lg:grid-cols-1 xl:grid-cols-3">
            <div className="bg-card border rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-4 text-primary">
                Особенности
              </h3>
              <div className="space-y-3">
                {[
                  {
                    icon: "⏰",
                    title: "Срок / без срока",
                    desc: "Может устанавливаться на определенный срок или бессрочно",
                  },
                  {
                    icon: "👁️",
                    title: "Регулярный контроль органа опеки",
                    desc: "Постоянное наблюдение и поддержка",
                  },
                  {
                    icon: "📊",
                    title: "Ежегодные отчеты от опекуна",
                    desc: "Обязательная отчетность об использовании средств и имущества ребенка",
                  },
                  {
                    icon: "👨‍👩‍👧‍👦",
                    title: "Право на общение с родственниками",
                    desc: "Сохранение связи с биологическими родственниками",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <span className="text-xl">{item.icon}</span>
                    <div>
                      <div className="font-medium">{item.title}</div>
                      <div className="text-sm text-muted-foreground">
                        {item.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-card border rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-4 text-primary">Выплаты</h3>
              <div className="space-y-3">
                {[
                  {
                    icon: "🏛️",
                    title: "Федеральные: единовременные",
                    desc: "Как при усыновлении",
                  },
                  {
                    icon: "🏢",
                    title: "Региональные",
                    desc: "~17 тыс. рублей / месяц, ~46 тыс. рублей единовременно",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <span className="text-xl">{item.icon}</span>
                    <div>
                      <div className="font-medium">{item.title}</div>
                      <div className="text-sm text-muted-foreground">
                        {item.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-card border rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-4 text-primary">
                Дополнительные льготы
              </h3>
              <div className="space-y-3">
                {[
                  {
                    icon: "🏠",
                    title: "Жилая площадь",
                    desc: "Право ребенка на получение жилья при наступлении 18 лет",
                  },
                  {
                    icon: "✈️",
                    title: "Оплата проезда на отдых / лечение",
                    desc: "Компенсация транспортных расходов",
                  },
                  {
                    icon: "🚌",
                    title: "Бесплатный проезд",
                    desc: "На городском общественном транспорте",
                  },
                  {
                    icon: "🏕️",
                    title: "Путевки в детские оздоровительные лагеря",
                    desc: "Бесплатные путевки на отдых",
                  },
                  {
                    icon: "🎓",
                    title: "Среднее образование",
                    desc: "2 среднее образование за государственное обеспечение",
                  },
                  {
                    icon: "🎓",
                    title: "Высшее образование",
                    desc: "За государственное обеспечение",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <span className="text-xl">{item.icon}</span>
                    <div>
                      <div className="font-medium">{item.title}</div>
                      <div className="text-sm text-muted-foreground">
                        {item.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 9,
      title: "Как усыновить ребенка",
      content: (
        <div className="max-w-4xl mx-auto">
          <div className="bg-card border rounded-lg p-8 text-center">
            <div className="text-6xl mb-4">🏛️</div>
            <h3 className="font-semibold text-2xl mb-4">
              Подробная информация на портале Госуслуги
            </h3>
            <p className="text-muted-foreground mb-6">
              Полное руководство по процедуре усыновления, необходимые документы
              и пошаговые инструкции
            </p>
            <a
              href="https://www.gosuslugi.ru/help/faq/adoption/2337?priorityParentCategory=family"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
            >
              Перейти на Госуслуги
            </a>
            <div className="mt-6">
              <div className="inline-block border rounded-md p-4">
                <div className="w-20 h-20 bg-muted">QR Code</div>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                QR-код для быстрого перехода
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 10,
      title: "Группы здоровья",
      content: (
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                group: "I",
                icon: "✅",
                title: "Отклонений нет",
                desc: "Здоровые дети без отклонений в развитии",
              },
              {
                group: "II",
                icon: "⚠️",
                title: "Небольшие функциональные отклонения",
                desc: "Незначительные нарушения, не влияющие на развитие, дети, часто болеющие ОРЗ",
              },
              {
                group: "III",
                icon: "🏥",
                title: "Хронические заболевания",
                desc: "Требующие эпизодической поддерживающей терапии, не ограничивающей полноценной жизнедеятельности; также перинатальный контакт вирусных инфекций (например,ВИЧ, гепатит С)",
              },
              {
                group: "IV",
                icon: "♿",
                title: "Дети с ОВЗ",
                desc: "Хронические заболевания, требующие постоянной поддерживающей терапии",
              },
              {
                group: "V",
                icon: "♿",
                title: "Дети-инвалиды",
                desc: "Инвалидность может быть по зрению, при этом ребенок функционально и психологически здоров. Инвалидность при отсутствие одной из конечностей, практически не ограничивающая полноценной жизнедеятельности ребенка.",
              },
            ].map((item, index) => (
              <div key={index} className="bg-card border rounded-lg p-4">
                <div className="flex items-center space-x-4 mb-2">
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold text-lg">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">{item.title}</h4>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      ),
    },
  ];

  const nextSlide = () => {
    if (currentSlide < totalSlides) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 1) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "ArrowRight") nextSlide();
    if (e.key === "ArrowLeft") prevSlide();
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentSlide]);

  const currentSlideData = slides[currentSlide - 1] || slides[0];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Presentation Header */}
      <div className="border-b bg-muted/30">
        <div className="container mx-auto max-w-6xl px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link to="/presentations">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  К презентациям
                </Button>
              </Link>
              <h1 className="text-xl font-semibold">{currentSlideData?.title}</h1>
            </div>
            <div className="text-sm text-muted-foreground">
              Слайд {currentSlide} из {totalSlides}
            </div>
          </div>
        </div>
      </div>

      {/* Slide Content */}
      <main className="container mx-auto max-w-6xl px-4 py-12 min-h-[600px]">
        <div className="mb-8">
          {currentSlideData?.content}
        </div>
      </main>

      {/* Navigation */}
      <div className="border-t bg-muted/30">
        <div className="container mx-auto max-w-6xl px-4 py-4">
          <div className="flex items-center justify-between">
            <Button 
              variant="outline" 
              onClick={prevSlide}
              disabled={currentSlide === 1}
            >
              <ChevronLeft className="h-4 w-4 mr-2" />
              Предыдущий
            </Button>
            
            <div className="flex space-x-2">
              {Array.from({ length: Math.min(totalSlides, 10) }, (_, i) => (
                <button
                  key={i + 1}
                  onClick={() => setCurrentSlide(i + 1)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    currentSlide === i + 1 ? "bg-primary" : "bg-muted-foreground/30"
                  }`}
                />
              ))}
            </div>
            
            <Button 
              variant="outline" 
              onClick={nextSlide}
              disabled={currentSlide === totalSlides}
            >
              Следующий
              <ChevronRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PresentationViewer;
