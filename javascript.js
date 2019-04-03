// timelines
var tlHoofd = new TimelineMax({ repeat: -1, paused: false, yoyo: true });
var tlTorso = new TimelineMax({ repeat: -1, paused: false, yoyo: true });
var tlArmL = new TimelineMax({ repeat: -1, paused: false, yoyo: true });
var tlArmLT = new TimelineMax({ repeat: -1, paused: false, yoyo: false });
var tlArmR = new TimelineMax({ repeat: -1, paused: false, yoyo: true });
var tlBenen = new TimelineMax({ repeat: -1, paused: false, yoyo: true });
var tlCape = new TimelineMax({ repeat: -1, paused: false, yoyo: true });
var tlStealth = new TimelineMax({ repeat: -1, paused: false, yoyo: true });

var hoofd = $("#Hoofd");
var torso = $("#Torso");
var armL = $("#Arm_L");
var armLT = $("#Onderarm-2");
var armR = $("#Arm_R");
var benen = $("#Benen");
var cape = $("#Cape");
var slash = $("#Slash");
var flame1 = $("#Flame1");
var flame2 = $("#Flame2");
var eyeGlow = $("#Eye_glow");
var onderbeenR = $("#Onderbeen");
var onderbeenL = $("#Onderbeen-2");

var getSlashBtn = $("#swordSlash svg");
var getEagleBtn = $("#eagleVision svg");
var getStealthBtn = $("#stealthMode svg");

var eagleToggle = 0;

// Hoofd animatie
tlHoofd.to(hoofd, 0.75, {
  ease: Power3.ease,
  y: 1,
  ease: Power3.ease,
  rotation: 2,
  transformOrigin: "bottom center"
})
;

// Torso animatie
tlTorso.to(torso, 0.75, {
  ease: Power1.ease,
  y: 1.5
});

// Arm L animatie
tlArmL.to(armL, 0.75, {
  ease: Power3.ease,
  transformOrigin: "15px 0px",
  y: 2,
  rotation: -2
});

// Arm LT animatie
tlArmLT.to(armLT, 0.75, {
  ease: Power3.ease,
  rotation: 0,
  transformOrigin: "8px 2px"
});

// Arm R animatie
tlArmR.to(armR, 0.75, {
  ease: Power3.ease,
  y: 2,
  ease: Power3.ease,
  rotation: 1,
  transformOrigin: "top left"
});

// Benen animatie
tlBenen.to(benen, 0.75, {
  ease: Power1.ease,
  scaleY: 0.99,
  transformOrigin: "top center"
});

// Cape animatie
tlCape.to(cape, .75, {
  ease: Power1.easeInOut,
  rotation: 1,
  scaleY: 0.99,
  transformOrigin: "40% 0%"
});

function armSlash() {
    var tlArmSlash = new TimelineMax({ repeat: 0, paused: false, yoyo: false });
    
    // Arm Slash
    tlArmSlash.to(armL, 0.4, {
      ease: Power3.easeInOut,
      rotation: -40,
    })
    .to(armLT, 0.6, {
      ease: Power3.easeInOut,
      rotation: -90,
      
    },"-=0.6")
    .to(slash, 0.15, {
      ease: Power3.easeInOut,
      opacity: 0
    },"-=0.2")
    .to(armL, 0.2, {
      ease: Power3.easeInOut,
      rotation: 0,
    },"+=0.2")
    .to(armLT, 0.15, {
      ease: Power3.easeInOut,
      rotation: 0,
    },"-=0.15")
    .to(slash, 0.15, {
      ease: Power3.easeInOut,
      opacity: .5,
    },"-=0.1")
    .to(slash, .3, {
      ease: Power3.easeInOut,
      opacity: 0,
    });
}

