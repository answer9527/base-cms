<template>
  <div class="version_page flex-x">
    <div class="version_list">
      <VersionOne
        v-for="(item, index) in version_list"
        :createTime="item.createTime"
        :release="item.release"
        :intro="item.intro"
        :key="index"
      />
    </div>
    <div>
      <el-form  ref="versionForm" :model="versionForm" :rules="rules">
        <el-form-item label="版本号：" prop="release">
          <el-input
            placeholder="请输入最新的版本号"
            v-model="versionForm.release"
            
          ></el-input>
        </el-form-item>
        <el-form-item label="版本介绍：" prop="intro">
          <el-input
            type="textarea"
            placeholder="版本详情介绍"
            :rows="5"
            v-model="versionForm.intro"
          ></el-input>
        </el-form-item>
        <el-form-item label="wgt文件：" prop="wgt">
          <UploaderFile @uploadSuccess="uploadSuccess" class="uploader_box"/>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" style="width:100%" @click="insert_version('versionForm')"
            >立即更新</el-button
          >
        
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import VersionOne from "@/components/common/Version/Version";
import UploaderFile from "@/components/common/UploaderFile/UploaderFile"
import { VersionModel } from "@/model/version.js";
export default {
  name: "versionList",
  data() {
    return {
      version_list: [],
      versionForm: {},
        rules:{
            release:[
              { required: true, message: '请输入版本号', trigger: 'blur' },
                 { min: 3, message: '长度需大于3', trigger: 'blur' }
            ],
            intro:[
              { required: true, message: '请填写版本简介', trigger: 'change' },
               { min: 3, message: '长度需大于5', trigger: 'blur' }

            ],
            wgt:[
                { required: true, message: '请上传wgt文件', trigger: 'change' },
            ]

    
          }
    };
  },
  components: {
    VersionOne,UploaderFile
  },
  created() {
    this.getVersionList();
  },
  methods: {
    getVersionList() {
      VersionModel.getVersionList().then((res) => {
        this.version_list = res.data;
      });
    },
    uploadSuccess(e){
        this.versionForm.wgt = e
    },
    insert_version(refName){
            console.log(this.versionForm)
            this.$refs[refName].validate((valid)=>{
              if(valid){
                VersionModel.insertVersion(this.versionForm).then(res=>{
                    this.$message.success(res.message)
                    this.resetForm(refName)
                    this.getVersionList()
                })
              }else{
                return false
              }
            })
    },
    resetForm(refName){
        this.$refs[refName].resetFields();
    },
  },
};
</script>

<style scoped="scoped">
.version_page {
  width: 100%;
}
.version_page > div {
  width: 50%;
}
.version_page > div:nth-child(2) {
  border-left: 1px solid #cccccc;
  padding: 0 10%;
  box-sizing: border-box;
}
.uploader_box{
    margin:40px 0 10px 0
}
</style>