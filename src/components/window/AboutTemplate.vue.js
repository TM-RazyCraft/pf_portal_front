import { ref, onMounted, useTemplateRef } from 'vue';
import Typewriter from 'typewriter-effect/dist/core';
import dayjs from 'dayjs';
const currentTime = ref(dayjs().format('YYYY/MM/DD HH:mm:ss').toString());
const $titleString = ref(['About']);
const $titleRef = useTemplateRef(__VLS_placeholder);
const $bootstrapRef = useTemplateRef(__VLS_placeholder);
onMounted(() => {
    if ($titleRef.value) {
        const titleTypeWriter = new Typewriter($titleRef.value, {
            strings: $titleString.value,
            autoStart: false,
            loop: false,
            delay: 50,
            deleteSpeed: Infinity,
            cursor: ''
        });
        titleTypeWriter
            .pauseFor(1000)
            .typeString($titleString.value.join(''))
            .start();
    }
    if ($bootstrapRef.value) {
        const bootstrapTypeWriter = new Typewriter($bootstrapRef.value, {
            loop: false,
            delay: 200,
            deleteSpeed: Infinity,
            cursor: '',
        });
        bootstrapTypeWriter.pauseFor(1000);
        logLine(bootstrapTypeWriter, `session login date: ${currentTime.value}`, false);
        logLine(bootstrapTypeWriter, 'bootstrap', true);
        logLine(bootstrapTypeWriter, 'loading about page data', true);
        logLine(bootstrapTypeWriter, 'about情報の取得に成功しました。', false);
        logLine(bootstrapTypeWriter, 'connection check [OK]', false);
        logLine(bootstrapTypeWriter, 'directory check [OK]', false);
        logLine(bootstrapTypeWriter, 'compiling', true);
        logLine(bootstrapTypeWriter, 'complete', false);
        bootstrapTypeWriter.changeDelay(1);
        bootstrapTypeWriter.typeString('[Info] <br>');
        bootstrapTypeWriter.typeString('[Info] <br>');
        bootstrapTypeWriter.typeString('[Info] <br>');
        logLine(bootstrapTypeWriter, 'ようこそ', true);
        logLine(bootstrapTypeWriter, '詳細はview moreからご覧下さい。', false);
        bootstrapTypeWriter.start();
    }
});
const logLine = (writer, message, dot = false) => {
    if (dot) {
        writer
            .pauseFor(100)
            .changeDelay(1)
            .typeString(`[Info] $ ${message}`)
            .changeDelay(100)
            .typeString('.')
            .pauseFor(100)
            .typeString('.')
            .pauseFor(100)
            .typeString('.')
            .pauseFor(100)
            .typeString('.')
            .typeString('<br>')
            .start();
    }
    else {
        writer
            .pauseFor(100)
            .changeDelay(1)
            .typeString(`[Info] $ ${message}`)
            .typeString('<br>')
            .start();
    }
};
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['small']} */ ;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({
    ref: "title",
});
/** @type {typeof __VLS_ctx.title} */ ;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "inner" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ref: "bootstrap",
});
/** @type {typeof __VLS_ctx.bootstrap} */ ;
/** @type {__VLS_StyleScopedClasses['inner']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
//# sourceMappingURL=AboutTemplate.vue.js.map