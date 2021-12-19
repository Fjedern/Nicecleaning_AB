package com.example.cleanNiceAB.email;

import lombok.AllArgsConstructor;
import org.slf4j.LoggerFactory;
import org.springframework.boot.autoconfigure.web.servlet.WebMvcProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import java.util.logging.Logger;

@Component
@Service
@AllArgsConstructor
public class EmailService implements EmailSender{

    private final static Logger LOGGER = (Logger) LoggerFactory
            .getLogger(EmailService.class);


    private final JavaMailSender mailSender;

    @Override
    @Async
    public void send(String to, String email) {

        try {
            MimeMessage mimeMessage = mailSender.createMimeMessage();
            MimeMessageHelper helper =
                    new MimeMessageHelper(mimeMessage, "utf-8");
            helper.setText(email, true);
            helper.setTo(to);
            helper.setSubject("Your booking conformation");
            helper.setFrom("jonas_holmkvist@hotmail.se");
            mailSender.send(mimeMessage);

        }catch (MessagingException e) {
            LOGGER.warning("Test logger error");
            System.out.println("Faild to send email");
            throw new IllegalStateException("Faild to send email");
        }
    }
}
