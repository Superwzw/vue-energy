<template>
    <div class="historyModule">
        <div class="search-wraper">
            <div style="margin-right:10px;">
              <Button size="large"type="primary" icon="ios-arrow-back" style="font-size: 15px;" @click="backHome">返回</Button>
            </div>
<!--             <Row class="search-row">
                <span style="color:#fff; font-size: 17px;margin-left: 25px;">搜索：</span>
                <Input size="large" v-model="searchContent" prefix="ios-search" @on-change="handleSearch" placeholder="请输入搜索内容..." style="width: 150px" />
            </Row> -->
            <Row class="search-row">
                <span style="color:#fff; font-size: 17px;margin-left: 35px;">记录类型：</span>
                <Select size="large" v-model="history" style="width:130px;"
                @on-change="changHistory">
                  <Option value="order" label="个人订单记录">
                      <span>个人订单记录</span>
                  </Option>
                  <Option value="balance" label="资产变动记录">
                      <span>资产变动记录</span>
                  </Option>
                  <Option v-if="isAdmin" value="platform" label="平台买卖记录">
                      <span>平台买卖记录</span>
                  </Option>
                  <Option v-if="isAdmin" value="user" label="用户注册记录">
                      <span>用户注册记录</span>
                  </Option>
              </Select>
            </Row>  
            <Row class="search-row" v-if="history==='order' || history==='platform'">
                <span style="color:#fff; font-size: 17px;margin-left: 5px;">状态：</span>
                <Select size="large" v-model="status" style="width:100px;" @on-change="changStatus">                 
                  <Option value="finished" label="已完成">
                      <span>已完成</span>
                  </Option>
                  <Option value="unfinished" label="未完成">
                      <span>未完成</span>
                  </Option>
              </Select>
            </Row>                   
            <Row class="search-row">
                <span style="color:#fff; font-size: 17px;margin-left: 35px;">排序：</span>
                <Select size="large" v-model="val" style="width:100px" @on-change="changSort">
                  <Option value="no" label="无">
                      <span>无</span>
                  </Option>
                  <Option value="unit_price" label="单价">
                      <span>单价</span>
                  </Option>
                  <Option value="amount" label="数量">
                      <span>数量</span>
                  </Option>
                  <Option value="time" label="时间">
                      <span>时间</span>
                  </Option>
              </Select>
            </Row>
            <Row class="search-row" style="margin-left: 5px;">
                <Select size="large" v-model="sort" style="width:100px" @on-change="changSort">
                  <Option value="up" label="升序">
                      <span>升序</span>
                  </Option>
                  <Option value="down" label="降序">
                      <span>降序</span>
                  </Option>
              </Select>
            </Row>
        </div>
    	<div class="table-wraper">
				<Table 
				 ref="selection" v-show="showType === 1"
				no-data-text="暂无数据" :row-class-name="rowClassName"
				:columns="columns1" :data="nowData" highlight-row>
				 </Table>
        <Table 
         ref="selection" v-show="showType === 2"
        no-data-text="暂无数据" :row-class-name="rowClassName"
        :columns="columns2" :data="nowData" highlight-row>
         </Table>  
        <Table 
         ref="selection" v-show="showType === 3"
        no-data-text="暂无数据" :row-class-name="rowClassName"
        :columns="columnsAssets" :data="nowData" highlight-row>
         </Table>
        <Table 
         ref="selection" v-show="showType === 4"
        no-data-text="暂无数据" :row-class-name="rowClassName"
        :columns="columnsTx" :data="nowData" highlight-row>
         </Table> 
        <Table 
         ref="selection" v-show="showType === 5"
        no-data-text="暂无数据" :row-class-name="rowClassName"
        :columns="columnsUser" :data="nowData" highlight-row>
         </Table>                           
			 </div>
			 <div class="page-wraper">
				 <Page 
				 	:total="dataCount" @on-change="changepage" :page-size="pageSize"
				 	show-total show-elevator style="color: white;"/>
			 </div>
    </div>
