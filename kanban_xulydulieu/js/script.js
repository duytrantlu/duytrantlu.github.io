//localStorage
var COLUMN_TYPE =['todo','doing','done'];
	var DB ={
	getDB: function(){
		if (typeof(Storage) !== "undefined") {
		    var data;
		    try {
		    	data=JSON.parse(localStorage.getItem('list'))||{};
		    } catch(e) {
		    	// statements
		    	console.log(e);
		    	return {};
		    }
		    return data;
		} else {
		    alert('Sorry! No Web Storage support..');
		}
	},
	setDB:function(data){
		localStorage.setItem('list',JSON.stringify(data));
	}
	};
	//biến để lưu data từ DB.getDB
	var list = DB.getDB();
//thêm mới công việc
function add(e, type, input) {
		var event = window.event || e;
		console.log(event.key);
		var jobName = $(input).val();
		if(event.key==='Enter' && jobName.trim()!==''){
				//lấy data lưu vào list
				if(!list[type]){list[type]=[];}
				list[type].push(jobName);
				DB.setDB(list);
				//update lại				 
				this.addjobtolist(type,jobName);

				//làm trống cái input
				$(input).val('');
			}
			
		}
		function addjobtolist(type, jobName) {
				var item = '<li class="collection-item"> <i class="material-icons badge" onclick="del(this)" >delete</i>'+jobName+'</li>';
			 	$('#'+type).append(item);
		}
		function del(arg) {
				var job=$(arg).parent();
				$('#del-modal').modal('open');
				$('.agree').on('click',function(){
					job.remove();
				});
				
			}
$(document).ready(function(){
	//lấy ra dữ liệu lưu trên localStorage
	COLUMN_TYPE.forEach(function(type){
		var comlumntype = list[type];
			comlumntype.forEach(function(job){
				addjobtolist(type, job);
			})
	});
	//chuyển công việc giữa các bảng
	$('.connect-list').sortable({
	connectWith: ".connect-list",
	placeholder: "ui-state-highlight",
	start: function(event, ui){
		$(ui.item[0]).addClass('dragging');
	},
	stop: function(envent, ui){
		$(ui.item[0]).removeClass('dragging');
	}
});
});