<!--
 * @Description: 重定向路由
 * @param : 
 * @return: 
 * @Author: xmj
 * @Date: 2021-07-26 11:41:15
-->
<script>
export default {
  created() {
    const { params, query } = this.$route
    const { path } = params
    this.$router.replace({ path: '/' + path, query })
  },
  render: function(h) {
    return h() // avoid warning message
  }
}
</script>
