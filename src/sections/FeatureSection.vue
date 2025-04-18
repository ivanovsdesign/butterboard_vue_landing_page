<script setup>
import features from '../data/features.js';
</script>

<template>
    <div id="features" class="container mx-auto px-5">
        <section class="py-16">
            <div class="w-4/5 md:w-3/5 mx-auto">
                <h2 class="text-3xl md:text-4xl font-semibold font-theme-heading text-center">Возможности платформы</h2>
                <p class="text-theme-grayish-blue text-center mt-7 font-theme-content text-lg">
                    Автоматизируем работу HR-специалистов и руководителей команд для лучшего онбординга
                </p>
            </div>

            <!-- Features List (Stacked Vertically) -->
            <div class="mt-16 space-y-32">
                <template v-for="(feature, index) in features" :key="feature.id">
                    <div class="grid gap-12 lg:gap-32 lg:grid-cols-2 items-center">
                        <!-- Image (Alternates Left/Right) -->
                        <div 
                            class="relative order-1" 
                            :class="{ 'lg:order-2': index % 2 !== 0 }"
                        >
                            <img 
                                class="z-10 w-full grayscale-image-features" 
                                :src="feature.details.imageUrl" 
                            />
                            <div 
                                class="-z-10 bg-theme-primary h-52 w-96 sm:h-80 sm:w-full absolute -bottom-16"
                                :class="{
                                    'rounded-r-full -left-56': index % 2 === 0,
                                    'rounded-l-full -right-56': index % 2 !== 0
                                }"
                            ></div>
                        </div>

                        <!-- Text Content -->
                        <div class="order-2" :class="{ 'lg:order-1': index % 2 !== 0 }">
                            <h3 class="font-theme-heading text-2xl md:text-3xl font-medium text-center lg:text-left">
                                {{ feature.details.title }}
                            </h3>
                            <p class="mt-7 font-theme-content text-lg text-theme-grayish-blue text-center lg:text-left">
                                {{ feature.details.description }}
                            </p>
                            <div class="flex justify-center lg:justify-start mt-7">
                                <LinkButton btn-type="primary" :link="feature.details.link">
                                    Подробнее
                                </LinkButton>
                            </div>
                        </div>
                    </div>
                </template>
            </div>
        </section>
    </div>
</template>