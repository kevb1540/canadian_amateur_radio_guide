// ©️ Kevin W. Brown 2026
/* Text anchors stay independent of marks, answer visibility and action-button labels. */
(function(root){'use strict';
function textNodes(lesson){
 const nodes=[],walker=document.createTreeWalker(lesson,NodeFilter.SHOW_TEXT,{acceptNode:n=>n.parentElement&&!n.parentElement.closest('button,input,textarea,select,script,style')?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT});
 let node;while((node=walker.nextNode()))nodes.push(node);return nodes;
}
class Controller{
 constructor(hooks){
  this.h=hooks;this.pending=null;this.busy=false;
  this.menu=document.createElement('div');this.menu.id='lesson-highlight-menu';this.menu.hidden=true;this.menu.setAttribute('role','toolbar');this.menu.setAttribute('aria-label','Lesson text selection');
  const button=document.createElement('button');button.type='button';button.textContent='Highlight';button.id='highlight-selected-lesson';this.menu.append(button);document.body.append(this.menu);
  button.addEventListener('pointerdown',e=>e.preventDefault());button.addEventListener('mousedown',e=>e.preventDefault());button.addEventListener('click',()=>this.saveSelection());
  document.addEventListener('selectionchange',()=>this.updateMenu());
  document.addEventListener('scroll',()=>this.updateMenu(),true);root.addEventListener('resize',()=>this.updateMenu());
  root.lessonHighlightSelection=()=>this.capture();
  root.clearLessonHighlightSelection=()=>this.reset();
  root.highlightLessonSelection=()=>{const target=this.snapshot()||this.pending;if(!this.usable(target)||this.busy)return false;this.saveSelection(target);return true;};
 }
 reset(){this.pending=null;this.menu.hidden=true;this.notifyNative(false);}
 notifyNative(valid){if(typeof root.AndroidApp?.lessonHighlightSelectionChanged==='function'&&this.nativeAvailable!==valid){this.nativeAvailable=valid;root.AndroidApp.lessonHighlightSelectionChanged(valid);}}
 usable(target){return !!target&&!!this.h.identity()&&target.identity===this.h.identity()&&target.lesson.isConnected&&target.lesson.dataset.chapterId===target.chapterId&&target.lesson.dataset.lessonId===target.lessonId;}
 snapshot(){
  const identity=this.h.identity(),selection=root.getSelection();if(!identity||!selection||selection.isCollapsed||selection.rangeCount!==1||document.querySelector('dialog[open]'))return null;
  const range=selection.getRangeAt(0),element=n=>n.nodeType===Node.ELEMENT_NODE?n:n.parentElement,lesson=element(range.startContainer)?.closest('.lesson');
  if(!lesson||lesson!==element(range.endContainer)?.closest('.lesson')||!lesson.dataset.chapterId||!lesson.dataset.lessonId)return null;
  const chunks=[];let offset=0;
  for(const node of textNodes(lesson)){
   const size=node.data.length,base=offset;offset+=size;
   if(!size||node.parentElement.closest('[hidden]')||!range.intersectsNode(node)||range.comparePoint(node,size)<0||range.comparePoint(node,0)>0)continue;
   const start=range.startContainer===node?range.startOffset:0,end=range.endContainer===node?range.endOffset:size;
   if(end<=start||!node.data.slice(start,end).trim())continue;
   const last=chunks[chunks.length-1],text=node.data.slice(start,end);
   if(last&&last.end===base+start){last.end=base+end;last.text+=text;}else chunks.push({start:base+start,end:base+end,text});
  }
  if(!chunks.length)return null;
  return {identity,lesson,chapterId:lesson.dataset.chapterId,lessonId:lesson.dataset.lessonId,ranges:chunks,rect:range.getBoundingClientRect()};
 }
 capture(){this.pending=this.busy?null:this.snapshot();return !!this.pending;}
 updateMenu(){
  const valid=this.capture();this.notifyNative(valid);if(!valid||typeof root.AndroidApp?.lessonHighlightMenu==='function'){this.menu.hidden=true;return;}
  const rect=this.pending.rect;if(rect.bottom<78||rect.top>innerHeight-65){this.menu.hidden=true;return;}
  this.menu.hidden=false;const box=this.menu.getBoundingClientRect();
  this.menu.style.left=Math.max(8,Math.min(innerWidth-box.width-8,rect.left))+'px';
  this.menu.style.top=Math.max(82,Math.min(innerHeight-box.height-85,rect.bottom+8))+'px';
 }
 async saveSelection(target=this.snapshot()||this.pending){
  if(this.busy||!this.usable(target))return false;
  const progress=this.h.state(),previous=progress.highlights||[],now=new Date().toISOString();
  const added=target.ranges.map(h=>({id:RadioCore.uuid(),chapterId:target.chapterId,lessonId:target.lessonId,start:h.start,end:h.end,text:h.text,createdAt:now}));
  let next;try{next=RadioCore.mergeHighlights(previous,added);}catch(e){this.h.notice('Could not save this highlight. Select a shorter passage or export your progress.');return false;}
  if(next.length===previous.length){this.reset();root.getSelection()?.removeAllRanges();this.h.notice('Already highlighted');return true;}
  this.busy=true;progress.highlights=next;this.menu.hidden=true;
  try{
   if(!await this.h.save())throw Error('Highlight could not be saved.');
   if(this.h.state()===progress&&this.h.identity()===target.identity){this.renderAll();root.getSelection()?.removeAllRanges();this.h.notice('Highlight saved');}
   return true;
  }catch(e){
   progress.highlights=previous;
   if(this.h.state()===progress&&this.h.identity()===target.identity)this.h.notice('Highlight could not be saved. Your previous highlights are unchanged.');
   return false;
  }finally{this.busy=false;this.reset();}
 }
 renderAll(){
  this.reset();if(!this.h.identity())return;
  for(const lesson of document.querySelectorAll('main .lesson'))this.paint(lesson);
 }
 paint(lesson){
  for(const mark of lesson.querySelectorAll('mark.lesson-highlight'))mark.replaceWith(...mark.childNodes);
  lesson.normalize();const nodes=textNodes(lesson),text=nodes.map(n=>n.data).join(''),ranges=[];
  for(const h of this.h.state().highlights||[]){
   if(h.chapterId!==lesson.dataset.chapterId||h.lessonId!==lesson.dataset.lessonId)continue;
   let start=h.start,end=h.end;
   if(text.slice(start,end)!==h.text){start=text.indexOf(h.text);if(start<0||text.indexOf(h.text,start+1)>=0)continue;end=start+h.text.length;}
   ranges.push({start,end});
  }
  ranges.sort((a,b)=>a.start-b.start||a.end-b.end);const merged=[];
  for(const range of ranges){const last=merged[merged.length-1];if(last&&range.start<=last.end)last.end=Math.max(last.end,range.end);else merged.push({...range});}
  let offset=0;
  for(const node of nodes){
   const base=offset;offset+=node.data.length;
   const portions=merged.filter(h=>h.start<offset&&h.end>base).map(h=>({start:Math.max(0,h.start-base),end:Math.min(node.data.length,h.end-base)})).reverse();
   for(const h of portions){node.splitText(h.end);const selected=node.splitText(h.start),mark=document.createElement('mark');mark.className='lesson-highlight';selected.replaceWith(mark);mark.append(selected);}
  }
 }
}
root.RadioHighlights={Controller};
})(window);
