
     
        function getandupdate(){
            titl=document.getElementById('title').value;
            desc=document.getElementById('description').value;
            if(localStorage.getItem('itemsJson')==null){
                itemjsonarray=[]
                itemjsonarray.push([titl,desc])
                localStorage.setItem('itemsJson',JSON.stringify(itemjsonarray))

            }
            else{
                itemjsonarraystr=localStorage.getItem('itemsJson')
                itemjsonarray=JSON.parse(itemjsonarraystr);
                itemjsonarray.push([titl,desc])
                localStorage.setItem('itemsJson',JSON.stringify(itemjsonarray))
                

            }
            update()
        }
            function update(){
                if(localStorage.getItem('itemsJson')==null){
                itemjsonarray=[]
                
                localStorage.setItem('itemsJson',JSON.stringify(itemjsonarray))

            }
            else{
                itemjsonarraystr=localStorage.getItem('itemsJson')
                itemjsonarray=JSON.parse(itemjsonarraystr);
            }
                
            tablebody=document.getElementById('tableBody');
            let str="";
            itemjsonarray.forEach((element,index) => {
                str+=`<tr>
                <th scope="row">${index+1}</th>
                    <td>${element[0]}</td>
                    <td>${element[1]}</td>
                    <td><button class="btn btn-secondary" onclick="deleted(${index})">Delete</button> </td>
                    </tr>

                `
            });
            tablebody.innerHTML=str;

        }
        add=document.getElementById('add');
        add.addEventListener('click',getandupdate)
        update()
        function deleted(itemindex){
            
            itemjsonarraystr=localStorage.getItem('itemsJson')
            itemjsonarray=JSON.parse(itemjsonarraystr);
            itemjsonarray.splice(itemindex,1);
            localStorage.setItem('itemsJson',JSON.stringify(itemjsonarray))
            update();
        }
function clearstorage(){
    localStorage.clear()
    update()
}