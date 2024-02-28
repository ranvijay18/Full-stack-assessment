const fetchConfig = document.getElementById("config-details");
const configData = document.getElementById("config-data");
const nextPage = document.getElementById("next-page");


nextPage.addEventListener('click', ()=>{
    window.location.href = "../fetch-config/index.html";
})

fetchConfig.addEventListener('submit', async(e) => {
    try{
        e.preventDefault();
    let id = e.target.config.value;
    let updateRemark = e.target.remark.value;
    const res = await axios.put(`http://localhost:8000/api/configurations/update/${id}`, {
        remark: updateRemark
    })

    let h1 = document.createElement("h1");
    h1.textContent = "PUT: "+`http://localhost:8000/api/configurations/${id}`
    configData.appendChild(h1);


    if(res.status === 200){
        const data = "success"
        showData(data);
    }else{
        showData(Error);
    }
    }catch(error){
        console.log(error);
    }
    

})


const showData = (res) =>{
    let p = document.createElement("p");
    p.textContent = res;
    p.style.textAlign = "center";
    configData.appendChild(p);
}