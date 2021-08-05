<!--
 * @Description: 手风琴 css效果
 * @param : 
 * @return: 
 * @Author: xmj
 * @Date: 2021-08-04 16:15:50
-->
<template>
    <div>
        <h1>手风琴 css效果</h1>
        <Accordion :imgs="imgs"></Accordion>
    </div>
</template>

<script>
import Accordion from '@/components/CssTricks/accordion.vue'
import bg1 from '@/assets/images/CssTricks/bg1.jpg'
import bg2 from '@/assets/images/CssTricks/bg2.jpeg'
import bg3 from '@/assets/images/CssTricks/bg3.jpeg'
import bg4 from '@/assets/images/CssTricks/bg4.jpeg'
import bg5 from '@/assets/images/CssTricks/bg5.jpeg'
export default {
    name: 'accordion',
    components: {
        Accordion
    },
    props: {},
    data() {
        return {
            imgs: [
                bg1,
                bg2,
                bg3,
                bg4,
                bg5,
            ]
        };
    },

}

</script>
