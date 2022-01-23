var canvas;
window.onload = function() {

    //Assigns the area that will use Canvas
    canvas.width = document.width;
    canvas.height = canvas.width;

    // add eventListener for keydown
    document.addEventListener('keydown', function(e) {
    	switch(e.keyCode){
    	case 37: //LEFT arrow
    		break;
    	case 38: //UP arrow
    		break;
    	case 39: //RIGHT arrow
    		break;
    	case 40: //DOWN arrow
    		break;
    	case 13: //OK or Enter button
    	tizen.application.getCurrentApplication().enter();	
    		break;
    	case 447: //VolumeUp button
        tizen.application.getCurrentApplication().volumeup();	
        	break;
    	case 448: //VolumeDown button
        tizen.application.getCurrentApplication().volumedown();	
            break;
    	case 449: //VolumeMute button
        tizen.application.getCurrentApplication().volumemute();	
            break;
    	case 10252: //MediaPlayPause button
        tizen.application.getCurrentApplication().mediaplaypause();	
            break;
    	case 412: //MediaRevind button
        tizen.application.getCurrentApplication().mediarevind();	
            break;
    	case 417: //MediaFastForward button
        tizen.application.getCurrentApplication().mediafastforward();	
            break;
        case 415: //MediaPlay button
        tizen.application.getCurrentApplication().mediaplay();	
            break;
    	case 19: //MediaPause button
        tizen.application.getCurrentApplication().mediapause();	
            break;
        case 413: //MediaStop button
        tizen.application.getCurrentApplication().mediastop();	
            break;
        case 18: //Menu button
        tizen.application.getCurrentApplication().menu();	
            break; 
        case 10135: //Tools button
        tizen.application.getCurrentApplication().tools();	
            break;            
      	case 10009: //RETURN button
    	tizen.application.getCurrentApplication().exit();
    	    break;
    	case 10182: //RETURN button
		tizen.application.getCurrentApplication().exit();
    		break;
    	default:
    		console.log('Key code : ' + e.keyCode);
    		break;
    	}});};

