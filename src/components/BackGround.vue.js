import { ref, watch, useTemplateRef } from 'vue';
import { useElementVisibility } from '@vueuse/core';
import backgroundImage from '@/assets/images/background.webp';
import backgroundSPImage from '@/assets/images/background_sp.webp';
import { useWindowSize } from '@vueuse/core';
const { width, height } = useWindowSize();
const propsFlag = defineProps(['flag']);
const flagRef = ref(propsFlag.flag || false);
const background = useTemplateRef(__VLS_placeholder);
const backgroundSp = useTemplateRef(__VLS_placeholder);
const bgImage = useTemplateRef(__VLS_placeholder);
const bgSpImage = useTemplateRef(__VLS_placeholder);
const bgImageVisibility = useElementVisibility(bgImage);
const bgSpImageVisibility = useElementVisibility(bgSpImage);
const isSP = ref(false);
const breakPoint = 827;
watch(propsFlag, (newVal) => {
    if (newVal) {
        flagRef.value = newVal;
        let showBgImage = bgImageVisibility.value ? bgImage : bgSpImage;
        let showBackground = bgImageVisibility.value ? background : backgroundSp;
        if (showBackground.value) {
            showBackground.value.style.transition = bgImageVisibility.value ? 'transform 0.5s ease 0.2s' : 'transform 1s ease 0.2s';
            const windowHeight = window.innerHeight;
            const imageHeight = showBgImage.value ? showBgImage.value.clientHeight : 0;
            const diff = imageHeight - windowHeight;
            showBackground.value.style.transform = `translateY(-${diff}px)`;
        }
    }
});
watch(width, (newVal) => {
    const screenWidth = width.value;
    isSP.value = screenWidth < breakPoint ? true : false;
    if (flagRef.value?.flag) {
        let showBgImage = isSP.value ? bgSpImage : bgImage;
        let showBackground = isSP.value ? backgroundSp : background;
        if (showBackground.value) {
            showBackground.value.style.transition = 'transform 0.5s ease 0.2s';
            const windowHeight = window.innerHeight;
            const imageHeight = showBgImage.value ? showBgImage.value.clientHeight : 0;
            const diff = imageHeight - windowHeight;
            showBackground.value.style.transform = `translateY(-${diff}px)`;
        }
    }
});
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "bg" },
    ref: "background",
});
/** @type {typeof __VLS_ctx.background} */ ;
__VLS_asFunctionalElement(__VLS_intrinsicElements.img)({
    src: (__VLS_ctx.backgroundImage),
    alt: "背景画像",
    ...{ class: ({ start: __VLS_ctx.flagRef }) },
    ref: "bgImage",
});
/** @type {typeof __VLS_ctx.bgImage} */ ;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "bg-sp" },
    ref: "backgroundSp",
});
/** @type {typeof __VLS_ctx.backgroundSp} */ ;
__VLS_asFunctionalElement(__VLS_intrinsicElements.img)({
    src: (__VLS_ctx.backgroundSPImage),
    alt: "背景画像",
    ...{ class: "" },
    ref: "bgSpImage",
});
/** @type {typeof __VLS_ctx.bgSpImage} */ ;
/** @type {__VLS_StyleScopedClasses['']} */ ;
/** @type {__VLS_StyleScopedClasses['bg']} */ ;
/** @type {__VLS_StyleScopedClasses['start']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-sp']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            backgroundImage: backgroundImage,
            backgroundSPImage: backgroundSPImage,
            flagRef: flagRef,
        };
    },
    props: ['flag'],
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    props: ['flag'],
});
; /* PartiallyEnd: #4569/main.vue */
//# sourceMappingURL=BackGround.vue.js.map