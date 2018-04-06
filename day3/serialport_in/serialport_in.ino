String income="";

void setup(){
  Serial.begin(9600);
}

void loop(){
 while(Serial.available()){
   income += (char)Serial.read();
 }
 
 if(income != 0){
   Serial.println(income);
   income = "";
 }
 delay(100);
}
