var buttons = document.querySelectorAll('input');
var mapFrame = document.getElementById('idFrame');
var button;
for(button=0;button<buttons.length;button++){

  buttons[button].onclick=function(){
    // alert(this.value);
    if(this.value === 'seattle'){
      mapFrame.src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d172138.65426692227!2d-122.20197951990114!3d47.61317464140947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490102c93e83355%3A0x102565466944d59a!2z2LPZitin2KrZhNiMINmI2KfYtNmG2LfZhtiMINin2YTZiNmE2KfZitin2Kog2KfZhNmF2KrYrdiv2Kk!5e0!3m2!1sar!2sjo!4v1582927033019!5m2!1sar!2sjo';
    }
    if(this.value === 'dubai'){
      mapFrame.src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462562.8478599594!2d55.50794722332686!3d25.075707330407372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2z2K_YqNmKIC0g2KfZhNil2YXYp9ix2KfYqiDYp9mE2LnYsdio2YrYqSDYp9mE2YXYqtit2K_YqQ!5e0!3m2!1sar!2sjo!4v1582926875447!5m2!1sar!2sjo';
    }
    if(this.value === 'tokyo'){
      mapFrame.src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d207446.24818938697!2d139.88095443376176!3d35.668441464660695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b857628235d%3A0xcdd8aef709a2b520!2zVG9reW8sINi32YjZg9mK2YjYjCDYp9mE2YrYp9io2KfZhg!5e0!3m2!1sar!2sjo!4v1582926932487!5m2!1sar!2sjo';
    }
    if(this.value === 'paris'){
      mapFrame.src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83998.75769393811!2d2.417100026071974!3d48.85895068137428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2z2KjYp9ix2YrYs9iMINmB2LHZhtiz2Kc!5e0!3m2!1sar!2sjo!4v1582926747054!5m2!1sar!2sjo';
    }

    if(this.value === 'lima'){
      mapFrame.src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d499488.88285513397!2d-76.70757663100659!3d-12.025826973069979!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c5f619ee3ec7%3A0x14206cb9cc452e4a!2z2YTZitmF2KfYjCDYqNmK2LHZiA!5e0!3m2!1sar!2sjo!4v1582926822677!5m2!1sar!2sjo';
    }
  };
}

