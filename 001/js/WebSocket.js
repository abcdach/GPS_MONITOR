

var websocket;
var websocket_status = 0;
function doConnect() {
	//TERMINAL_CLEAR();
	PING();
	TERMINAL("123");
    websocket = new WebSocket("ws://10.0.0.100:3002/");
    websocket.onopen = function(evt) {
        onOpen(evt);
    };
    websocket.onclose = function(evt) {
        onClose(evt); 
    };
    websocket.onmessage = function(evt) {
        onMessage(evt);
    };
    websocket.onerror = function(evt) {
        onError(evt);
    };
}

function onOpen(evt) {
    TERMINAL("Connected\n");
    //MyHeader_wText("Connected\n");
    websocket_status = 1;
}

function onClose(evt) {
    TERMINAL("Disconnected\n");
    //MyHeader_wText("Disconnected\n");
    websocket_status = 0;
}

function onError(evt) {
    TERMINAL('error: ' + evt.data + '\n');
    websocket_status = 0;
    websocket.close();
}

function doSend(message) {
    TERMINAL("sent: " + message + '\n');
    websocket.send(message);
}
function sendText() {
    //doSend("textis gadacema");
}
function doDisconnect() {
	websocket_status = 0;
    websocket.close();
}
function websocket_send(Msg) {
    websocket.send(Msg);
}










	
	
