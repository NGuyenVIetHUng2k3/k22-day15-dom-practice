// ======== BÀI 1 ========
var btnTheme = document.getElementById('btnTheme');

btnTheme.addEventListener('click', function() {
    // Thêm hoặc xóa class dark-mode trên body
    document.body.classList.toggle('dark-mode');

    // Kiểm tra xem body đang có class dark-mode không để đổi chữ trên nút
    if (document.body.classList.contains('dark-mode')) {
        btnTheme.innerText = 'Chế độ sáng';
    } else {
        btnTheme.innerText = 'Chế độ tối';
    }
});


// ======== BÀI 2 ========
var inputPass = document.getElementById('inputPass');
var btnPass = document.getElementById('btnPass');

btnPass.addEventListener('click', function() {
    if (inputPass.type === 'password') {
        inputPass.type = 'text';
        btnPass.innerText = 'Ẩn';
    } else {
        inputPass.type = 'password';
        btnPass.innerText = 'Hiện';
    }
});


// ======== BÀI 3 ========
var anhTo = document.getElementById('anhTo');
var listThumb = document.querySelectorAll('.thumb');

// Dùng vòng lặp for gán sự kiện cho từng ảnh nhỏ
for (let i = 0; i < listThumb.length; i++) {
    listThumb[i].addEventListener('click', function() {
        // 1. Đổi src và alt của ảnh to bằng ảnh vừa click
        anhTo.src = this.src;
        anhTo.alt = this.alt;

        // 2. Xóa active ở tất cả ảnh nhỏ
        for (let j = 0; j < listThumb.length; j++) {
            listThumb[j].classList.remove('active');
        }

        // 3. Thêm active vào ảnh vừa được click
        this.classList.add('active');
    });
}