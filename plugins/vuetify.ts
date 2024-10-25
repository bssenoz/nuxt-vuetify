// plugins/vuetify.ts
import { createVuetify } from 'vuetify'
import {
    VApp,
    VMain,
    VContainer,
    VRow,
    VCol,
    VCard,
    VCardTitle,
    VCardSubtitle,
    VCardActions,
    VBtn,
    VTooltip,
    VDialog,
    VTabs,      
    VTab,
    VTabsWindow,
    VTabsWindowItem,
    VExpansionPanel,
    VExpansionPanels,
    VCarousel,
    VCarouselItem,
    VTextField,
    VForm
} from 'vuetify/components'

import { Ripple } from 'vuetify/directives'

export default defineNuxtPlugin((nuxtApp) => {
    const vuetify = createVuetify({
        components: {
            VApp,
            VMain,
            VContainer,
            VRow,
            VCol,
            VCard,
            VCardTitle,
            VCardSubtitle,
            VCardActions,
            VBtn,
            VTooltip,
            VDialog,
            VTabs,
            VTab,
            VTabsWindow,
            VTabsWindowItem,
            VExpansionPanel,
            VExpansionPanels,
            VCarousel,
            VCarouselItem,
            VTextField,
            VForm
        },
        directives: {
            Ripple
        }
    })

    nuxtApp.vueApp.use(vuetify)
})
