import{r as t,o as e,x as s,d as i,e as a,q as r,A as l,c as o,k as d,C as h,E as n}from"./common-15adca4d.js";import{i as A}from"./common-fdf4ca60.js";import{g as B}from"./common-3fa967ce.js";var p={setup(){const i=s(null);return{divRef:i,size:function(s){const i=t({width:void 0,height:void 0});return e(()=>{const t=B(s);if(!t)return;const a=new A(t=>{t.forEach(t=>{Object.assign(i,{width:t.target.clientWidth,height:t.target.clientHeight})})});a.observe(t),e(()=>{a.disconnect()})}),i}(i)}}};const u={ref:"divRef",style:{border:"1px solid rgba(0,0,0, 0.1)",overflow:"scroll",width:"100px",height:"100px","min-height":"30px","min-width":"30px",resize:"both"}},c=l(" size.width: "),g={style:{color:"blue"}},f=a("p",null,null,-1),m=l(" size.height: "),v={style:{color:"blue"}};p.render=function(t,e,s,l,d,h){return o(),i("div",null,[a("div",u,null,512),a("p",null,[c,a("span",g,r(t.size.width),1)]),f,a("p",null,[m,a("span",v,r(t.size.height),1)])])};var C={components:{demo7:p}};const D='{"title":"useSize","frontmatter":{},"headers":[{"level":2,"title":"代码演示","slug":"代码演示"},{"level":3,"title":"基本用法","slug":"基本用法"},{"level":3,"title":"传入 DOM 节点","slug":"传入-dom-节点"},{"level":2,"title":"API","slug":"api"},{"level":3,"title":"参数","slug":"参数"},{"level":3,"title":"结果","slug":"结果"}],"relativePath":"src/hooks/useSize/readme.md","lastUpdated":1598449657636.5237}',z=n('<h1 id="usesize"><a class="header-anchor" href="#usesize" aria-hidden="true">#</a> useSize</h1><p>一个用于监听 dom 节点尺寸变化的 Hook</p><h2 id="代码演示"><a class="header-anchor" href="#代码演示" aria-hidden="true">#</a> 代码演示</h2><h3 id="基本用法"><a class="header-anchor" href="#基本用法" aria-hidden="true">#</a> 基本用法</h3>',4),b=n('<h3 id="传入-dom-节点"><a class="header-anchor" href="#传入-dom-节点" aria-hidden="true">#</a> 传入 DOM 节点</h3><h2 id="api"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2><div class="language-ts"><pre><code><span class="token keyword">const</span> size <span class="token operator">=</span> <span class="token function">useSize</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div><h3 id="参数"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>target</td><td>DOM 节点或者 Refs</td><td>HTMLElement | (() =&gt; HTMLElement) | MutableRefObject</td><td>-</td></tr></tbody></table><h3 id="结果"><a class="header-anchor" href="#结果" aria-hidden="true">#</a> 结果</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td>size</td><td>dom 节点的尺寸</td><td>{ width: number, height: number }</td></tr></tbody></table>',7);C.render=function(t,e,s,r,l,n){const A=d("demo7"),B=d("demo");return o(),i("div",null,[z,a("p",null,[a(B,{src:"./demo/demo1.vue",title:"基本用法",desc:"使用 ref 监听节点尺寸变化",componentName:"demo7",htmlStr:"%3Cpre%20v-pre%3E%3Ccode%3E%26lt%3Btemplate%26gt%3B%0A%20%20%26lt%3Bdiv%26gt%3B%0A%20%20%20%20%26lt%3Bdiv%0A%20%20%20%20%20%20ref%3D%26quot%3BdivRef%26quot%3B%0A%20%20%20%20%20%20style%3D%26quot%3Bborder%3A%201px%20solid%20rgba(0%2C0%2C0%2C%200.1)%3B%20overflow%3A%20scroll%3B%0A%20%20%20%20%20%20%20%20width%3A%20100px%3B%20height%3A%20100px%3B%0A%20%20%20%20%20%20%20%20min-height%3A%2030px%3B%20min-width%3A%2030px%3B%20resize%3A%20both%3B%26quot%3B%0A%20%20%20%20%26gt%3B%26lt%3B%2Fdiv%26gt%3B%0A%0A%20%20%20%20%26lt%3Bp%26gt%3B%0A%20%20%20%20%20%20size.width%3A%20%26lt%3Bspan%20style%3D%26quot%3Bcolor%3A%20blue%26quot%3B%26gt%3B%7B%7B%20size.width%20%7D%7D%26lt%3B%2Fspan%26gt%3B%0A%20%20%20%20%26lt%3B%2Fp%26gt%3B%0A%20%20%20%20%26lt%3Bp%26gt%3B%26lt%3B%2Fp%26gt%3B%0A%20%20%20%20%26lt%3Bp%26gt%3B%0A%20%20%20%20%20%20size.height%3A%20%26lt%3Bspan%20style%3D%26quot%3Bcolor%3A%20blue%26quot%3B%26gt%3B%7B%7B%20size.height%20%7D%7D%26lt%3B%2Fspan%26gt%3B%0A%20%20%20%20%26lt%3B%2Fp%26gt%3B%0A%20%20%26lt%3B%2Fdiv%26gt%3B%0A%26lt%3B%2Ftemplate%26gt%3B%0A%0A%26lt%3Bscript%20lang%3D%26quot%3Bts%26quot%3B%26gt%3B%0Aimport%20%7B%20useSize%20%7D%20from%20%26%2339%3B%40dewfall%2Fvhooks%26%2339%3B%3B%0Aimport%20%7B%20ref%20%7D%20from%20%26%2339%3Bvue%26%2339%3B%3B%0A%0Aexport%20default%20%7B%0A%20%20setup()%20%7B%0A%20%20%20%20const%20divRef%20%3D%20ref(null)%3B%0A%20%20%20%20const%20size%20%3D%20useSize(divRef)%3B%0A%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20divRef%2C%0A%20%20%20%20%20%20size%2C%0A%20%20%20%20%7D%3B%0A%20%20%7D%2C%0A%7D%3B%0A%26lt%3B%2Fscript%26gt%3B%0A%3C%2Fcode%3E%3C%2Fpre%3E",codeStr:"%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3Cdiv%0A%20%20%20%20%20%20ref%3D%22divRef%22%0A%20%20%20%20%20%20style%3D%22border%3A%201px%20solid%20rgba(0%2C0%2C0%2C%200.1)%3B%20overflow%3A%20scroll%3B%0A%20%20%20%20%20%20%20%20width%3A%20100px%3B%20height%3A%20100px%3B%0A%20%20%20%20%20%20%20%20min-height%3A%2030px%3B%20min-width%3A%2030px%3B%20resize%3A%20both%3B%22%0A%20%20%20%20%3E%3C%2Fdiv%3E%0A%0A%20%20%20%20%3Cp%3E%0A%20%20%20%20%20%20size.width%3A%20%3Cspan%20style%3D%22color%3A%20blue%22%3E%7B%7B%20size.width%20%7D%7D%3C%2Fspan%3E%0A%20%20%20%20%3C%2Fp%3E%0A%20%20%20%20%3Cp%3E%3C%2Fp%3E%0A%20%20%20%20%3Cp%3E%0A%20%20%20%20%20%20size.height%3A%20%3Cspan%20style%3D%22color%3A%20blue%22%3E%7B%7B%20size.height%20%7D%7D%3C%2Fspan%3E%0A%20%20%20%20%3C%2Fp%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20lang%3D%22ts%22%3E%0Aimport%20%7B%20useSize%20%7D%20from%20'%40dewfall%2Fvhooks'%3B%0Aimport%20%7B%20ref%20%7D%20from%20'vue'%3B%0A%0Aexport%20default%20%7B%0A%20%20setup()%20%7B%0A%20%20%20%20const%20divRef%20%3D%20ref(null)%3B%0A%20%20%20%20const%20size%20%3D%20useSize(divRef)%3B%0A%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20divRef%2C%0A%20%20%20%20%20%20size%2C%0A%20%20%20%20%7D%3B%0A%20%20%7D%2C%0A%7D%3B%0A%3C%2Fscript%3E%0A"},{default:h(()=>[a(A)]),_:1})]),b])};export default C;export{D as __pageData};
