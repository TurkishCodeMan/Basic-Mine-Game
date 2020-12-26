const mineElement = document.querySelector(".mine");
const mineBoard = document.querySelector(".mine-board")


const mine = document.querySelector(".mine-bomb")


/*Mine Class */


function createMineBoard(mineCount) {
    for (let i = 0; i < mineCount; i++) {
        let count = Math.floor(Math.random() * 72) + 1

        if (count < 20) {
            mineBoard.innerHTML = mineBoard.innerHTML + `
            <div class="col-md-1 mine">
            <div class="card border-info mx-sm- 1 p-2 mb-2 info">
                <div class="text-info text-center mt-3 mine-bomb bombed">
                    <h4><i class="fab fa-mixer"></i></h4>
                </div>
            </div>
        </div>
            
            `
        }
        else {
            mineBoard.innerHTML = mineBoard.innerHTML + `
            <div class="col-md-1 mine">
            <div class="card border-info mx-sm- 1 p-2 mb-2 info">
                <div class="text-info text-center mt-3 mine-bomb no-bombed">
                    <h4><i class="fab fa-mixer"></i></h4>
                </div>
            </div>
        </div>
        `
        }

    }
}

createMineBoard(72);


let puan = 0;


document.querySelector(".point").textContent = puan;


/*All mine add listener  */
const cbox = document.querySelectorAll(".mine-bomb");

for (let i = 0; i < cbox.length; i++) {

    cbox[i].parentElement.addEventListener("click", function () {
        cbox[i].classList.forEach(c => {
            if (c == "bombed") {
                cbox[i].parentElement.classList.toggle("danger")

              setTimeout(()=>{
                if (puan > 50) {
                    return winFirst();
                }
                else if (puan > 30 && puan < 50) {
                    return winSecond();

                } else if (puan < 30) {
                    return winThird();
                } else {
                    return destroy();
                }
              },500)




            } else {
                puan = puan + 1;
                console.log(puan)
                document.querySelector(".point").textContent = `${puan}`
                cbox[i].parentElement.classList.toggle("success")


            }


        })
        return;
    });

}

function winSecond() {
    document.querySelector(".mine-board").innerHTML = "Yüksek Bir Puan Ama Birincilik için Yetersiz"
}

function winFirst() {
    document.querySelector(".mine-board").innerHTML = "Epeyce Yüksek İyi İş Çıkardın !"
    document.querySelector(".mine-board").classList.add("text-center","text-white")
    
}
function winThird() {
    document.querySelector(".mine-board").innerHTML = "Başaramadın"
}



function destroy() {
    document.querySelector(".mine-board").innerHTML = ""
}