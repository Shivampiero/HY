const e=()=>{let e=document.querySelector("table"),t=localStorage.getItem("passwords");if(null==t||0==JSON.parse(t).length)e.innerHTML="No Data To Show";else{e.innerHTML=`<tr>
        <th>Website</th>
        <th>Username</th>
        <th>Password</th>
        <th>Delete</th>
    </tr> `;let s=JSON.parse(t),o="";for(let e=0;e<s.length;e++){let t=s[e];o+=`<tr>
    <td>${t.website} <img onclick="copyText('${t.website}')" src="./copy.svg" alt="Copy Button" width="10" width="10" height="10">
    </td>
    <td>${t.username} <img onclick="copyText('${t.username}')" src="./copy.svg" alt="Copy Button" width="10" width="10" height="10">
    </td>
    <td>${function(e){let t="";for(let s=0;s<e.length;s++)t+="*";return t}(t.password)} <img onclick="copyText('${t.password}')" src="./copy.svg" alt="Copy Button" width="10" width="10" height="10">
    </td>
    <td><button class="btnsm" onclick="deletePassword('${t.website}')">Delete</button></td>
        </tr>`}e.innerHTML=e.innerHTML+o}website.value="",username.value="",password.value=""};console.log("Working"),e(),document.querySelector(".btn").addEventListener("click",t=>{t.preventDefault(),console.log("Clicked...."),console.log(username.value,password.value);let s=localStorage.getItem("passwords");if(console.log(s),null==s){let e=[];e.push({website:website.value,username:username.value,password:password.value}),alert("Password Saved"),localStorage.setItem("passwords",JSON.stringify(e))}else{let e=JSON.parse(localStorage.getItem("passwords"));e.push({website:website.value,username:username.value,password:password.value}),alert("Password Saved"),localStorage.setItem("passwords",JSON.stringify(e))}e()});
//# sourceMappingURL=index.e6cb2e63.js.map
