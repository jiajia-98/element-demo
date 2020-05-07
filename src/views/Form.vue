<template>
    <div>
        <el-col :span="12">
            <el-form :model="formData" ref="formRef" label-width="80px" :rules="formRuels">
                <!-- 文本框 -->
                <el-form-item
                    :label="'文本框'+index"
                    v-for="(item,index) in formData.textList"
                    :key="item.key"
                    :prop="'textList.' + index + '.text'"
                    :rules="[
                        { required: true, message: '请输入邮箱地址', trigger: 'blur' },
                        { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
                    ]"
                >
                    <el-col :span="20">
                        <el-input v-model="item.text"></el-input>
                    </el-col>
                    <el-col :span="4">
                        <el-button
                            class="btn-add"
                            type="danger"
                            icon="el-icon-minus"
                            circle
                            @click="deleteItem(item)"
                        ></el-button>
                    </el-col>
                </el-form-item>
                <!-- 单选按钮 -->
                <el-form-item label="单选按钮" prop="radio">
                    <el-radio v-model="formData.radio" label="1">单选按钮1</el-radio>
                    <el-radio v-model="formData.radio" label="2">单选按钮2</el-radio>
                </el-form-item>
                <!-- 复选按钮 -->
                <el-form-item label="复选按钮" prop="checkList">
                    <el-checkbox-group v-model="formData.checkList">
                        <el-checkbox label="复选框A"></el-checkbox>
                        <el-checkbox label="复选框B"></el-checkbox>
                        <el-checkbox label="复选框C"></el-checkbox>
                    </el-checkbox-group>
                </el-form-item>
                <!-- 文件上传 -->
                <el-form-item label="文件上传">
                    <el-upload
                        class="upload-demo"
                        action="https://jsonplaceholder.typicode.com/posts/"
                        :on-preview="handlePreview"
                        :on-remove="handleRemove"
                        :file-list="fileList"
                        list-type="picture"
                    >
                        <el-button size="small" type="primary">点击上传</el-button>
                        <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb111</div>
                    </el-upload>
                </el-form-item>

                <!-- 提交等操作 -->
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">提交</el-button>
                    <el-button type="success" @click="addItem">新增文本框</el-button>
                    <el-button @click="resetForm">取消</el-button>
                </el-form-item>
            </el-form>
        </el-col>
    </div>
</template>

<script>
export default {
    data() {
        return {
            formData: {
                textList: [
                    {
                        text: ""
                    }
                ],
                radio: "1",
                checkList: ["复选框A"]
            },

            formRuels: {
                texts: [
                    {
                        required: true,
                        message: "请输入文本内容",
                        trigger: "blur"
                    }
                ],
                radio: [
                    { required: true, message: "请选择选项", trigger: "blur" }
                ],
                checkList: [
                    { required: true, message: "请选择选项", trigger: "blur" }
                ]
            },
            fileList:[]
        };
    },
    methods: {
        //提交表单
        onSubmit() {
            this.$refs.formRef.validate(v => {
                console.log(v);
                if (!v) return this.$message.error("请填写表单内容");
                this.$message.success("验证通过");
            });
        },
        //重置表单
        resetForm() {
            this.$refs.formRef.resetFields();
        },
        //添加input输入框
        addItem() {
            this.formData.textList.push({
                text: "",
                key: Date.now()
            });
        },
        //删除input输入框
        deleteItem(item) {
            console.log(item.text);
            var index = this.textList.indexOf(item);
            if (index !== -1) {
                this.textList.splice(index, 1);
            }
        },
        //移除上传文件
        handleRemove(file, fileList) {
        console.log(file, fileList);
        },
        //点击上传文件的时候
        handlePreview(file) {
            console.log(file);
        }
    }
};
</script>

<style lang="scss" scoped>
</style>