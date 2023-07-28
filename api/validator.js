module.exports = app => {
  function existsOrError(value, msg){
    if(!value) throw msg
    if(Array.isArray(value) && value.lenght === 0) throw msg
    if(typeof value === 'string' && !value.trim()) throw msg
  }
  
  function notExistsOrError (value,msg){
    try{
      existsOrError(value,msg)
    }catch(msg){
      return
    } throw msg
  }
  
  function equalsOrError(valueA, valueB, msg) {
    if (valueA !== valueB) throw msg
  }
  return {equalsOrError, existsOrError, notExistsOrError}
}