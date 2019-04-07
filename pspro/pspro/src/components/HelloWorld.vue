<template>
  <div id="sadf">
    <!-- 工具栏容器 -->
    <div id="toolbar-container"></div>

    <!-- 编辑器容器 -->
    <div id="editor">

    </div>

    <!--<div contenteditable="true" style="height: 500px;width: 500px">-->
      <!--<vue-fabric ref="canvas" :width="200" :height="200"></vue-fabric>-->
    <!--</div>-->


    <button @click="click()">sdfgfsd</button>
  </div>
</template>

<script>
  import CKEditor from '@ckeditor/ckeditor5-build-classic'


  export default {
    components:{
      CKEditor
    },
    mounted(){


    },
    data() {
      return {
        editor:null,//编辑器实例

      }
    },
    mounted() {
      this.initCKEditor()
    },
    methods: {
      click(){
        alert(this.editor.getData())
    this.$refs.canvas.setBackgroundImage('https://cdn2.jianshu.io/assets/web/qingteng-08e20c9580206e7f8e337e0e0efd01c6.png');
      },
      initCKEditor() {
        CKEditor.create(document.querySelector('#editor'), {
          ckfinder: {
            uploadUrl: '/admin/Upload/uploadUrl'
            //后端处理上传逻辑返回json数据,包括uploaded(选项true/false)和url两个字段
          }


        }).then(editor => {
          const toolbarContainer = document.querySelector('#toolbar-container');
          toolbarContainer.appendChild(editor.ui.view.toolbar.element);
          this.editor = editor //将编辑器保存起来，用来随时获取编辑器中的内容等，执行一些操作

          CKEditor.replace('<vue-fabric>',{allowedContent: true});

          this.editor.setData(" <vue-fabric ref=\"canvas\" :width=\"200\" :height=\"200\"></vue-fabric>")
          this.editor.setData(" <button>sfadfasdfasdfasd</button>")

        }).catch(error => {
          // console.error(error);
        });
      }
    }
  }
 </script>
