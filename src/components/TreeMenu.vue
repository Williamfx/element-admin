<template>
    <template v-for="menu in userMenu">
        <el-sub-menu v-if="menu.children && menu.children.length>0 && menu.children[0].menuType ==1 " :key="menu._id" :index="menu.path">
            <template #title>
                <i :class="menu.icon"></i>
                <!-- <el-icon><setting /></el-icon> -->
                <span>{{menu.menuName}}</span>
            </template>
            <!-- <template #title><i class="iconfont">{{menu.icon}}</i><span>{{menu.menuName}}</span></template> -->
            <!-- <el-menu-item index="1-2"><i class="iconfont">&#xe610;</i>菜单管理</el-menu-item> -->
            <tree-menu :userMenu="menu.children"/>
        </el-sub-menu>
        <el-menu-item v-else-if="menu.menuType == 1" :index="menu.path" :key="menu._id">{{menu.menuName}}</el-menu-item>
    </template>
</template>

<script>
export default {
    name: 'TreeMenu',
    props: {
        userMenu: {
            type: Array,
            default() {
                return []
            }
        }
    },
}
</script>

<style>

</style>