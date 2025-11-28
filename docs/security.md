# Security Guide

This document outlines the security measures implemented for the website and best practices for maintaining security.

## Implemented Security Measures

### Security Headers

The application implements comprehensive security headers via Next.js middleware:

- **Strict-Transport-Security (HSTS)**: Enforces HTTPS connections with a 2-year max-age
- **X-Frame-Options**: Prevents clickjacking attacks (SAMEORIGIN)
- **X-Content-Type-Options**: Prevents MIME type sniffing (nosniff)
- **X-XSS-Protection**: Enables XSS filtering in older browsers
- **Referrer-Policy**: Controls referrer information sharing
- **Permissions-Policy**: Restricts access to browser features (camera, microphone, geolocation)
- **Content-Security-Policy (CSP)**: Restricts resource loading to prevent XSS attacks

### Content Security Policy (CSP)

The CSP is configured to:
- Only allow resources from the same origin (`'self'`)
- Restrict script execution (with necessary exceptions for Next.js)
- Prevent inline styles (with exception for TailwindCSS)
- Block frame embedding from external sources
- Upgrade insecure requests to HTTPS

### Security.txt

A security.txt file is available at `/.well-known/security.txt` for security researchers to report vulnerabilities.

**Contact:** yhoro@yhoro.de

### Next.js Security Features

- **React Strict Mode**: Enabled for additional React safety checks
- **Source Maps**: Disabled in production to prevent source code exposure
- **Powered-By Header**: Disabled to avoid revealing the framework version
- **Response Compression**: Enabled for better performance and reduced attack surface

### Docker Security

The Docker container runs with:
- **Non-root user**: Application runs as `nextjs` user (UID 1001)
- **Minimal base image**: Uses Alpine Linux for smaller attack surface
- **Multi-stage build**: Reduces final image size and attack surface
- **Health checks**: Monitors container health

## Security Best Practices

### For Deployment

1. **Always use HTTPS**: The application enforces HTTPS via HSTS header
2. **Keep dependencies updated**: Regularly run `npm audit` and update packages
3. **Use environment variables**: Never commit secrets to the repository
4. **Monitor logs**: Regularly check application and server logs for suspicious activity
5. **Regular backups**: Ensure backups are taken regularly

### For Development

1. **Never commit secrets**: Use `.env.local` for local development secrets
2. **Review dependencies**: Before adding new packages, review their security
3. **Run security audits**: Use `npm audit` regularly
4. **Keep Next.js updated**: Regularly update Next.js and dependencies

### Nginx Proxy Manager Configuration

When using Nginx Proxy Manager, ensure:

1. **SSL/TLS**: Always enable SSL with valid certificates
2. **Security Headers**: NPM can add additional security headers
3. **Rate Limiting**: Configure rate limiting in NPM to prevent DDoS
4. **Block Common Exploits**: Enable "Block Common Exploits" in NPM
5. **Web Application Firewall (WAF)**: Consider enabling WAF rules

### Dependency Security

Regularly check for vulnerabilities:

```bash
# Check for vulnerabilities
npm audit

# Fix automatically (if possible)
npm audit fix

# Update dependencies
npm update
```

## Reporting Security Issues

If you discover a security vulnerability, please report it to:

**Email:** yhoro@yhoro.de

Please include:
- Description of the vulnerability
- Steps to reproduce
- Potential impact
- Suggested fix (if any)

We appreciate responsible disclosure and will respond promptly.

## Security Headers Reference

All security headers are set via `src/middleware.ts`. To modify headers, edit this file and redeploy.

## Additional Resources

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [Next.js Security](https://nextjs.org/docs/app/building-your-application/configuring/security-headers)
- [Mozilla Security Guidelines](https://infosec.mozilla.org/guidelines/web_security)

