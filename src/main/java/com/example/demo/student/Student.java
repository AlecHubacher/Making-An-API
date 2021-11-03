package com.example.demo.student;

import javax.persistence.*;
import java.time.LocalDate;
@Entity
@Table(name="student")
public class Student {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id", updatable = false, nullable = false, columnDefinition = "serial")
    private Long id;
    @Column(name="name")
    private String name;
    @Column(name="email")
    private String email;
    @Column(name="dob")
    private LocalDate dob;
    @Column(name="major")
    private String major;

    public Student() {

    }

    public Student(Long id,
                   String name,
                   String email,
                   LocalDate dob,
                   String major) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.dob = dob;
        this.major = major;
    }

    public Student(String name,
                   String email,
                   LocalDate dob,
                   String major) {
        this.name = name;
        this.email = email;
        this.dob = dob;
        this.major = major;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getMajor() {
        return major;
    }

    public void setMajor(String major) {
        this.major = major;
    }

    public LocalDate getDob() {
        return dob;
    }

    public void setDob(LocalDate dob) {
        this.dob = dob;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    @Override
    public String toString() {
        return "Student{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", major=" + major +
                ", dob=" + dob +
                ", email='" + email + '\'' +
                '}';
    }
}
