$(document).ready(function () {
    let isEditing = false;
    let editingIndex = null;

    // Khởi tạo dữ liệu mẫu nếu chưa có trong localStorage
    if (!localStorage.getItem('students')) {
        const initialStudents = [
            { studentID: "SV0001", studentName: "Nguyễn Văn A", age: 20, sex: true, birthDate: "2002-04-23", birthPlace: "HN", address: "25, Vũ Ngọc Phan" },
            { studentID: "SV0002", studentName: "Nguyễn Văn B", age: 21, sex: false, birthDate: "2001-09-09", birthPlace: "ĐN", address: "1, Ngô Quyền" },
            { studentID: "SV0003", studentName: "Nguyễn Văn C", age: 19, sex: true, birthDate: "2003-07-07", birthPlace: "HCM", address: "1, Lý Tự Trọng" },
            { studentID: "SV0004", studentName: "Nguyễn Văn D", age: 29, sex: false, birthDate: "1995-07-07", birthPlace: "HCM", address: "1, Lý Tự Trọng" }
        ];
        localStorage.setItem('students', JSON.stringify(initialStudents)); // Khởi tạo dữ liệu mẫu nếu chưa có
    }

    // Hàm lấy dữ liệu sinh viên từ localStorage
    function getStudents() {
        const students = JSON.parse(localStorage.getItem('students'));
        console.log("Dữ liệu lấy từ localStorage:", students); // Kiểm tra dữ liệu được lấy
        return students || [];
    }
    // Hàm lưu lại dữ liệu sinh viên vào localStorage
    function saveStudents(students) {
        localStorage.setItem('students', JSON.stringify(students));
    }

    // Hàm làm mới bảng sinh viên (dùng tham số truyền vào để hiển thị)
    function refreshTable(studentsList = null) {
        const students = studentsList || getStudents(); // Nếu không có dữ liệu truyền vào, lấy từ localStorage
        $('#studentTable').html(''); // Xóa toàn bộ dữ liệu cũ trong bảng
    
        if (students.length === 0) {
            $('#studentTable').append(`<tr><td colspan="6">Không có dữ liệu</td></tr>`);
            return;
        }
    
        students.forEach((student, index) => {
            $('#studentTable').append(`
                <tr>
                    <td>${index + 1}</td>
                    <td>${student.studentID}</td>
                    <td>${student.studentName}</td>
                    <td>${student.age}</td>
                    <td>${student.sex ? 'Nam' : 'Nữ'}</td>
                    <td>
                        <button class="btn btn-info action-btn viewBtn" data-index="${index}">Xem</button>
                        <button class="btn btn-warning action-btn editBtn" data-index="${index}">Sửa</button>
                        <button class="btn btn-danger action-btn deleteBtn" data-index="${index}">Xóa</button>
                    </td>
                </tr>
            `);
        });
    }

    // Sự kiện lưu sinh viên mới hoặc sửa sinh viên
    $('#saveStudentForm').submit(function (e) {
        e.preventDefault();
        const students = getStudents();
        const student = {
            studentID: $('#studentID').val(),
            studentName: $('#studentName').val(),
            age: $('#studentAge').val(),
            sex: $('#studentGender').val() === 'true',
            birthDate: $('#studentBirthDate').val(),
            birthPlace: $('#studentBirthPlace').val(),
            address: $('#studentAddress').val(),
        };

        if (isEditing) {
            students[editingIndex] = student;
            isEditing = false;
            editingIndex = null;
        } else {
            students.push(student);
        }

        saveStudents(students);
        refreshTable();
        $('#studentForm').hide();
        $('#saveStudentForm')[0].reset();
    });

    // Sự kiện thêm sinh viên mới
    $('#addStudentBtn').click(function () {
        $('#studentForm').show();
        $('#formTitle').text('Thêm mới sinh viên');
        $('#saveStudentForm')[0].reset();
        isEditing = false;
    });

    // Sự kiện chỉnh sửa sinh viên
    $(document).on('click', '.editBtn', function () {
        editingIndex = $(this).data('index');
        const students = getStudents();
        const student = students[editingIndex];
        $('#studentID').val(student.studentID);
        $('#studentName').val(student.studentName);
        $('#studentAge').val(student.age);
        $('#studentGender').val(student.sex ? 'true' : 'false');
        $('#studentBirthDate').val(student.birthDate);
        $('#studentBirthPlace').val(student.birthPlace);
        $('#studentAddress').val(student.address);
        $('#studentForm').show();
        $('#formTitle').text('Sửa sinh viên');
        isEditing = true;
    });

    // Sự kiện xem sinh viên
    $(document).on('click', '.viewBtn', function () {
        const index = $(this).data('index');
        const students = getStudents();
        const student = students[index];
        alert(`ID: ${student.studentID}\nTên: ${student.studentName}\nTuổi: ${student.age}\nGiới tính: ${student.sex ? 'Nam' : 'Nữ'}\nNgày sinh: ${student.birthDate}\nNơi sinh: ${student.birthPlace}\nĐịa chỉ: ${student.address}`);
    });

    // Sự kiện xóa sinh viên
    $(document).on('click', '.deleteBtn', function () {
        const index = $(this).data('index');
        let students = getStudents();
        students.splice(index, 1);
        saveStudents(students);
        refreshTable();
    });

    // Sự kiện tìm kiếm và sắp xếp
    $('#search').submit(function (e) {
        e.preventDefault();
        const searchTerm = $('#enterSearch').val().toLowerCase();
        const sortOption = $('#sortSelect').val();
        let students = getStudents();

        // Tìm kiếm
        if (searchTerm) {
            students = students.filter(student => student.studentName.toLowerCase().includes(searchTerm));
        }

        // Sắp xếp
        if (sortOption === 'nameAsc') {
            students.sort((a, b) => a.studentName.localeCompare(b.studentName));
        } else if (sortOption === 'nameDesc') {
            students.sort((a, b) => b.studentName.localeCompare(a.studentName));
        } else if (sortOption === 'ageAsc') {
            students.sort((a, b) => a.age - b.age);
        } else if (sortOption === 'ageDesc') {
            students.sort((a, b) => b.age - a.age);
        }

        refreshTable(students); // Cập nhật bảng với kết quả tìm kiếm và sắp xếp
    });

    // Làm mới bảng với dữ liệu ban đầu
    refreshTable();
});
