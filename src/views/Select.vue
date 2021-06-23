<!--
 * @Description: select Test
 * @param : 
 * @return: 
 * @Author: xmj
 * @Date: 2021-06-17 14:10:00
-->
<template>
  <div class="wrapper">
    <el-select
      v-model="queryParams.type"
      placeholder="操作类型"
      clearable
      size="small"
      style="width: 240px"
      @change="change"
    >
      <el-option
        v-for="dict in typeOptions"
        :key="dict.dictValue"
        :label="dict.dictLabel"
        :value="dict.dictValue"
      />
    </el-select>
  </div>
</template>

<script>
export default {
  name: "vueName",
  components: {},
  props: {},
  data() {
    return {
      queryParams: {
        type: "",
      },
      typeOptions: [
        {
          dictValue: 1,
          dictLabel: "xxx1",
        },
        {
          dictValue: 2,
          dictLabel: "xxx2",
        },
        {
          dictValue: 3,
          dictLabel: "xxx3",
        },
        {
          dictValue: 4,
          dictLabel: "xxx4",
        },
      ],
    };
  },
  watch: {},
  computed: {},
  methods: {
    change(dist) {
      console.log(dist);
    },
  },
  created() {},
  mounted() {},
};
</script>
<style lang="scss" scoped>
.wrapper {
}
</style>
