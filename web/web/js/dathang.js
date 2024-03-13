var itemList ={
       "sp1": {
              "name": "Chợ nổi cái răng",
              "price": 299000,
              "photo": "images/sp1.png"
       },
       "sp2": {
             "name": "Cồn Sơn",
             "price": 299000,
             "photo": "images/sp2.png"
      },
      "sp3": {
             "name": "Cần Thơ-An Giang-Châu Đốc-Trà Sư",
             "price": 999000,
             "photo": "images/sp3.png"
      },
      "sp4": {
             "name": "Cần Thơ-Côn Đảo",
             "price": 2390000,
             "photo": "images/sp4.png"
      },
      "sp5": {
             "name": "Cần Thơ-Cồn Sơn-Sóc Trăng-Bạc Liêu-Mũi Cà Mau",
             "price": 3880000,
             "photo": "images/sp5.png"
      },
      "sp6": {
             "name": "Cần Thơ-Mỹ Tho-Bến Tre",
             "price": 950000,
             "photo": "images/sp6.png"
      },
      "sp7": {
             "name": "Cần Thơ-Nam Du",
             "price": 1890000,
             "photo": "images/sp7.png"
      },
      "sp8": {
             "name": "Cần Thơ-Sóc Trăng-Bạc Liêu-Cà Mau",
             "price": 2690000,
             "photo": "images/sp8.png"
      },
      "sp9": {
             "name": "Một thoáng Tây Đô",
             "price": 400000,
             "photo": "images/sp9.png"
      },
      "sp10": {
             "name": "Cần Thơ-Sóc Trăng-Bạc Liêu-Cà Mau-Cần Thơ",
             "price": 2690000,
             "photo": "images/sp10.png"
      },
      "sp11": {
             "name": "Cần Thơ-An Giang-Châu Đốc-Trà Sư",
             "price": 1950000,
             "photo": "images/sp11.png"
      },
              
       }
        function addCart(code){
              var number = parseInt(document.getElementById(code).value);
              console.log(number);
              if (typeof localStorage[code] === 'undefined') {
                     window.localStorage.setItem(code, number);
                     alert("Bạn đã đặt tour thành công");
              }
              else{
                     if (window.localStorage.getItem(code) > 100 || number > 100) {
                            window.localStorage.setItem(code, 100);
                            alert("Bạn đã đạt giới số lượng tour và không thể đặt thêm\nMời bạn đặt tour khác");
                     }
                     else {
                            var current = parseInt(window.localStorage.getItem(code));
                            window.localStorage.setItem(code, current + number);
                            alert("Bạn đã đặt tour thành công");
       
       
                     }
                     
              }
        }
        
        
        // bài 4
       function gotoCart() {
              window.location.href = "cart.html";
       }
       
       function removeCart(code) {
              if (typeof window.localStorage[code] !== "undefined") {
                     //xóa sản phẩm khỏi localStorage
                     window.localStorage.removeItem(code);
                     //Xóa nội dung của phần thân của bảng (<tbody>)
                     document.getElementById("cartDetail")
                     .getElementsByTagName('tbody')[0].innerHTML = "";
                     //Hiển thị lại nội dung chi tiết của đơn hàng
                     showCart();
              }
       }
      
       function showCart(){
              var formatter=new Intl.NumberFormat('vi-VN', {style: 'currency', currency: 'VND'});
              var container=document.getElementById("cartDetail").getElementsByTagName("tbody")[0];
              container.innerHTML='';
              var sum=0;
              var TotalPrice=0;
              var Tong=0;
              for(let i=0; i<window.localStorage.length; i++){
                     if(typeof itemList[localStorage.key(i)]==='undefined')
                     continue;
                     var tr=document.createElement("tr");
                     var photoItem=document.createElement("td");
                     var nameItem=document.createElement("td");
                     var numberItem=document.createElement("td");
                     var priceItem=document.createElement("td");
                     var sumItem=document.createElement("td");
                     var deleteButton=document.createElement("td");
                     
                     // lấy mã sp
                     var item=itemList[localStorage.key(i)];
                     var code=window.localStorage.key(i);
                     // console.log(code)
                     // lấy số lượng sản phẩm
                     var number=localStorage.getItem(localStorage.key(i));
                     // tạo ảnh cho sp
                     photoItem.style.textAlign="center";
                     photoItem.innerHTML="<img src='"+item.photo+"'class='round-figure' width='100px'/>";
                     // tạo tên sp
                     nameItem.innerHTML=item.name;
                     // tạo giá sp
                     priceItem.innerHTML = formatter.format(item.price);
                     priceItem.style.textAlign="center";
                     // tạo số lượng sp
                     numberItem.innerHTML=number;
                     numberItem.style.textAlign = "center";
                     // tạo giá tiền cho sản phẩm
                     sum=number*item.price;
                     sumItem.innerHTML = formatter.format(sum);
                     sumItem.style.textAlign="center";
                     
                     // tạo nút xóa
                     var button=document.createElement("button");
                     button.innerHTML='Xóa';
                     button.style.color="red";
                     button.setAttribute("onclick", "removeCart('"+code+"')");
                     // thêm nút button vào thẻ td
                     deleteButton.appendChild(button);
                     deleteButton.style.textAlign = "center";
                     // thêm con vào bảng
                     tr.appendChild(photoItem);
                     tr.appendChild(nameItem);
                     tr.appendChild(numberItem);
                     tr.appendChild(priceItem);
                     tr.appendChild(sumItem);
                     tr.appendChild(deleteButton);
                     // thêm dòng vào tbody
                     container.appendChild(tr);
                     TotalPrice+=sum;
                     Tong=TotalPrice;
              }
              var spanTotalPirce = document.getElementById('TotalPirce');
              spanTotalPirce.innerHTML=formatter.format(TotalPrice);
              var spanTotalPirce = document.getElementById('Tong');
              spanTotalPirce.innerHTML=formatter.format(Tong);
              
       }
     
       function showcart(){
              showCart();
       }
       window.onstorage = () => {
              showCart();
       };