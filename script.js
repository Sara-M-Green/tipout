let kitchenBtn = document.getElementById("kitchenBtn");
kitchenBtn.addEventListener("click", function(){
    let foodSales = document.getElementById("foodSales").value;
    let kitchenTips = document.getElementById("kitchenTips").value = (foodSales * 0.02).toFixed(2);
});

let prepBtn = document.getElementById("prepBtn");
prepBtn.addEventListener("click", function(){
    let cocktailSales = document.getElementById("cocktailSales").value;
    let prepTips = document.getElementById("prepTips").value = (cocktailSales * 0.015).toFixed(2);
});

let busserBtn = document.getElementById("busserBtn");
busserBtn.addEventListener("click", function(){
    let busser1Hours = Number(document.getElementById("busser1Hours").value);
    let busser2Hours = Number(document.getElementById("busser2Hours").value);
    let busser3Hours = Number(document.getElementById("busser3Hours").value);
    let totalBusserHours = busser1Hours + busser2Hours + busser3Hours;
    document.getElementById("totalBusserHours").value = totalBusserHours;

    let busserFoodSales = Number(document.getElementById("busserFoodSales").value);
    console.log(busserFoodSales);

    let busserTotalTips = document.getElementById("totalBusserTips").value = (busserFoodSales * 0.04).toFixed(2);
    let busserHourlyTips = document.getElementById("busserHourlyTips").value = (busserTotalTips / totalBusserHours).toFixed(2);
    
    let busser1Tips = document.getElementById("busser1Tips").value = (busser1Hours * busserHourlyTips).toFixed(2);
    let busser2Tips = document.getElementById("busser2Tips").value = (busser2Hours * busserHourlyTips).toFixed(2);
    let busser3Tips = document.getElementById("busser3Tips").value = (busser3Hours * busserHourlyTips).toFixed(2);

});

let barbackBtn = document.getElementById("barbackBtn");
barbackBtn.addEventListener("click", function(){
    let barback1Sales = Number(document.getElementById("barback1Sales").value);
    let barback1Tips = document.getElementById("barback1Tips").value = (barback1Sales * 0.015).toFixed(2);

    let barback2Sales = Number(document.getElementById("barback2Sales").value);
    let barback2Tips = document.getElementById("barback2Tips").value = (barback2Sales * 0.015).toFixed(2);
});

let hostBtn = document.getElementById("hostBtn");
hostBtn.addEventListener("click", function(){
    let hostFoodSales = Number(document.getElementById("hostFoodSales").value);
    let hostTips = document.getElementById("hostTips").value = (hostFoodSales * 0.01).toFixed(2);
});

let bartenderBtn = document.getElementById("bartenderBtn");
bartenderBtn.addEventListener("click", function(){
    let bartender1Hours = Number(document.getElementById("bartender1Hours").value);
    let bartender2Hours = Number(document.getElementById("bartender2Hours").value);
    let bartender3Hours = Number(document.getElementById("bartender3Hours").value);
    let bartender4Hours = Number(document.getElementById("bartender4Hours").value);
    let bartender5Hours = Number(document.getElementById("bartender5Hours").value);

    let bartenderTotalHours = bartender1Hours + bartender2Hours + bartender3Hours + bartender4Hours + bartender5Hours;
    document.getElementById("totalBartenderHours").value = bartenderTotalHours;

    let kitchen = Number(document.getElementById("kitchenTips").value);
    let prep = Number(document.getElementById("prepTips").value);
    let busser = Number(document.getElementById("totalBusserTips").value);
    let barback1 = Number(document.getElementById("barback1Tips").value);
    let barback2 = Number(document.getElementById("barback2Tips").value);
    let host = Number(document.getElementById("hostTips").value);

    let totalTipOut = kitchen + prep + busser + barback1 + barback2 + host;
    document.getElementById("totalTipOut").value = totalTipOut.toFixed(2);

    let totalCCTips = Number(document.getElementById("totalCCTips").value);
    let tipsRemaining = document.getElementById("tipsRemaining").value = (totalCCTips - totalTipOut).toFixed(2);

    let bartenderHourlyTips = (tipsRemaining / bartenderTotalHours).toFixed(2);
    document.getElementById("bartenderHourlyTips").value = bartenderHourlyTips;

    let bartender1Tips = document.getElementById("bartender1Tips").value = (bartender1Hours * bartenderHourlyTips).toFixed(2);
    let bartender12Tips = document.getElementById("bartender2Tips").value = (bartender2Hours * bartenderHourlyTips).toFixed(2);
    let bartender3Tips = document.getElementById("bartender3Tips").value = (bartender3Hours * bartenderHourlyTips).toFixed(2);
    let bartender4Tips = document.getElementById("bartender4Tips").value = (bartender4Hours * bartenderHourlyTips).toFixed(2);
    let bartender5Tips = document.getElementById("bartender5Tips").value = (bartender5Hours * bartenderHourlyTips).toFixed(2);

    


});