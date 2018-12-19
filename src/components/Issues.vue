<template>
  <div class="bg">
    <div id="app1">
      <h1 class="vue-title"><b style="color: white">Issues List</b></h1>
      <div class="sub">
        <v-client-table :columns="columns" :data="issues" :options="options">
          <template slot="update" slot-scope="props" >
            <el-button round
              v-model="props.row.on"
              size=mini
              type="success"
              @click="handleSolved(1,props.row._id)"
            >
              solved
            </el-button>
            <el-button round
              v-model="props.row.on"
              size=mini
              type="warning"
              @click="handleUnsolved(0,props.row._id)"
            >
              unsolved
            </el-button>
          </template>
          <a slot="remove" slot-scope="props" class="fa fa-trash-o fa-2x" @click="deleteConfirm(props.row._id)"></a>
          <template slot="detail" slot-scope="props">
            <el-button
                       v-model="props.row.on"
                       size=mini
                       @click="dialogShow(props.row._id)"
            >
              Show Solutions
            </el-button>
          </template>
        </v-client-table>
        <el-dialog
          title="Solutions"
          :visible.sync="dialogVisible"
          width="60%">
          <div>
            <table align="center">
              <tr>
                ID: <h id="h2"> </h>
              </tr>
              <tr>
                Issue: <h id="h1"> </h>
              </tr>
            </table>
          </div>
          <div>
            <v-client-table :columns="columns2" :data="solutions" :options="options2">
              <a slot="upvote" slot-scope="props" class="fa fa-thumbs-up fa-2x" @click="upvote(props.row.solutionId,props.row.parent)"></a>
              <a slot="remove" slot-scope="props" class="fa fa-trash-o fa-2x" @click="deleteConfirm2(props.row.solutionId,props.row.parent)"></a>
            </v-client-table>
          </div>
          <div class="offer">
            <el-form ref="solutionForm" :model="newSolution" :rules="rules" status-icon label-width="80px">
              <el-form-item prop="text">
                <div class="lable">
                  <p align="left">Offer your solution</p>
                </div>
                <div class="button">
                  <el-input v-model="newSolution.text" style="width:70%"></el-input>
                  <el-button type="primary" icon="el-icon-upload" @click="submit">submit</el-button>
                </div>
              </el-form-item>
            </el-form>
          </div>
          <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">Cancel</el-button>
  </span>
        </el-dialog>
      </div>
    </div>
  </div>
</template>

<script>
import IssueService from '@/services/IssueService'
import Vue from 'vue'
import VueTables from 'vue-tables-2'

