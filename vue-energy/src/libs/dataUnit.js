import util from '@/libs/util.js'

let dataUnit = {

};

// 查询用户接口
dataUnit.userQuery = function(id){
  util.post('/userQuery',{
    id, 
  })
  .then(response =>{
    console.log(response.data);
    return response;
  })
  .catch(error =>{
    console.log("error"+error);
    return error;
  });
}

// 注册用户接口
dataUnit.userRegister = function(name, type, id){
  util.post('/userRegister',{
    name,
    type,
    id, 
  })
  .then(response =>{
    console.log(response);
    return response;    
  })
  .catch(error =>{
    console.log("error"+error);
    return error;
  });
}

// 资产变动历史查询接口
dataUnit.assetHistoryQuery = function(id){
  util.post('/assetHistoryQuery',{
    id, 
  })
  .then(response =>{
    console.log(response.data);
    return response;    
  })
  .catch(error =>{
    console.log("error"+error);
    return error;
  });
}

// 用户充值接口
dataUnit.userRecharge = function(id, money){
  util.post('/userRecharge',{
    id,
    money, 
  })
  .then(response =>{
    console.log(response.data);
    return response;    
  })
  .catch(error =>{
    console.log("error"+error);
    return error;
  });
}

// 用户删除接口
dataUnit.userDelete = function(id){
  util.post('/userDelete',{
    id, 
  })
  .then(response =>{
    console.log(response.data);
    return response;    
  })
  .catch(error =>{
    console.log("error"+error);
    return error;
  });
}

// 发布订单接口
dataUnit.publishOrder = function(sellerId, quantity, unitPrice, total){
  util.post('/publishOrder',{
    sellerId,
    quantity,
    unitPrice,
    total,
  })
  .then(response =>{
    console.log(response.data);
    return response;    
  })
  .catch(error =>{
    console.log("error"+error);
    return error;
  });
}
// 删除订单接口       
dataUnit.deleteOrder = function(sellerId, quantity, unitPrice, 
  total, timeData) {
  util.post('/deleteOrder',{
    sellerId,
    quantity,
    unitPrice,
    total,
    timeData,
  })
  .then(response =>{
    console.log(response);
    return response;    
  })
  .catch(error =>{
    console.log("error"+error);
    return error;
  });
}

// 电能转让接口  
dataUnit.energyExchange = function(sellerId, quantity, unitPrice, 
  total, buyerId,timeData) {
  util.post('/energyExchange',{
    sellerId,
    quantity,
    unitPrice,
    total,
    buyerId,
    timeData,
  })
  .then(response =>{
    console.log(response);
    return response;    
  })
  .catch(error =>{
    console.log("error"+error);
    return error;
  });   
}

// 交易订单查询接口         
dataUnit.historyQuery = function() {
  util.post('/historyQuery',{
  })
  .then(response =>{
    console.log(response.data);
    return response;    
  })
  .catch(error =>{
    console.log("error"+error);
    return error;
  });
}

export default dataUnit;

