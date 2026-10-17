/* Content lives here so the Chinese and English pages stay in sync. */
const params=new URLSearchParams(location.search);
let remembered;try{remembered=localStorage.getItem('pineapple-language')}catch{}
let lang=['zh','en'].includes(params.get('lang'))?params.get('lang'):remembered||((navigator.language||'').startsWith('zh')?'zh':'en');
const t=(zh,en)=>lang==='zh'?zh:en;
const page=document.body.dataset.page||'home';
const href=(file,extra='')=>`${file}.html?lang=${lang}${extra}`;
const categories=[['social','新媒体传播与内容创意','Digital & Social Content',['节日节点','主题传播','品牌事件'],['Seasonal moments','Themed content','Brand events']],['data','数据内容与信息可视化','Data & Information Design',['财报','战报','信息图'],['Financial results','Performance reports','Infographics']],['events','活动、会议与展会视觉','Events & Exhibitions',['活动','会议','展会','周年庆'],['Events','Conferences','Exhibitions','Anniversaries']],['assets','品牌内容与视觉资产','Brand Content & Visual Assets',['栏目包装','PPT','画册与宣传册'],['Channel identity','Presentations','Brochures & publications']]];
const projects=[
 {id:'metro',cat:'events',zh:'闲鱼文学奖 · 地铁车厢视觉',en:'Xianyu Literature Awards · Metro Exhibition',tag:['品牌传播 / 空间视觉','Brand communication / Spatial graphics']},
 {id:'01',cat:'social',zh:'节日节点传播',en:'Seasonal communication',tag:['节日节点 / 内容视觉','Seasonal / Visual content']},
 {id:'02',cat:'data',zh:'财报与数据表达',en:'Financial storytelling',tag:['财报 / 信息图','Financial results / Infographics']},
 {id:'03',cat:'events',zh:'活动主题视觉',en:'An event in one visual language',tag:['活动 / 主视觉','Events / Key visuals']},
 {id:'04',cat:'assets',zh:'栏目视觉包装',en:'A visual system for a channel',tag:['栏目包装 / 视觉资产','Channel identity / Visual assets']},
 {id:'05',cat:'social',zh:'品牌事件传播',en:'A brand moment, made visible',tag:['品牌事件 / 系列视觉','Brand events / Series design']},
 {id:'06',cat:'assets',zh:'画册与宣传资料',en:'Stories in print',tag:['画册 / 宣传册','Editorial / Brochures']}
];
const ph=(n,cls='')=>`<div class="placeholder ${cls}" role="img" aria-label="${t('16比9作品图片占位','16 by 9 project image placeholder')}"><span>${String(n).padStart(2,'0')}</span><span>16:9</span></div>`;
const card=p=>`<article class="project reveal" data-category="${p.cat}"><a class="project-link" href="${href('project','&id='+p.id)}">${p.id==='metro'?`<img src="assets/metro/project-cover.png" alt="${t('闲鱼地铁车厢地面视觉','Xianyu metro floor graphics')}" style="display:block;width:100%;aspect-ratio:16/9;object-fit:cover;border-radius:22px" loading="lazy">`:ph(p.id)}<div class="project-caption"><div><h3>${t(p.zh,p.en)}</h3><p>${t(...p.tag)}</p></div><span class="card-arrow" aria-hidden="true">↗</span></div></a></article>`;
const label=(zh,en)=>`<p class="eyebrow">${t(zh,en)}</p>`;
const title=(zh,en)=>`<h1 class="page-title"><span class="title-mask"><span>${t(zh,en)}</span></span></h1>`;
const nav=[['home','首页','Home'],['work','案例','Projects'],['services','服务','Services'],['about','关于','About'],['contact','联系','Contact']];
const header=`<header class="header"><a class="brand" href="${href('index')}">${t('大菠萝创意','Big Pineapple')}<span class="brand-dot">®</span></a><button class="menu-toggle" aria-expanded="false" aria-controls="nav">${t('菜单','Menu')} <span>＋</span></button><nav id="nav" aria-label="${t('主导航','Main navigation')}">${nav.map(([p,z,e])=>`<a ${page===p||page==='project'&&p==='work'?'aria-current="page"':''} href="${href(p==='home'?'index':p)}">${t(z,e)}</a>`).join('')}<div class="language"><button data-lang="zh" ${lang==='zh'?'aria-pressed="true"':'aria-pressed="false"'}>中</button><span>/</span><button data-lang="en" ${lang==='en'?'aria-pressed="true"':'aria-pressed="false"'}>EN</button></div></nav></header>`;
const footer=`<footer class="footer"><a class="brand" href="${href('index')}">${t('大菠萝创意','Big Pineapple')}</a><span>© ${new Date().getFullYear()} Big Pineapple Creative</span>${page==='contact'?'':`<a href="#top">${t('回到顶部','Back to top')} ↑</a>`}</footer>`;
const cta='';
let content='';
if(page==='home')content=`<section class="home-hero"><p class="eyebrow">Big Pineapple Creative · Independent studio</p><h1 class="hero-headline"><span class="title-mask"><span>${t('让内容更清晰。','Clarity in content.')}</span></span><span class="title-mask"><span>${t('让传播有吸引力。','Character in communication.')}</span></span></h1></section><section class="selected"><div class="section-top reveal"><h2>${t('精选项目','Selected work')}</h2><a class="line-link" href="${href('work')}">${t('全部案例','All projects')} ↗</a></div><div class="project-grid">${projects.slice(0,4).map(card).join('')}</div><p class="draft-note">${t('项目结构预览 · 图片及案例资料待补充','Project layout preview · Images and case information to follow')}</p></section><section class="studio-note reveal">${label('关于工作室','The studio')}<h2>${t('一家专注企业传播与内容视觉的独立创意工作室。','An independent creative studio for brand communication and visual content.')}</h2><div><p>${t('以设计连接品牌、内容与每一次重要表达。','Connecting brands and ideas through thoughtful design.')}</p><a class="line-link" href="${href('about')}">${t('了解工作室','Meet the studio')} ↗</a></div></section>`;
if(page==='work')content=`<section class="page-intro">${label('案例','Projects')}${title('让作品说话。','Work, in focus.')}<p class="intro-copy">${t('从社交内容到线下现场，不同场景中的创意与视觉表达。','Creative ideas and visual expressions, across screens, pages and spaces.')}</p></section><section><div class="filters" role="group" aria-label="${t('案例筛选','Filter projects')}"><button class="active" data-filter="all" aria-pressed="true">${t('全部','All')}</button>${categories.map(([id,z,e])=>`<button data-filter="${id}" aria-pressed="false">${t(z,e)}</button>`).join('')}</div><div class="project-grid">${projects.map(card).join('')}</div><p class="draft-note">${t('当前为案例结构示意，后续逐项补充真实项目。','Layout examples only. Real project content will be added individually.')}</p></section>${cta}`;
if(page==='services')content=`<section class="page-intro">${label('服务','Services')}${title('让想法找到表达。','Ideas, made visible.')}<p class="intro-copy">${t('以视觉设计为核心，围绕企业传播中的不同任务，提供清晰、有针对性的创意支持。','Design at the core. Focused creative support for the different ways a business communicates.')}</p></section><section class="service-grid">${categories.map(([id,z,e,tz,te],i)=>`<article class="service reveal"><span class="number">0${i+1}</span><h2>${t(z,e)}</h2><p>${[t('围绕节日节点、主题内容与品牌事件，创造适合社交渠道阅读和分享的视觉表达。','Visual stories for seasonal moments, themed content and brand events, designed for digital channels.'),t('梳理数据与复杂信息，让财报、战报及信息图更清晰、更易理解。','Making financial results, performance updates and complex information clear and engaging.'),t('从主视觉到现场延展，为活动、会议、展会与周年庆建立统一的视觉体验。','A consistent visual experience for events, conferences, exhibitions and anniversaries.'),t('为栏目、演示文稿与出版物建立能够持续使用的内容载体与视觉系统。','Lasting visual systems for channels, presentations, brochures and publications.')][i]}</p><div class="tags">${(lang==='zh'?tz:te).map(tag=>`<span>${tag}</span>`).join('')}</div><a class="line-link" href="${href('work','&category='+id)}">${t('相关案例','Related work')} ↗</a></article>`).join('')}</section><section class="ways reveal">${label('合作方式','Working together')}<div><h2>${t('长期支持，或一次专项。','Ongoing support.<br>Focused projects.')}</h2><div class="ways-grid"><article><h3>${t('年度创意与视觉支持','Annual creative support')}</h3><p>${t('围绕全年传播需求持续配合，保持内容与视觉表达的一致性。','Consistent creative partnership across a year of communication needs.')}</p></article><article><h3>${t('专项与项目合作','Project collaboration')}</h3><p>${t('从目标明确的单个项目开始，共同确定范围、排期与交付。','A defined brief, a shared direction and a focused scope of delivery.')}</p></article></div></div></section>${cta}`;
if(page==='about')content=`<section class="page-intro">${label('关于','About')}${title('小而专注，直接协作。','Independent.<br>Personally involved.')}</section><section class="about-layout reveal"><div class="about-statement">${t('大菠萝创意<br>企业传播与内容视觉','Big Pineapple Creative<br>Communication & visual content')}</div><div><p class="large-copy">${t('一家由设计师主理的独立创意工作室，关注品牌如何通过内容与视觉，清晰、持续地表达自己。','An independent, designer-led creative studio exploring how brands communicate clearly and consistently through content and design.')}</p><p>${t('我们的工作覆盖新媒体传播、数据内容与信息可视化、活动视觉及品牌内容资产。核心项目由主理人直接参与沟通、创意与质量把控。','Our work spans digital and social content, information design, event graphics and brand content assets. The studio lead stays directly involved in the brief, creative direction and delivery.')}</p><p>${t('根据项目需要，联合内容策划、品牌咨询及其他专业伙伴共同完成。','When a project calls for it, we collaborate with specialists in content, brand consulting and related disciplines.')}</p></div></section><section class="principles"><div class="reveal">${label('01','01')}<h2>${t('先理解，再设计。','Understand first.')}<p>${t('理解业务、受众与传播目标，为设计建立准确的出发点。','Business, audience and communication goals give the work its direction.')}</p></div><div class="reveal">${label('02','02')}<h2>${t('直接沟通，持续配合。','Stay close to the work.')}<p>${t('主理人直接服务，让沟通、判断与执行保持连贯。','Direct collaboration keeps decisions and delivery connected.')}</p></div></section>${cta}`;
if(page==='contact')content=`<section class="page-intro contact-intro">${label('联系合作','Contact')}${title('聊聊你的下一个项目。','What’s next?')}<p class="intro-copy">${t('一次主题传播、一场重要活动，或一年的设计支持。欢迎从你的想法和需求开始聊起。','A campaign, an important event or a year of creative support. Tell us what you have in mind.')}</p></section><section class="contact-grid reveal"><div><span class="number">01 / EMAIL</span><h2>${t('电子邮箱','Email')}</h2><p>${t('正式联系方式待补充','Contact details to be added')}</p></div><div><span class="number">02 / WECHAT</span><h2>${t('微信联系','WeChat')}</h2><div class="qr-placeholder" aria-label="${t('微信二维码待补充','WeChat QR code to follow')}">QR ↗</div><p>${t('微信二维码待补充','WeChat QR code to follow')}</p></div><div><span class="number">03 / YOUR BRIEF</span><h2>${t('可以先告诉我们','A helpful starting point')}</h2><p>${t('品牌与业务背景<br>项目目标与大致内容<br>预期时间与预算范围','Your brand and business<br>Project goals and scope<br>Timing and budget range')}</p></div></section>`;
if(page==='project'){
 const p=projects.find(p=>p.id===params.get('id'))||projects[0];const index=projects.indexOf(p);const c=categories.find(c=>c[0]===p.cat);
 content=`<section class="project-header"><div class="project-title"><a class="back" href="${href('work')}">↖ ${t('全部案例','All projects')}</a>${title(p.zh,p.en)}<p>${t('项目概述待补充。','Project summary to follow.')}</p></div><div class="project-info reveal"><dl><div><dt>${t('客户 / 品牌','Client / Brand')}</dt><dd>${t('待补充','To be added')}</dd></div><div><dt>${t('年份','Year')}</dt><dd>—</dd></div><div><dt>${t('服务类别','Category')}</dt><dd>${t(c[1],c[2])}</dd></div><div><dt>${t('服务内容','Services')}</dt><dd>${t(...p.tag)}</dd></div></dl><div class="project-description"><span class="number">${t('项目介绍','About the project')}</span><p>${t('这里将介绍项目的背景、传播目标与设计思路。待确定具体案例后，再补充真实的委托背景与工作范围。','This space will introduce the background, communication goals and design approach. The final case will document the actual brief and scope of work.')}</p><p>${t('项目署名与协作信息将在资料确认后填写。','Project credits and collaborators will be added when confirmed.')}</p></div></div></section><section class="project-gallery"><div class="reveal">${ph(1)}</div><div class="gallery-pair"><div class="reveal">${ph(2)}</div><div class="reveal">${ph(3)}</div></div><div class="gallery-note reveal"><p>${t('设计思路','Design approach')}</p><div><h2>${t('为内容建立清晰的视觉节奏。','A clear rhythm for the story.')}</h2><p>${t('此处预留简短设计说明，可根据项目内容调整或移除。','A short design note can be added here, or the section can be removed to suit the project.')}</p></div></div><div class="reveal">${ph(4)}</div></section><section class="next-project reveal"><a href="${href('work')}">↖ ${t('返回全部案例','Back to all projects')}</a><a href="${href('project','&id='+projects[(index+1)%projects.length].id)}"><span>${t('下一个项目','Next project')}</span><strong>${t(projects[(index+1)%projects.length].zh,projects[(index+1)%projects.length].en)} ↗</strong></a></section>`;
}
if(page==='project'&&params.get('id')==='metro'&&window.renderMetroCase)content=window.renderMetroCase(t,href);
document.documentElement.lang=lang==='zh'?'zh-CN':'en';
document.title=`${({home:t('首页','Home'),work:t('案例','Projects'),services:t('服务','Services'),about:t('关于','About'),contact:t('联系','Contact'),project:t('项目','Project')})[page]} — ${t('大菠萝创意','Big Pineapple Creative')}`;
document.body.innerHTML=`<a class="skip-link" href="#main">${t('跳至正文','Skip to content')}</a>${header}<main id="main">${content}</main>${footer}`;
if(page==='project'&&params.get('id')==='metro'){
 document.body.classList.add('metro-original');
 const article=document.querySelector('.metro-case');
 article.querySelector('.metro-heading')?.remove();
 article.querySelector('.metro-credit')?.remove();
 const sharingImage=article.querySelector('img[src="assets/metro/17-sharing.jpg"]');
 const sharing=sharingImage.closest('figure');sharing.classList.add('metro-sharing-layout');
 sharing.insertAdjacentHTML('beforeend',`<figcaption class="sharing-bubbles"><span class="sharing-bubble bubble-yellow bubble-left-top">${t('哇，这也太好看了吧！<br>想去打卡！！！','Wow, this looks amazing!<br>I want to see it!')}</span><span class="sharing-bubble bubble-grey bubble-right-top">${t('这个地铁好可爱啊','This metro is so cute!')}</span><span class="sharing-bubble bubble-yellow bubble-right-bottom">${t('哇，还有这么好看的地铁吗？','Wow, a metro can look<br>this good?')}</span><span class="sharing-bubble bubble-grey bubble-left-bottom">${t('哈哈哈这个主题地铁<br>很可以','Haha, this themed metro<br>is brilliant!')}</span></figcaption>`);
 article.querySelector('.metro-return')?.remove();
 const nextProject=projects[(projects.findIndex(item=>item.id==='metro')+1)%projects.length];
 const projectNavigation=document.createElement('section');projectNavigation.className='next-project reveal';
 projectNavigation.innerHTML=`<a href="${href('work')}">↖ ${t('返回全部案例','Back to all projects')}</a><a href="${href('project','&id='+nextProject.id)}"><span>${t('下一个项目','Next project')}</span><strong>${t(nextProject.zh,nextProject.en)} ↗</strong></a>`;
 article.after(projectNavigation);
 article.querySelector('.metro-overview>div:first-child')?.remove();
 article.querySelector('.metro-overview')?.classList.add('metro-overview-no-timeline');
 const strategy=article.querySelector('.metro-strategy');strategy.className='metro-mindmap';
 strategy.innerHTML=`<svg viewBox="0 0 1000 420" preserveAspectRatio="none" aria-hidden="true"><path d="M150 210 L390 70 M150 210 L390 210 M150 210 L390 350 M450 70 L650 35 M450 70 L650 105 M450 210 L650 170 M450 210 L650 240 M450 350 L650 310"/></svg><div class="mind-root">${t('闲鱼文学奖','Xianyu Literature Awards')}</div><div class="mind-branch branch-one">${t('「闲鱼体」<br>概念强露出','Highlight<br>Xianyu-style writing')}</div><div class="mind-branch branch-two">${t('地铁氛围','Carriage<br>experience')}</div><div class="mind-branch branch-three">${t('闲鱼品牌强调','Emphasize<br>the Xianyu brand')}</div><ul>${[t('带有「闲鱼体」的闲鱼商品页面完整展示（图文）','Full Xianyu listings featuring the writing and imagery'),t('「闲鱼体」内容摘录展示（精炼的句子）','Selected excerpts of Xianyu-style writing'),t('创意插画','Creative illustrations'),t('创意打卡区域','Interactive photo opportunities'),t('整列地铁车厢以闲鱼品牌黄色为主','Xianyu yellow throughout the carriage')].map((s,i)=>`<li style="--position:${[8.3,25,40.5,57.1,73.8][i]}%">${s}</li>`).join('')}</ul>`;
 const zones=article.querySelector('.metro-zones');
 zones.previousElementSibling.classList.add('metro-mapping-copy');
 const mapLabels=[
  [13.5,13.8,'驾驶舱背面','Cab partition','创意打卡点','Photo opportunity',true],
  [33,0,'列车车顶','Ceiling','闲鱼弹窗','Pop-up messages'],
  [39,8,'车门玻璃贴贴','Door windows','闲鱼对话框','Conversation bubbles'],
  [48,15,'列车车身','Walls','闲鱼体','Xianyu-style writing'],
  [58,20,'车窗玻璃贴','Windows','座位分区标签','Seat-zone labels'],
  [67.5,27,'广告牌','Ad panels','商品＋闲鱼体','Listings & writing'],
  [74.3,32,'列车车底','Floor','创意图文','Illustrated text'],
  [81,37,'列车车身拐角','Carriage corners','创意图案','Creative graphics']
 ];
 zones.insertAdjacentHTML('beforebegin',`<figure class="metro-carriage-map"><img src="assets/metro/carriage-map.jpg" alt="${t('地铁车厢结构与设计区域示意图','Metro carriage structure and design areas')}" loading="lazy"><figcaption class="carriage-map-labels">${mapLabels.map(([x,y,z,e,pz,pe,reverse])=>`<span class="carriage-map-label ${reverse?'map-label-reverse':''}" style="--map-x:${x}%;--map-y:${y}%"><span class="map-label-pill">${t(pz,pe)}</span><span class="map-label-location">${t(z,e)}</span></span>`).join('')}</figcaption></figure>`);
 zones.remove();
 const carriageMap=article.querySelector('.metro-carriage-map');
 const originalTextMasks=[[9.7,15,7.2,9],[29.8,0,6.2,11],[36.1,6,6.5,9],[45,15,6.5,10],[54,21,9,9],[64,28,8,9],[71,33,8,9],[77.4,38,8,9]];
 const masks=document.createElement('div');masks.className='carriage-original-text-masks';masks.setAttribute('aria-hidden','true');
 masks.innerHTML=originalTextMasks.map(([x,y,w,h])=>`<i style="left:${x}%;top:${y}%;width:${w}%;height:${h}%"></i>`).join('');
 carriageMap.querySelector('img').after(masks);
 const projectIntro=document.createElement('section');projectIntro.className='project-header metro-project-intro';
 projectIntro.innerHTML=`<div class="project-title"><a class="back" href="${href('work')}">↖ ${t('全部案例','All projects')}</a><h1 class="page-title">${t('闲鱼文学奖<br>地铁车厢视觉','Xianyu Literature Awards<br>Metro Exhibition')}</h1><p>${t('将线上的趣味表达，带入日常通勤空间。','Bringing playful online expression into everyday journeys.')}</p></div><div class="project-info"><dl><div><dt>${t('客户 / 品牌','Client / Brand')}</dt><dd>${t('闲鱼','Xianyu')}</dd></div><div><dt>${t('年份','Year')}</dt><dd>2021</dd></div><div><dt>${t('服务类别','Category')}</dt><dd>${t('活动、会议与展会视觉','Events & Exhibitions')}</dd></div><div><dt>${t('服务内容','Services')}</dt><dd>${t('品牌传播 / 空间视觉','Brand communication / Spatial graphics')}</dd></div></dl><div class="project-description"><span class="number">${t('项目介绍','About the project')}</span><p>${t('作为「闲鱼文学奖」传播的一部分，将闲鱼用户交易中的趣味表达转化为地铁车厢中的视觉体验。结合地面、车门、车窗与车身等不同位置，建立可阅读、可互动的线下场景。','Part of the Xianyu Literature Awards campaign, the project translates playful buyer–seller exchanges into a metro carriage experience. Graphics across the floor, doors, windows and walls create a space for reading and interaction.')}</p><p>${t('具体设计职责与合作团队署名待确认。','Specific design responsibilities and team credits remain to be confirmed.')}</p></div></div>`;
 article.before(projectIntro);
 projectIntro.querySelector('.project-description>p:last-child')?.remove();
 for(const [number,style] of [['04','wall'],['05','doors'],['06','advertising'],['07','corners'],['08','brand']]){
  const note=Array.from(article.querySelectorAll('.metro-copy')).find(el=>el.firstElementChild.textContent===number);
  const media=note.nextElementSibling;
  const group=document.createElement('section');group.className='metro-original-feature metro-original-'+style;
  note.before(group);group.append(note,media);
  if(style==='advertising')note.querySelector('p')?.remove();
 }
}
if(page==='project'){
 document.querySelectorAll('.project-header .project-title>.back,.project-header .project-title>p').forEach(el=>el.remove());
}
document.querySelectorAll('[data-lang]').forEach(b=>b.addEventListener('click',()=>{try{localStorage.setItem('pineapple-language',b.dataset.lang)}catch{}params.set('lang',b.dataset.lang);location.search=params.toString()}));
const menu=document.querySelector('.menu-toggle');menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')==='true';menu.setAttribute('aria-expanded',String(!open));document.querySelector('#nav').classList.toggle('open',!open)});
const buttons=document.querySelectorAll('[data-filter]');
if(page==='work'){
 document.querySelector('.page-intro>.eyebrow')?.remove();
 const heading=document.querySelector('.page-intro>.page-title');
 const sentence=t('把想法，做成看得见的作品。','Turning ideas into tangible work.');
 heading.classList.add('work-typing-title');heading.setAttribute('aria-label',sentence);
 const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
 heading.innerHTML=`<span class="work-typing-space" aria-hidden="true">${sentence}</span><span class="work-typing-output" aria-hidden="true">${reduced?sentence:''}</span>`;
 if(!reduced){
  const output=heading.querySelector('.work-typing-output'),chars=Array.from(sentence);let index=0;
  function typeWork(){
   const character=document.createElement('span');character.className='work-typed-character';character.textContent=chars[index++];output.append(character);
   if(index<chars.length)setTimeout(typeWork,lang==='zh'?145:65);
   else{output.classList.remove('is-typing');setTimeout(()=>{output.classList.add('is-resetting');setTimeout(()=>{output.replaceChildren();index=0;output.classList.remove('is-resetting');output.classList.add('is-typing');typeWork()},450)},2400)}
  }
  output.classList.add('is-typing');setTimeout(typeWork,450);
 }
}
const footerBrand=document.querySelector('.footer>.brand');
footerBrand.innerHTML=document.querySelector('.header>.brand').innerHTML;
if(page==='about'||page==='contact'){
 document.body.classList.add('editorial-page');
 const intro=document.querySelector('.page-intro');intro.classList.add('editorial-intro');
 intro.innerHTML=page==='about'
 ?`<h1 class="home-services-title reveal">About</h1><p class="editorial-subtitle reveal">${t('独立思考，直接协作。','Independent thinking. Direct collaboration.')}</p>`
 :`<h1 class="home-services-title reveal">Contact</h1><p class="editorial-subtitle reveal">${t('从一个想法，开始一次合作。','A good collaboration starts with a conversation.')}</p>`;
 if(page==='about'){
  const layout=document.querySelector('.about-layout');
  layout.className='about-panel editorial-panel';
  layout.innerHTML=`<span class="number reveal">01 / ${t('工作室','THE STUDIO')}</span><h2 class="reveal">${t('专注内容，<br>让表达有力量。','Thoughtful content.<br>Distinctive expression.')}</h2><p class="large-copy reveal">${t('大菠萝创意是一家由设计师主理的独立创意工作室，专注企业传播与内容视觉。','Big Pineapple Creative is an independent, designer-led studio focused on brand communication and visual content.')}</p><p class="reveal">${t('从一篇公众号长图、一组信息图，到一场活动的整套视觉，我们围绕业务、受众与传播目标，为内容找到清晰、有吸引力的表达方式。','From a social story or an infographic to an event’s visual language, we shape clear and compelling communication around the business, audience and brief.')}</p><div class="editorial-tags reveal">${categories.map(c=>`<span>${t(c[1],c[2])}</span>`).join('')}</div>`;
  const principles=document.querySelector('.principles');
  principles.className='about-process editorial-dark';
  principles.innerHTML=`<span class="number reveal">02 / ${t('工作方式','HOW WE WORK')}</span><h2 class="reveal">${t('主理人直接参与，<br>专业伙伴按需协作。','Personally involved.<br>Specialists when needed.')}</h2><div class="editorial-columns"><article class="reveal"><span>01</span><h3>${t('理解先行','Understand first')}</h3><p>${t('先梳理业务、内容和传播目标，再确定创意方向与设计形式。','We understand the business, content and goals before choosing a creative direction.')}</p></article><article class="reveal"><span>02</span><h3>${t('直接沟通','Work directly')}</h3><p>${t('核心项目由主理人负责沟通、创意与质量把控，保持判断和交付的一致。','The studio lead stays close to the brief, creative decisions and final delivery.')}</p></article><article class="reveal"><span>03</span><h3>${t('灵活协作','Collaborate thoughtfully')}</h3><p>${t('根据项目需要，联合品牌咨询、内容策划与制作等专业伙伴共同完成。','We bring in brand, content and production specialists to suit the project.')}</p></article></div>`;
 }else{
  const grid=document.querySelector('.contact-grid');grid.className='contact-panel editorial-panel';
  grid.innerHTML=`<span class="number reveal">01 / ${t('联系信息','GET IN TOUCH')}</span><h2 class="reveal">${t('聊聊你的下一个项目。','Tell us what’s next.')}</h2><p class="contact-lead reveal">${t('一次主题传播、一场重要活动，或一年的视觉支持。欢迎带着想法与我们交流。','A campaign, an important event or a year of creative support. We’d love to hear what you have in mind.')}</p><div class="contact-options"><article class="reveal"><span class="number">EMAIL</span><h3>${t('电子邮箱','Email')}</h3><p>${t('正式邮箱待补充','Email address to be added')}</p></article><article class="reveal"><span class="number">WECHAT</span><h3>${t('微信联系','WeChat')}</h3><div class="qr-placeholder" role="img" aria-label="${t('微信二维码待补充','WeChat QR code to follow')}"><span>QR</span><small>${t('待补充','Coming soon')}</small></div></article></div>`;
  const brief=document.createElement('section');brief.className='contact-brief editorial-dark';
  brief.innerHTML=`<span class="number reveal">02 / ${t('关于你的项目','YOUR PROJECT')}</span><h2 class="reveal">${t('这些信息，<br>让交流更高效。','A little context<br>goes a long way.')}</h2><div class="editorial-columns"><article class="reveal"><span>01</span><h3>${t('品牌与背景','Brand & background')}</h3><p>${t('你的品牌、业务，以及这次希望解决的问题。','Your brand, your business and the challenge you want to address.')}</p></article><article class="reveal"><span>02</span><h3>${t('目标与范围','Goals & scope')}</h3><p>${t('项目目标、需要的设计内容，以及已有资料。','What you want to achieve, the deliverables and any existing materials.')}</p></article><article class="reveal"><span>03</span><h3>${t('时间与预算','Timing & budget')}</h3><p>${t('预期上线时间、关键节点与大致预算范围。','Your expected launch, key milestones and approximate budget.')}</p></article></div>`;
  grid.after(brief);
 }
}
if(page==='home'){
 const serviceSection=document.createElement('section');serviceSection.className='home-services';
 const icons=[
  '<rect x="4" y="5" width="24" height="18" rx="4"/><path d="M10 23v5l6-5M10 12h12M10 17h8"/>',
  '<path d="M5 27h23M9 22v-7M16 22V6M23 22V11"/><circle cx="9" cy="10" r="1"/>',
  '<rect x="4" y="7" width="24" height="17" rx="2"/><path d="M16 24v5M10 29h12M10 3v4M22 3v4"/>',
  '<path d="M16 7c-4-3-8-3-12-2v21c4-1 8-1 12 2 4-3 8-3 12-2V5c-4-1-8-1-12 2Zm0 0v21"/>'
 ];
 const descriptions=[
  t('围绕节日节点、主题内容与品牌事件，创造适合公众号及社交平台的内容视觉。','Visual stories for seasonal moments, themed content and brand events across digital and social channels.'),
  t('梳理财报、战报与业务信息，将复杂内容转化为清晰、易读的信息图与数据长图。','Turning financial results, performance updates and complex business information into clear visual stories.'),
  t('从活动主视觉到现场延展，为会议、展会与周年庆建立统一的视觉表达。','From key visuals to on-site applications, a consistent visual language for events and exhibitions.'),
  t('为栏目、PPT与画册宣传册建立可持续使用、灵活延展的内容与视觉资产。','Lasting, adaptable visual assets for content channels, presentations, brochures and publications.')
 ];
 serviceSection.innerHTML=`<h2 class="home-services-title reveal">Services</h2><div class="home-services-grid">${categories.map(([id,z,e,tz,te],i)=>`<a class="home-service-card reveal" href="${href('services')}#${id}"><svg class="service-icon" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${icons[i]}</svg><h3>${t(z,e)}</h3><div class="home-service-bottom"><p class="home-service-tags">${(lang==='zh'?tz:te).join(' · ')}</p><p class="home-service-description">${descriptions[i]}</p></div></a>`).join('')}</div>`;
 document.querySelector('.selected').after(serviceSection);
}
document.querySelectorAll('.service-grid>.service').forEach((el,i)=>{el.id=categories[i][0]});
if(page==='services'){
 const grid=document.querySelector('.service-grid');
 grid.classList.add('home-services-grid');
 const serviceIcons=[
  '<rect x="4" y="5" width="24" height="18" rx="4"/><path d="M10 23v5l6-5M10 12h12M10 17h8"/>',
  '<path d="M5 27h23M9 22v-7M16 22V6M23 22V11"/><circle cx="9" cy="10" r="1"/>',
  '<rect x="4" y="7" width="24" height="17" rx="2"/><path d="M16 24v5M10 29h12M10 3v4M22 3v4"/>',
  '<path d="M16 7c-4-3-8-3-12-2v21c4-1 8-1 12 2 4-3 8-3 12-2V5c-4-1-8-1-12 2Zm0 0v21"/>'
 ];
 grid.querySelectorAll('.service').forEach((card,i)=>{
  card.classList.add('home-service-card','service-page-card');
  const heading=card.querySelector('h2'),description=card.querySelector('p'),tags=card.querySelector('.tags'),link=card.querySelector('a');
  card.querySelector('.number')?.remove();
  const icon=document.createElementNS('http://www.w3.org/2000/svg','svg');
  icon.setAttribute('class','service-icon');icon.setAttribute('viewBox','0 0 32 32');icon.setAttribute('fill','none');icon.setAttribute('stroke','currentColor');icon.setAttribute('stroke-width','1.7');icon.setAttribute('stroke-linecap','round');icon.setAttribute('stroke-linejoin','round');icon.setAttribute('aria-hidden','true');icon.innerHTML=serviceIcons[i];
  card.prepend(icon);
  const bottom=document.createElement('div');bottom.className='home-service-bottom';
  const tagLine=document.createElement('p');tagLine.className='home-service-tags';tagLine.textContent=Array.from(tags.children).map(el=>el.textContent).join(' · ');
  description.className='home-service-description';tags.remove();bottom.append(tagLine,description);card.append(bottom);
  link.classList.add('service-case-link');card.append(link);
 });
 const intro=document.querySelector('.page-intro');intro.classList.add('services-page-intro');
 intro.innerHTML=`<h1 class="home-services-title reveal">Services</h1><p class="services-page-subtitle reveal">${t('以视觉设计为核心，让每一次传播清晰、有吸引力。','Design-led support for clear, compelling communication.')}</p>`;
 // Service detail sections use a spacious text/tag header and full-width image.
 grid.className='service-detail-list';
 grid.querySelectorAll('.service-page-card').forEach((card,i)=>{
  const heading=card.querySelector('h2');
  const description=card.querySelector('.home-service-description');
  const related=card.querySelector('.service-case-link');
  const [,z,e,tz,te]=categories[i];
  card.className='service-detail';
  const top=document.createElement('div');top.className='service-detail-top';
  const copy=document.createElement('div');copy.className='service-detail-copy reveal';
  copy.append(heading,description);
  const tags=document.createElement('div');tags.className='service-detail-tags reveal';
  (lang==='zh'?tz:te).forEach(text=>{const tag=document.createElement('span');tag.textContent=text;tags.append(tag)});
  top.append(copy,tags);
  const image=document.createElement('a');image.className='service-detail-image reveal';image.href=href('work','&category='+categories[i][0]);image.setAttribute('aria-label',t(`查看${z}相关案例`,`View ${e} projects`));image.innerHTML=ph(i+1);
  card.replaceChildren(top,image);
  image.innerHTML=`<img src="assets/services/${categories[i][0]}.png" width="1672" height="941" alt="${t(z+'服务概念配图',e+' service concept image')}" loading="lazy"><span class="service-image-caption">${t('服务概念图','Service concept')}</span>`;
 });
 const spread=document.createElement('div');spread.className='services-spread';intro.before(spread);spread.append(intro,grid);
 intro.innerHTML=`<h1 class="services-spread-title reveal">${t('我们的服务','Our Services')}</h1>`;
 grid.querySelectorAll('.service-detail').forEach((card,i)=>{
  card.querySelector('.service-detail-image')?.remove();
  const top=card.querySelector('.service-detail-top'),copy=card.querySelector('.service-detail-copy'),description=copy.querySelector('p'),tags=card.querySelector('.service-detail-tags');
  const number=document.createElement('span');number.className='service-list-number';number.textContent=`[0${i+1}]`;copy.prepend(number);
  const right=document.createElement('div');right.className='service-list-description reveal';right.append(tags,description);
  tags.replaceChildren(...(lang==='zh'?categories[i][3]:categories[i][4]).map(text=>{const tag=document.createElement('span');tag.textContent=text;return tag}));
  top.append(right);
 });
 const modes=[
  [t('年度合作','Annual partnership'),t('围绕全年传播需求持续配合，逐步理解业务，保持内容与视觉表达的一致。','Ongoing support across a year of communication, building business understanding and a consistent visual language.'),'<path d="M17 12a20 20 0 1 1-4 25M13 37V25m0 12h12"/><path d="M33 20h12M39 14v12M28 38l7 7 15-17"/>'],
  [t('月度合作','Monthly collaboration'),t('适合阶段性、持续发生的设计需求，按月约定服务范围、排期与交付节奏。','For recurring design needs over a defined period, with a monthly scope, schedule and delivery rhythm.'),'<rect x="11" y="14" width="42" height="40" rx="5"/><path d="M11 25h42M22 9v10M42 9v10M21 34h5m8 0h5m-18 9h5m8 0h5"/>'],
  [t('专项合作','Project collaboration'),t('围绕一次传播、活动或重点项目，明确目标与边界，集中完成创意和设计交付。','Focused creative and design delivery for a campaign, event or key project, with clear goals and scope.'),'<path d="m32 7 23 13-23 13L9 20 32 7Zm-23 13v25l23 13 23-13V20M32 33v25M20 14l23 13"/>']
 ];
 const ways=document.querySelector('.ways');ways.className='ways collaboration-modes';
 ways.innerHTML=`<h2 class="collaboration-title reveal">${t('合作方式','Ways to work together')}</h2><div class="collaboration-grid">${modes.map(([name,description,icon],i)=>`<article class="collaboration-card reveal"><span class="collaboration-number">00${i+1}</span><svg class="collaboration-icon" viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${icon}</svg><h3>${name}</h3><p>${description}</p></article>`).join('')}</div>`;
 const abstractIcons=[
  '<path d="M49 19A23 23 0 0 0 10 29M10 29V17m0 12h12M15 45a23 23 0 0 0 39-10m0 0v12m0-12H42"/><circle cx="32" cy="32" r="12"/><path d="M32 24v9l6 4"/>',
  '<rect x="10" y="14" width="44" height="40" rx="5"/><path d="M10 26h44M22 9v10M42 9v10M20 35h5m7 0h5m7 0h1M20 44h5m7 0h5"/><circle cx="45" cy="44" r="5"/>',
  '<circle cx="29" cy="35" r="21"/><circle cx="29" cy="35" r="13"/><circle cx="29" cy="35" r="5"/><path d="m29 35 22-22m-10 0h10v10"/>'
 ];
 ways.querySelectorAll('.collaboration-icon').forEach((icon,i)=>icon.innerHTML=abstractIcons[i]);
}
// Keep the language control outside the navigation pill on every page.
const navigation=document.querySelector('#nav');
const navigationPill=document.createElement('div');navigationPill.className='nav-pill';
navigation.querySelectorAll(':scope > a').forEach(link=>navigationPill.append(link));
navigation.prepend(navigationPill);
const hero=document.querySelector('.home-hero');
if(hero){
 hero.querySelector('.eyebrow')?.remove();
 const headline=hero.querySelector('.hero-headline');
 const lines=[t('让内容更清晰，让传播更有吸引力。','Clarity in content, more compelling communication.')];
 headline.setAttribute('aria-label',lines.join(' '));
 const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
 headline.classList.add('type-headline');
 headline.innerHTML=lines.map(line=>`<span class="typing-line" aria-hidden="true"><span class="typing-space">${line}</span><span class="typing-text">${reduced?line:''}</span></span>`).join('');
 if(!reduced){
  const target=headline.querySelector('.typing-text');const chars=Array.from(lines[0]);let col=0;
  target.classList.add('typing-current');
  function type(){
   const character=document.createElement('span');character.className='typed-character';character.textContent=chars[col++];target.append(character);
   if(col<chars.length)setTimeout(type,lang==='zh'?145:65);
   else{target.classList.remove('typing-current');setTimeout(()=>{target.classList.add('typing-reset');setTimeout(()=>{target.replaceChildren();col=0;target.classList.remove('typing-reset');target.classList.add('typing-current');type()},450)},2400)}
  }
  setTimeout(type,450);
 }
 const note=document.querySelector('.studio-note');
 note?.querySelector('.eyebrow')?.remove();
 note?.querySelector('.line-link')?.classList.add('outline-button');
 document.querySelectorAll('main .card-arrow').forEach(el=>el.remove());
 document.querySelectorAll('main a').forEach(el=>{
  for(const node of el.childNodes)if(node.nodeType===Node.TEXT_NODE)node.textContent=node.textContent.replace(/\s*↗/g,'');
 });
 const bracketRow=document.createElement('div');bracketRow.className='hero-bracket-row';
 const leftBracket=document.createElement('span');leftBracket.className='hero-bracket';leftBracket.textContent='(';leftBracket.setAttribute('aria-hidden','true');
 const rightBracket=document.createElement('span');rightBracket.className='hero-bracket';rightBracket.textContent=')';rightBracket.setAttribute('aria-hidden','true');
 bracketRow.append(leftBracket,headline,rightBracket);hero.prepend(bracketRow);
 const studioWordmark=document.createElement('div');studioWordmark.className='hero-studio-wordmark';studioWordmark.setAttribute('aria-label','Big Pineapple Creative Design');studioWordmark.innerHTML='<span class="wordmark-row"><span>Big</span><span>Pineapple</span></span><span class="wordmark-row"><span>Creative</span><span>Design<span class="wordmark-dot" aria-hidden="true"></span></span></span>';bracketRow.after(studioWordmark);
 const accent=document.createElement('div');accent.className='hero-accent';accent.setAttribute('aria-hidden','true');
 accent.innerHTML='<div class="accent-position"><div class="accent-shape"></div></div>';
 hero.append(accent);
 document.querySelector('.selected').id='selected-work';
 if(matchMedia('(hover: hover) and (prefers-reduced-motion: no-preference)').matches){
  let frame;hero.addEventListener('pointermove',e=>{cancelAnimationFrame(frame);frame=requestAnimationFrame(()=>{const r=hero.getBoundingClientRect();hero.style.setProperty('--pointer-x',`${((e.clientX-r.left)/r.width-.5)*24}px`);hero.style.setProperty('--pointer-y',`${((e.clientY-r.top)/r.height-.5)*24}px`)})});
  hero.addEventListener('pointerleave',()=>{cancelAnimationFrame(frame);hero.style.setProperty('--pointer-x','0px');hero.style.setProperty('--pointer-y','0px')});
 }
}
function filter(id){buttons.forEach(b=>{b.classList.toggle('active',b.dataset.filter===id);b.setAttribute('aria-pressed',String(b.dataset.filter===id))});document.querySelectorAll('[data-category]').forEach(p=>{p.hidden=id!=='all'&&p.dataset.category!==id})}
buttons.forEach(b=>b.addEventListener('click',()=>filter(b.dataset.filter)));if(buttons.length&&categories.some(c=>c[0]===params.get('category')))filter(params.get('category'));
if(page==='home'){
 const hero=document.querySelector('.home-hero');
 const typed=hero.querySelector('.hero-headline');
 const heroVisual=document.createElement('div');heroVisual.className='reference-hero-visual';
 heroVisual.innerHTML='<div class="reference-name-row"><span>Big Pineapple</span><span class="reference-capsule" aria-hidden="true"></span></div><div class="reference-name-row reference-name-bottom"><span class="reference-ghost" aria-hidden="true">Creative</span><span>Creative Design<span class="reference-yellow" aria-hidden="true"></span></span></div>';
 if(!matchMedia('(prefers-reduced-motion: reduce)').matches&&'IntersectionObserver' in window){
  heroVisual.classList.add('hero-motion-ready');
  const heroObserver=new IntersectionObserver(entries=>{if(entries.some(entry=>entry.isIntersecting)){heroVisual.classList.add('hero-motion-visible');heroObserver.disconnect();}},{threshold:.12});
  heroObserver.observe(heroVisual);
 }
 hero.replaceChildren(typed,heroVisual);
 const services=document.querySelector('.home-services');
 const details=[
 t('围绕节日节点、主题内容与品牌事件，创造适合公众号及社交平台的创意与视觉表达。','Creative visual stories for seasonal moments, themed content and brand events across digital and social channels.'),
 t('将财报、战报及复杂业务信息，转化为清晰易读、具有传播力的信息图与数据长图。','Clear, engaging visual stories for financial results, performance updates and complex business information.'),
 t('从核心主视觉到现场延展，为活动、会议、展会和周年庆建立统一的视觉体验。','A unified visual language for events, conferences, exhibitions and anniversaries, from key visuals to on-site applications.'),
 t('为栏目、PPT和画册宣传册建立可以持续使用、灵活延展的内容与视觉资产。','Lasting, adaptable visual assets for content channels, presentations, brochures and publications.')
 ];
 services.className='home-services reference-services';
 services.innerHTML=`<h2 class="reference-services-title reveal">${t('服务','Services')}</h2><div class="reference-services-list">${categories.map(([id,z,e,tz,te],i)=>`<article class="reference-service-row reveal"><div><span class="number">[0${i+1}]</span><h3><a href="${href('services')}#${id}">${t(z,e)}</a></h3></div><div><p class="reference-service-tags">${(lang==='zh'?tz:te).join(' · ')}</p><p>${details[i]}</p></div></article>`).join('')}</div>`;
 const note=document.querySelector('.studio-note');note.className='studio-note reference-studio-note';
 const strengths=document.createElement('section');strengths.className='home-strengths';
 const strengthsData=[
  [t('理解内容，再开始设计','Understand before designing'),t('从业务、受众和传播目标出发，梳理内容重点，为复杂信息找到清晰的视觉表达。','We start with your business, audience and communication goals, identifying what matters and giving complex information a clear visual expression.')],
  [t('多年企业服务经验','Experience across businesses'),t('积累大型产业企业与互联网品牌项目经验，能够适应不同品牌规范、传播场景与协作流程。','Experience with large industrial businesses and internet brands helps us work across brand guidelines, communication contexts and collaborative processes.')],
  [t('主理人直接参与','Direct involvement from the studio lead'),t('由主理人直接沟通需求、判断创意方向并把控设计质量，让沟通与执行保持连贯。','The studio lead works directly on the brief, creative direction and design quality, keeping communication and execution connected.')],
  [t('从单次项目到长期支持','From one project to ongoing support'),t('既能承接目标明确的专项，也能持续配合年度传播，逐步积累对业务的理解与统一的视觉表达。','We support focused projects and year-round communication, building a deeper understanding of your business and a consistent visual language over time.')]
 ];
 strengths.innerHTML=`<h2 class="reveal">${t('为什么与我们合作','Why work with us')}</h2><div class="strengths-list">${strengthsData.map(([heading,description],i)=>`<article class="strength-row reveal"><h3>${heading}</h3><p>${description}</p><span class="strength-number">0${i+1}</span></article>`).join('')}</div>`;
 services.after(strengths);
 note.innerHTML=`<h2 class="reveal">${t('一家专注企业传播与内容视觉的<br>独立创意工作室。','An independent creative studio for<br>communication and visual content.')}</h2><a class="reference-about-button reveal" href="${href('about')}">${t('了解我们','About us')}<span aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="m9 5 7 7-7 7"/></svg></span></a>`;
 strengths.classList.add('strengths-with-link');
 strengths.append(note.querySelector('.reference-about-button'));
 strengths.querySelectorAll('.strength-number').forEach(el=>el.remove());
 strengths.querySelectorAll('.strength-row').forEach((row,i)=>{
  const details=document.createElement('details');details.className='strength-accordion reveal';details.open=i===0;
  const summary=document.createElement('summary');summary.textContent=row.querySelector('h3').textContent;
  const panel=document.createElement('div');panel.className='strength-answer';panel.append(row.querySelector('p'));
  details.append(summary,panel);row.replaceWith(details);
 });
 note.remove();
 document.querySelector('.selected .draft-note')?.remove();
}
if(page==='contact'){
 const intro=document.querySelector('.editorial-intro');
 intro.innerHTML=`<h1 class="contact-index-title reveal">${t('联系我们','Contact us')}</h1>`;
 const panel=document.querySelector('.contact-panel');
 panel.innerHTML=`<div class="contact-index-heading reveal"><h2>${t('从一个想法，<br>开始一次合作。','A good collaboration<br>starts with an idea.')}</h2><p>${t('一次主题传播、一场重要活动，或持续的视觉支持。欢迎介绍你的项目，我们一起讨论合适的合作方式。','A campaign, an important event or ongoing creative support. Share your project and we can explore the right way to work together.')}</p></div><div class="contact-index-options"><article class="contact-index-option reveal"><div><span class="number">01 / EMAIL</span><h3>${t('电子邮箱','Email')}</h3></div><p>${t('正式邮箱待补充','Email address to be added')}</p></article><article class="contact-index-option reveal"><div><span class="number">02 / WECHAT</span><h3>${t('微信联系','WeChat')}</h3></div><div class="contact-qr"><div class="qr-placeholder" role="img" aria-label="${t('微信二维码待补充','WeChat QR code to follow')}"><span>QR</span></div><p>${t('微信二维码待补充','WeChat QR code to follow')}</p></div></article></div>`;
 const spread=document.createElement('div');spread.className='contact-index-spread';intro.before(spread);spread.append(intro,panel);
 document.querySelector('.contact-brief')?.remove();
 const emailRow=panel.querySelector('.contact-index-option>p');
 emailRow.innerHTML='<a href="mailto:zoooezhang830@gmail.com">zoooezhang830@gmail.com</a>';
 const formSection=document.createElement('section');formSection.className='contact-form-section reveal';
 formSection.innerHTML=`<h2>${t('聊聊你的项目','Tell us about your project')}</h2><form action="https://formsubmit.co/zoooezhang830@gmail.com" method="POST" accept-charset="UTF-8"><input type="hidden" name="_subject" value="大菠萝创意 · 新项目咨询"><input type="hidden" name="_template" value="table"><label for="inquiry-name">${t('姓名 / 称呼','Name')}</label><input id="inquiry-name" name="name" autocomplete="name" maxlength="100" required placeholder="${t('怎么称呼你','Your name')}"><label for="inquiry-email">${t('联系邮箱','Email')}</label><input id="inquiry-email" name="email" type="email" autocomplete="email" maxlength="254" required placeholder="${t('方便回复你的邮箱','Your email address')}"><label for="inquiry-message">${t('项目需求','Project description')}</label><textarea id="inquiry-message" name="message" rows="6" minlength="10" maxlength="10000" required placeholder="${t('简单介绍项目背景、设计需求和预计时间','Tell us about the project, design needs and timing')}"></textarea><p class="contact-form-note">${t('提交内容将通过 FormSubmit 转发至我们的邮箱，仅用于回复本次咨询。请勿填写敏感信息。','Your submission is forwarded through FormSubmit to our inbox to respond to your inquiry. Please do not include sensitive information.')}</p><button type="submit">${t('发送项目需求','Send inquiry')} <span aria-hidden="true">↗</span></button><p class="contact-form-status" role="status"></p></form>`;
 panel.replaceChildren(formSection);
 spread.classList.add('contact-reference-layout');
 formSection.querySelector('h2').remove();
 const nameInput=formSection.querySelector('#inquiry-name');
 const nameLabel=formSection.querySelector('label[for="inquiry-name"]');
 nameLabel.textContent=t('姓名（必填）','Name (required)');
 const nameFields=document.createElement('div');nameFields.className='contact-name-fields';
 nameInput.before(nameFields);nameFields.append(nameInput);
 nameFields.insertAdjacentHTML('beforeend',`<input name="company" aria-label="${t('公司 / 品牌（选填）','Company / Brand (optional)')}" autocomplete="organization" maxlength="150" placeholder="${t('公司 / 品牌（选填）','Company / Brand (optional)')}">`);
 nameFields.insertAdjacentHTML('afterend',`<label for="inquiry-service">${t('服务类型','Service')}</label><select id="inquiry-service" name="service"><option value="">${t('请选择','Select a service')}</option>${[t('新媒体传播与内容创意','Digital & Social Content'),t('数据内容与信息可视化','Data & Information Design'),t('活动、会议与展会视觉','Events & Exhibitions'),t('品牌内容与视觉资产','Brand Content & Visual Assets'),t('其他 / 尚未确定','Other / Not sure yet')].map(title=>`<option>${title}</option>`).join('')}</select>`);
 const emailFeature=document.createElement('div');emailFeature.className='contact-email-feature reveal';
 const serviceSelect=formSection.querySelector('#inquiry-service');
 const dropdown=document.createElement('details');dropdown.className='service-dropdown';
 const summary=document.createElement('summary');summary.id='inquiry-service';summary.textContent=serviceSelect.options[0].textContent;
 const serviceValue=document.createElement('input');serviceValue.type='hidden';serviceValue.name='service';
 const choices=document.createElement('div');choices.className='service-dropdown-options';
 Array.from(serviceSelect.options).forEach(option=>{
  const choice=document.createElement('button');choice.type='button';choice.textContent=option.textContent;
  choice.addEventListener('click',()=>{serviceValue.value=option.value;summary.textContent=option.textContent;dropdown.open=false;summary.focus();});
  choices.append(choice);
 });
 dropdown.append(summary,choices,serviceValue);serviceSelect.replaceWith(dropdown);
 formSection.querySelector('label[for="inquiry-service"]').addEventListener('click',()=>summary.focus());
 dropdown.addEventListener('keydown',event=>{if(event.key==='Escape'){dropdown.open=false;summary.focus();}});
 document.addEventListener('click',event=>{if(!dropdown.contains(event.target))dropdown.open=false;});
 emailFeature.innerHTML='<a href="mailto:zoooezhang830@gmail.com">zoooezhang830@gmail.com</a>';
 emailFeature.insertAdjacentHTML('beforeend',`<div class="contact-location-social"><div class="contact-location"><p>${t('地址','Location')}</p><div>${t('中国 · 浙江 · 杭州','Hangzhou, Zhejiang, China')}</div></div><div class="contact-hours"><p>${t('工作时间','Office hours')}</p><div>${t('周一至周五 · 09:00–18:00','Monday–Friday · 09:00–18:00')}<small>${t('北京时间（UTC+8）','China Standard Time (UTC+8)')}</small></div></div><div class="contact-social-codes"><figure><div class="social-qr-placeholder">${t('二维码待补充','QR code to follow')}</div><figcaption>${t('小红书','Xiaohongshu')}</figcaption></figure><figure><div class="social-qr-placeholder">${t('二维码待补充','QR code to follow')}</div><figcaption>${t('微信','WeChat')}</figcaption></figure></div></div>`);
 spread.after(emailFeature);
 emailFeature.querySelectorAll('.social-qr-placeholder').forEach((placeholder,index)=>{
  const image=document.createElement('img');image.className='contact-social-qr';image.src=`assets/contact/${index===0?'xiaohongshu':'wechat'}.png`;image.alt=index===0?t('小红书二维码','Xiaohongshu QR code'):t('微信二维码','WeChat QR code');image.loading='lazy';
  const link=document.createElement('a');link.href=image.src;link.target='_blank';link.rel='noopener';link.setAttribute('aria-label',index===0?t('查看小红书二维码大图','View Xiaohongshu QR code'):t('查看微信二维码大图','View WeChat QR code'));link.append(image);placeholder.replaceWith(link);
 });
 const socialCodes=emailFeature.querySelector('.contact-social-codes');
 socialCodes.querySelector('figcaption').textContent=t('小红书','Rednote');
 socialCodes.querySelector('img').alt=t('小红书二维码','Rednote QR code');
 socialCodes.querySelector('a').setAttribute('aria-label',t('查看小红书二维码大图','View Rednote QR code'));
 emailFeature.querySelector('.contact-location-social').append(socialCodes);
 formSection.querySelector('form').addEventListener('submit',event=>{
  if(location.protocol==='file:'){
   event.preventDefault();
   formSection.querySelector('.contact-form-status').textContent=t('当前为本地文件预览，尚未发送。请通过网站地址打开后提交，或直接发邮件联系我们。','This local file preview cannot send submissions. Open the hosted website or email us directly.');
  }
 });
}
if(page==='about'){
 const intro=document.querySelector('.editorial-intro');
 intro.innerHTML=`<h1 class="about-index-title reveal">${t('关于我们','About us')}</h1>`;
 const panel=document.querySelector('.about-panel');
 panel.innerHTML=`<article class="about-index-row"><h2 class="reveal">${t('大菠萝创意','Big Pineapple Creative')}</h2><div class="reveal"><div class="about-outline-tags"><span>${t('独立创意工作室','Independent studio')}</span><span>${t('企业传播','Brand communication')}</span><span>${t('内容视觉','Visual content')}</span></div><p>${t('一家由设计师主理、专注企业传播与内容视觉的独立创意工作室。我们通过设计，让内容更清晰，让传播更有吸引力。','An independent, designer-led studio focused on brand communication and visual content. We use design to make content clearer and communication more compelling.')}</p></div></article><article class="about-index-row"><h2 class="reveal">${t('从内容到表达','From content to expression')}</h2><div class="reveal"><p>${t('从一篇公众号长图、一组信息图，到一场活动的整套视觉，我们围绕业务、受众与传播目标，为内容找到清晰、有吸引力的表达方式。','From a social story or an infographic to an event’s visual language, we shape clear and compelling communication around the business, audience and brief.')}</p><p>${t('服务涵盖新媒体传播与内容创意、数据内容与信息可视化、活动会议与展会视觉，以及品牌内容与视觉资产。','Our services span digital and social content, information visualization, event and exhibition graphics, and lasting brand content assets.')}</p></div></article><article class="about-index-row"><h2 class="reveal">${t('直接参与，灵活协作','Direct involvement, flexible collaboration')}</h2><div class="reveal"><p>${t('核心项目由主理人直接负责沟通、创意方向与质量把控。根据项目需要，联合品牌咨询、内容策划及制作等专业伙伴共同完成。','The studio lead is directly involved in the brief, creative direction and quality of delivery. Brand, content and production specialists join according to the project’s needs.')}</p></div></article>`;
 const spread=document.createElement('div');spread.className='about-index-spread';intro.before(spread);spread.append(intro,panel);
 const process=document.querySelector('.about-process');process.className='about-working';
 process.querySelector('.number')?.remove();
 process.querySelector('h2').innerHTML=t('我们的工作方式','How we work');
 process.classList.add('about-methods-editorial');
 const methodIntro=document.createElement('div');methodIntro.className='about-method-intro';
 methodIntro.innerHTML=`<p class="about-method-label reveal">${t('我们的工作方式','How we work')}</p><h2 class="reveal">${t('理解每一次表达，<br>认真完成每一次设计。','Understand the message.<br>Give every detail<br>the attention it deserves.')}</h2>`;
 process.querySelector('h2').replaceWith(methodIntro);
}
if(page==='about'){
 const spread=document.querySelector('.about-index-spread');spread.className='about-feature';
 document.querySelector('.about-index-title').textContent=t('关于大菠萝创意','About — Big Pineapple');
 const panel=document.querySelector('.about-panel');panel.className='about-feature-body';
 const statement=t('我们是一家专注企业传播与内容视觉的独立创意工作室。以设计连接品牌、内容与每一次重要表达，让复杂的信息更清晰，让传播更有吸引力。','We are an independent creative studio focused on brand communication and visual content. Through thoughtful design, we connect brands and ideas, making complex information clear and communication more compelling.');
 const pieces=lang==='zh'?Array.from(statement):statement.split(/(\s+)/);
 panel.innerHTML=`<div class="about-feature-copy"><p class="about-reading reveal" aria-label="${statement}"><span aria-hidden="true">${pieces.map((text,i)=>`<span class="about-reading-word" style="--word-delay:${Math.min(i*.025,3.2)}s">${text}</span>`).join('')}</span></p><p class="about-feature-note reveal">${t('从公众号长图、数据内容到活动整套视觉，由主理人直接参与创意与设计，并根据项目需要联合专业伙伴，为每个任务找到合适的表达。','From social stories and information design to an event’s visual language, the studio lead stays directly involved, bringing in specialist collaborators when a project calls for them.')}</p></div><figure class="about-feature-image reveal"><img src="assets/services/assets.png" width="1672" height="941" alt="${t('画册与视觉内容的设计概念配图','Concept image of editorial and visual design')}" loading="lazy"><figcaption>${t('设计概念配图','Design concept image')}</figcaption></figure>`;
}
if(page==='about'){
 const feature=document.querySelector('.about-feature');feature.classList.add('about-masthead');
 const reading=feature.querySelector('.about-reading');
 const copy=document.createElement('div');copy.className='about-masthead-copy';copy.append(reading);
 const masthead=document.createElement('div');masthead.className='about-masthead-name reveal';masthead.setAttribute('aria-label','About Big Pineapple');
 masthead.innerHTML=`<h1><span>About</span><span class="about-inline-image"><img src="assets/services/assets.png" width="1672" height="941" alt="${t('品牌内容设计概念配图','Brand content design concept image')}"></span><span>Big Pineapple<span class="about-name-dot" aria-hidden="true"></span></span></h1>`;
 feature.replaceChildren(copy,masthead);
}
// Reveal content at reading scale rather than fading entire long sections.
document.querySelectorAll('.studio-note,.service,.about-layout,.principles>div,.contact-grid,.project-info,.gallery-note').forEach(el=>el.classList.remove('reveal'));
document.querySelectorAll('.section-top,.project,.service>.number,.service>h2,.service>p,.service>.tags,.service>.line-link,.page-intro>.eyebrow,.page-intro>.page-title,.page-intro>.intro-copy,.studio-note>h2,.studio-note>div,.ways>.eyebrow,.ways>div>h2,.ways-grid>article,.about-statement,.about-layout>div>p,.principles>div>p,.principles>div>h2,.contact-grid>div,.project-info dl,.project-description,.project-gallery>.reveal,.gallery-pair>div,.gallery-note>p,.gallery-note>div,.next-project,.draft-note,.footer').forEach(el=>el.classList.add('reveal'));
// Cover the remaining page content while avoiding nested reveal animations.
document.querySelectorAll('main h1,main h2,main h3,main p,main .reference-hero-visual,main .placeholder,main img,main .service-icon,main .tags,main .editorial-tags,main .service-detail-tags,main .contact-options>article,main .editorial-columns>article,main .qr-placeholder,main .service-case-link').forEach(el=>{
 if(el.closest('.hero-headline')&&el!==document.querySelector('.home-hero>.hero-headline'))return;
 if(!el.classList.contains('reveal')&&!el.parentElement.closest('.reveal')&&!el.querySelector('.reveal'))el.classList.add('reveal');
});
if('IntersectionObserver'in window&&!matchMedia('(prefers-reduced-motion: reduce)').matches){
 document.documentElement.classList.add('motion');
 const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}}),{threshold:.08,rootMargin:'0px 0px -5% 0px'});
 document.querySelectorAll('.reveal').forEach(e=>observer.observe(e));
}
