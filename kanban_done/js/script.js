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
		var jobName = $(input).val();		
		if((event.key==='Enter'||event.keycode===13)&& jobName.trim()!==''){
				//lấy data lưu vào list
				if(!list[type]){list[type]=[];}
				//update lại			
				var x =list['doing'].length;	
				if(type=='doing')
				{
					if(x>=3)
					{
						alert('CÔng việc đang làm chỉ đc giới hạn là 3');
					}
					else {
						if(!list[type]){list[type]=[];}
						list[type].push(jobName);
						DB.setDB(list);
						numberOfJob();				 
						this.addjobtolist(type,jobName);
					}
				}
				else{
					
					list[type].push(jobName);
					DB.setDB(list);
					numberOfJob();				 
					this.addjobtolist(type,jobName);
				}
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
			var btn= $('.agree');
			btn.off('click');
			$('#del-modal').modal('open');				
			btn.on('click',function(){
				var columnType = job.parent().attr('id');
				var itemPosition = $('#' +columnType +' .collection-item').index(job);
				list[columnType].splice(itemPosition,1);

				DB.setDB(list);
				job.remove();
				numberOfJob();					
			});
			
	}
//đếm số lượng công việc mỗi phần

function numberOfJob() {
		if(!list['doing']&&!list['todo']&&!list['done']){
			list['doing']=[];
			list['todo']=[];
			list['done']=[];
		}
		$('.numberOfJob-doing').html(list['doing'].length);
		$('.numberOfJob-todo').html(list['todo'].length);
		$('.numberOfJob-done').html(list['done'].length);
}
//khi load xong web
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
		ui.item.oldColumsType = ui.item[0].parentElement.getAttribute('id');//lấy id của element cha
		ui.item.oldPosition = ui.item.index();//lấy vị trí của cột đang kéo
	},
	stop: function(envent, ui){
		$(ui.item[0]).removeClass('dragging');
		var item = ui.item;
		var oldColumsType=item.oldColumsType;
		var oldPosition = item.oldPosition;
		//lấy vị trí mới của cột vừa thả
		var newColumsType = ui.item[0].parentElement.getAttribute('id');
		var newPossition = item.index();
		//xóa cái vị trí cũ đi
		list[oldColumsType].splice(oldPosition,1);
		//thêm vị trí mới vào
		var x =list['doing'].length;
		if(newColumsType=='doing'){
			if(x>=3){				
				alert('CÔng việc đang làm chỉ đc giới hạn là 3');
				list[oldColumsType].splice(oldPosition,0,item[0].innerText);
			}
			else{
				list[newColumsType].splice(newPossition,0,item[0].innerText);
			}
		}
		else{
			list[newColumsType].splice(newPossition,0,item[0].innerText);
		}
		//update lại DB
		DB.setDB(list);
		numberOfJob();
	}
});
});