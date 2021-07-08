<template>
  <div class="eng-modal-img" v-if="previewVisible">
    <div class="eng-modal-top">
      <span class="eng-title">{{ title }}</span>
      <i
        class="iconshanchu2 iconfont action"
        @click="handleColse"
        style="z-index:999"
      />
    </div>
    <div class="eng-modal-center">
      <div class="eng-modal-left">
        <i class="el-icon-arrow-left" @click.stop="tabBtnEvent('left')" />
      </div>
      <div class="eng-modal-pre">
        <div class="img-info" :style="{ height: showInfo ? `100%` : null }">
          <div class="left" :class="{ ellipsis: !showInfo }">
            {{ imgInfo }}
          </div>
          <div class="right">
            <i class="iconfangda iconfont action" @click="handelImgChange(1)" />
            <i
              class="iconsuoxiao iconfont action"
              @click="handelImgChange(2)"
            />
            <i class="iconxiazai iconfont action" @click="handelImgChange(3)" />
            <i class="icontixing iconfont action" @click="handelImgChange(4)" />
          </div>
        </div>
        <el-image
          :src="previewImage"
          :style="{ transform: `scale(${imgScale})` }"
          fit="scale-down"
        />
      </div>
      <div class="eng-modal-right">
        <i class="el-icon-arrow-right" @click.stop="tabBtnEvent('right')" />
      </div>
    </div>
    <div class="eng-modal-bottom">
      <div class="bottom-left" @click="handleBottomArrow(1)">
        <!-- <div class="border"></div> -->
        <i class="el-icon-arrow-left" />
      </div>
      <div
        class="eng-modal-images"
        v-iscroll="{
          option: iscrollConf,
          instance: getIscroll
        }"
        ref="scrollContainer"
      >
        <ul class="eng-modal-image-item" ref="tabLiContainer">
          <li
            class="tab-li-item"
            v-for="(item, index) in data"
            :key="item.id"
            :id="item.id"
            ref="tabItem"
            @click="showPreview(item, index)"
          >
            <div class="modal-images">
              <img
                :src="item.url"
                alt=""
                ref="tabImgItem"
                :data-url="item.url"
                :data-info="item.desc"
                fit="cover"
                :class="
                  currentIndex == index ? 'modal-select-image' : 'modal-image'
                "
              />
            </div>
          </li>
        </ul>
        <div class="bottom-right" @click="handleBottomArrow(2)">
          <!-- <div class="border"></div> -->
          <i class="el-icon-arrow-right" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { downloadImage } from "../../utils/index";

