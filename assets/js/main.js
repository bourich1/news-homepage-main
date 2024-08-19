var navbar_icon = document.querySelector(".navbar_icon");
var navItem = document.querySelector(".all_links_nav");
var closeBtn = document.querySelector(".close");
navbar_icon.addEventListener("click" , ()=>{
    navItem.style.right="0";
});
closeBtn.addEventListener("click" , ()=>{
    navItem.style.right="-100%";
});
// add active links to nav 
var links = document.querySelectorAll(".navList a");
// remove menu in mobile
const linkAction = ()=>{
    navItem.style.right="-100%";
}
links.forEach(e => e.addEventListener("click" , linkAction))
// ==================================
links.forEach(link =>{
    link.addEventListener("click" , ()=>{
        if(document.querySelector(".active_link")){
            document.querySelector(".active_link").classList.remove("active_link")
        }
        link.classList.add("active_link")
    })
})
// add active to news
var items_news = document.querySelectorAll(".items_news");
items_news.forEach(item =>{
    item.addEventListener("click" , ()=>{
        if(document.querySelector(".active_news")){
            document.querySelector(".active_news").classList.remove("active_news")
        }
        item.children[0].classList.add("active_news");
        
    })
    
})
// add active to blog
var blogs_item = document.querySelectorAll(".blogs_item");
blogs_item.forEach(item =>{
    item.addEventListener("click" , ()=>{
        if(document.querySelector(".active_blog")){
            document.querySelector(".active_blog").classList.remove("active_blog")
        }
        item.children[1].children[1].classList.add("active_blog");
        
    })
});
// add active to button 
document.querySelector(".button").addEventListener("click" , ()=>{
    document.querySelector(".button").classList.add("active_button");
})
