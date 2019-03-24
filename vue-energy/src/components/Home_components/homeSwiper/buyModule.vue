<template>
    <div class="buyModule">
    	<div class="table-wraper">
				<Table 
				border ref="selection" 
				no-data-text="暂无数据" :row-class-name="rowClassName"
				:columns="columns7" :data="nowData" highlight-row>
				 </Table>
			 </div>
			 <div class="page-wraper">
				 <Page 
				 	:total="dataCount" @on-change="changepage" 
				 	show-total show-elevator style="color: white;"/>
			 </div>
    </div>
</template>

<script>
    export default {
    	name:'buyModule',
 			data () {
            return {
		            dataCount: 0,//总条数
		            pageCurrent: 1,//当前
		            nowData:[],
		            pageSize:8,
		            data: [],
                columns7: [
                    {
                        title: '姓名',
                        key: 'name',
                        render: (h, params) => {
                            return h('div', [
                                h('Icon', {
                                    props: {
                                        type: 'person'
                                    }
                                }),
                                h('strong', params.row.name)
                            ]);
                        }
                    },
                    {
                        title: '组织',
                        key: 'org'
                    },
                    {
                        title: '单价',
                        key: 'unit_price',
                        sortable: true,
                    },
                    {
                        title: '数量',
                        key: 'amount',
                        sortable: true,
                    },
                    {
                        title: '总价',
                        key: 'total',
                        sortable: true
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
                                        type: 'success',
                                        size: 'small'
                                    },
                                    on: {
                                        click: () => {
                                            this.remove(params.index)
                                        }
                                    }
                                }, '购买')
                            ]);
                        }
                    }
                ]
            }
        },
        mounted: function () {
        	this.getData();
        },
        methods: {
			      changepage(index) {
			        let _start = (index - 1) * this.pageSize;
			        let _end = index * this.pageSize;
			        if(_end < this.dataCount) this.nowData = this.data.slice(_start, _end);
			        else this.nowData = this.data.slice(_start, this.dataCount);
			        this.pageCurrent = index;
			      },
        		getData() {
        			  this.data = [];
				        for (let i = 0; i < 100; i++) {
				          let a = {
										name: '徐小' + i,
				            unit_price: 18+i,
				            org: '中大'+ i,
				            amount: i,
				            time: i,
				            address: i,
				            total: i,
				          };
				          this.data.push(a);
				        }
				        this.dataCount = this.data.length;
        				this.nowData = [];
        				for (let i = 0; i<this.dataCount && i < this.pageSize; i++) {
				          this.nowData.push(this.data[i]);
				        }
        		},
            show (index) {
                this.$Modal.info({
                    title: 'User Info',
                    content: `Name：${this.data[index].name}<br>Age：${this.data[index].age}<br>Address：${this.data[index].address}`
                })
            },
            remove (index) {
                this.data.splice(index, 1);
            },
            rowClassName (row, index) {
			        if(index%2==0){
			          return 'ivu-table-stripe-even';
			        }
			        else return 'ivu-table-stripe-odd';
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
      font-size: 20px;
      text-align:center;
  .ivu-table-stripe-even td
    background-color: $evenColor!important;
  .ivu-table-stripe-odd td
    background-color: $oddColor!important;
  .ivu-table-row-hover td
    background-color: $btnColor!important;
	.buyModule
		height:100%;
	.table-wraper
		height:90%;
		// border:1px solid blue; 
		padding: 10px;
		// background-color: $tableColor;
	.page-wraper
		height:10%;
		padding-top:10px;
		padding-left:20px;
		// border:1px solid red;
</style>