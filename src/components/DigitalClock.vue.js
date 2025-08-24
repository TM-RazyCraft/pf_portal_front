import { ref, onMounted } from 'vue';
import dayjs from 'dayjs';
const nowHour = ref(dayjs().format('HH'));
const nowMinute = ref(dayjs().format('mm'));
const date = ref(dayjs().format('YYYY/MM/DD'));
const updateTime = () => {
    setInterval(() => {
        nowHour.value = dayjs().format('HH');
        nowMinute.value = dayjs().format('mm');
    }, 1000 - new Date().getUTCMilliseconds());
};
onMounted(() => {
    updateTime();
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
    ...{ class: "clock" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "date" },
});
(__VLS_ctx.date);
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "time" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "hour" },
});
(__VLS_ctx.nowHour);
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "minute" },
});
(__VLS_ctx.nowMinute);
/** @type {__VLS_StyleScopedClasses['clock']} */ ;
/** @type {__VLS_StyleScopedClasses['date']} */ ;
/** @type {__VLS_StyleScopedClasses['time']} */ ;
/** @type {__VLS_StyleScopedClasses['hour']} */ ;
/** @type {__VLS_StyleScopedClasses['minute']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            nowHour: nowHour,
            nowMinute: nowMinute,
            date: date,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
//# sourceMappingURL=DigitalClock.vue.js.map