<template>
  <WEditorOption :optBasic="optBasic" :optFull="optFull" @screenOpt="screenOpt" @openTemplateOpt="openTemplateOpt" @isHotList="isHotList"></WEditorOption>
  <TemplateLayer :showTemplateOpt="showTemplateOpt" @closeTemplateOpt="closeTemplateOpt"></TemplateLayer>
  <ScreenSizeLayout :optBasic="optBasic" :optFull="optFull">
    <WEditor :hot_list="hot_list" :note_uid="note_uid" :pre_note_uid="pre_note_uid"></WEditor>
  </ScreenSizeLayout>
</template>

<script>
import { watch, ref } from "vue";
import { useRoute } from "vue-router";
import WEditorOption from "@/weditor/components/w-editor/note-option.vue";
import TemplateLayer from "@/weditor/components/w-editor/template-list.vue";
import ScreenSizeLayout from "@/weditor/components/cmm/screen-size-layout.vue";
import WEditor from "@/weditor/components/w-editor/w-editor.vue";
// import WEditorOption from "@/components/w-editor/note-option.vue";
// import TemplateLayer from "@/components/w-editor/template-list.vue";
// import ScreenSizeLayout from "@/components/cmm/screen-size-layout.vue";
// import WEditor from "@/components/w-editor/w-editor.vue";

export default {
  name: "Note",
  components: {
    WEditorOption,
    TemplateLayer,
    ScreenSizeLayout,
    WEditor,
  },
  data() {
    return {
      param: "",
      path: "",
      optBasic: false,
      optFull: false,
      showTemplateOpt: false,
      hot_list: false,
    };
  },
  setup() {
    const route = useRoute();
    let note_uid = ref("");
    let pre_note_uid = ref("");

    watch(
      () => route.params,
      (to, pre) => {
        // note_uid.value = to.id;
        note_uid.value = 1;
        if (pre !== undefined) {
          // pre_note_uid.value = pre.id;
          pre_note_uid.value = 0;
        }
      },
      {
        immediate: true,
      }
    );
    return {
      note_uid,
      pre_note_uid,
    };
  },
  methods: {
    screenOpt(opt) {
      if (opt === "optBasic") {
        this.optBasic = true;
        this.optFull = false;
      } else {
        this.optBasic = false;
        this.optFull = true;
      }
    },
    openTemplateOpt() {
      this.showTemplateOpt = true;
    },
    closeTemplateOpt() {
      this.showTemplateOpt = false;
    },
    isHotList() {
      this.$cookies.set("hotList", "hotList", "30d");
      this.hot_list = !this.hot_list;
    },
  },
};
</script>

<style lang="scss">
.note-option-icon {
  font-size: 16px;
  border: none;
  background: transparent;
  color: rgb(163, 163, 163);
  &:hover {
    border: 1px solid rgb(163, 163, 163);
    border-radius: 5px;
    cursor: pointer;
  }
}
</style>
