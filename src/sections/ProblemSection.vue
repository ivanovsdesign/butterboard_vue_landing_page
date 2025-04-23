<script setup>
import problems from '../data/problems.js';
import AnimatedCounter from './AnimatedCounter.vue';
</script>

<template>
  <div id="problems" class="container mx-auto px-5">
    <section class="py-16">
      <div class="w-4/5 md:w-3/5 mx-auto mb-12">
        <h2 class="text-3xl md:text-4xl font-semibold font-theme-heading text-center">
          <span class="highlight-text">20%</span> сотрудников уходят во время адаптации
        </h2>
        <p class="text-theme-grayish-blue text-center mt-7 font-theme-content text-lg">
          <!-- ... -->
        </p>
      </div>
      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <template v-for="problem in problems" :key="problem.id">
          <div
            class="flex flex-col items-center justify-start bg-white rounded-2xl shadow-md p-8 aspect-[4/5] min-h-[320px] max-w-sm mx-auto"
          >
            <div class="flex items-end mb-4">
              <AnimatedCounter
                :value="problem.number"
                :duration="1200"
                class="text-theme-secondary text-[4rem] md:text-[5rem] font-extrabold leading-none"
              />
              <span class="text-2xl md:text-3xl font-bold text-theme-secondary mb-2 ml-2">
                {{ problem.unit }}
              </span>
            </div>
            <h3 class="font-theme-heading text-lg md:text-xl font-medium text-center lg:text-center mb-2">
              {{ problem.details.title }}
            </h3>
            <p class="font-theme-content text-base text-theme-grayish-blue text-center lg:text-center mb-4">
              {{ problem.details.description }}
            </p>
            <LinkButton btn-type="primary" :link="problem.details.link">
              Подробнее
            </LinkButton>
          </div>
        </template>
      </div>
    </section>
  </div>
</template>
