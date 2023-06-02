1<template>
  <div class="app-container">
    <!--查询表单-->
    <div class="search-div">
      <el-form label-width="70px" size="small">
        <el-row>
          <el-col :span="24">
            <el-form-item label="角色名称">
              <el-input
                style="width: 100%"
                v-model="searchObj.roleName"
                placeholder="角色名称"
              ></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row style="display: flex">
          <el-button
            type="primary"
            icon="el-icon-search"
            size="mini"
            :loading="loading"
            @click="fetchData()"
            >搜索</el-button
          >
          <el-button icon="el-icon-refresh" size="mini" @click="resetData"
            >重置</el-button
          >
          <el-button type="success" icon="el-icon-plus" size="mini" @click="add"
        >添 加</el-button
      >
      <el-button class="btn-add" size="mini" @click="batchRemove()"
        >批量删除</el-button
      >
        </el-row>
      </el-form>
    </div>
    <!-- 工具条 -->
    <!-- <div class="tools-div">

    </div> -->

    <!-- 表格 -->
    <el-table
      v-loading="listLoading"
      :data="roleList"
      stripe
      border
      style="width: 100%; margin-top: 10px"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" />

      <el-table-column label="序号" width="70" align="center">
        <template slot-scope="scope">
          {{ (page - 1) * limit + scope.$index + 1 }}
        </template>
      </el-table-column>

      <el-table-column prop="roleName" label="角色名称" />
      <el-table-column prop="roleCode" label="角色编码" />
      <el-table-column prop="createTime" label="创建时间" width="160" />
      <el-table-column label="操作" width="200" align="center">
        <template slot-scope="scope">
          <el-button
            type="primary"
            icon="el-icon-edit"
            size="mini"
            @click="edit(scope.row.id)"
            title="修改"
          />
          <el-button
            type="danger"
            icon="el-icon-delete"
            size="mini"
            @click="removeDataById(scope.row.id)"
            title="删除"
          />
        </template>
      </el-table-column>
    </el-table>

    <!-- 分页组件 -->
    <el-pagination
      :current-page="page"
      :total="total"
      :page-size="limit"
      style="padding: 30px 0; text-align: center"
      layout="total, prev, pager, next, jumper"
      @current-change="fetchData"
    />

    <!-- 弹框 -->
    <el-dialog :title="roleTitle" :visible.sync="dialogVisible" width="40%">
      <el-form
        ref="dataForm"
        :model="sysRole"
        label-width="150px"
        size="small"
        style="padding-right: 40px"
      >
        <el-form-item label="角色名称">
          <el-input v-model="sysRole.roleName" />
        </el-form-item>
        <el-form-item label="角色编码">
          <el-input v-model="sysRole.roleCode" />
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button
          @click="dialogVisible = false"
          size="small"
          icon="el-icon-refresh-right"
          >取 消</el-button
        >
        <el-button
          type="primary"
          icon="el-icon-check"
          @click="saveOrUpdate()"
          size="small"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
//  引入js
import api from "@/api/system/sysRole";
export default {
  //vue代码结构
  data() {
    return {
      roleList: [], // 列表
      total: 0, // 总记录数
      page: 1, // 页码
      limit: 10, // 每页记录数
      searchObj: {}, // 查询条件
      dialogVisible: false, // 弹框是否可见
      sysRole: {}, //接收表单的值
      roleTitle: "",//提交框title
      multipleSelection: [], // 批量删除选中的记录列表
    };
  },
  created() {
    // 渲染之前执行代码
    this.fetchData();
  },
  methods: {
    // 条件分页查询
    fetchData(current = 1) {
      this.page = current;
      // 调用api
      api
        .getSysRolePageList(this.page, this.limit, this.searchObj)
        .then((response) => {
          this.roleList = response.data.records;
          this.total = response.data.total;
        });
    },
    //删除角色方法
    removeDataById(id) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          return api.removeById(id);
        })
        .then((response) => {
          this.fetchData();
          this.$message({
            type: "success",
            message: "删除成功!",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
    //新增或修改角色框弹出方法
    add(){
      this.dialogVisible = true;
      if(this.sysRole.id!=null && this.sysRole.id == undefined)
    },
    //存储新增角色方法
    saveOrUpdate(){
      if(this.sysRole.id)
      api.save(this.sysRole).then(response =>{
        this.dialogVisible = false;
        this.fetchData();
        this.$message({
          type:"success",
          message:"已新增角色信息"
        })
        .catch(()=>{
          this.$message({
            type: "info",
            message: "新增失败",
          });
        })
      })
    },
  },
};
</script>