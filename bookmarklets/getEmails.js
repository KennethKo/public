// Copy the minified js below into a bookmarklet
javascript:{r=prompt("Paste Raw Text","");t=[...new Set([...r.matchAll("[^\\s\"')\(,]+@[^ .]+\.[^\\s\"')\(,]+").map(m => m[0])])].join(', ');d=document;l=e=>{d.removeEventListener("copy",l,true);e.preventDefault();c=e.clipboardData;c.clearData();c.setData("text/plain",t);};d.addEventListener("copy",l,true);d.execCommand("copy");d.preventDefault;alert('Emails Copied\n'+t);}


// cross cribbed from: https://gist.github.com/stefanmaric/2abf96c740191cda3bc7a8b0fc905a7d
// javascript:{
//   r=prompt("Paste Raw Text","");
//   t=[...new Set([...r.matchAll("[^\\s\"')\(,]+@[^ .]+\.[^\\s\"')\(,]+").map(m => m[0])])].join(', ');
//   d=document;
//   l=e=>{
//     d.removeEventListener("copy",l,true);
//     e.preventDefault();
//     c=e.clipboardData;
//     c.clearData();c.setData("text/plain",t);
//   };
//   d.addEventListener("copy",l,true);
//   d.execCommand("copy");
//   d.preventDefault;
//   alert('Emails Copied\n'+t);
// }