export default {
  name: "ImgModal",
  props: {
    img: {
      type: [String, Object],
      default: ""
    },
    title: {
      type: String,
      default: "风场照片"
    },

    data: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      //图片缩放
      imgScale: 1,
      showInfo: false,
      imgInfoHeight: 140,
      imgInfo: "",
      previewVisible: false,
      previewImage: "",
      iscrollConf: {
        bounce: true,
        mouseWheel: true,
        click: true,
        scrollX: true,
        scrollY: false
      },
      myScroll: null,
      currentIndex: 0
    };
  },
  methods: {
    handleColse() {
      this.previewVisible = false;
    },
    handelImgChange(value) {
      const { imgScale } = this;
      switch (value) {
        case 1:
          if (imgScale > 3) {
            this.$tip.info("不能再放大了");
            return;
          }
          this.imgScale += 0.1;
          break;
        case 2:
          if (imgScale < 0.3) {
            this.$tip.info("不能再缩小了");
            return;
          }
          this.imgScale -= 0.1;
          break;
        case 3:
          downloadImage(this.previewImage, "pic");
          break;
        case 4:
          this.showInfo = !this.showInfo;
          break;
        default:
          break;
      }
    },
    show(item) {
      this.previewVisible = true;
      this.imgScale = 1;
      this.previewImage = item.url;
      this.currentIndex = parseInt(item.index);
      this.imgInfo = item.info;
    },
    showPreview(item, index) {
      this.previewImage = item.url;
      this.currentIndex = parseInt(index);
      this.imgInfo = item.desc;
      this.$refs.tabItem[index].scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest"
      });
    },
    tabBtnEvent(direction) {
      const max = this.$refs.tabItem.length;
      if (direction === "left" && this.currentIndex > 0) {
        this.currentIndex--;
      }
      if (direction === "right" && this.currentIndex < max - 1) {
        this.currentIndex++;
      }
      const url = this.$refs.tabImgItem[this.currentIndex].src;
      const desc = this.$refs.tabImgItem[this.currentIndex].dataset.info;
      this.showPreview({ url, desc }, this.currentIndex);
    },
    getIscroll(iscroll) {
      this.myScroll = iscroll;
    },
    handleBottomArrow(value) {
      const tabLiContainer = this.$refs.tabLiContainer;
      let step = 650;
      switch (value) {
        case 1:
          tabLiContainer.scrollLeft -= step;
          break;
        case 2:
          tabLiContainer.scrollLeft += step;
          break;
        default:
          break;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
$headerBg: #081e3c;
$arrowColor: rgba(0, 0, 0, 0.349);
$bottomBg: #2f2f2f;
$borderColor: rgb(92, 91, 91);
/* 设置图片灰度 */
.img-filter {
  -webkit-filter: grayscale(100%);
  filter: grayscale(100%);
}
.ellipsis {
  width: 50%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
.eng-modal-img {
  transition: opacity 0.5s;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 888;
  // width: 800px;
  height: 100vh;
  .eng-modal-top {
    height: 4vh;
    background-color: $headerBg;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px;
    .eng-title {
      color: #fff;
    }
    .action {
      color: #fff;
      cursor: pointer;
    }
  }
  .eng-modal-center {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 86vh;
    position: relative;
    .arrow {
      position: absolute;
      z-index: 999;
      font-size: 60px;
      color: #fff;
      width: 80px;
      height: 80px;
      border-radius: 50%;
      text-align: center;
      background-color: $arrowColor;
      cursor: pointer;
    }
    .eng-modal-left {
      left: 20px;
      @extend .arrow;
    }
    .eng-modal-right {
      @extend .arrow;
      right: 20px;
    }
    .eng-modal-pre {
      position: relative;
      height: 100%;
      width: 100%;
      background-color: rgba(0, 0, 0, 0.849);
      // width: 800px;
      .img-info {
        z-index: 999;
        display: flex;
        align-items: center;
        position: absolute;
        justify-content: space-between;
        padding: 0 20px;
        bottom: 0;
        min-height: 60px;
        max-height: 150px;
        width: 100%;
        background-color: $arrowColor;
        .left {
          color: #fff;
          height: 100%;
          white-space: pre-line;
          text-align: left;
        }
        .right {
          color: #fff;
          .action {
            font-size: 25px;
            cursor: pointer;
          }
          .action + .action {
            margin-left: 16px;
          }
        }
      }
      .el-image {
        width: 100%;
        //   width: 780px;

        height: 100%;
        object-fit: contain;
        filter: alpha(opacity=60);
        -moz-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
        -khtml-user-select: none;
        user-select: none;
      }
    }
  }
  .eng-modal-bottom {
    background-color: $bottomBg;
    height: 10vh;
    z-index: 888;
    position: relative;
    .bottom-arrow {
      position: absolute;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 3vw;
      height: 100%;
      background-color: $bottomBg;
      font-size: 30px;
      color: #fff;
      overflow: hidden;
      z-index: 199;
      cursor: pointer;
    }
    .bottom-left {
      @extend .bottom-arrow;
      left: 0;
      box-shadow: $borderColor 2px 1px 4px;
    }
    .bottom-right {
      @extend .bottom-arrow;
      box-shadow: $borderColor -2px 1px 4px;
      right: 0;
    }
    .eng-modal-images {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: nowrap;
      padding: 10px 20px;
      height: 100%;

      .eng-modal-image-item {
        white-space: nowrap;
        overflow-x: scroll;
        width: 80vw;
        padding: 0;
        cursor: pointer;
        &::-webkit-scrollbar {
          display: none; /* Chrome Safari */
        }
        display: flex;
        align-items: center;
        flex-wrap: nowrap;
        li {
          list-style-type: none;
        }
        li + li {
          margin-left: 15px;
        }
        .modal-images {
          background-color: #000;
          .el-image {
            opacity: 0.6;
            object-fit: cover;
          }
        }
        .modal-image-size {
          width: 70px;
          height: 60px;
        }
        .modal-image {
          @extend .modal-image-size;
          object-fit: cover;
          @extend .img-filter;
        }
        .modal-select-image {
          @extend .modal-image-size;
          object-fit: cover;
          opacity: 1;
          transition: all 0.1s ease-out 0s; /* 常用的简写方式 */
        }
      }
    }
  }
}
</style>
