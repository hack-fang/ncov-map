<template>
  <baidu-map class="map" :center="center" :zoom="zoom" :auto-resize="true" :scroll-wheel-zoom="true">
    <bm-navigation
      anchor="BMAP_ANCHOR_TOP_RIGHT"
      :offset="{width:0,height:100}"
      :enableGeolocation="true"
    ></bm-navigation>
    <bm-geolocation anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :showAddressBar="true" :autoLocation="true"></bm-geolocation>
    <bm-marker
      v-bind:items="items"
      v-for="(item, index) in items"
      v-bind:item="item"
      v-bind:index="index"
      v-bind:key="item.id"
      :position="{'lng':item.position[0],'lat':item.position[1]}"
      :dragging="false"
      @click="infoWindowOpen(index)"
    >
      <bm-info-window
        :autoPan="true"
        :show="item.show"
        :closeOnClick="true"
        @close="infoWindowClose(index)"
        @open="infoWindowOpen(index)"
      >
        <el-tag effect="dark">{{item.province}}</el-tag>

        <el-tag type="warning" effect="dark">{{item.city}}</el-tag>

        <el-tag type="danger" effect="dark">{{item.county}}</el-tag>

        <h5>{{item.detail}}</h5>

        <div>来源自:<el-link :href="item.sourceUrl" target="_blank" type="primary">{{item.infoSource}}</el-link></div>
        <p>发布时间:{{getExactTime(item.updateTime)}}</p>
      </bm-info-window>
    </bm-marker>
    <bm-city-list class="bm-city-list" anchor="BMAP_ANCHOR_TOP_LEFT" :offset="{width:30,height:90}"></bm-city-list>
  </baidu-map>
</template>

<script>
// import axios from 'axios'
export default {
  props: ["items"],
  data() {
    return {
      // items: this.data,
      center: { lng: 103.710338, lat: 31.812342 },
      zoom: 5
    };
  },
  methods: {
    infoWindowClose(index) {
      //  console.log(index)
      this.items[index].show = false;
    },
    infoWindowOpen(index) {
      // console.log(index)

      this.items[index].show = true;
    },
    getExactTime(time) {   
        var date = new Date(time* 1000);
        window.console.log(time)
        var year = date.getFullYear() + '-';
        var month = (date.getMonth()+1 < 10 ? '0' + (date.getMonth()+1) : date.getMonth()+1) + '-';
        var dates = (date.getDate() +1 < 10 ? '0' + date.getDate()  : date.getDate() ) ;
        // var hour = date.getHours() + ':';
        // var min = date.getMinutes() + ':';
        // var second = date.getSeconds();
        return year + month + dates  ;
    }

    // getData(){
    //   axios
    //   .get('https://lab.ahusmart.com/nCoV/api/detail?province=北京市')
    //   .then(response =>
    //   {this.items = response.data.results})
    // }
  }
  //   created () {
  //     this.getData()

  //  }
};
</script>


<style>
.map {
  width: 100%;
  height: 100%;

  position: absolute;
}
.el-tag {
  margin-left: 5px;
}
</style>