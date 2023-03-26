ResizeableTextBox=function(t,e,s,i,h){THREE.Object3D.call(this),this.cube=t,this.name=e,this.text=s,this.opacity=1,this.longWord="",this.maxWordLength=15,this.min=void 0!==i?i:50,this.max=void 0!==h?h:180,isMobile&&(this.max=void 0!==h?h:210),this.cube.object3D.add(this);var n=document.createElement("div");n.classList.add("textBox"),n.id=e,this.css3DObject=new THREE.CSS3DObject(n),n.textContent=s,this.css3DObject.name="css3DObject-"+e,this.domElement=n,this.add(this.css3DObject),s&&this.setTextResize(s),requestAnimationFrame(this.resize.bind(this))},ResizeableTextBox.prototype=Object.create(THREE.Object3D.prototype),ERNO.extend(ResizeableTextBox.prototype,{prepareText:function(t){if(t){var e=t.split(" "),s=(e[0],0);if(this.text=t,e.length>1){this.longWord=e[0];for(var i=0;i<e.length;i++)e[i].length>this.longWord.length&&(this.longWord=e[i],s=i);e[s].length>this.maxWordLength&&(e[s]=e[s].substring(0,this.maxWordLength)+"..."),this.longWord=e[s];var h="";if(e.length>2){for(i=0;i<e.length;i++)h+=e[i]+" ";this.text=h}else h=e[0]+" "+e[1];this.text=h}}},setTextResize:function(t){return this.prepareText(t),this.resize(),this.css3DObject.element.textContent=this.text,this},resize:function(){var t=Math.min(this.max,Math.max(this.min,this.css3DObject.element.clientWidth/this.longWord.length*1.3));this.css3DObject.element.style.fontSize=t+"px"},setText:function(t){return this.css3DObject.element.textContent=t,this.text=t,this},setOpacity:function(t){return this.opacity=t,this.css3DObject.element.style.opacity=t,this}});