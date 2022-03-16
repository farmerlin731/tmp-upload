<template>
  <div>
    <ul class="step">
      <li
        v-for="(item, id, index) in form.steps"
        :key="item.id"
        @click="jump(index)"
        :class="{ active: form.active == index }"
      >
        {{ item.name }}
      </li>
    </ul>
    <div class="main" @scroll="scrollFn">
      <div class="block" style="height: 500px; background: #00a1ff"></div>
      <div class="block" style="height: 800px; background: #28c28e"></div>
      <div class="block" style="height: 600px; background: #d369ee"></div>
      <div class="block" style="height: 300px; background: #ee697f"></div>
    </div>
  </div>
</template>
<script setup>
// import { reactive } from "@vue/reactivity";
// import { onMounted } from "@vue/runtime-core";
import { reactive, onMounted } from "vue";
const form = reactive({
  active: 0,
  steps: {
    test1: { name: "測試1", id: "test1" },
    test2: { name: "測試2", id: "test2" },
    test3: { name: "測試3", id: "test3" },
    test4: { name: "基本信息", id: "test4" },
  },
});
const jump = (index) => {
  const block = document.querySelectorAll(".block");
  form.active = index;
  block[index].scrollIntoView({ block: "start", behavior: "smooth" });
};
const scrollFn = (e) => {
  e = document.documentElement; //main
  const block = document.querySelectorAll(".block");
  for (let i = block.length - 1; i >= 0; i--) {
    const scrollView = e.scrollTop >= block[i].offsetTop - block[0].offsetTop;
    if (scrollView) {
      form.active = i;
      break;
    }
  }
  // if(e.scrollTop + e.offsetHeight == e.scrollHeight){ // 觸底
  //   form.active = Object.keys(form.steps).length - 1;
  // }
};
onMounted(() => {
  document.addEventListener("scroll", () => {
    scrollFn();
  });
});
</script>
<style lang="scss" scoped>
ul.step {
  width: 150px;
  border: 1px solid #ccc;
  padding: 10px 0;
  text-align: left;
  position: fixed;
  background: #fff;
  li {
    padding: 5px 20px;
    cursor: pointer;
  }
  .active {
    color: #00a1ff;
  }
}
</style>