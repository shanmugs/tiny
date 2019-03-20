module.exports = function tiny(string) {
    if (typeof string !== "string") {
      throw new TypeError("Tiny wants a string!");
    } 
    else{
      string = string.replace(/\s/g, "");
      console.log(string)
      return string;
    }
    
  };