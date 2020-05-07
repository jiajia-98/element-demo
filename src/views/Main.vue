<template>
    <div class="box">
        <el-container>
            <el-header>demo</el-header>
            <el-container>
                <el-aside width="200px">
                    <el-menu
                        default-active="1"
                        class="el-menu-vertical-demo"
                        background-color="#545c64"
                        text-color="#fff"
                        active-text-color="#ffd04b"
                        :router="true"
                    >
                        <el-menu-item index="1" :route="{name:'form'}">
                            <i class="el-icon-menu"></i>
                            <span slot="title">form表单</span>
                        </el-menu-item>
                        <el-menu-item index="2" :route="{name:'table'}">
                            <i class="el-icon-menu"></i>
                            <span slot="title">table表格</span>
                        </el-menu-item>
                    </el-menu>

                </el-aside>
                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
.box {
    height: 100%;
}
.el-container {
    height: 100%;
}
.el-header,
.el-footer {
    background-color: #b3c0d1;
    color: #333;
    text-align: center;
    line-height: 60px;
}

.el-aside {
    background-color: #545c64;
    color: #333;
    text-align: center;
    line-height: 200px;
}

.el-main {
    background-color: #e9eef3;
    color: #333;
}
</style>