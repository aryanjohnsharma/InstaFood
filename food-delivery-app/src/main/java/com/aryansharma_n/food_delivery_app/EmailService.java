package com.aryansharma_n.food_delivery_app;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;


@Service
public class EmailService {
    @Autowired JavaMailSender mailSender;

    public void sendOtpEmail(String toEmail, int otp){
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(toEmail);
        message.setSubject("Your OTP to reset password: ");
        message.setText("Your OTP is : " + otp);
        message.setFrom("nabimoon7864@gmail.com");
        mailSender.send(message);
    }
}
