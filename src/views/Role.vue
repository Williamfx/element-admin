<template>
  <div class="role-manage">
    <div class="query-form">
      <el-form ref="form" :inline="true" :model="queryForm">
        <el-form-item label="角色名称" prop="roleName">
          <el-input v-model="queryForm.menuName" placeholder="请输入角色名称" />
        </el-form-item>
        <el-form-item label="菜单状态" prop="menuState">
          <el-select v-model="queryForm.menuState">
            <el-option :value="1" label="正常"></el-option>
            <el-option :value="2" label="停用"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="getMenuList">查询</el-button>
          <el-button @click="handleReset('form')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="base-table">
      <div class="action">
        <el-button type="primary" @click="handleAdd">创建</el-button>
      </div>
      <el-table
        :data="roleList"
      >
        <el-table-column
          v-for="item in columns"
          :key="item.prop"
          :prop="item.prop"
          :label="item.label"
          :width="item.width"
          :formatter="item.formatter"
        >
        </el-table-column>
        <el-table-column label="操作" width="260">
          <template #default="scope">
            <el-button size="mini" @click="handleEdit"
              >编辑</el-button
            >
            <el-button size="mini"
              >设置权限</el-button
            >
            <el-button
              type="danger"
              size="mini"
              @click="handleDel(scope.row._id)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-pagination
        class="pagination"
        background layout="prev, pager, next"
        :total="pager.total"
        @current-change="handleCurrentChange"
    />
    <el-dialog title="用户新增" v-model="showModal">
      <el-form
        ref="dialogForm"
        :model="roleForm"
        label-width="100px"
        :rules="rules"
      >
        <el-form-item label="角色名称" prop="parentId">
          <el-input v-model="roleForm.roleName" placeholder="请输入角色名称"/>
        </el-form-item>
        <el-form-item label="备注" prop="remark">
          <el-input type="textarea" :rows="2" v-model="roleForm.remark" placeholder="请输入备注"/>
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="handleClose">取 消</el-button>
          <el-button type="primary" @click="handleSubmit">确 定</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>
<script>
import utils from "../utils/utils";
export default {
  name: "role",
  data() {
    return {
      queryForm: {
        roleName: "",
      },
      columns: [
        {
          label: "角色名称",
          prop: "roleName",
          width: 150,
        },
        {
          label: "备注",
          prop: "remark",
        },
        {
          label: "权限列表",
          prop: "menuType",
        },
        {
          label: "创建时间",
          prop: "createTime",
        }, 
        {
          label: "创建时间",
          prop: "createTime",
          formatter(row, column, value) {
            return utils.formateDate(new Date(value));
          },
        },
      ],
      roleList: [],
      pager: {
        total:0,
        pageSize: 10,
      },
      showModal: false,
      roleForm:{

      },
      rules: {
        roleName: [
          {
            required: true,
            message: '请输入角色名称'
          }
        ]
      }
    };
  },
  mounted() {
    this.getRoleList();
  },
  methods: {
    // 菜单列表初始化
    async getRoleList() {
      try {
        let { list,page } = await this.$api.getRoleList(this.queryForm);
        this.roleList = list;
        this.pager.total = page.total;
      } catch (e) {
        throw new Error(e);
      }
    },
    // 表单重置
    handleReset(form) {
      this.$refs[form].resetFields();
    },
    handleAdd(){
      this.action = "create";
      this.showModal = true;
    },
    async handleDel(_id) {
      await this.$api.menuSubmit({_id,action:'delete'});
      this.$message.success('删除成功')
      this.getMenuList();
    },
    handleClose() {
      this.handleReset("dialogForm")
      this.showModal = false;
    },
    handleSubmit() {
      this.$refs.dialogForm.validate((valid)=>{
        if(valid) {
          // let params = {this.roleForm};
          this.$api.roleOperate(params);
        }
      })
    }
  },
};
</script>

<style lang="scss">
</style>