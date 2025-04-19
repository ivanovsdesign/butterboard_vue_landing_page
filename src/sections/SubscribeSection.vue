<script setup>
import { ref } from "vue";
import Swal from "sweetalert2";

let email = ref("");
let emailError = ref(false);
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

let handleSubmit = () => {
    if (!email.value || !emailRegex.test(email.value)) {
        emailError.value = true;
    } else {
        console.log(emailRegex.test(email.value));
        Swal.fire({
            icon: "success",
            title: "Thank You",
            text: `${email.value} subscribed to our newsletter!`,
        });
    }
};
</script>

<template>
    <!-- Newsletter Section Start -->
    <div id="subscribe" class="bg-theme-primary mt-10 justify-center">
        <div class="container w-full lg:w-2/5 mx-auto px-5">
            <section class="py-16 justify-center lg:justify-start mt-7">
                <h4 class="text-sm tracking-widest uppercase text-center text-white font-theme-heading">Ваши сотрудники скажут спасибо</h4>
                <h2 class="text-3xl md:text-4xl font-medium text-center text-white mt-9 mb-10 font-theme-heading">Попробуйте butterboard бесплатно</h2>


                <div class="container w-full lg:w-2/5 mx-auto">
                    <Button btn-type="secondary"><a href="https://docs.google.com/forms/d/e/1FAIpQLSf783lC2DQZ23EUY2wQv8xjWiWMPsTvjQIjEjlfkmWA6A9tLA/viewform?usp=header" target="_blank">Запросить консультацию</a></Button>
                </div>
            </section>
        </div>
    </div>
    <!-- Newsletter Section End -->
</template>
