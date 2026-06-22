    package com.jose.task_management.controller;

    import org.springframework.beans.factory.annotation.Autowired;
    import org.springframework.web.bind.annotation.PostMapping;
    import org.springframework.web.bind.annotation.RequestBody;
    import org.springframework.web.bind.annotation.RequestMapping;
    import org.springframework.web.bind.annotation.RestController;

    import com.jose.task_management.dto.LoginRequest;
    import com.jose.task_management.dto.RegisterRequest;
    import com.jose.task_management.entity.User;
import com.jose.task_management.security.JwtUtil;
import com.jose.task_management.service.UserService;

    @RestController
    @RequestMapping("/api/auth")
    public class AuthController {

        @Autowired
        private UserService userService;

        // REGISTER API
        @PostMapping("/register")
        public String register(@RequestBody RegisterRequest request) {
            User user = new User();
            user.setName(request.getName());
            user.setEmail(request.getEmail());
            user.setPassword(request.getPassword());
            userService.registerUser(user);
            return "User registered successfully";
        }

        //  LOGIN API
        @PostMapping("/login")
        public String login(@RequestBody LoginRequest request) {
            User user = userService.loginUser(
                    request.getEmail(),
                    request.getPassword()
            );
            String token = JwtUtil.generateToken(user.getEmail());
            return token;
        }
    }