// QUESTION 1 SOLUTION 

function createImgElm(x) {
    const img = document.createElement("img");
    img.setAttribute("src", x.url);
    img.style.width = "150px";
    img.style.height = "150px";
    img.style.margin = "10px";
    img.style.aspectRatio = "1";
    return img
}

async function photoGallery() {
    const response  = await fetch("https://jsonplaceholder.typicode.com/photos")
    const data = await response.json();
    const today = new Date().toString().slice(0, 3).toLowerCase();
    const isOddDay = [0,2,4,6].includes(new Date().getDay())
    const display = document.getElementById("question1");
    
    const photos = data.slice(0, 100).filter(photo => isOddDay ? photo.id % 2 !== 0 : photo.id % 2 === 0);
    photos.map(photo => {
        if ((photo.albumId + photo.id) % 2 === 0 ) {
            
            const pinkBorderImg = createImgElm(photo);
            pinkBorderImg.style.border = "5px solid pink"
            display.appendChild(pinkBorderImg)
        }
        else {
            display.appendChild(createImgElm(photo))
        }
    })
    
}

photoGallery()


// QUESTION 3
var headers = ['ID', 'Name', 'User', 'Status']
function tablegeneration() {
    const table = document.getElementById("question3");
    const tableHeaderRow = document.createElement("tr");
    headers.forEach(header => {
        const tableHeader = document.createElement("th")
        tableHeader.innerText = header
        tableHeaderRow.appendChild(tableHeader)
    })
    
    table.appendChild(tableHeaderRow)

    const addTableData = setInterval(() => {
        const randomNumber = Math.ceil(Math.random() * 5)
        const id = randomNumber;
        const name = ["", "Ade", "Kola", "Segun", "Tayo", "Bolaji"][randomNumber];
        const user = ["", "@Ade", "@Kola", "@Segun", "@Tayo", "@Bolaji"][randomNumber];
        const status = ["Active", "Inactive", "Suspend"][Math.floor(Math.random() * 3)];
        const dataTableRow = document.createElement("tr");
        [id, name, user, status].forEach((data) => {
            const tableData = document.createElement("td");
            tableData.innerText = data
            dataTableRow.appendChild(tableData)
        })

        table.appendChild(dataTableRow);

    }, 5000)
}

tablegeneration()


// QUESTION 4 
async function some_function() {
    try {
        //TODO if result doesn't return in 20 second throw an error
        const timeoutPromise = new Promise ((_, reject) => {
            setTimeout(() => {
                reject("Response Timeout")
                document.getElementById("question4").innerText = "Response Timeout"
                throw new Error("Response Timeout")
            }, 20000)
        })
        
        const resultPromise = fetch('someurl');
        const result = await Promise.race([resultPromise, timeoutPromise])
        const json = await result.json();
        return json;

    } catch (error) {
        console.error(error)
    }
  }

  async function some_function2() {
    try {
      const controller = new AbortController();
      const signal = controller.signal;
  
      // Set a timeout of 20 seconds
      const timeoutId = setTimeout(() => {
        controller.abort();
      }, 20000);
  
      const response = await fetch('someurl', { signal });
      clearTimeout(timeoutId);
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const json = await response.json();
      return json;
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }

  some_function()


// QUESTION 5

function transformString (email, filename) {
    const transformedEmail = email.replace(/[bcdfghjklmnpqrstvwxyz]/gi, "-")
    if(!filename.includes("_")) {
        return {transformedEmail, filename}
    }else {
        const [name,extension] = filename.split(".")
        const transformedFilename = name.split("_").map((word, idx) => {
            if(idx === 0 ) {return word}
            else { return word[0].toUpperCase() + word.slice(1)}        
        }).reverse().concat("."+ extension).join("")
        
        return {transformedEmail, transformedFilename}
    }
} 

const {transformedEmail, transformedFilename} = transformString("ricky-i-am-the-best@gmail.com", "xyz_controller_method.js");
document.getElementById("question5").innerHTML = transformedEmail + "<br>" + transformedFilename
console.log(transformedEmail, transformedFilename);