window.onload = () => {
    calculate();
  };
  
  document.addEventListener("keyup", () => calculate());
  
  document.addEventListener("click", () => calculate());
  
  calculate = () => {
    // Supply billed days to UI
    var freq = document.getElementById("freq").value;
    var billedDaysElement = document.getElementById("billedDays");
  
    billedDaysElement.innerHTML = freq;
  
    // daysDecrease avgDays * percentDecrease
    var avgDays = document.getElementById("avgDays").value;
    var percentDecrease = document.getElementById("decrease").value;
    var decreaseDaysElement = document.getElementById("decreaseDays");
  
    var daysDecrease = avgDays * percentDecrease;
  
    decreaseDaysElement.innerHTML = daysDecrease.toFixed(1);
  
    // dailyRevenueAdd = daysDecrease * rate
    var rate = document.getElementById("rate").value;
    var dailyRevAddElement = document.getElementById("dailyRevAdd");
  
    var dailyRevenueAdd = daysDecrease * rate;
  
    let formatting_options = {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
    }
  
    dailyRevAddElement.innerHTML = dailyRevenueAdd.toLocaleString(
      'en-US',
      formatting_options
    );
  
    // annualRevenueAdd = dailyRevenueAdd * freq
    var annualRevAddElement = document.getElementById("annualRevAdd");
  
    var annualRevenueAdd = dailyRevenueAdd * freq;
  
    annualRevAddElement.innerHTML = annualRevenueAdd.toLocaleString(
      'en-US',
      formatting_options
    );
  
    // revenuePerDay = rate * referralsPerDay
    var referralsPerday = document.getElementById("referralsPerDay").value;
  
    var dailyRevenue = rate * referralsPerday;
  
    var dailyRevElement = document.getElementById("dailyRevenue");
  
    dailyRevElement.innerHTML = dailyRevenue.toLocaleString(
      'en-US',
      formatting_options
    );
  
    // revenuePerYear = revenuePerDay * billedDays
    var annualRevenue = dailyRevenue * freq
  
    var annualRevElement = document.getElementById("annualRevenue");
  
    annualRevElement.innerHTML = annualRevenue.toLocaleString(
      'en-US',
      formatting_options
    );
  
    // revenue increase per day
    var dailyRevInc = rate * (referralsPerday * (1 + percentDecrease));
    console.log(dailyRevInc);
  
    var dailyRevIncElement = document.getElementById("dailyRevenueInc");
  
    dailyRevIncElement.innerHTML = dailyRevInc.toLocaleString(
      'en-US',
      formatting_options
    );
  
      // revenue increase annual
      var annualRevInc = dailyRevInc * freq;
    
      var annualRevIncElement = document.getElementById("annualRevenueInc");
    
      annualRevIncElement.innerHTML = annualRevInc.toLocaleString(
        'en-US',
        formatting_options
      );
  
  };
  