let applyParallax = section => {
  
  section.addEventListener('mousemove', e => {

    let { width, height } = section.getBoundingClientRect();
    let offX = e.pageX - (width * 0.5);
    let offY = e.pageY - (height * 0.5);

    for (let layer of document.querySelectorAll('.img')) {
      const speed = layer.getAttribute('data-speed');
      const x = (offX * speed) / 100;
      const y = (offY * speed) / 100;
      layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
    }

  });
  
  
  //section.addEventListener('mouseleave', e => {
//
  //  for (let layer of document.querySelectorAll('.img')) {
  //    layer.style.transform = `translateX(0px) translateY(0px)`
  //  }
//
  //});
  
};
applyParallax(document.querySelector('body'));