package com.aryansharma_n.food_delivery_app.entity;

import org.springframework.boot.SpringApplication;
import org.springframework.web.bind.annotation.RequestMapping;

import jakarta.persistence.*;
import lombok.*;



@Entity         //tells spring this class maps to database table
@Getter
@Setter
// @NoArgsConstructor
// @AllArgsConstructor
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;


    private String name;
    
    @Column(unique = true)
    private String email;
    private String password;
    private String city;
    private String mobile;

    @Enumerated(EnumType.STRING)
    private Role role;

    public enum Role { USER, ADMIN }

    public User(){}



    public User(Long id, String name,String email, String password, String mobile, String city, Role role) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.mobile = mobile;
        this.city = city;
        this.role = role;
    }

    public Long getId()               { return id; }
    public void setId(Long id)        { this.id = id; }

    public String getName()      { return name; }
    public void setName(String name) { this.name = name; }


    public String getEmail()          { return email; }
    public void setEmail(String email){ this.email = email; }

    public String getPasswordHash()   { return password; }
    public void setPasswordHash(String passwordHash){ this.password = passwordHash; }

    public String getMobile()         { return mobile; }
    public void setMobile(String mobile){ this.mobile = mobile; }

    public String getCity()           { return city; }
    public void setCity(String city)  { this.city = city; }

    public Role getRole()             { return role; }
    public void setRole(Role role)    { this.role = role; }


    @Override
    public String toString() {
        return "User{" +
               "id=" + id +
               ", email='" + email + '\'' +
               ", role=" + role +
               '}';
    }


    

}
