import { Timeline } from "@/components/ui/timeline"

export function ApplicationsTimeline() {
  const data = [
    {
      title: "Понятие информационной безопасности",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Информационная безопасность — состояние защищённости информации и информационной инфраструктуры от
            случайных или преднамеренных воздействий, наносящих ущерб владельцам или пользователям информации.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Конфиденциальность — исключение несанкционированного доступа к информации
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Целостность — защита от несанкционированного изменения данных
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Доступность — обеспечение доступа к информации при необходимости
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Субъекты обеспечения ИБ в России",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Система обеспечения информационной безопасности России включает государственные органы, организации
            и граждан, действующих в рамках единой правовой и технической базы.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              ФСБ, ФСТЭК, Роскомнадзор — регуляторы и надзорные органы
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Операторы персональных данных и критической инфраструктуры
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Организации — лицензиаты в сфере защиты информации
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Компьютерные вирусы и вредоносное ПО",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Вредоносные программы — один из главных инструментов кибератак. Понимание их видов и механизмов
            распространения — ключевой элемент обеспечения безопасности информационных систем.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Вирусы, черви, трояны — основные классы вредоносного ПО
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Шифровальщики (ransomware) и шпионское ПО (spyware)
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Методы обнаружения: сигнатурный и эвристический анализ
            </div>
          </div>
        </div>
      ),
    },
  ]

  return (
    <section id="applications" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-6">Ключевые аспекты цифровой безопасности</h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            От базовых понятий до практических инструментов — системный подход к защите информации
            в современных информационных системах и критической инфраструктуре.
          </p>
        </div>

        <div className="relative">
          <Timeline data={data} />
        </div>
      </div>
    </section>
  )
}
