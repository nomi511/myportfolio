const sections = document.querySelectorAll("section")
const menubtn = document.querySelectorAll(".main")
const btn = document.querySelectorAll(".item")
const allsections = document.querySelector(".mainbody")
const bg_btn = document.querySelector(".bgcolor")
const project_bg = document.querySelectorAll(".pr")




bg_btn.addEventListener('click', function(){

    document.body.classList.toggle("darkbg");
    for(let i = 0; i < project_bg.length; i ++)
    {
        project_bg[i].classList.toggle("bg-light")
        project_bg[i].classList.toggle("bg-dark")
    }
    

})



function navbtn ()
{
    let id;
    for(let i = 0; i < btn.length; i++)
    {
         btn[i].addEventListener('click', function(){
             id = this.dataset.id
             let currbtn = document.querySelectorAll('.activebtn');
             currbtn[0].className = currbtn[0].className.replace('activebtn', '');
             this.className += " activebtn";
         })
    }

    allsections.addEventListener('click', (e)=>{

        if(id)
        {
            menubtn.forEach((buttn)=>{
                buttn.classList.remove('active')
            })
            e.target.classList.add('active')

            sections.forEach((sect)=>{
                sect.classList.remove('active')
            })

            const element = document.getElementById(id)
            element.classList.add('active')
        }
    })

}

navbtn()
