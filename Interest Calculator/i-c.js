function calculate(){

 const total = document.getElementById("total-amount");
 const principal = document.getElementById("principal");
 const rate = document.getElementById("interestrate");
 const years = document.getElementById("years");

 let princ = Number(principal.value);
 let irate = Number(rate.value / 100);
 let nyears = Number(years.value);
 const result = princ * Math.pow((1 + irate / 1), 1 * nyears)
 total.textContent = result.toLocaleString(en-Us);

}