function eagleVision2() {
    var getAssassin = document.getElementById("assassin");
    var getEagle = document.getElementById("Eagle_vision");
    getAssassin.classList.toggle("flames");
    
    if (eagleToggle == 0){
        getEagle.style.opacity = "1";
        eagleToggle = 1;
    }
    else {
        getEagle.style.opacity = "0";
        eagleToggle = 0;
    }
    
    var tlFlame1 = new TimelineMax({ repeat: -1, paused: false, yoyo: true });
    var tlFlame2 = new TimelineMax({ repeat: -1, paused: false, yoyo: true });
    var tlFlameOpacity = new TimelineMax({ repeat: -1, paused: false, yoyo: true });
    var tlFlameOpacity2 = new TimelineMax({ repeat: -1, paused: false, yoyo: true });
    var tlEyeGlow = new TimelineMax({ repeat: 0, paused: false, yoyo: false });
    
    //Flame 1
    tlFlame1.to(flame1, 0.2, {
      ease: Power3.ease,
      skewX: 3,
      skewY: -2,
      scaleY: 1.2,
      transformOrigin: "bottom center",
    })
    .to(flame1, 0.1, {
      ease: Power3.ease,
      skewX: -3,
      skewY: 2,
    },"-=0.3")
    ;

    tlFlameOpacity.to(flame1, 0.2, {
      ease: Power3.ease,
      opacity: 1
    })
    .to(flame1, 0.2, {
      ease: Power3.ease,
      opacity: .4
    },"-=0.4")
    ;

    //Flame 2
    tlFlame2.to(flame2, 0.1, {
      ease: Power3.ease,
      skewX: -3,
      skewY: 2,
      scaleY: 1.2,
      transformOrigin: "bottom center",
    })
    .to(flame2, 0.1, {
      ease: Power3.ease,
      skewX: 3,
      skewY: -2,
    },"-=0.2")
    ;

    tlFlameOpacity2.to(flame2, 0.4, {
      ease: Power3.ease,
      opacity: .4
    })
    .to(flame2, 0.2, {
      ease: Power3.ease,
      opacity: 1
    },"-=0.6")
    ;
    
    tlEyeGlow.to(eyeGlow, 0.2, {
      opacity: 1
    });
}

function stealthMode2() {
    
    var getAssassin = document.getElementById("assassin");
    getAssassin.style.opacity = ".7";
    setTimeout(function(){
        getAssassin.style.opacity = "1";
    },3000);
    
    tlBenen = new TimelineMax({ repeat: 0, paused: false, yoyo: true });
    
    tlBenen.to(benen, 1, {
      ease: Power1.ease,
      rotation: -50,
    })
    .to(benen, 1, {
      ease: Power1.ease,
      rotation: 0,
    },"+=2")
    
    tlOnderbeenL = new TimelineMax({ repeat: 0, paused: false, yoyo: true });
    tlOnderbeenL.to(onderbeenL, 1, {
      ease: Power1.ease,
      rotation: 0,
      y: 0,
      x: 0,
      transformOrigin: "top center"
    })
    tlOnderbeenL.to(onderbeenL, 1, {
      ease: Power1.easeInOut,
      rotation: 50,
      y: -15,
      x: 10,
      transformOrigin: "top center"
    },"-=1")
    .to(onderbeenL, 0.75, {
      ease: Power1.ease,
      rotation: 0,
      y: 0,
      x: 0,
      transformOrigin: "top center"
    },"+=2");
    
    tlOnderbeenR = new TimelineMax({ repeat: 0, paused: false, yoyo: true });
    tlOnderbeenR.to(onderbeenR, 1, {
      ease: Power1.ease,
      rotation: 0,
      transformOrigin: "top center"
    })
    .to(onderbeenR, 1, {
      ease: Power1.easeInOut,
      rotation: 50,
      transformOrigin: "top center"
    },"-=1")
    .to(onderbeenR, 0.75, {
      ease: Power1.ease,
      rotation: 0,
      transformOrigin: "top center"
    },"+=2");
    
    tlTorso = new TimelineMax({ repeat: 0, paused: false, yoyo: true });
    tlTorso.to(torso, 1, {
      ease: Power1.ease,
    transformOrigin: "bottom center",
      rotation: 0,
      y: 0,
    })
    .to(torso, 1, {
      ease: Power1.ease,
      rotation: 15,
      y: 15,
    },"-=1")
    .to(torso, 0.75, {
      ease: Power1.ease,
      rotation: 0,
      y: 0,
    },"+=2");
    
    tlHoofd = new TimelineMax({ repeat: 0, paused: false, yoyo: true });
    tlHoofd.to(hoofd, 1, {
      ease: Power1.ease,
    transformOrigin: "bottom center",
      rotation: 0,
      y: 0,
      x: 0,
    })
    .to(hoofd, 1, {
      ease: Power1.ease,
      rotation: 0,
      y: 20,
      x: 15,
    },"-=1")
    .to(hoofd, 0.75, {
      ease: Power1.ease,
      rotation: 0,
      y: 0,
      x: 0,
    },"+=2");
    
    tlCape = new TimelineMax({ repeat: 0, paused: false, yoyo: true });
    tlCape.to(cape, 1, {
      ease: Power1.ease,
      transformOrigin: "top center",
      rotation: 1,
      scaleY: 1,
      y: 0,
      x: 0,
    })
    .to(cape, 1, {
      ease: Power1.ease,
      rotation: 0,
      scaleY: 0.7,
      y: 20,
      x: 15,
    },"-=1")
    .to(cape, 0.75, {
      ease: Power1.ease,
      rotation: 1,
      scaleY: 1,
      y: 0,
      x: 0,
    },"+=2");
    
    tlArmL = new TimelineMax({ repeat: 0, paused: false, yoyo: true });
    
    tlArmL.to([armL, armR], 1, {
      ease: Power1.ease,
      transformOrigin: "top center",
      rotation: 1,
      scaleY: 1,
      y: 0,
      x: 0,
    })
    .to([armL, armR], 1, {
      ease: Power1.ease,
      rotation: 0,
      scaleY: 0.7,
      y: 20,
      x: 15,
    },"-=1")
    .to([armL, armR], 0.75, {
      ease: Power1.ease,
      rotation: 1,
      scaleY: 1,
      y: 0,
      x: 0,
    },"+=2");
}

