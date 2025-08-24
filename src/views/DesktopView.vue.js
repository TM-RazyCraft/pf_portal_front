import { ref, watch } from 'vue';
import DigitalClock from '@/components/DigitalClock.vue';
import Window from '@/components/Window.vue';
import AboutTemplate from '@/components/window/AboutTemplate.vue';
import AboutDetailTemplate from '@/components/window/AboutDetailTemplate.vue';
import GalleryTemplate from '@/components/window/GalleryTemplate.vue';
import GalleryDetailTemplate from '@/components/window/GalleryDetailTemplate.vue';
const $selectWindow = ref('about');
const $windowNames = ref(['about', 'gallery']);
const $selectDetailTemplate = ref(AboutDetailTemplate);
const $parentFullScreenFlag = ref(false);
watch($selectWindow, (newVal) => {
    if (newVal === 'about') {
        $selectDetailTemplate.value = AboutDetailTemplate;
    }
    else if (newVal === 'gallery') {
        $selectDetailTemplate.value = GalleryDetailTemplate;
    }
});
const focus = (type) => {
    $selectWindow.value = type;
};
const closeFullScreen = () => {
    $parentFullScreenFlag.value = false;
};
const selectTemplate = ((name) => {
    if (name === 'about') {
        return AboutTemplate;
    }
    else if (name === 'gallery') {
        return GalleryTemplate;
    }
});
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['small']} */ ;
/** @type {__VLS_StyleScopedClasses['small']} */ ;
/** @type {__VLS_StyleScopedClasses['small']} */ ;
/** @type {__VLS_StyleScopedClasses['small']} */ ;
/** @type {__VLS_StyleScopedClasses['small']} */ ;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "wrapper" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "left-column" },
});
/** @type {[typeof DigitalClock, ]} */ ;
// @ts-ignore
const __VLS_0 = __VLS_asFunctionalComponent(DigitalClock, new DigitalClock({}));
const __VLS_1 = __VLS_0({}, ...__VLS_functionalComponentArgsRest(__VLS_0));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "right-column" },
});
for (const [name] of __VLS_getVForSourceType((__VLS_ctx.$windowNames))) {
    /** @type {[typeof Window, typeof Window, ]} */ ;
    // @ts-ignore
    const __VLS_3 = __VLS_asFunctionalComponent(Window, new Window({
        ...{ 'onClick': {} },
        ...{ 'onEmitSelectWindow': {} },
        ...{ 'onEmitShowFullScreen': {} },
        type: (name),
        select: (__VLS_ctx.$selectWindow === name),
        fullScreen: (__VLS_ctx.$parentFullScreenFlag),
    }));
    const __VLS_4 = __VLS_3({
        ...{ 'onClick': {} },
        ...{ 'onEmitSelectWindow': {} },
        ...{ 'onEmitShowFullScreen': {} },
        type: (name),
        select: (__VLS_ctx.$selectWindow === name),
        fullScreen: (__VLS_ctx.$parentFullScreenFlag),
    }, ...__VLS_functionalComponentArgsRest(__VLS_3));
    let __VLS_6;
    let __VLS_7;
    let __VLS_8;
    const __VLS_9 = {
        onClick: (...[$event]) => {
            __VLS_ctx.focus(name);
        }
    };
    const __VLS_10 = {
        onEmitSelectWindow: (($event) => __VLS_ctx.$selectWindow = $event)
    };
    const __VLS_11 = {
        onEmitShowFullScreen: (($event) => __VLS_ctx.$parentFullScreenFlag = $event)
    };
    __VLS_5.slots.default;
    const __VLS_12 = ((__VLS_ctx.selectTemplate(name)));
    // @ts-ignore
    const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({}));
    const __VLS_14 = __VLS_13({}, ...__VLS_functionalComponentArgsRest(__VLS_13));
    var __VLS_5;
}
if (__VLS_ctx.$parentFullScreenFlag) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "fullscreen-contents" },
        ...{ class: ({ 'nopadding': __VLS_ctx.$selectWindow === 'gallery' }) },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "detail" },
    });
    const __VLS_16 = ((__VLS_ctx.$selectDetailTemplate));
    // @ts-ignore
    const __VLS_17 = __VLS_asFunctionalComponent(__VLS_16, new __VLS_16({}));
    const __VLS_18 = __VLS_17({}, ...__VLS_functionalComponentArgsRest(__VLS_17));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ onClick: (...[$event]) => {
                if (!(__VLS_ctx.$parentFullScreenFlag))
                    return;
                __VLS_ctx.closeFullScreen();
            } },
        ...{ class: "close" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)({
        src: "@/assets/images/parts/closeButton.svg",
        alt: "閉じる",
    });
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "blur-filter" },
    ...{ class: ({ 'show': __VLS_ctx.$parentFullScreenFlag }) },
});
/** @type {__VLS_StyleScopedClasses['wrapper']} */ ;
/** @type {__VLS_StyleScopedClasses['left-column']} */ ;
/** @type {__VLS_StyleScopedClasses['right-column']} */ ;
/** @type {__VLS_StyleScopedClasses['fullscreen-contents']} */ ;
/** @type {__VLS_StyleScopedClasses['nopadding']} */ ;
/** @type {__VLS_StyleScopedClasses['detail']} */ ;
/** @type {__VLS_StyleScopedClasses['close']} */ ;
/** @type {__VLS_StyleScopedClasses['blur-filter']} */ ;
/** @type {__VLS_StyleScopedClasses['show']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            DigitalClock: DigitalClock,
            Window: Window,
            $selectWindow: $selectWindow,
            $windowNames: $windowNames,
            $selectDetailTemplate: $selectDetailTemplate,
            $parentFullScreenFlag: $parentFullScreenFlag,
            focus: focus,
            closeFullScreen: closeFullScreen,
            selectTemplate: selectTemplate,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
//# sourceMappingURL=DesktopView.vue.js.map