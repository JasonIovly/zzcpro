<template>
  <div class="hello">
    <smeditor :config='config'></smeditor>
  </div>
</template>

<script>

  import SMEditor from '@/components/SMEditor.vue'

  const config = {
    // 接口地址
    uploadUrl: 'https://jsonplaceholder.typicode.com/posts/',
    // form 里的 filename
    uploadName: 'upload_file',
    // 其他参数
    uploadParams: {},
    sticky: true,
    // 上传成功回调
    uploadCallback: (data) => {
      // console.log(data)
      return data.image.url || 'https://ws1.sinaimg.cn/large/006tNc79gy1fp1rdw7e90j30rs0rsacb.jpg'
    },
    // 上传失败回调, 可选
    uploadFailed: (err) => {
      // console.log('仅供测试, 并非真正上传')
      alert('仅供测试, 并非真正上传!', err)
    }
  }

export default {
  name: 'HelloWorld',
  components: {
    'smeditor': SMEditor,

  },
  data () {
    return {
      config: config
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >

</style>
