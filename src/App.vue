<template>
  <div>
    <div>
      <b-navbar toggleable="lg" type="dark" variant="info" fixed="top">
        <b-navbar-brand href="#">全国新冠病例分布图</b-navbar-brand>

 
 
            <el-cascader
              size="small"
              :options="options"
              v-model="selectedOptions"
              @change="handleChange"
            ></el-cascader>
  
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <el-link href="https://github.com/hack-fang/ncov-map" target="_blank" type="info">Github</el-link>
          </b-nav-form>
        </b-navbar-nav>
      </b-navbar>
    </div>
    <div>
      <baidu :items="data"></baidu>
    </div>
  </div>
</template>

<script>
import baidu from "./components/Baidu.vue";
import axios from "axios";
import { provinceAndCityDataPlus, CodeToText} from "element-china-area-data";
export default {
  components: { baidu },
  data() {
    return {
      options: provinceAndCityDataPlus,
      selectedOptions: ["340000","340100"], // 默认是安徽省合肥市
      data: []
    };
  },

  created: function() {
    document.title = "全国新冠病例小区分布";
    let p = { province: "安徽省", city: "合肥市" };
    this.getData(p);
  },

  methods: {
    handleChange(value) {

      if (value[1] === "") {
        let addr = "";
        addr = CodeToText[value[0]];
        let param = { province: addr };
        this.getData(param);
      } else {
        let param = {
          province: CodeToText[value[0]],
          city: CodeToText[value[1]]
        };

        this.getData(param);
      }
    },
    getData(p) {
      axios
        .get("https://lab.ahusmart.com/nCoV/api/detail", {
          params: p
        })
        .then(response => {
          this.data = response.data.results;
        });
    }
  }
};
</script>

<style scoped>
.bg-info {
  background-color: #409eff !important;
}

.el-link {
  color: #ffffff;
}
</style>
