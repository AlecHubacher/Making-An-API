package com.example.demo.student;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.time.Month;
import java.util.List;

@RestController
@RequestMapping(path = "api/student/")
@CrossOrigin(origins = "http://localhost:3000/")
public class StudentController {

    private final StudentService studentService;

    @Autowired
    public StudentController(StudentService studentService) {
        this.studentService = studentService;
    }

    @GetMapping("/allstudents")
    public List<Student> getStudents()
    {
        return studentService.getStudents();
    }

    @GetMapping("/getstudentbyid")
    @ResponseBody
    public Student getStudentByID(@RequestParam Long id) {
        return studentService.getStudentByID(id);
    }

    @PostMapping(path = "/addstudent", consumes = {"application/json"})
    public Student addStudent(@RequestBody Student student) {
       return studentService.addStudent(student);
    }
}

