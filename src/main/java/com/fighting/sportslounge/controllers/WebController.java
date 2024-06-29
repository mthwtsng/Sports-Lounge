package com.fighting.sportslounge.controllers;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class WebController {

    @GetMapping("/index")
    public String toIndex() {
        return "index"; // This assumes login.html is in src/main/resources/templates/
    }

    @GetMapping("/signup")
    public String toSignupPage() {
        return "signup"; // This assumes signup.html is in src/main/resources/templates/
    }

    @GetMapping("/login")
    public String toLoginPage() {
        return "login"; // This assumes login.html is in src/main/resources/templates/
    }
}