var TO_SEN   = "> "
var FROM_SEN = "< "	
//#############################################################################
//#
//#
//#
//#############################################################################	
	

	var Read_REG_SPEED = 10;
	var Read_REG_STEP = 0;
	var Read_REG_FRAME = 0;
	var Read_REG_STEP_ENABLE = 0;
	var Read_REG_TEXT = 0;
	var READ_INDEX = 0;
	var COMM = 1;
	function Read_REG() {
	    //clearText();
	    setTimeout(_Read_REG, Read_REG_SPEED);
	    Read_REG_STEP_ENABLE = 1;
	    Read_REG_STEP = 1;
	    //Read_REG_STEP = 4;
	    READ_INDEX = 0;
	    DATA_COU = 0;
	}


	var READ_xCOUNTER = 0;
	function _Read_REG() {
	    switch (Read_REG_STEP) {
	    case 0:
	        break;
	    case 1:
	        var Msg = "{\"C\":\"0\",\"D\":\"42577\",\"T\":\"0\",\"S\":\"0\",\"V\":\""+DATA_COU+"\"}";
	        websocket_send(Msg);
	        // var Msg = "{\"C\":\"0\",\"D\":\"67370\",\"T\":\"0\",\"S\":\"1\",\"V\":\""+DATA_COU+"\"}";
	        //websocket_send(Msg);
	        TERMINAL(FROM_SEN + Msg + '\n');
	        DATA_COU ++;
	        
	        if(DATA_COU === 5){
	            Read_REG_STEP = 3;
	            setTimeout(_Read_REG, Read_REG_SPEED);           
	        } else {
	            Read_REG_STEP = 2;
	            setTimeout(_Read_REG, 1000);   
	        }
	        break;      
	    case 2:
	        Read_REG_STEP = 1;
	        setTimeout(_Read_REG, Read_REG_SPEED);
	        break;   

	    case 3:
	        var Msg = "{\"C\":\"1\",\"N\":\"5\",\"i\":\"goodbye\"}";
	        websocket_send(Msg);
	        TERMINAL(FROM_SEN + Msg + '\n');
	        Read_REG_STEP = 0;
	        setTimeout(_Read_REG, Read_REG_SPEED);
	        break;   

	      
	    default:
	        break;
	    }
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
//#############################################################################
//#
//#
//#
//#############################################################################
var JSON_VALUE;
var JSON_PARSE;
var JSON_DATA = [];
function onMessage(evt) {
  //Print_Data_Stream_3(evt.data);
  JSON_PARSE = JSON.parse(evt.data);  
  
  JSON_VALUE = JSON_PARSE.ER;
  if (typeof JSON_VALUE !== "undefined") return 1;
  
  JSON_VALUE = JSON_PARSE.C;
  if (typeof JSON_VALUE !== "undefined") {
	  var C_VALUE = Number(JSON_VALUE);
      if (C_VALUE === 0) {
          //#--------------------------------------------------------------	   	  
    	  		var DATA = [];
          //#--------------------------------------------------------------	  
    	  	  	JSON_VALUE = JSON_PARSE.IN;
	          	if (typeof JSON_VALUE === "undefined") return 1;
	          	DATA[0] = Number(JSON_VALUE);
          //#--------------------------------------------------------------
	          	//JSON_VALUE = JSON_PARSE.D;
	          	//if (typeof JSON_VALUE === "undefined") return 1;
	          	//DATA[1] = Number(JSON_VALUE);
          //#--------------------------------------------------------------
	          	//JSON_VALUE = JSON_PARSE.S;
	          	//if (typeof JSON_VALUE === "undefined") return 1;
	          	//DATA[2] = Number(JSON_VALUE);
          //#--------------------------------------------------------------
	          	JSON_VALUE = JSON_PARSE.V;
	          	if (typeof JSON_VALUE === "undefined") return 1;
	          	DATA[3] = JSON_VALUE;
          //#--------------------------------------------------------------	
		  	  //  JSON_VALUE = JSON_PARSE.T;
	          //	if (typeof JSON_VALUE !== "undefined"){
				//	if(JSON_VALUE === "1"){
				//		DATA[3] = "hahaha :)";
				//	}					
				//}
				
          //#--------------------------------------------------------------			  
	    		switch (DATA[0]) {
		    		//case 0: if (typeof Print_Data_Stream_0 !== "undefined") Print_Data_Stream_0(DATA[3]);break;
		    		case 1: if (typeof Print_Data_Stream_1 !== "undefined") Print_Data_Stream_1(DATA[3]);break;
		    		case 2: if (typeof Print_Data_Stream_2 !== "undefined") var DEC = Base64.decode(DATA[3]);Print_Data_Stream_2(DEC);break;
		    		case 3: if (typeof Print_Data_Stream_3 !== "undefined") Print_Data_Stream_3(DATA[3]);break;
		    		case 4: if (typeof Print_Data_Stream_4 !== "undefined") Print_Data_Stream_4(DATA[3]);break;
					case 5: if (typeof Print_Data_Stream_5 !== "undefined") Print_Data_Stream_5(DATA[3]);break;
		    		case 6: if (typeof Print_Data_Stream_6 !== "undefined") Print_Data_Stream_6(DATA[3]);break;
		    		case 7: if (typeof Print_Data_Stream_7 !== "undefined") Print_Data_Stream_7(DATA[3]);break;
		    		default: return;
		    	}	  
	       //#--------------------------------------------------------------	  	    	      	   

      }

      //##########################################################################
      
      
      if (C_VALUE === 1) {
    	  JSON_VALUE = JSON_PARSE.N;
    	  if (typeof JSON_VALUE !== "undefined") {
    	      switch (Number(JSON_VALUE)) {
    	      case 0:
    	          break;
    	      case 1://"Welcome"
    	    	  TERMINAL(TO_SEN + evt.data  + '\n');
    	          var Msg = "{\"C\":\"1\",\"N\":\"10\",\"i\":\"42577\"}";
    	          websocket_send(Msg);
    	          TERMINAL(FROM_SEN + Msg + '\n');
    	          break;
    	      case 2:
    	    	  TERMINAL(TO_SEN + evt.data  + '\n');
    	          break;
    	      case 3:
    	    	  TERMINAL(TO_SEN + evt.data  + '\n');
    	          break;
    	      case 4://"Device is already in system"
    	    	  TERMINAL(TO_SEN + evt.data  + '\n');
    	          doDisconnect();
    	          break;
    	      case 5:
    	    	  TERMINAL(TO_SEN + evt.data  + '\n');
    	          break;
    	      case 6:
    	    	  TERMINAL(TO_SEN + evt.data  + '\n');
    	          //Read_REG();
    	          break;
    	      case 7://"Json error"
    	    	  TERMINAL(TO_SEN + evt.data  + '\n');
    	          doDisconnect();
    	          break;
    	      case 8:
    	          break;
    	      case 9:
    	          break;;
    	      default:
    	          break;
    	      }
    	  }
    	  
      }	  
	  
	  
	  
  }
  
  

  
  
  
  
  return 1;
}







function hhonMessage(evt) {
    Menu_Text[1].text = RX_Counter++;


    Term_Inp2.value(evt.data);
    var JSON_VALUE;
    var JSON_PARSE = JSON.parse(evt.data);
    ////////////////////////////////////////////////////////////////
    JSON_VALUE = JSON_PARSE.C;
    ////////////////////////////////////////////////////////////////
    if (typeof JSON_VALUE !== "undefined") {
        //#--------------------------------------------------------------
        var C_VALUE = Number(JSON_VALUE);
        var DATA = [];
        //#--------------------------------------------------------------
        JSON_VALUE = JSON_PARSE.D;
        if (typeof JSON_VALUE === "undefined") return 1;
        DATA[0] = Number(JSON_VALUE);
        //#--------------------------------------------------------------
        JSON_VALUE = JSON_PARSE.S;
        if (typeof JSON_VALUE === "undefined") return 1;
        DATA[1] = Number(JSON_VALUE);
        //#--------------------------------------------------------------
        JSON_VALUE = JSON_PARSE.V;
        if (typeof JSON_VALUE === "undefined") return 1;
        DATA[2] = JSON_VALUE;
        //#--------------------------------------------------------------
        if (C_VALUE === 0) {
            //API_iot_PUT__OutPut_DATA(DATA[0], DATA[1], DATA[2]);
        }
        if (C_VALUE === 2) {
            if (Data_Error_ignore === 0) {
                var dd2 = Base64.decode(DATA[2]);
                //info.announce(Info_Type_error, "Device: " + DATA[0] + " error !!!", dd2);
            }
        }



        //#--------------------------------------------------------------
        return 1;
    }
    
    ////////////////////////////////////////////////////////////////
    return 1;
}


function PING() {

	if(websocket_status===1){
		var Msg ="{\"C\":\"1\",\"D\":\""+"42577"+"\",\"N\":\"255\",\"i\":\"PING\"}";
		//TERMINAL(FROM_SEN + Msg + '\n');			
		websocket_send(Msg);
	}
	setTimeout(PING, 3000);	
}





