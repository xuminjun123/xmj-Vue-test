<!--
 * @Description: audio 点击语音播放
 * @param : 
 * @return: 
 * @Author: xmj
 * @Date: 2021-06-22 17:31:15
-->
<template>
    <div class="wrapper">
        <div id="Vue">
            <div class="Voice" @click="play">
                <img
                    class="voiceBg"
                    src="http://sucai.suoluomei.cn/sucai_zs/images/20200215163747-fasvava.png"
                    alt
                />
                <img
                    v-if="bofang"
                    class="voicePlay"
                    src="https://sucai.suoluomei.cn/sucai_zs/images/20200215164845-brbr.png"
                    alt
                />
                <img
                    v-if="!bofang"
                    class="voicePlay"
                    src="https://sucai.suoluomei.cn/sucai_zs/images/20190910181201-1_2.gif"
                    alt
                />
                <p class="voiceRed"></p>
                <p class="seCond">{{ miaoshu }}</p>
                <audio :src="url" id="audioId" preload />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'audioTest',
    components: {},
    props: {},
    data() {
        return {
            url: "https://api.hepulanerp.com/ffmpeg/2019-11-05/1572951158.mp3",
            miaoshu: 6,
            bofang: true
        };
    },
    watch: {},
    computed: {},
    methods: {
        play() {
            this.bofang = false
            let player = document.getElementById("audioId");
            let timeHm = parseInt(this.miaoshu) * 1000
            if (player.paused) {
                player.play(); /*播放*/
                setTimeout(() => {
                    this.bofang = true
                }, timeHm)
            } else {
                player.pause(); /*暂停*/
            }
        }
    },
    created() { },
    mounted() { }
};
</script>
<style lang="scss" scoped>
.wrapper {
    .Voice {
        width: 10rem;
        position: relative;
        display: flex;
        flex-direction: row;
    }

    .voiceBg {
        width: 5rem;
        height: 2rem;
    }

    .seCond {
        position: absolute;
        left: 5.4rem;
        font-size: 0.5rem;
        bottom: 0.3rem;
        color: #aaa;
    }

    .voiceRed {
        position: absolute;
        left: 5.4rem;
        top: 0.3rem;
        width: 0.2rem;
        height: 0.2rem;
        background: red;
        border-radius: 50%;
    }

    .voicePlay {
        position: absolute;
        left: 0.5rem;
        width: 1rem;
        top: 0.5rem;
    }
}
</style>