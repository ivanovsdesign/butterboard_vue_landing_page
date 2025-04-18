<script setup>
const plans = [
  {
    id: 1,
    name: "Base",
    price: "от 19 900 ₽/мес",
    users: "до 50 сотрудников",
    features: [
      "Доступ к облачной платформе",
      "ИИ-ассистент для онбординга",
      "Готовые сценарии адаптации",
      "Интеграция с корпоративной вики",
      "Базовая аналитика и отчеты"
    ],
    button: {
      text: "Попробовать бесплатно",
      link: "#subscribe"
    }
  },
  {
    id: 2,
    name: "Custom",
    price: "от 39 900 ₽/мес",
    users: "до 100 сотрудников",
    features: [
      "Всё из Base",
      "Кастомизация сценариев и ролей",
      "Расширенная аналитика",
      "Поддержка интеграций под задачи компании",
      "Приоритетная поддержка"
    ],
    button: {
      text: "Запросить консультацию",
      link: "#subscribe"
    }
  },
  {
    id: 3,
    name: "Advanced",
    price: "Индивидуально",
    users: "любое число сотрудников",
    features: [
      "Всё из Custom",
      "On-premise развертывание",
      "Гибкая настройка безопасности",
      "Персональный менеджер",
      "Без ограничений по количеству пользователей"
    ],
    button: {
      text: "Получить предложение",
      link: "#subscribe"
    }
  }
];
</script>

<template>
  <div id="download-section" class="container mx-auto px-5 md:w-4/5">
    <section class="py-16 pt-18">
      <div class="w-4/5 md:w-3/5 mx-auto">
        <h2 class="text-3xl md:text-4xl font-theme-heading font-medium text-center">
          Выберите тариф, который подходит вашей команде
        </h2>
        <p class="text-theme-grayish-blue text-center text-lg font-theme-content mt-7">
          Butterboard — SaaS-решение для эффективного онбординга и автоматизации HR-процессов. Масштабируйте адаптацию сотрудников под задачи вашего бизнеса.
        </p>
      </div>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        <div
          v-for="plan in plans"
          :key="plan.id"
          class="shadow-lg rounded-lg bg-white flex flex-col justify-between"
        >
          <div class="flex flex-col items-center mt-12 px-6">
            <h3 class="text-xl font-semibold mb-2">{{ plan.name }}</h3>
            <p class="text-2xl font-bold mb-1">{{ plan.price }}</p>
            <p class="text-theme-grayish-blue mb-4">{{ plan.users }}</p>
            <ul class="text-theme-grayish-blue text-base text-left mb-6 space-y-2">
              <li v-for="feature in plan.features" :key="feature" class="flex items-center">
                <svg class="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-7.414 7.414a1 1 0 01-1.414 0l-3.414-3.414a1 1 0 111.414-1.414L8 11.586l6.707-6.707a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                {{ feature }}
              </li>
            </ul>
          </div>
          <div class="flex justify-center mb-8">
            <LinkButton
              btn-type="primary"
              link="#subscribe"
            >
              {{ plan.button.text }}
            </LinkButton>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
