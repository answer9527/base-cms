<template>
    <div>
        <editor id="tinymce" v-model="value" :init="init"  :key="tinymceFlag"></editor>
    </div>
</template>

<script>
//引入基础文件：
   
    import tinymce from 'tinymce/tinymce'
    import Editor from '@tinymce/tinymce-vue'
    import 'tinymce/skins/ui/oxide/skin.css'
    import 'tinymce/icons/default/icons.min.js'
    import 'tinymce/themes/silver'
    import 'tinymce/plugins/image'// 插入上传图片插件
    import 'tinymce/plugins/link'// 插入链接
    import 'tinymce/plugins/code'// 插入代码
    import 'tinymce/plugins/preview'// 插入预览
    import 'tinymce/plugins/fullscreen' // 插入全屏按键
    import 'tinymce/plugins/table' //表格插件
    import 'tinymce/plugins/hr' //分割线
    import 'tinymce/plugins/wordcount' //字数统计
    import 'tinymce/plugins/emoticons'  //表情
    import 'tinymce/plugins/paste' //粘贴
    import 'tinymce/plugins/advlist'

    import plugins from "./plugins"
    import toolbar from "./toolbar"
    // import "./zh_CN"

    import axios from 'axios'
    import {Http} from "../../../utils/http"
    import config from "../../../config/config"
    export default {
        name: "tinymce",
        components:{
            Editor
        },
        props:{
            curValue:{
                type:String,
                default:''
            },
            height:{
                type:Number,
                default:500
            }
        },
        data(){
            return{
                tinymceFlag: 1,
                init:{
                    language_url: `${config.editor_url}static/tinymce/langs/zh_CN.js`,// 语言包的路径
                    language: 'zh_CN',//语言
                    skin_url: `${config.editor_url}static/tinymce/skins/ui/oxide`,// skin路径
                    height: this.height,//编辑器高度
                    branding: false,//是否禁用“Powered by TinyMCE”
                    menubar: true,//顶部菜单栏显示
                    elementpath: false,  //禁用编辑器底部的状态栏
                    paste_data_images: true,// 允许粘贴图像
                    plugins:plugins,
                    toolbar:toolbar,
                    // 图片上传回调
                    images_upload_handler: (blobInfo, success, failure) => {
                        // let formdata = new FormData()
                        // formdata.set('file', blobInfo.blob())
                        Http.upload('/upload/file',blobInfo.blob()).then(res=>{
                        success(config.domain_url+res.data)
                        }).catch(res => {
                            failure('error')
                        })
                    }
                },
                value: this.curValue
            }
        },
        mounted() {
            tinymce.init({})
        },
        activated() {
            this.tinymceFlag++
        },
        methods:{
            onClick(e){

            }
        },
        watch: {
        	//动态传参
            curValue(newValue) {
                this.value = newValue
            },
            //读取输入框内的数据
            value(newValue) {
                this.$emit('input', newValue)
            }
        }
    }
</script>