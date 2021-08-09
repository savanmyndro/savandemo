function zoom(event) {
    event.preventDefault();
  
    scale += event.deltaY * -0.01;
    console.log("scale 1 ",scale);
  
    // Restrict scale
    scale = Math.min(Math.max(.125, scale), 4);
    console.log("scale 2 ",scale);
  
    // Apply scale transform
    document.querySelector('h2').style.transform = `scale(${scale})`;
  }
  
  let scale = 1;
  const el = document.querySelector('body');
  el.onscroll = zoom;