import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "Алексей Морозов",
    role: "CISO, Финансовая группа «Восток»",
    avatar: "/cybersecurity-expert-man.jpg",
    content:
      "После внедрения комплексной системы ИБ количество инцидентов сократилось на 94%. Мы наконец знаем, что наши данные под надёжной защитой.",
  },
  {
    name: "Наталья Соколова",
    role: "Директор по ИТ, Медцентр «Здоровье»",
    avatar: "/professional-woman-scientist.png",
    content:
      "Защита персональных данных пациентов — наш приоритет. Благодаря грамотно выстроенной системе ИБ мы полностью соответствуем требованиям 152-ФЗ.",
  },
  {
    name: "Дмитрий Ким",
    role: "Руководитель отдела безопасности, ГК «Интегра»",
    avatar: "/asian-woman-tech-developer.jpg",
    content:
      "Системный подход к информационной безопасности — это не расходы, а инвестиции. Предотвращённые атаки сэкономили нам десятки миллионов рублей.",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-card-foreground mb-4 font-sans">Нам доверяют организации</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Реальный опыт компаний, внедривших комплексную защиту информационных систем
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="glow-border slide-up" style={{ animationDelay: `${index * 0.15}s` }}>
              <CardContent className="p-6">
                <p className="text-card-foreground mb-6 leading-relaxed italic">"{testimonial.content}"</p>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback>
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-primary">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
