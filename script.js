const body = document.querySelector("body"),
            slidebar = body.querySelector(".slidebar"),
            toggle = body.querySelector(".toggle"),
            searchBtn = body.querySelector(".search-box"),
            modeSwitch = body.querySelector(".toggle-switch"),
            modeText = body.querySelector(".mode-text");


            toggle.addEventListener("click" , () => {
              slidebar.classList.toggle("close");
            });

            searchBtn.addEventListener("click",()=> {
                slidebar.classList.remove("close");
            })

            modeSwitch.addEventListener("click" , () => {
                body.classList.toggle("dark");


                if(body.classList.contains("dark")){
                    modeText.innerText = "Light Mode";
                }else{
                    modeText.innerText = "Dark Mode";
                }
              });