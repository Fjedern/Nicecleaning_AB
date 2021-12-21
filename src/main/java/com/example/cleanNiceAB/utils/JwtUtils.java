package com.example.cleanNiceAB.utils;

import com.example.cleanNiceAB.entities.Employee;
import com.example.cleanNiceAB.entities.User;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.JwtBuilder;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.stereotype.Component;

import javax.crypto.spec.SecretKeySpec;
import javax.xml.bind.DatatypeConverter;
import java.security.Key;
import java.util.Date;

@Component
public class JwtUtils {

    private static String secret = "Dammsuga";

    public static String createJWT(User user){

        SignatureAlgorithm sa = SignatureAlgorithm.HS256;

        Long nowMillis = System.currentTimeMillis();
        Date now = new Date(nowMillis);
        Date expire = new Date(nowMillis + 10800000);

        byte[] apiKeySecretBytes = DatatypeConverter.parseBase64Binary(secret);
        Key signingKey = new SecretKeySpec(apiKeySecretBytes, sa.getJcaName());

        JwtBuilder builder = Jwts.builder()
                .setId(user.getId().toString())
                .setIssuedAt(now)
                .setIssuer("StädaFint AB")
                .setSubject("user info")
                .signWith(sa, signingKey)
                .setExpiration(expire)
                .claim("UserType", user.getUserType());

        return builder.compact();
    }
    public static String createEmployeeJWT(Employee employee){

        SignatureAlgorithm sa = SignatureAlgorithm.HS256;

        Long nowMillis = System.currentTimeMillis();
        Date now = new Date(nowMillis);
        Date expire = new Date(nowMillis + 10800000);

        byte[] apiKeySecretBytes = DatatypeConverter.parseBase64Binary(secret);
        Key signingKey = new SecretKeySpec(apiKeySecretBytes, sa.getJcaName());

        JwtBuilder builder = Jwts.builder()
                .setId(employee.getId().toString())
                .setIssuedAt(now)
                .setIssuer("StädaFint AB")
                .setSubject("user info")
                .signWith(sa, signingKey)
                .setExpiration(expire)
                .claim("UserType", "employee");

        return builder.compact();
    }

    public static Claims decodeJWT(String jwt) {
        Claims claims = Jwts.parser()
                .setSigningKey(DatatypeConverter.parseBase64Binary(secret))
                .parseClaimsJws(jwt).getBody();
        return claims;
    }
}
