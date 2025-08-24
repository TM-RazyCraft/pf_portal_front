import { ref, onMounted, watch, useTemplateRef } from 'vue';
import Typewriter from 'typewriter-effect/dist/core';
const $fadeOutRef = ref(false);
const $string = ref(['START']);
const typewriterElement = useTemplateRef(__VLS_placeholder);
let typewriter = null;
const fadeOut = () => {
    $fadeOutRef.value = true;
};
onMounted(() => {
    if (typewriterElement.value) {
        typewriter = new Typewriter(typewriterElement.value, {
            loop: false,
            delay: 50,
            deleteSpeed: Infinity,
        });
        typewriter.typeString($string.value[0]).start();
    }
});
watch($string, (newVal) => {
    if (typewriter && typewriterElement.value) {
        typewriter.stop();
        typewriterElement.value.textContent = '';
        typewriter = new Typewriter(typewriterElement.value, {
            loop: false,
            delay: 50,
            deleteSpeed: Infinity,
        });
        typewriter.typeString(newVal[0]).start();
    }
});
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['small']} */ ;
/** @type {__VLS_StyleScopedClasses['small']} */ ;
/** @type {__VLS_StyleScopedClasses['small']} */ ;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.$emit('start-up');
            __VLS_ctx.fadeOut();
        } },
    ...{ onMouseenter: (...[$event]) => {
            __VLS_ctx.$string = ['TAP'];
        } },
    ...{ onMouseleave: (...[$event]) => {
            __VLS_ctx.$string = ['START'];
        } },
    ...{ class: "starts" },
    ...{ class: ({ fadeOut: __VLS_ctx.$fadeOutRef }) },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "outline" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "innerline" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ref: "typewriterElement",
});
/** @type {typeof __VLS_ctx.typewriterElement} */ ;
/** @type {__VLS_StyleScopedClasses['starts']} */ ;
/** @type {__VLS_StyleScopedClasses['fadeOut']} */ ;
/** @type {__VLS_StyleScopedClasses['outline']} */ ;
/** @type {__VLS_StyleScopedClasses['innerline']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            $fadeOutRef: $fadeOutRef,
            $string: $string,
            fadeOut: fadeOut,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
//# sourceMappingURL=StartButton.vue.js.map