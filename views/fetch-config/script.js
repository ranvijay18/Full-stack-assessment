const fetchConfig = document.getElementById("config-details");
const configData = document.getElementById("config-data");
const nextPage = document.getElementById("next-page");


nextPage.addEventListener('click', ()=>{
    window.location.href = "../update-remark/index.html";
})


fetchConfig.addEventListener('submit', async (e) => {
    e.preventDefault();
    let id = e.target.config.value;
    const res = await axios.get(`http://localhost:8000/api/configurations/${id}`)
    const resData = res.data[0].data;

    let h1 = document.createElement("h1");
    h1.textContent = "Result: "+`http://localhost:8000/api/configurations/${id}`
    configData.appendChild(h1);


    resData.forEach(ele => {
        console.log(ele)
        showData(ele)
    });
})


const showData = (res) =>{
    let p = document.createElement("p");
    p.textContent = res;
    p.style.textAlign = "center";
    configData.appendChild(p);
}