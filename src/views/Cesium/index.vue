<template>
    <div class="map">
        <CesiumViewer />
    </div>
</template>

<script>
import CesiumViewer from '@/components/CesiumViewer'
export default {
    name: 'Cesium',
    components: {
        CesiumViewer
    }
};
</script>
<style scoped>
.map {
    width: 100%;
    height: 100%;
}
</style>
