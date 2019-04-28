var isRealString = (str) => {
return typeof str=='string' && str.trim().length>0; //remove leading and trailing space
};
module.exports = {isRealString};