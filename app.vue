<template>
  <v-app>
    <v-main>
      <v-container class="mt-8">
        <v-row justify="center">
          <v-col cols="12" sm="6" md="4">
            <v-card>
              <v-card-title class="text-lg font-bold text-gray-800">Performans Testi - Vuetify</v-card-title>
              <v-card-subtitle class="text-gray-600">Buton, Grid ve Tooltip ile</v-card-subtitle>
              <v-card-actions>
                <v-btn color="blue darken-2" @click="clicked = !clicked" class="text-white">
                  {{ clicked ? 'Tıklama Bırak' : 'Tıkla' }}
                </v-btn>
                <v-tooltip bottom>
                  <template #activator="{ props }">
                    <v-btn color="green darken-2" v-bind="props" class="text-white">Tooltip'li Buton</v-btn>
                  </template>
                  <span>Bu bir tooltip.</span>
                </v-tooltip>
                <v-btn color="red darken-2" @click="dialog = true" class="text-white">Dialog Aç</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>

        <v-dialog v-model="dialog" max-width="400px">
          <v-card>
            <v-card-title class="headline">Dialog Başlığı</v-card-title>
            <v-card-text>
              Bu bir dialog bileşenidir. Burada içerik ekleyebilirsin.
            </v-card-text>
            <v-card-actions>
              <v-btn color="blue darken-2" @click="dialog = false">Kapat</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>

        <v-card class="mt-8">
          <v-tabs v-model="tab" background-color="primary" class="rounded-t-lg">
            <v-tab value="one" class="py-2 px-4" :class="tab === 'one' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'">
              Item One
            </v-tab>
            <v-tab value="two" class="py-2 px-4" :class="tab === 'two' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'">
              Item Two
            </v-tab>
            <v-tab value="three" class="py-2 px-4" :class="tab === 'three' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'">
              Item Three
            </v-tab>
          </v-tabs>

          <v-card-text>
            <v-tabs-window v-model="tab">
              <v-tabs-window-item value="one">
                <div class="text-gray-800">One içeriği burada.</div>
              </v-tabs-window-item>

              <v-tabs-window-item value="two">
                <div class="text-gray-800">Two içeriği burada.</div>
              </v-tabs-window-item>

              <v-tabs-window-item value="three">
                <div class="text-gray-800">Three içeriği burada.</div>
              </v-tabs-window-item>
            </v-tabs-window>
          </v-card-text>
        </v-card>

        <!-- Carousel Section -->
        <v-card class="mt-8">
          <v-carousel>
            <v-carousel-item v-for="(item, index) in carouselItems" :key="index" :src="item.src" :alt="item.alt">
              <v-img :src="item.src" height="200px" />
            </v-carousel-item>
          </v-carousel>
        </v-card>

        <!-- Form Section -->
        <v-card class="mt-8">
          <v-card-title class="text-lg font-bold">İletişim Formu</v-card-title>
          <v-card-text>
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-text-field v-model="name" label="Adınız" :rules="[rules.required]" required></v-text-field>
              <v-text-field v-model="email" label="E-posta" :rules="[rules.email]" required></v-text-field>
              <v-btn color="blue darken-2" @click="submitForm">Gönder</v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const clicked = ref(false);
const dialog = ref(false);
const tab = ref('one');
const valid = ref(false);
const name = ref('');
const email = ref('');

const rules = {
  required: (value: string) => !!value || 'Bu alan gerekli.',
  email: (value: string) => /.+@.+\..+/.test(value) || 'Geçerli bir e-posta adresi girin.',
};

// Carousel items
const carouselItems = ref([
  { src: 'https://via.placeholder.com/400x200?text=Slide+1', alt: 'Slide 1' },
  { src: 'https://via.placeholder.com/400x200?text=Slide+2', alt: 'Slide 2' },
  { src: 'https://via.placeholder.com/400x200?text=Slide+3', alt: 'Slide 3' },
]);

const submitForm = () => {
  if ($refs.form.validate()) {
    alert(`Ad: ${name.value}, E-posta: ${email.value}`);
    name.value = '';
    email.value = '';
  }
};
</script>

<style scoped>
.v-tab {
  transition: color 0.3s;
}

.v-tab:hover {
  color: #3f51b5;
}

.v-tabs-window-item {
  padding: 16px;
}
</style>
