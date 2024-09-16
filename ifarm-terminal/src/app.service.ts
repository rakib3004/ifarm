import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): object {
    return {
      "name": "Md. Rakib Trofder",
      "nickname": "Rakib",
      "family-name": "Tarafder",
      "phone": "+8801939649428",
      "secondary-phone": "+01511803004",
      "email": "bsse1129@iit.du.ac.bd",
      "secondary-email": "rakib11803004@gmail.com",
      "office-email": "rakib.trofder@streamstech.com",
      "facebook": "https://www.facebook.com/rakib.iit",
      "linkedin": "https://www.linkedin.com/rakib-iit",
      "twitter": "https://twitter.com/MdRakibTrofder",
      "github": "https://github.com/rakib3004",
      "kaggle": "https://kaggle.com/mdrakibtrofder",
      "present-address": {
        "village": "Tarani Ata",
        "post-office": "Goal Bathan",
        "post-code": "2054",
        "police-station": "Sarisha Bari",
        "district": "Jamalpur",
        "division": "Mymensingh"
      },
      "permanent-address": {
        "village": "Khilkhet",
        "post-office": "Khilkhet",
        "post-code": "1229",
        "police-station": "Khilkhet",
        "district": "Dhaka",
        "division": "Dhaka"
      },
      "education": [
        {
          "degree": "Bachelor of Science in Computer Science",
          "institution": "Institute of Information Technology, University of Dhaka",
          "year-of-graduation": 2021
        },
        {
          "degree": "HSC",
          "institution": "Notre Dame College, Dhaka",
          "year-of-graduation": 2023
        }
      ],
      "experience": [
        {
          "company": "Stream Tech Ltd.",
          "position": "Software Engineer",
          "duration": "2 years",
          "description": "Worked on various projects related to web development, data analysis, and machine learning."
        },
        {
          "company": "Cefalo Bangladesh Ltd.",
          "position": "Software Engineer Intern",
          "duration": "1 month",
          "description": "Worked on a project to develop a custom mobile application for a company."
        }
      ],
      "volunteer-experience": [
        {
          "organization": "Code For Cause",
          "position": "Volunteer",
          "duration": "1 year",
          "description": "Volunteered at a local non-profit organization to raise awareness about climate change and environmental issues."
        },
        {
          "organization": "Sustainable Development Foundation",
          "position": "Volunteer",
          "duration": "1 year",
          "description": "Volunteered at a local non-profit organization to promote sustainable living and environmental conservation."
        }
      ],
      "skills": [
        "Python",
        "JavaScript",
        "React",
        "Node.js",
        "Django",
        "TensorFlow",
        "PyTorch",
        "MongoDB",
        "MySQL",
        "HTML",
        "CSS",
        "Bootstrap",
        "SASS",
        "Git"
      ],
      "certification": [
        {
            "name": "Docker Certified Associate",
            "authority": "Docker, Inc.",
            "year-of-issue": 2016
        },{
            "name": "AWS Certified Developer - Associate",
            "authority": "Amazon Web Services, Inc.",
            "year-of-issue": 2024
        },
        {
            "name": "LeetCode Master",
            "authority": "LeetCode",
            "year-of-issue": 2020
        }
      ]
    };
  }
}
