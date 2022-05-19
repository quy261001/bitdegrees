// handle Click Dropdown-navigation
// const headerDropdown = document.querySelector(".header-dropdown");
// const headerMenu = document.querySelector(".header-menu");
// headerDropdown.addEventListener("click",(e) => {
//    headerMenu.classList.add("is-show")  
// } );
// document.addEventListener("click", (e) => {
//   console.log(e.target)
//   if(!e.target.matches(".header-dropdown")) {
//     headerMenu.classList.remove("is-show");
//   }
// })

// handle Click Dropdown-Login
// const loginButton = document.querySelector(".headerLoginButton");
// const loginMenu = document.querySelector(".login-menu");
// loginButton.addEventListener("click", (e) => {
//  loginMenu.classList.add("active");
// })
// document.addEventListener("click", (e) => {
//   if(!e.target.matches(".headerLoginButton")) {
//     loginMenu.classList.remove("active");
//   }
// })

// Header scroll
const header = document.querySelector(".header")

window.addEventListener("scroll", () => {
  const scrollY = window.pageYOffset
  if(scrollY >= 100) {
    header.style.background = "#19202a"
  } else {
    header.style.background = "transparent"
  }
})
// alert button
const metamaskButton = document.querySelector(".metamaskButton");

metamaskButton.addEventListener("click", () => {
  alert("MetaMask not detected. Please try again from a MetaMask enabled browser.")
});