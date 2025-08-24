import { ref, computed } from 'vue';
import StartButton from '../components/StartButton.vue';
import BackGround from '../components/BackGround.vue';
import DesktopView from './DesktopView.vue';
const $startUpRef = ref(false);
const $startUpShowRef = ref(true);
const startUp = () => {
    $startUpRef.value = true;
    setTimeout(() => {
        $startUpShowRef.value = false;
    }, 1000);
};
const reactiveStartUp = computed(() => {
    return $startUpRef.value;
});
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.main, __VLS_intrinsicElements.main)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "frame" },
});
if (__VLS_ctx.$startUpShowRef) {
    /** @type {[typeof StartButton, ]} */ ;
    // @ts-ignore
    const __VLS_0 = __VLS_asFunctionalComponent(StartButton, new StartButton({
        ...{ 'onStartUp': {} },
    }));
    const __VLS_1 = __VLS_0({
        ...{ 'onStartUp': {} },
    }, ...__VLS_functionalComponentArgsRest(__VLS_0));
    let __VLS_3;
    let __VLS_4;
    let __VLS_5;
    const __VLS_6 = {
        onStartUp: (__VLS_ctx.startUp)
    };
    var __VLS_2;
}
else {
    /** @type {[typeof DesktopView, ]} */ ;
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(DesktopView, new DesktopView({}));
    const __VLS_8 = __VLS_7({}, ...__VLS_functionalComponentArgsRest(__VLS_7));
}
/** @type {[typeof BackGround, ]} */ ;
// @ts-ignore
const __VLS_10 = __VLS_asFunctionalComponent(BackGround, new BackGround({
    flag: (__VLS_ctx.reactiveStartUp),
}));
const __VLS_11 = __VLS_10({
    flag: (__VLS_ctx.reactiveStartUp),
}, ...__VLS_functionalComponentArgsRest(__VLS_10));
/** @type {__VLS_StyleScopedClasses['frame']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            StartButton: StartButton,
            BackGround: BackGround,
            DesktopView: DesktopView,
            $startUpShowRef: $startUpShowRef,
            startUp: startUp,
            reactiveStartUp: reactiveStartUp,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
//# sourceMappingURL=HomeView.vue.js.map