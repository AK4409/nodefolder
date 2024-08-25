const moment = require("moment");

const formatGivenDate = (date)=>{
    let dateData = moment(date).format("YYYY-MM-DD");
    return dateData;
}

const formatDate = ()=>{
    let dateData = moment().format("YYYY-MM-DD");
    return dateData;
}

module.exports={formatDate,formatGivenDate};