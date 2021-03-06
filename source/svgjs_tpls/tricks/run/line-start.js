x=function(actor, progress) {
  /*
  var __angle=0, __distance=30, __loops=3, __fnEasing=easingFunctions.easeInOutQuad;
  */
  progress=__fnEasing(progress)%1;
  progress=(progress*__loops)%1;
  progress=progress<0?1+progress:progress;

  var cx,cy;
  if(progress<0.5) {
    cx = progress * 2 * __distance * Math.cos(__angle * Math.PI / 180);
    cy = - progress * 2 * __distance * Math.sin(__angle * Math.PI / 180);
  } else {
    cx = (1-progress) * 2 * __distance * Math.cos(__angle * Math.PI / 180);
    cy = - (1-progress) * 2 * __distance * Math.sin(__angle * Math.PI / 180);
  }


  actor._tMatrix[4]+=cx;
  actor._tMatrix[5]+=cy;
};