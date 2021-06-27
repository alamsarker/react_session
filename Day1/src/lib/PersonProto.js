export default function PersonProto(name, age) 
{
  this.name = name
  this.age = age
}

PersonProto.prototype.getAge = function(){
  return this.age
}