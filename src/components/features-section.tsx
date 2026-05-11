import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const features = [
  {
    title: "Защита информации",
    description: "Многоуровневое шифрование данных с соблюдением требований ГОСТ Р 34.12 и международных стандартов ISO 27001.",
    icon: "lock",
    badge: "ГОСТ",
  },
  {
    title: "Антивирусная защита",
    description: "Обнаружение и нейтрализация вирусов, троянов, шпионского ПО и других вредоносных программ в реальном времени.",
    icon: "shield",
    badge: "Real-time",
  },
  {
    title: "Контроль доступа",
    description: "Разграничение прав пользователей, многофакторная аутентификация и управление привилегиями в информационных системах.",
    icon: "key",
    badge: "IAM",
  },
  {
    title: "Мониторинг угроз",
    description: "Интеллектуальный анализ сетевого трафика и поведенческих паттернов для раннего обнаружения кибератак.",
    icon: "radar",
    badge: "SIEM",
  },
  {
    title: "Защита сетей",
    description: "Межсетевые экраны, системы предотвращения вторжений (IPS/IDS) и сегментация корпоративной сети.",
    icon: "network",
    badge: "Firewall",
  },
  {
    title: "Резервное копирование",
    description: "Автоматическое резервирование критичных данных, восстановление после инцидентов и обеспечение непрерывности бизнеса.",
    icon: "database",
    badge: "Backup",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 font-sans">Ключевые направления защиты</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Комплексный подход к информационной безопасности — от защиты периметра до реагирования на инциденты
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="glow-border hover:shadow-lg transition-all duration-300 slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-3xl">
                    {feature.icon === "lock" && "🔒"}
                    {feature.icon === "shield" && "🛡️"}
                    {feature.icon === "key" && "🔑"}
                    {feature.icon === "radar" && "📡"}
                    {feature.icon === "network" && "🌐"}
                    {feature.icon === "database" && "💾"}
                  </span>
                  <Badge variant="secondary" className="bg-accent text-accent-foreground">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-card-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