Vue.use(VueTables.ClientTable, {compileTemplates: true, filterByColumn: true})
export default {
  name: 'Issues',
  data () {
    return {
      newSolution: {},
      rules: {
        text: [
          {required: true, message: 'Content can not be empty', trigger: 'blur'},
          {min: 5, message: 'Length at least 5', trigger: 'blur'}
        ]
      },
      dialogVisible: false,
      props: ['_id', 'text'],
      issues: [],
      solutions: [],
      errors: [],
      columns: ['_id', 'category', 'text', 'status', 'update', 'remove', 'detail'],
      columns2: ['solutionId', 'text', 'like', 'upvote', 'remove'],
      options: {
        sortable: ['status'],
        headings: {
          _id: 'ID',
          category: 'Category',
          text: 'Body',
          status: 'Status',
          detail: 'Detail'
        },
        options2: {
          headings: {
            solutionId: 'ID',
            text: 'Body',
            like: 'Like',
            upvote: 'Upvote',
            remove: 'Delete'
          }
        }
      }
    }
  },
  created () {
    this.loadIssues()
  },
  methods: {
    loadIssues: function () {
      IssueService.fetchIssues()
        .then(response => {
          // JSON responses are automatically parsed.
          this.issues = response.data
          console.log(this.issues)
        })
        .catch(error => {
          this.errors.push(error)
          console.log(error)
        })
    },
    update: function (status, id) {
      IssueService.updateStatus(id, status)
        .then(response => {
          console.log(response)
          this.loadIssues()
        })
        .catch(error => {
          this.errors.push(error)
          console.log(error)
        })
    },
    handleSolved: function (status, id) {
      this.$confirm('Do you want to set this issue to solved?', 'NOTICE', {
        confirmButtonText: 'OK',
        cancelButtonText: 'CANCEL',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: 'Issue has successfully set to solved!'
        })
        this.update(status, id)
      }).catch(() => {
        this.$message({
          type: 'info',
          message: 'operation canceled'
        })
      })
    },
    handleUnsolved: function (status, id) {
      this.$confirm('Do you want to set this issue to unsolved?', 'NOTICE', {
        confirmButtonText: 'OK',
        cancelButtonText: 'CANCEL',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: 'Issue has successfully set to unsolved!'
        })
        this.update(status, id)
      }).catch(() => {
        this.$message({
          type: 'info',
          message: 'operation canceled'
        })
      })
    },
    deleteConfirm: function (id) {
      this.$confirm('Do you want to delete this issue?', 'WARNING', {
        confirmButtonText: 'OK',
        cancelButtonText: 'CANCEL',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: 'Issue has been successfully deleted!'
        })
        this.deleteIssue(id)
      }).catch(() => {
        this.$message({
          type: 'info',
          message: 'operation canceled'
        })
      })
    },
    deleteIssue: function (id) {
      IssueService.deleteIssue(id)
        .then(response => {
          this.loadIssues()
        })
        .catch(error => {
          this.errors.push(error)
          console.log(error)
        })
    },
    dialogShow: function (id) {
      this.dialogVisible = true
      IssueService.findIssue(id).then((res) => {
        // console.log(res.data.text)
        document.getElementById('h1').innerHTML = res.data.text
        document.getElementById('h2').innerHTML = id
      })
      IssueService.fetchSolutions(id)
        .then(response => {
          // JSON responses are automatically parsed.
          this.solutions = response.data
          console.log(this.solutions)
        })
        .catch(error => {
          this.errors.push(error)
          console.log(error)
        })
    },
    upvote: function (id, parent) {
      IssueService.upvote(id)
        .then(response => {
          console.log(response)
          IssueService.fetchSolutions(parent)
            .then(response => {
              // JSON responses are automatically parsed.
              this.solutions = response.data
            })
            .catch(error => {
              this.errors.push(error)
              console.log(error)
            })
        })
        .catch(error => {
          this.errors.push(error)
          console.log(error)
        })
    },
    deleteSolution: function (id, parent) {
      IssueService.deleteSolution(id)
        .then(response => {
          IssueService.fetchSolutions(parent)
            .then(response => {
              // JSON responses are automatically parsed.
              this.solutions = response.data
            })
            .catch(error => {
              this.errors.push(error)
              console.log(error)
            })
        })
        .catch(error => {
          this.errors.push(error)
          console.log(error)
        })
    },
    deleteConfirm2: function (id, parent) {
      this.$confirm('Do you want to delete this solution?', 'WARNING', {
        confirmButtonText: 'OK',
        cancelButtonText: 'CANCEL',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: 'Solution has been successfully deleted!'
        })
        this.deleteSolution(id, parent)
      }).catch(() => {
        this.$message({
          type: 'info',
          message: 'operation canceled'
        })
      })
    },
    submit: function () {
      this.$refs.solutionForm.validate((valid) => {
        console.log(valid)
        if (valid) {
          var solution = {
            parent: document.getElementById('h2').innerHTML,
            text: this.newSolution.text
          }
          IssueService.addSolution(solution)
            .then(response => {
              // JSON responses are automatically parsed.
              console.log(response)
              this.$notify({
                type: 'success',
                message: 'Thanks for your Participation!',
                duration: 3000
              })
              IssueService.fetchSolutions(document.getElementById('h2').innerHTML)
                .then(response => {
                  // JSON responses are automatically parsed.
                  this.solutions = response.data
                })
                .catch(error => {
                  this.errors.push(error)
                  console.log(error)
                })
            })
            .catch(error => {
              this.errors.push(error)
              console.log(error)
              this.$message(error)
            })
        }
      })
    }
  }
}
</script>

<style scoped>
  .bg {
    height:100%;
    width:100%;
    position:absolute;
    background-image: url("../assets/4.png");;
    background-size: cover;
    background-repeat: no-repeat;
  }
  .vue-title {
    margin-top: 0px;
    text-align: center;
    font-size: 45pt;
    margin-bottom: 0px;
  }
  #app1 {
    width: 80%;
    margin: 0 auto;
    color: #fffffb;
  }
  .sub {
    background:rgba(255,255,255,0.7);
  }
  .lable {
    font-size: 20pt;
  }
  .offer {
    background-color: #b4c4ed;
    width:100%;
    margin-top: 20px;
    margin-left: auto;
    margin-right: auto;
  }
  .button {
    margin-bottom: 20px;
  }

</style>