</template>

<script>
    export default {
    	name:'historyModule',
 			data () {
            return {
		            dataCount: 0,//总条数
		            pageCurrent: 1,//当前
		            nowData:[],
		            pageSize:6,
		            data: [],
                data1: [],
                showType:1,
                searchContent:'',
                history: 'order',
                val:'no',
                sort: 'up',
                isAdmin: true,
                status:'finished',
                nowColumns:[],
                columns1: [
                    {
                        title: '单价',
                        key: 'unit_price',
                        // sortable: true,
                        align:'center',
                        ellipsis: true,
                    },
                    {
                        title: '数量',
                        key: 'amount',
                        // sortable: true,
                        align:'center',
                        ellipsis: true,
                    },
                    {
                        title: '总价',
                        key: 'total',
                        // sortable: true,
                        align:'center',
                        ellipsis: true,
                    },
                {
                    title: '交易时间',
                    key: 'time',
                    align: 'center',
                    ellipsis: true,
                    render: (h, params) => {
                        return h('div', [
                            h('span', {
                                style: {
                                    display: 'inline-block',
                                    width: '100%',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    whiteSpace: 'nowrap'
                                },
                                domProps: {
                                    title: params.row.time
                                }
                            }, params.row.time)
                        ])
                    }
                },
                    {
                        title: '买家',
                        key: 'buyer',
                        align:'center',
                        ellipsis: true,
                    },
                    {
                        title: '订单状态',
                        key: 'state',
                        // sortable: true,
                        align:'center',
                        ellipsis: true,
                    },                
                    {
                        title: '操作',
                        key: 'action',
                        width: 150,
                        align: 'center',
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'primary',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            this.show(params.index)
                                        }
                                    }
                                }, '查看')
                            ]);
                        }
                    }
                ],
                  columns2: [
                    {
                        title: '单价',
                        key: 'unit_price',
                        // sortable: true,
                        align:'center',
                        ellipsis: true,
                    },
                    {
                        title: '数量',
                        key: 'amount',
                        // sortable: true,
                        align:'center',
                        ellipsis: true,
                    },
                    {
                        title: '总价',
                        key: 'total',
                        // sortable: true,
                        align:'center',
                        ellipsis: true,
                    },
                {
                    title: '交易时间',
                    key: 'time',
                    align: 'center',
                    ellipsis: true,
                    render: (h, params) => {
                        return h('div', [
                            h('span', {
                                style: {
                                    display: 'inline-block',
                                    width: '100%',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    whiteSpace: 'nowrap'
                                },
                                domProps: {
                                    title: params.row.time
                                }
                            }, params.row.time)
                        ])
                    }
                },
                    {
                        title: '买家',
                        key: 'buyer',
                        align:'center',
                        ellipsis: true,
                    },
                    {
                        title: '订单状态',
                        key: 'state',
                        // sortable: true,
                        align:'center',
                        ellipsis: true,
                    },                
                    {
                        title: '操作',
                        key: 'action',
                        width: 150,
                        align: 'center',
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'primary',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            this.show(params.index)
                                        }
                                    }
                                }, '查看'),
                                h('Button', {
                                    props: {
                                        type: 'error',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            this.show(params.index)
                                        }
                                    }
                                }, '撤销订单')
                            ]);
                        }
                    }
                ],                
                columnsAssets: [
                    {
                        title: '原始余额',
                        key: 'ori_balance',
                        // sortable: true,
                        align:'center',
                        ellipsis: true,
                    },
                    {
                        title: '变更后余额',
                        key: 'fin_balance',
                        // sortable: true,
                        align:'center',
                        ellipsis: true,
                    },
                    {
                        title: '总价',
                        key: 'total',
                        // sortable: true,
                        align:'center',
                        ellipsis: true,
                    },
                    {
                        title: '交易时间',
                        key: 'time',
                        // sortable: true,
                        align:'center',
                        ellipsis: true,
                    },
                ],
                columnsTx: [
                    {
                        title: '单价',
                        key: 'unit_price',
                        // sortable: true,
                        align:'center',
                        ellipsis: true,
                    },
                    {
                        title: '数量',
                        key: 'amount',
                        // sortable: true,
                        align:'center',
                        ellipsis: true,
                    },
                    {
                        title: '总价',
                        key: 'total',
                        // sortable: true,
                        align:'center',
                        ellipsis: true,
                    },
                {
                    title: '交易时间',
                    key: 'time',
                    align: 'center',
                    ellipsis: true,
                    render: (h, params) => {
                        return h('div', [
                            h('span', {
                                style: {
                                    display: 'inline-block',
                                    width: '100%',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    whiteSpace: 'nowrap'
                                },
                                domProps: {
                                    title: params.row.time
                                }
                            }, params.row.time)
                        ])
                    }
                },
                    {
                        title: '买家',
                        key: 'buyer',
                        align:'center',
                        ellipsis: true,
                    },
                    {
                        title: '卖家',
                        key: 'seller',
                        align:'center',
                        ellipsis: true,
                    },                    
                    {
                        title: '订单状态',
                        key: 'state',
                        // sortable: true,
                        align:'center',
                        ellipsis: true,
                    },                
                    {
                        title: '操作',
                        key: 'action',
                        width: 150,
                        align: 'center',
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'primary',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            this.show(params.index)
                                        }
                                    }
                                }, '查看')
                            ]);
                        }
                    }
                ], 
                columnsUser: [
                    {
                        title: '用户名',
                        key: 'user_name',
                        // sortable: true,
                        align:'center',
                        ellipsis: true,
                    },
                    {
                        title: 'ID',
                        key: 'user_id',
                        // sortable: true,
                        align:'center',
                        ellipsis: true,
                    },
                    {
                        title: '组织',
                        key: 'org',
                        // sortable: true,
                        align:'center',
                        ellipsis: true,
                    },
                    {
                        title: '余额',
                        key: 'balance',
                        // sortable: true,
                        align:'center',
                        ellipsis: true,
                    },
                    {
                        title: '操作',
                        key: 'action',
                        width: 150,
                        align: 'center',
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'primary',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            this.show(params.index)
                                        }
                                    }
                                }, '查看'),
                                h('Button', {
                                    props: {
                                        type: 'error',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            this.show(params.index)
                                        }
                                    }
                                }, '注销用户')
                            ]);
                        }
                    }                    
                ],                               
            }
        },
        mounted: function () {
        	this.getOriData();
          this.changStatus('finished');
        },
        methods: {
            changHistory(value) {
              if(value === 'order'){
                  this.status ='finished';
                  this.changStatus('finished');
                  this.showType = 1;
              }
              else if(value === 'balance'){
                this.showType = 3;
                this.data1 = this.data;
                this.updateList();
              }
              else if(value === 'platform'){
                this.status ='finished';
                this.changStatus('finished');
                this.showType = 4;
              }
              else if(value === 'user'){
                this.showType = 5;
                this.data1 = this.data;
                this.updateList();
              }
            },
            changStatus(value) {
              if(value === 'finished'){
                this.data1= JSON.parse(JSON.stringify(this.data));
                this.data1 = this.data1.filter(item=>item.state === '已完成'); 
                if(this.history === 'order') this.showType = 1;
                this.updateList();   
              }
              else if(value === 'unfinished'){
                this.data1 = JSON.parse(JSON.stringify(this.data));
                this.data1 = this.data1.filter(item=>item.state === '未完成'); 
                if(this.history === 'order') this.showType = 2;
                this.updateList();                  
              }
            },
            changSort(value) {
              if(this.val != 'no'){
                  function compareUp(prop) {
                    return function(a, b){
                      let v1 = a[prop];
                      let v2 = b[prop];
                      return v1 - v2;
                    }
                  }
                  function compareDown(prop) {
                    return function(a, b){
                      let v1 = a[prop];
                      let v2 = b[prop];
                      return v2 - v1;
                    }
                  }
                  if(this.sort === 'up') this.data1.sort(compareUp(this.val));
                  else if (this.sort === 'down') this.data1.sort(compareDown(this.val));
                  this.updateList();          
              }
            },
			      changepage(index) {
			        let _start = (index - 1) * this.pageSize;
			        let _end = index * this.pageSize;
			        if(_end <= this.data1.length) this.nowData = this.data1.slice(_start, _end);
			        else this.nowData = this.data1.slice(_start, this.data1.length);
			        this.pageCurrent = index;
			      },
        		getOriData() {
        			  //get origin Data
          /*<get data start -------------------------------->*/
                this.data = [];
                  let a = {
                    unit_price:'0.5',
                    amount: '100',
                    total: '50',
                    time:'2019-03-25 13:26:24',
                    buyer:'superxxh',
                    seller:'superwzw',
                    state:'已完成',
                    ori_balance: '200',
                    fin_balance: '150',
                    user_name:'superwzw', 
                    user_id: '15352330',
                    org: 'SYSU',
                    balance:'150',
                  };
                  let b = {
                    unit_price:'0.5',
                    amount: '100',
                    total: '50',
                    time:'2019-03-25 13:28:24',
                    buyer:'superxxh',
                    seller:'superwzw',
                    state:'未完成',
                    user_name:'superxxh',
                    user_id: '15352360',
                    org: 'SYSU',
                    balance:'250',
                    ori_balance: '200',
                    fin_balance: '250',
                  };
                  for(let i = 0; i < 50; i++) {
                    this.data.push(a);
                    this.data.push(b);
                  }
          /*<get data end -------------------------------->*/

				        this.dataCount = this.data.length;
                this.data1 = this.data;
        				this.nowData = [];
                if(this.dataCount >= this.pageSize){
                  for (let i = 0; i < this.dataCount; i++) {
                    this.nowData.push(this.data1[i]);
                  }                 
                }
                else this.nowData = this.data1;
        		},
            show (index) {
                this.$Modal.info({
                    title: 'User Info',
                    content: `Name：${this.data[index].user_name}<br>Balance：${this.data[index].balance}<br>Organization：${this.data[index].org}`
                })
            },
            remove (index) {
                this.data1.splice(index, 1);
            },
            rowClassName (row, index) {
			        if(index%2==0){
			          return 'ivu-table-stripe-even';
			        }
			        else return 'ivu-table-stripe-odd';
			      },
            updateList () {
              this.nowData = [];
              if(this.dataCount >= this.pageSize){
                  for (let i = 0; i < this.pageSize; i++) {
                    this.nowData.push(this.data1[i]);
                  }
              }
              else this.nowData = this.data1;
            },
            backHome() {
                var arg = {
                  num:0,
                  type:true,
                }
                this.$store.dispatch('changeShow',arg);
            },          
        },
    }
</script>

<style lang="stylus">
@import '~@/assets/styles/varibles'
  .ivu-table td
      background-color: $tableColor;
      color: #fff;
      font-size: 17px;
      text-align:center;
  .ivu-table-header th
      background-color: $tableColor!important;
      color: $hovColor;
      font-size: 18px;
      text-align:center;
  .ivu-table-stripe-even td
    background-color: $evenColor!important;
  .ivu-table-stripe-odd td
    background-color: $oddColor!important;
  .ivu-table-row-hover td
    background-color: $btnColor!important;
	.historyModule  
    height:100%;
    display:flex;
    flex-direction:column;
    .search-wraper
      height:15%;
      width:100%;
      display:flex;
      padding-left:30px;
      // margin-left:30px;
      // justify-content:space-around;
      align-items:center;
      // border:1px solid blue;     
	  .table-wraper
  		flex-grow:1;
  		// border:1px solid blue; 
  		padding: 10px;
  		// background-color: $tableColor;
	  .page-wraper
  		height:10%;    
  		padding-top:2px;
  		padding-left:20px;
  		// border:1px solid red;
</style>