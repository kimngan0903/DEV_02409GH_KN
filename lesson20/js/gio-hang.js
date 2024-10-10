// Các chức năng thao tác với giỏ hàng
$(document).ready(function() {
    console.log("Ứng dụng đã sẵn sàng");
    //Button plus
    $('.p-act button.plus').click(function() {
        // Lấy đơn giá
        let price = $(this).siblings('input').attr('data-price');
        console.log("Price +:", price);
        // Lấy số lượng hiện tại
        let qty = $(this).siblings('input').val();
        if(parseInt(qty)>=10) return;
        console.log("Số lượng: ", qty);
        //Tăng số lượng
        qty = parseInt(qty) + 1;
        //Gán lại ô input
        $(this).siblings('input').val(qty);
        // Tính thành tiền
        let thanhTien = qty*parseFloat(price);
        // Gán vào phần hiển thị
        $(this).parent().siblings("p").children('span.thanh-tien').text(fn_FormatMoney(thanhTien,0,',','.'));
        $(this).parent().siblings("p").children('span.thanh-tien').attr("data-money",thanhTien);

        console.log("Tổng thành tiền:", fn_tongThanhTien());
        //Tính tổng thành tiền
        let tong = fn_tongThanhTien();
        $("#tongThanhTien").html(fn_FormatMoney(tong,0,',','.'));
        // Tính tổng hóa đơn (thêm phần ship)
        $("#tongTien").html(fn_FormatMoney(tong,0,',','.'));
    });
    //Button minus
    $('.p-act button.minus').click(function() {
        // Lấy đơn giá
        let price = $(this).siblings('input').attr('data-price');
        console.log("Price -:", price);
        // Lấy số lượng hiện tại
        let qty = $(this).siblings('input').val();
        if(parseInt(qty)<=1) return;
        console.log("Số lượng: ", qty);
        //Tăng số lượng
        qty = parseInt(qty) - 1;
        //Gán lại ô input
        $(this).siblings('input').val(qty);
        // Tính thành tiền
        let thanhTien = qty*parseFloat(price);
        // Gán vào phần hiển thị
        $(this).parent().siblings("p").children('span.thanh-tien').text(fn_FormatMoney(thanhTien,0,',','.'));
        $(this).parent().siblings("p").children('span.thanh-tien').attr("data-money",thanhTien);  
        
        console.log("Tổng thành tiền:", fn_tongThanhTien());
        //Tính tổng thành tiền
        let tong = fn_tongThanhTien();
        $("#tongThanhTien").html(fn_FormatMoney(tong,0,',','.'));
         // Tính tổng hóa đơn (thêm phần ship)
         $("#tongTien").html(fn_FormatMoney(tong,0,',','.'));
    });
    //Tính tổng thành tiền, tổng tiền
    const fn_tongThanhTien = () => {
        let tong = 0;
        $('span.thanh-tien').each(function() {
            let thanhTien = $(this).attr('data-money');
            // console.log(thanhTien);
            // console.log("text:", $(this).text());
            tong += parseFloat(thanhTien);
        });
        return tong;
    }
    
    // Test
    console.log("Tổng thành tiền:", fn_tongThanhTien());

    // Xóa item trong giỏ hàng
    $('button.remove').click(function() {
        if(!confirm('Bạn có muốn xóa không?')) return;
        console.log("OKAY");

        // Các xử lý, cập nhật: thành tiền, số lượng,...
        // .....

        // Cuối cùng: Xóa trên giao diện
        $(this).parent().parent().remove();
    });

    // Input change
    $('.p-act input').change(function() {
        // Lấy đơn giá
        let price = $(this).attr('data-price');
        console.log("Price +:", price);
        // Lấy số lượng hiện tại
        let qty = $(this).val();
        qty = parseInt(qty);
        if(qty>=10 || qty<=1) return;
        console.log("Số lượng: ", qty);
        // Tính thành tiền
        let thanhTien = qty*parseFloat(price);
        // Gán vào phần hiển thị
        $(this).parent().siblings("p").children('span.thanh-tien').text(fn_FormatMoney(thanhTien,0,',','.'));
        $(this).parent().siblings("p").children('span.thanh-tien').attr("data-money",thanhTien);

        console.log("Tổng thành tiền:", fn_tongThanhTien());
        //Tính tổng thành tiền
        let tong = fn_tongThanhTien();
        $("#tongThanhTien").html(fn_FormatMoney(tong,0,',','.'));
        // Tính tổng hóa đơn (thêm phần ship)
        $("#tongTien").html(fn_FormatMoney(tong,0,',','.'));
    });
});

function fn_FormatMoney(amount, decimalCount = 2, decimal = ".", thousands = ",") {
    try {
    decimalCount = Math.abs(decimalCount);
    decimalCount = isNaN(decimalCount) ? 2 : decimalCount;

    const negativeSign = amount < 0 ? "-" : "";

    let i = parseInt(amount = Math.abs(Number(amount) || 0).toFixed(decimalCount)).toString();
    let j = (i.length > 3) ? i.length % 3 : 0;

    return negativeSign +
        (j ? i.substr(0, j) + thousands : '') +
        i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) +
        (decimalCount ? decimal + Math.abs(amount - i).toFixed(decimalCount).slice(2) : "");
    } catch (e) {
    console.log(e)
    }
};

var fnTest = fn_FormatMoney('123456',0,',','.')
console.log("Format:",fnTest);
