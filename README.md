# 1hrlink
A quick, temporary link shortening service.

Domain will be hosted @ [1hrlink.com](https://1hrlink.com).

[![Known Vulnerabilities](https://snyk.io/test/github/justkrzys/1hrlink/badge.svg?targetFile=server/package.json)](https://snyk.io/test/github/justkrzys/1hrlink?targetFile=server/package.json)

---

### To Do (Subject to Change):
**Full Stack:**
- [ ] Adjustable link length
- [ ] Future
  - [ ] Social media share integration (Facebook, Twitter, etc.)

**Front End:**
- [ ] Time Input Drop Down
- [ ] Regular expression matching for links
- [ ] CAPTCHA before submission
- [ ] Recently shortened links
- [ ] Optional custom short link
- [ ] Future front end extras
    - [ ] Website styling
    - [ ] Copyright
    - [ ] About 1hrlink
    - [ ] About “Our Team”
    - [ ] Contact Us
    - [ ] Logo?
    
**Back End:**
- [ ] Implement proper subdomain for back end API calls
- [ ] 404 and Error pages fully implemented
    - [x] 404 Page redirection
- [ ] Input sanitization before inserting into database
- [ ] Get a public API setup
- [ ] Future
    - [ ] Update database schema
    - [ ] Statistics on links (tracking page clicks, etc.)
    
---

### **Completed:**
**Full Stack:**
- [x] Connect front-end to back-end
- [x] Hide credentials in source code via process variables
- [x] Get documents to expire after user specified length of time
- [x] Fix package security vulnerabilities

**Front End:**
- [x] Preliminary user input form working
- [x] Form data being sent to server successfully
- [x] Redirection to original URL

**Back End:**
- [x] Create preliminary database schema
- [x] Respond to client successfully
- [x] Hash URL and respond with shortened link
- [x] Proper redirection from database
