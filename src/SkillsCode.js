let pid;
let i=1;
function newSkill(){
let para = document.createElement('p');
para.setAttribute("id", "p"+i);
pid = "p"+i;
document.body.appendChild(para);
let txt = "- ";
 txt += document.getElementById('skillInput').value;
 txt += ' <button type="button" onClick="deleteSkill('+"'"+i+"'"+');">Delete</button>';
 
document.getElementById(pid).innerHTML = txt;
i++
}

function deleteSkill(num){
	if(i*1>0){
	i=i*1-1;
	pid = "p"+num;
	let toDelete = document.getElementById(pid);
    toDelete.parentNode.removeChild(toDelete);
	}
}