// Buttons

function slashButton2() {
    
    var tlSlashBtn = new TimelineMax({ repeat: 0, paused: false, yoyo: false });
    
    tlSlashBtn.to(getSlashBtn, 1, {
        ease: Power3.easeInOut,
        rotation: 0,
    })
    .to(getSlashBtn, 0.2, {
        rotation: 90,
    },"-=1")
    .to(getSlashBtn, 1, {
        rotation: 0,
    });   
}

function eagleButton2() {
    
    var getEagleExtention = $("#eagleVision #Extention");
    var getEagleBird = $("#eagleVision #Bird");
    var getEagleEye = $("#eagleVision #Eye");
    
    var tlEagleBtn = new TimelineMax({ repeat: 0, paused: false, yoyo: false });
    var tlEagleBird = new TimelineMax({ repeat: 0, paused: false, yoyo: false });
    var tlEagleEye = new TimelineMax({ repeat: 0, paused: false, yoyo: false });
        
    tlEagleBtn.to(getEagleExtention, .2, {
        ease: Power3.easeInOut,
        y: 0,
    })
    .to(getEagleExtention, 1, {
        y: -6,
    })
    .to(getEagleExtention, 1, {
        ease: Power3.easeInOut,
        y: 0,
    });
    
    tlEagleBird.to(getEagleBird, .2, {
        ease: Power3.easeInOut,
        scaleX: 1,
        transformOrigin: "center top"
    })
    .to(getEagleBird, 1, {
        scaleX: 1.1,
    })
    .to(getEagleBird, 1, {
        ease: Power3.easeInOut,
        scaleX: 1,
    });
    
    tlEagleEye.to(getEagleEye, .2, {
        ease: Power3.easeInOut,
        y: 0,
        scale: 1,
        transformOrigin: "center center"
    })
    .to(getEagleEye, 1, {
        y: -2,
        scale: 1.2,
    })
    .to(getEagleEye, 1, {
        ease: Power3.easeInOut,
        y: 0,
        scale: 1,
    });
}

function stealthButton2() {
    
    var tlStealthBtn = new TimelineMax({ repeat: 0, paused: false, yoyo: false });
    var getStealthHidden = $("#stealthMode #Hidden");
    
    tlStealthBtn.to(getStealthHidden, 1, {
        ease: Power3.easeInOut,
        opacity: 1,
    })
    .to(getStealthHidden, 2, {
        opacity: .3,
    },"-=1")
    .to(getStealthHidden, 1, {
        opacity: 1,
    });   
}


swordSlash.addEventListener('click', function() {
    armSlash();
});
eagleVision.addEventListener('click', function() {
    eagleVision2();
});
stealthMode.addEventListener('click', function() {
    stealthMode2();
});

getSlashBtn.addEventListener('mouseover', function() {
    slashButton2();
});
getEagleBtn.addEventListener('mouseover', function() {
    eagleButton2();
});
getStealthBtn.addEventListener('mouseover', function() {
    stealthButton2();
});

// Helper functions
function $(el) {
  return document.querySelector(el);
}

function $$(els) {
  return document.querySelectorAll(els);
}