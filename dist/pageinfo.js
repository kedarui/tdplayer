function getCookie(name) {
	let cookies = {};
	document.cookie.split('; ').forEach(function(i) {
		let [key, ...val] = i.split('=');
		cookies[key] = val.join('=');
	});
	return cookies[name] || '';
}
let script = document.createElement("script");
script.setAttribute("type", "text/javascript");
script.setAttribute("charset", "UTF-8");
script.innerHTML=`
window.tdc=true;
var e=document.createElement('page');
e.innerHTML=JSON.stringify(window.pageInfo);
e.style.display='none';
document.body.appendChild(e);
`;
document.body.appendChild(script);
let pageInfo=JSON.parse(document.querySelector('page').innerHTML);
console.log("pageInfo",pageInfo);
window.pageInfo=pageInfo;
window.cid = pageInfo.videoId;
window.user = {
	uid: getCookie('auth_key'),
	uid_ck: getCookie('auth_key_ac_sha1'),
	uname: getCookie('ac_username')
};