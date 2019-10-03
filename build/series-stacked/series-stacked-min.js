YUI.add("series-stacked",function(t,e){var s=t.Lang;function o(){}o.prototype={_stacked:!0,_stackCoordinates:function(){"vertical"===this.get("direction")?this._stackXCoords():this._stackYCoords()},_stackXCoords:function(){var t,e,o,i,r,a,d=this.get("order"),c=this.get("seriesTypeCollection"),n=0,h=this.get("xcoords"),g=this.get("ycoords"),l=h.concat(),u=[];for(d>0?(r=c[d-1].get("stackedXCoords"),c[d-1].get("stackedYCoords"),t=r.length):t=h.length;n<t;n+=1)if(s.isNumber(h[n])){if(d>0){if(o=r[n],!s.isNumber(o))for(i=d;i>-1&&!s.isNumber(o);)o=(i-=1)>-1?c[i].get("stackedXCoords")[n]:this._leftOrigin;h[n]=h[n]+o}l[n]=h[n]}else u.push(n);if(this._cleanXNaN(l,g),(t=u.length)>0)for(n=0;n<t;n+=1)a=u[n],e=d>0?r[a]:this._leftOrigin,l[a]=Math.max(l[a],e);this.set("stackedXCoords",l),this.set("stackedYCoords",g)},_stackYCoords:function(){var t,e,o,i,r,a,d=this.get("order"),c=this.get("graphic").get("height"),n=this.get("seriesTypeCollection"),h=0,g=this.get("xcoords"),l=this.get("ycoords"),u=l.concat(),N=[];for(d>0?(n[d-1].get("stackedXCoords"),t=(r=n[d-1].get("stackedYCoords")).length):t=l.length;h<t;h+=1)if(s.isNumber(l[h])){if(d>0){if(o=r[h],!s.isNumber(o))for(i=d;i>-1&&!s.isNumber(o);)o=(i-=1)>-1?n[i].get("stackedYCoords")[h]:this._bottomOrigin;l[h]=o-(c-l[h])}u[h]=l[h]}else N.push(h);if(this._cleanYNaN(g,u),(t=N.length)>0)for(h=0;h<t;h+=1)a=N[h],e=d>0?r[a]:c,u[a]=Math.min(u[a],e);this.set("stackedXCoords",g),this.set("stackedYCoords",u)},_cleanXNaN:function(t,e){for(var o,i,r,a,d,c,n,h=s.isNumber,g=0,l=e.length;g<l;++g)r=t[g],a=e[g],!h(r)&&g>0&&g<l-1&&(i=e[g-1],o=this._getPreviousValidCoordValue(t,g),c=e[g+1],d=this._getNextValidCoordValue(t,g),h(o)&&h(d)&&(n=(c-i)/(d-o),t[g]=(a+n*o-i)/n),NaN,NaN)},_getPreviousValidCoordValue:function(t,e){for(var o,i=s.isNumber;!i(o)&&e>-1;)o=t[e-=1];return o},_getNextValidCoordValue:function(t,e){for(var o,i=s.isNumber,r=t.length;!i(o)&&e<r;)o=t[e+=1];return o},_cleanYNaN:function(t,e){for(var o,i,r,a,d,c,n=s.isNumber,h=0,g=t.length;h<g;++h)r=t[h],!n(e[h])&&h>0&&h<g-1&&(o=t[h-1],i=this._getPreviousValidCoordValue(e,h),a=t[h+1],d=this._getNextValidCoordValue(e,h),n(i)&&n(d)&&(c=(d-i)/(a-o),e[h]=i+(c*r-c*o)),NaN,NaN)}},t.StackingUtil=o},"patched-v3.18.1",{requires:["axis-stacked"]});