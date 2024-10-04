$(document).ready(function () {
    let students = [
        { studentId: "SV001", studentName: "Nguyễn Văn A", age: 20, sex: "Nam" },
        { studentId: "SV002", studentName: "Nguyễn Văn B", age: 21, sex: "Nam" },
        { studentId: "SV003", studentName: "Nguyễn Văn C", age: 19, sex: "Nữ" },
        { studentId: "SV004", studentName: "Nguyễn Văn D", age: 29, sex: "Nam" }
    ];
    let editingIndex = null;

    // Hiển thị danh sách sinh viên
    function displayStudents(studentsList) {
        $('#studentTableBody').empty();
        studentsList.forEach((student, index) => {
            $('#studentTableBody').append(`
                <tr>
                    <td>${index + 1 }</td>
                    <td>${student.studentId}</td>
                    <td>${student.studentName}</td>
                    <td>${student.age}</td>
                    <td>${student.sex}</td>
                    <td>
                        <button class="btn btn-danger btn-sm view-btn" data-index="${index}">Xem</button>
                        <button class="btn btn-warning btn-sm edit-btn" data-index="${index}">Sửa</button>
                        <button class="btn btn-success btn-sm delete-btn" data-index="${index}">Xóa</button>
                    </td>
                </tr>
            `);
        });
    }

    // Hiển thị thông tin sinh viên trong form
    function showForm(student) {
        if (student) {
            $('#studentId').val(student.studentId);
            $('#studentName').val(student.studentName);
            $('#age').val(student.age);
            $('#gender').val(student.sex);
            $('#birthday').val(student.birthday);
            $('#place').val(student.place);
            $('#address').val(student.address);
        } else {
            $('#studentForm')[0].reset();
        }
        $('.student-form').slideDown();
    }

    // Lưu hoặc cập nhật sinh viên
    function saveStudent() {
        let newStudent = {
            studentId: $('#studentId').val(),
            studentName: $('#studentName').val(),
            age: parseInt($('#age').val()),
            sex: $('#gender').val(),
            birthday: $('#birthday').val(),
            place: $('#place').val(),
            address: $('#address').val()
        };

        if (editingIndex === null) {
            students.push(newStudent);
        } else {
            students[editingIndex] = newStudent;
            editingIndex = null;
        }

        displayStudents(students);
        $('#studentForm')[0].reset();
        $('.student-form').slideUp();
    }

    // Xóa sinh viên
    function deleteStudent(index) {
        students.splice(index, 1);
        displayStudents(students);
    }

    // Xem thông tin sinh viên
    function viewStudent(index) {
        let student = students[index];
        alert(`Thông tin sinh viên:\nMã sinh viên: ${student.studentId}\nHọ và tên: ${student.studentName}\nTuổi: ${student.age}\nGiới tính: ${student.sex}`);
    }

 // Tìm kiếm sinh viên
 function searchStudents() {
    const searchTerm = $('#searchBox').val().toLowerCase();
    const filteredStudents = students.filter(student =>
        student.studentName.toLowerCase().includes(searchTerm)
    );
    displayStudents(filteredStudents);
}

// Sắp xếp sinh viên
function sortStudents(order) {
    let sortedStudents = [...students];
    if (order === "age-asc") {
        sortedStudents.sort((a, b) => a.age - b.age);
    } else if (order === "age-desc") {
        sortedStudents.sort((a, b) => b.age - a.age);
    } else if (order === "name-asc") {
        sortedStudents.sort((a, b) => a.studentName.localeCompare(b.studentName));
    } else if (order === "name-desc") {
        sortedStudents.sort((a, b) => b.studentName.localeCompare(a.studentName));
    }
    displayStudents(sortedStudents);
}


    // Event Listeners
    $('#saveStudentBtn').click(saveStudent);
    $('#addStudentBtn').click(() => showForm(null));
    $('#searchInput').on('input', searchStudents);
    $('#sortOption').change(function () {
        sortStudents($(this).val());
    });

    $(document).on('click', '.edit-btn', function () {
        editingIndex = $(this).data('index');
        let student = students[editingIndex];
        showForm(student);
    });

    $(document).on('click', '.delete-btn', function () {
        let index = $(this).data('index');
        deleteStudent(index);
    });

    $(document).on('click', '.view-btn', function () {
        let index = $(this).data('index');
        viewStudent(index);
    });

    // Hiển thị danh sách sinh viên ban đầu
    displayStudents(students);
});
