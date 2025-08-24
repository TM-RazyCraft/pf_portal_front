import { defineComponent, ref, onMounted, watch } from 'vue';
import Vue3DraggableResizable from 'vue3-draggable-resizable';
import 'vue3-draggable-resizable/dist/Vue3DraggableResizable.css';
import { useWindowSize } from '@vueuse/core';
const { width, height } = useWindowSize();
defineComponent({
    components: {
        Vue3DraggableResizable
    }
});
const emit = defineEmits(['emitSelectWindow', 'emitShowFullScreen']);
const props = defineProps({
    type: String,
    select: Boolean,
    fullScreen: Boolean
});
const windowX = ref(0);
const windowY = ref(0);
const windowW = ref(0);
const windowH = ref(0);
const active = ref(false);
const parent = ref(true);
const isSP = ref(false);
const draggable = ref(true);
const resizable = ref(true);
const breakPoint = 827;
const fullScreenFlag = ref(false);
watch(width, (newVal) => {
    const screenWidth = width.value;
    isSP.value = screenWidth < breakPoint ? true : false;
});
watch(isSP, (newVal) => {
    if (props.type) {
        setDraggablSetting(props.type);
    }
});
watch(() => props.fullScreen, (newVal) => {
    fullScreenFlag.value = newVal;
});
onMounted(() => {
    if (props.type) {
        setDraggablSetting(props.type);
    }
    const screenWidth = width.value;
    isSP.value = screenWidth < breakPoint ? true : false;
});
const setDraggablSetting = (type) => {
    switch (type) {
        case 'about':
            windowX.value = 39;
            windowY.value = 47;
            windowW.value = 933;
            windowH.value = 536;
            break;
        case 'gallery':
            windowX.value = 643;
            windowY.value = 390;
            windowW.value = 760;
            windowH.value = 434;
            break;
    }
};
const fullScreen = (flag) => {
    fullScreenFlag.value = flag;
    emit('emitShowFullScreen', flag);
};
const onDragStartCallback = (callbackX, callbackY) => {
    fullScreenFlag.value = false;
    emit('emitSelectWindow', props.type);
    emit('emitShowFullScreen', false);
};
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['small']} */ ;
/** @type {__VLS_StyleScopedClasses['window-footer']} */ ;
/** @type {__VLS_StyleScopedClasses['window-contents']} */ ;
/** @type {__VLS_StyleScopedClasses['small']} */ ;
/** @type {__VLS_StyleScopedClasses['window-footer']} */ ;
/** @type {__VLS_StyleScopedClasses['small']} */ ;
/** @type {__VLS_StyleScopedClasses['small']} */ ;
// CSS variable injection 
// CSS variable injection end 
if (__VLS_ctx.isSP) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "window" },
        ...{ class: ({ 'active': props.select, 'full-screen': __VLS_ctx.fullScreenFlag && props.select }) },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "window-contents" },
    });
    var __VLS_0 = {};
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ onClick: (...[$event]) => {
                if (!(__VLS_ctx.isSP))
                    return;
                __VLS_ctx.fullScreen(true);
            } },
        ...{ class: "window-footer" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
}
else {
    const __VLS_2 = {}.Vue3DraggableResizable;
    /** @type {[typeof __VLS_components.Vue3DraggableResizable, typeof __VLS_components.Vue3DraggableResizable, ]} */ ;
    // @ts-ignore
    const __VLS_3 = __VLS_asFunctionalComponent(__VLS_2, new __VLS_2({
        initW: (400),
        initH: (300),
        w: (__VLS_ctx.windowW),
        h: (__VLS_ctx.windowH),
        x: (__VLS_ctx.windowX),
        y: (__VLS_ctx.windowY),
        active: (__VLS_ctx.active),
        parent: (__VLS_ctx.parent),
        draggable: (__VLS_ctx.draggable),
        resizable: (__VLS_ctx.resizable),
        ...{ class: "window" },
        ...{ class: ({ 'focus': props.select, 'full-screen': __VLS_ctx.fullScreenFlag && props.select }) },
        onDragStart: (__VLS_ctx.onDragStartCallback),
    }));
    const __VLS_4 = __VLS_3({
        initW: (400),
        initH: (300),
        w: (__VLS_ctx.windowW),
        h: (__VLS_ctx.windowH),
        x: (__VLS_ctx.windowX),
        y: (__VLS_ctx.windowY),
        active: (__VLS_ctx.active),
        parent: (__VLS_ctx.parent),
        draggable: (__VLS_ctx.draggable),
        resizable: (__VLS_ctx.resizable),
        ...{ class: "window" },
        ...{ class: ({ 'focus': props.select, 'full-screen': __VLS_ctx.fullScreenFlag && props.select }) },
        onDragStart: (__VLS_ctx.onDragStartCallback),
    }, ...__VLS_functionalComponentArgsRest(__VLS_3));
    var __VLS_6 = {};
    __VLS_5.slots.default;
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "window-contents" },
    });
    var __VLS_7 = {};
    if (props.type === 'about') {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ onClick: (...[$event]) => {
                    if (!!(__VLS_ctx.isSP))
                        return;
                    if (!(props.type === 'about'))
                        return;
                    __VLS_ctx.fullScreen(true);
                } },
            ...{ class: "window-footer" },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    }
    var __VLS_5;
}
/** @type {__VLS_StyleScopedClasses['window']} */ ;
/** @type {__VLS_StyleScopedClasses['active']} */ ;
/** @type {__VLS_StyleScopedClasses['full-screen']} */ ;
/** @type {__VLS_StyleScopedClasses['window-contents']} */ ;
/** @type {__VLS_StyleScopedClasses['window-footer']} */ ;
/** @type {__VLS_StyleScopedClasses['window']} */ ;
/** @type {__VLS_StyleScopedClasses['focus']} */ ;
/** @type {__VLS_StyleScopedClasses['full-screen']} */ ;
/** @type {__VLS_StyleScopedClasses['window-contents']} */ ;
/** @type {__VLS_StyleScopedClasses['window-footer']} */ ;
// @ts-ignore
var __VLS_1 = __VLS_0, __VLS_8 = __VLS_7;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            Vue3DraggableResizable: Vue3DraggableResizable,
            windowX: windowX,
            windowY: windowY,
            windowW: windowW,
            windowH: windowH,
            active: active,
            parent: parent,
            isSP: isSP,
            draggable: draggable,
            resizable: resizable,
            fullScreenFlag: fullScreenFlag,
            fullScreen: fullScreen,
            onDragStartCallback: onDragStartCallback,
        };
    },
    emits: {},
    props: {
        type: String,
        select: Boolean,
        fullScreen: Boolean
    },
});
const __VLS_component = (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    emits: {},
    props: {
        type: String,
        select: Boolean,
        fullScreen: Boolean
    },
});
export default {};
; /* PartiallyEnd: #4569/main.vue */
//# sourceMappingURL=Window.vue.js.map