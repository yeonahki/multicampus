void setup(){
  Serial.begin(9600);
}

void loop(){
  Serial.write("hello world From arduino");
  delay(100);
}
