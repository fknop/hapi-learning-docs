define({ "api": [
  {
    "type": "post",
    "url": "/login",
    "title": "Authentificate",
    "name": "Login",
    "group": "Auth",
    "version": "1.0.0",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -X POST http://localhost/login -H \"Content-Type: application/json\" \\\n        -d '{ \"username\": \"user\", \"password\": \"password\" }'",
        "type": "curl"
      }
    ],
    "permission": [
      {
        "name": "all users."
      }
    ],
    "description": "<p>You have to provide the username OR the email. <br/> After the login, you have to provide the private token returned by the login in EVERY request in the Authorization header.</p> ",
    "parameter": {
      "fields": {
        "payload": [
          {
            "group": "payload",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "username",
            "description": "<p>The username.</p> "
          },
          {
            "group": "payload",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "email",
            "description": "<p>The email.</p> "
          },
          {
            "group": "payload",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "password",
            "description": "<p>The password.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>json</p> ",
            "optional": false,
            "field": "200",
            "description": "<p>The private token.</p> "
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "<p>json</p> ",
            "optional": false,
            "field": "400",
            "description": "<p>Validation error.</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>json</p> ",
            "optional": false,
            "field": "401",
            "description": "<p>Bad credentials.</p> "
          }
        ]
      }
    },
    "filename": "app/controllers/auth.js",
    "groupTitle": "Auth"
  },
  {
    "type": "post",
    "url": "/logout",
    "title": "Logout",
    "name": "Logout",
    "group": "Auth",
    "version": "1.0.0",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -X POST http://localhost/logout -H \"Authorization: private_token\"",
        "type": "curl"
      }
    ],
    "permission": [
      {
        "name": "all users."
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The user's private token.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "204",
            "description": "<p>No content</p> "
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "<p>json</p> ",
            "optional": false,
            "field": "401",
            "description": "<p>Invalid token or token expired.</p> "
          }
        ]
      }
    },
    "filename": "app/controllers/auth.js",
    "groupTitle": "Auth"
  },
  {
    "type": "get",
    "url": "/me",
    "title": "Get current user informations",
    "name": "Me",
    "group": "Auth",
    "version": "1.0.0",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl http://localhost/me -H \"Authorization: private_token\"",
        "type": "curl"
      }
    ],
    "permission": [
      {
        "name": "all users."
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The user's private token.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "200",
            "description": "<p>Connected user informations.</p> "
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "<p>json</p> ",
            "optional": false,
            "field": "401",
            "description": "<p>Invalid token or token expired.</p> "
          }
        ]
      }
    },
    "filename": "app/controllers/auth.js",
    "groupTitle": "Auth"
  },
  {
    "type": "get",
    "url": "/me/courses",
    "title": "Subscribed current user courses",
    "name": "MeCourses",
    "group": "Auth",
    "version": "1.0.0",
    "permission": [
      {
        "name": "all users."
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The user's private token.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "200",
            "description": "<p>All the subscribed current user courses.</p> "
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "<p>json</p> ",
            "optional": false,
            "field": "401",
            "description": "<p>Invalid token or token expired.</p> "
          }
        ]
      }
    },
    "filename": "app/controllers/auth.js",
    "groupTitle": "Auth"
  },
  {
    "type": "get",
    "url": "/me/news",
    "title": "Subscribed current user courses news",
    "name": "MeCoursesNews",
    "group": "Auth",
    "version": "1.0.0",
    "permission": [
      {
        "name": "all users."
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The user's private token.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "200",
            "description": "<p>All the subscribed current user courses news.</p> "
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "<p>json</p> ",
            "optional": false,
            "field": "401",
            "description": "<p>Invalid token or token expired.</p> "
          }
        ]
      }
    },
    "filename": "app/controllers/auth.js",
    "groupTitle": "Auth"
  },
  {
    "type": "patch",
    "url": "/me",
    "title": "Update current user informations",
    "name": "PatchMe",
    "group": "Auth",
    "version": "1.0.0",
    "permission": [
      {
        "name": "all users."
      }
    ],
    "parameter": {
      "fields": {
        "payload": [
          {
            "group": "payload",
            "optional": false,
            "field": "password",
            "description": "<p>The new password.</p> "
          },
          {
            "group": "payload",
            "optional": false,
            "field": "email",
            "description": "<p>The new email.</p> "
          },
          {
            "group": "payload",
            "optional": false,
            "field": "firstName",
            "description": "<p>The new first name.</p> "
          },
          {
            "group": "payload",
            "optional": false,
            "field": "lastName",
            "description": "<p>The new last name.</p> "
          },
          {
            "group": "payload",
            "optional": false,
            "field": "phoneNumber",
            "description": "<p>The new phone number.</p> "
          },
          {
            "group": "payload",
            "optional": false,
            "field": "notify",
            "description": "<p>The new value of notify (news).</p> "
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The user's private token.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "204",
            "description": "<p>No content.</p> "
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "<p>json</p> ",
            "optional": false,
            "field": "401",
            "description": "<p>Invalid token or token expired.</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>json</p> ",
            "optional": false,
            "field": "409",
            "description": "<p>Conflict with the new username or email.</p> "
          }
        ]
      }
    },
    "filename": "app/controllers/auth.js",
    "groupTitle": "Auth"
  },
  {
    "type": "post",
    "url": "/courses/:id/tags",
    "title": "Add tags to course",
    "name": "AddTags",
    "group": "Courses",
    "version": "1.0.0",
    "permission": [
      {
        "name": "admin and teachers."
      }
    ],
    "description": "<p>Tags that does not exists will be ignored (no 422 returned).</p> ",
    "parameter": {
      "fields": {
        "path": [
          {
            "group": "path",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The course id (code).</p> "
          }
        ],
        "payload": [
          {
            "group": "payload",
            "type": "<p>String[]</p> ",
            "optional": false,
            "field": "tags",
            "description": "<p>An array of tag names.</p> "
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The user's private token.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>json</p> ",
            "optional": false,
            "field": "200",
            "description": "<p>The updated course.</p> "
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "<p>json</p> ",
            "optional": false,
            "field": "400",
            "description": "<p>Validation error.</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>json</p> ",
            "optional": false,
            "field": "401",
            "description": "<p>Invalid token or token expired.</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>json</p> ",
            "optional": false,
            "field": "403",
            "description": "<p>Forbidden - insufficient permissions.</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>json</p> ",
            "optional": false,
            "field": "404",
            "description": "<p>Course not found.</p> "
          }
        ]
      }
    },
    "filename": "app/controllers/course.js",
    "groupTitle": "Courses"
  },
  {
    "type": "post",
    "url": "/courses/:id/tags",
    "title": "Add teachers to course",
    "name": "AddTeachers",
    "group": "Courses",
    "version": "1.0.0",
    "permission": [
      {
        "name": "admin and teachers."
      }
    ],
    "description": "<p>Teachers that does not exists will be ignored (no 422 returned).</p> ",
    "parameter": {
      "fields": {
        "path": [
          {
            "group": "path",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The course id (code).</p> "
          }
        ],
        "payload": [
          {
            "group": "payload",
            "type": "<p>String[]</p> ",
            "optional": false,
            "field": "teachers",
            "description": "<p>An array of teachers names.</p> "
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The user's private token.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>json</p> ",
            "optional": false,
            "field": "200",
            "description": "<p>The updated course.</p> "
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "<p>json</p> ",
            "optional": false,
            "field": "400",
            "description": "<p>Validation error.</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>json</p> ",
            "optional": false,
            "field": "401",
            "description": "<p>Invalid token or token expired.</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>json</p> ",
            "optional": false,
            "field": "403",
            "description": "<p>Forbidden - insufficient permissions.</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>json</p> ",
            "optional": false,
            "field": "404",
            "description": "<p>Course not found.</p> "
          }
        ]
      }
    },
    "filename": "app/controllers/course.js",
    "groupTitle": "Courses"
  },
  {
    "type": "post",
    "url": "/courses/:id/folders/:path",
    "title": "Create a folder",
    "name": "CreateFolder",
    "group": "Courses",
    "version": "1.0.0",
    "permission": [
      {
        "name": "admin and teachers."
      }
    ],
    "parameter": {
      "fields": {
        "path": [
          {
            "group": "path",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The course id (code).</p> "
          },
          {
            "group": "path",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "path",
            "description": "<p>The path where to create the folder.</p> "
          }
        ],
        "query": [
          {
            "group": "query",
            "type": "<p>Boolean</p> ",
            "optional": true,
            "field": "hidden",
            "defaultValue": "false",
            "description": "<p>True if the file is hidden, false otherwise.</p> "
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The user's private token.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "201",
            "description": "<p>No content.</p> "
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "<p>json</p> ",
            "optional": false,
            "field": "400",
            "description": "<p>Validation error.</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>json</p> ",
            "optional": false,
            "field": "401",
            "description": "<p>Invalid token or token expired.</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>json</p> ",
            "optional": false,
            "field": "403",
            "description": "<p>Forbidden - insufficient permissions.</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>json</p> ",
            "optional": false,
            "field": "404",
            "description": "<p>Course not found.</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>json</p> ",
            "optional": false,
            "field": "409",
            "description": "<p>Folder already exists.</p> "
          }
        ]
      }
    },
    "filename": "app/controllers/course.js",
    "groupTitle": "Courses"
  },
  {
    "type": "delete",
    "url": "/courses/:id",
    "title": "Delete a course",
    "name": "DeleteCourse",
    "group": "Courses",
    "version": "1.0.0",
    "permission": [
      {
        "name": "admin."
      }
    ],
    "parameter": {
      "fields": {
        "path": [
          {
            "group": "path",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The course id (code).</p> "
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The user's private token.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "204",
            "description": "<p>No content.</p> "
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "<p>json</p> ",
            "optional": false,
            "field": "400",
            "description": "<p>Validation error.</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>json</p> ",
            "optional": false,
            "field": "401",
            "description": "<p>Invalid token or token expired.</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>json</p> ",
            "optional": false,
            "field": "403",
            "description": "<p>Forbidden - insufficient permissions.</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>json</p> ",
            "optional": false,
            "field": "404",
            "description": "<p>Course not found.</p> "
          }
        ]
      }
    },
    "filename": "app/controllers/course.js",
    "groupTitle": "Courses"
  },
  {
    "type": "delete",
    "url": "/courses/:id/documents",
    "title": "Delete course documents",
    "name": "DeleteCourseDocuments",
    "group": "Courses",
    "version": "1.0.0",
    "permission": [
      {
        "name": "admin and teachers."
      }
    ],
    "parameter": {
      "fields": {
        "path": [
          {
            "group": "path",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The course id (code).</p> "
          }
        ],
        "payload": [
          {
            "group": "payload",
            "type": "<p>String[]</p> ",
            "optional": false,
            "field": "files",
            "description": "<p>An array files to be deleted from the course.</p> "
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The user's private token.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "202",
            "description": "<p>Accepted.</p> "
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "<p>json</p> ",
            "optional": false,
            "field": "400",
            "description": "<p>Validation error.</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>json</p> ",
            "optional": false,
            "field": "401",
            "description": "<p>Invalid token or token expired.</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>json</p> ",
            "optional": false,
            "field": "403",
            "description": "<p>Forbidden - insufficient permissions.</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>json</p> ",
            "optional": false,
            "field": "404",
            "description": "<p>Course not found.</p> "
          }
        ]
      }
    },
    "filename": "app/controllers/course.js",
    "groupTitle": "Courses"
  },
  {
    "type": "delete",
    "url": "/courses/:id/tags",
    "title": "Delete course tags",
    "name": "DeleteCourseTags",
    "group": "Courses",
    "version": "1.0.0",
    "permission": [
      {
        "name": "admin and teachers."
      }
    ],
    "parameter": {
      "fields": {
        "path": [
          {
            "group": "path",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The course id (code).</p> "
          }
        ],
        "payload": [
          {
            "group": "payload",
            "type": "<p>String[]</p> ",
            "optional": false,
            "field": "tags",
            "description": "<p>The tags to be removed from the course.</p> "
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The user's private token.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "204",
            "description": "<p>No content.</p> "
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "<p>json</p> ",
            "optional": false,
            "field": "400",
            "description": "<p>Validation error.</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>json</p> ",
            "optional": false,
            "field": "401",
            "description": "<p>Invalid token or token expired.</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>json</p> ",
            "optional": false,
            "field": "403",
            "description": "<p>Forbidden - insufficient permissions.</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>json</p> ",
            "optional": false,
            "field": "404",
            "description": "<p>Course not found.</p> "
          }
        ]
      }
    },
    "filename": "app/controllers/course.js",
    "groupTitle": "Courses"
  },
  {
    "type": "delete",
    "url": "/courses/:id/teachers",
    "title": "Delete course teachers",
    "name": "DeleteCourseTeachers",
    "group": "Courses",
    "version": "1.0.0",
    "permission": [
      {
        "name": "admin and teachers."
      }
    ],
    "parameter": {
      "fields": {
        "path": [
          {
            "group": "path",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The course id (code).</p> "
          }
        ],
        "payload": [
          {
            "group": "payload",
            "type": "<p>String[]</p> ",
            "optional": false,
            "field": "teachers",
            "description": "<p>An array of teachers usernames to be removed from the course.</p> "
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The user's private token.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "204",
            "description": "<p>No content.</p> "
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "<p>json</p> ",
            "optional": false,
            "field": "400",
            "description": "<p>Validation error.</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>json</p> ",
            "optional": false,
            "field": "401",
            "description": "<p>Invalid token or token expired.</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>json</p> ",
            "optional": false,
            "field": "403",
            "description": "<p>Forbidden - insufficient permissions.</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>json</p> ",
            "optional": false,
            "field": "404",
            "description": "<p>Course not found.</p> "
          }
        ]
      }
    },
    "filename": "app/controllers/course.js",
    "groupTitle": "Courses"
  },
  {
    "type": "get",
    "url": "/courses/:id",
    "title": "Get one course",
    "name": "GetCourse",
    "group": "Courses",
    "version": "1.0.0",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl http://localhost/courses/XYZ",
        "type": "curl"
      }
    ],
    "permission": [
      {
        "name": "all users."
      }
    ],
    "parameter": {
      "fields": {
        "path": [
          {
            "group": "path",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>Id of the course (code).</p> "
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The user's private token.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>json</p> ",
            "optional": false,
            "field": "200",
            "description": "<p>The course object.</p> "
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "<p>json</p> ",
            "optional": false,
            "field": "400",
            "description": "<p>Validation error.</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>json</p> ",
            "optional": false,
            "field": "401",
            "description": "<p>Invalid token or token expired.</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>json</p> ",
            "optional": false,
            "field": "404",
            "description": "<p>Course not found.</p> "
          }
        ]
      }
    },
    "filename": "app/controllers/course.js",
    "groupTitle": "Courses"
  },
  {
    "type": "get",
    "url": "/courses/:id/documents/:path",
    "title": "Get a course documents",
    "name": "GetCourseDocuments",
    "group": "Courses",
    "version": "1.0.0",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl http://localhost/courses/XYZ/documents/folder1/folder2/doc",
        "type": "curl"
      }
    ],
    "permission": [
      {
        "name": "all users."
      }
    ],
    "parameter": {
      "fields": {
        "path": [
          {
            "group": "path",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>Id of the course (code).</p> "
          },
          {
            "group": "path",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "path",
            "defaultValue": "/",
            "description": "<p>The documents path.</p> "
          }
        ],
        "query": [
          {
            "group": "query",
            "type": "<p>Boolean</p> ",
            "optional": true,
            "field": "hidden",
            "defaultValue": "false",
            "description": "<p>True to see hidden files.</p> "
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The user's private token.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Stream</p> ",
            "optional": false,
            "field": "200",
            "description": "<p>The files to download.</p> "
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "<p>json</p> ",
            "optional": false,
            "field": "400",
            "description": "<p>Validation error.</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>json</p> ",
            "optional": false,
            "field": "401",
            "description": "<p>Invalid token or token expired.</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>json</p> ",
            "optional": false,
            "field": "404",
            "description": "<p>Course not found.</p> "
          }
        ]
      }
    },
    "filename": "app/controllers/course.js",
    "groupTitle": "Courses"
  },
  {
    "type": "get",
    "url": "/courses/:id/homepage",
    "title": "Get a course homepage",
    "name": "GetCourseHomepage",
    "group": "Courses",
    "version": "1.0.0",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl http://localhost/courses/XYZ/homepage",
        "type": "curl"
      }
    ],
    "permission": [
      {
        "name": "all users."
      }
    ],
    "parameter": {
      "fields": {
        "path": [
          {
            "group": "path",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>Id of the course (code).</p> "
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The user's private token.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "200",
            "description": "<p>The homepage content.</p> "
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "<p>json</p> ",
            "optional": false,
            "field": "400",
            "description": "<p>Validation error.</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>json</p> ",
            "optional": false,
            "field": "401",
            "description": "<p>Invalid token or token expired.</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>json</p> ",
            "optional": false,
            "field": "404",
            "description": "<p>Course not found.</p> "
          }
        ]
      }
    },
    "filename": "app/controllers/course.js",
    "groupTitle": "Courses"
  },
  {
    "type": "get",
    "url": "/courses/:id/students",
    "title": "Get all the students subscribed to a course",
    "name": "GetCourseStudents",
    "group": "Courses",
    "version": "1.0.0",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl http://localhost/courses/XYZ/students",
        "type": "curl"
      }
    ],
    "permission": [
      {
        "name": "all users."
      }
    ],
    "parameter": {
      "fields": {
        "path": [
          {
            "group": "path",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>Id of the course (code).</p> "
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The user's private token.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>json</p> ",
            "optional": false,
            "field": "200",
            "description": "<p>An array of users (students).</p> "
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "<p>json</p> ",
            "optional": false,
            "field": "400",
            "description": "<p>Validation error.</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>json</p> ",
            "optional": false,
            "field": "401",
            "description": "<p>Invalid token or token expired.</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>json</p> ",
            "optional": false,
            "field": "404",
            "description": "<p>Course not found.</p> "
          }
        ]
      }
    },
    "filename": "app/controllers/course.js",
    "groupTitle": "Courses"
  },
  {
    "type": "get",
    "url": "/courses/:id/documents/:path",
    "title": "Get the list of documents in a directory",
    "name": "GetCourseTree",
    "group": "Courses",
    "version": "1.0.0",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl http://localhost/courses/XYZ/tree/folder1/folder2/doc",
        "type": "curl"
      }
    ],
    "permission": [
      {
        "name": "all users."
      }
    ],
    "parameter": {
      "fields": {
        "path": [
          {
            "group": "path",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>Id of the course (code).</p> "
          },
          {
            "group": "path",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "path",
            "defaultValue": "/",
            "description": "<p>The documents path.</p> "
          }
        ],
        "query": [
          {
            "group": "query",
            "type": "<p>Boolean</p> ",
            "optional": true,
            "field": "hidden",
            "defaultValue": "false",
            "description": "<p>True to see hidden files.</p> "
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The user's private token.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>json</p> ",
            "optional": false,
            "field": "200",
            "description": "<p>An object with the parent directory and the files.</p> "
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "<p>json</p> ",
            "optional": false,
            "field": "400",
            "description": "<p>Validation error.</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>json</p> ",
            "optional": false,
            "field": "401",
            "description": "<p>Invalid token or token expired.</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>json</p> ",
            "optional": false,
            "field": "404",
            "description": "<p>Course not found.</p> "
          }
        ]
      }
    },
    "filename": "app/controllers/course.js",
    "groupTitle": "Courses"
  },
  {
    "type": "get",
    "url": "/courses",
    "title": "Get all courses",
    "name": "GetCourses",
    "group": "Courses",
    "version": "1.0.0",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl http://localhost/courses",
        "type": "curl"
      }
    ],
    "permission": [
      {
        "name": "all users."
      }
    ],
    "parameter": {
      "fields": {
        "query": [
          {
            "group": "query",
            "type": "<p>String[]</p> ",
            "optional": true,
            "field": "select",
            "description": "<p>Names of fields to select.</p> "
          },
          {
            "group": "query",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "codename",
            "description": "<p>Get by code or name of the course (OR condition).</p> "
          },
          {
            "group": "query",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "code",
            "description": "<p>Get by code of the course.</p> "
          },
          {
            "group": "query",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "name",
            "description": "<p>Get by name of the course.</p> "
          },
          {
            "group": "query",
            "type": "<p>String[]</p> ",
            "optional": true,
            "field": "tags",
            "description": "<p>Get by tags of the course.</p> "
          },
          {
            "group": "query",
            "type": "<p>Boolean</p> ",
            "optional": true,
            "field": "pagination",
            "defaultValue": "true",
            "description": "<p>Enable / disable the pagination.</p> "
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The user's private token.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>json</p> ",
            "optional": false,
            "field": "200",
            "description": "<p>An object with metadata and array of results if pagination is true or an array of results if pagination is false.</p> "
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "<p>json</p> ",
            "optional": false,
            "field": "400",
            "description": "<p>Validation error.</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>json</p> ",
            "optional": false,
            "field": "401",
            "description": "<p>Invalid token or token expired.</p> "
          }
        ]
      }
    },
    "filename": "app/controllers/course.js",
    "groupTitle": "Courses"
  },
  {
    "type": "patch",
    "url": "/courses/:id",
    "title": "Update an existing course",
    "name": "PatchCourse",
    "group": "Courses",
    "version": "1.0.0",
    "permission": [
      {
        "name": "admin and teachers."
      }
    ],
    "parameter": {
      "fields": {
        "path": [
          {
            "group": "path",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The course id (code).</p> "
          }
        ],
        "payload": [
          {
            "group": "payload",
            "type": "<p>String[]</p> ",
            "optional": false,
            "field": "tags",
            "description": "<p>An array of tag names.</p> "
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The user's private token.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "204",
            "description": "<p>No content.</p> "
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "<p>json</p> ",
            "optional": false,
            "field": "400",
            "description": "<p>Validation error.</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>json</p> ",
            "optional": false,
            "field": "401",
            "description": "<p>Invalid token or token expired.</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>json</p> ",
            "optional": false,
            "field": "403",
            "description": "<p>Forbidden - insufficient permissions.</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>json</p> ",
            "optional": false,
            "field": "404",
            "description": "<p>Course not found.</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>json</p> ",
            "optional": false,
            "field": "409",
            "description": "<p>Course name or code already exists.</p> "
          }
        ]
      }
    },
    "filename": "app/controllers/course.js",
    "groupTitle": "Courses"
  },
  {
    "type": "post",
    "url": "/courses",
    "title": "Post a course",
    "name": "PostCourse",
    "group": "Courses",
    "version": "1.0.0",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -X POST http://localhost/courses -H \"Content-Type: application/json\" \\\n     -H \"Authorization: private_token\" -d '{\"name\": \"Course Name\", \"code\": \"Course code\"}'",
        "type": "curl"
      }
    ],
    "permission": [
      {
        "name": "admin and teachers."
      }
    ],
    "parameter": {
      "fields": {
        "payload": [
          {
            "group": "payload",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>The course name.</p> "
          },
          {
            "group": "payload",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "code",
            "description": "<p>The course code.</p> "
          },
          {
            "group": "payload",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "homepage",
            "description": "<p>The course homepage.</p> "
          },
          {
            "group": "payload",
            "type": "<p>String[]</p> ",
            "optional": true,
            "field": "teachers",
            "description": "<p>Array of teachers username.</p> "
          },
          {
            "group": "payload",
            "type": "<p>String[]</p> ",
            "optional": true,
            "field": "tags",
            "description": "<p>Array of tags name.</p> "
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The user's private token.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>json</p> ",
            "optional": false,
            "field": "201",
            "description": "<p>The created course.</p> "
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "<p>json</p> ",
            "optional": false,
            "field": "400",
            "description": "<p>Validation error.</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>json</p> ",
            "optional": false,
            "field": "401",
            "description": "<p>Invalid token or token expired.</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>json</p> ",
            "optional": false,
            "field": "403",
            "description": "<p>Forbidden - insufficient permissions.</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>json</p> ",
            "optional": false,
            "field": "409",
            "description": "<p>Course already exists.</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>json</p> ",
            "optional": false,
            "field": "422",
            "description": "<p>Tag or teacher does not exists.</p> "
          }
        ]
      }
    },
    "filename": "app/controllers/course.js",
    "groupTitle": "Courses"
  },
  {
    "type": "post",
    "url": "/courses/:id/documents/:path",
    "title": "Upload a document",
    "name": "PostDocument",
    "group": "Courses",
    "version": "1.0.0",
    "permission": [
      {
        "name": "admin and teachers."
      }
    ],
    "parameter": {
      "fields": {
        "path": [
          {
            "group": "path",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The course id (code).</p> "
          },
          {
            "group": "path",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "path",
            "defaultValue": "/",
            "description": "<p>The path where to upload the document.</p> "
          }
        ],
        "query": [
          {
            "group": "query",
            "type": "<p>Boolean</p> ",
            "optional": true,
            "field": "hidden",
            "defaultValue": "false",
            "description": "<p>True if the file is hidden, false otherwise.</p> "
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The user's private token.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "201",
            "description": "<p>No content.</p> "
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "<p>json</p> ",
            "optional": false,
            "field": "400",
            "description": "<p>Validation error.</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>json</p> ",
            "optional": false,
            "field": "401",
            "description": "<p>Invalid token or token expired.</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>json</p> ",
            "optional": false,
            "field": "403",
            "description": "<p>Forbidden - insufficient permissions.</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>json</p> ",
            "optional": false,
            "field": "404",
            "description": "<p>Course not found.</p> "
          }
        ]
      }
    },
    "filename": "app/controllers/course.js",
    "groupTitle": "Courses"
  },
  {
    "type": "post",
    "url": "/courses/:id/homepage",
    "title": "Post homepage",
    "name": "PostHomepage",
    "group": "Courses",
    "version": "1.0.0",
    "permission": [
      {
        "name": "admin and teachers."
      }
    ],
    "parameter": {
      "fields": {
        "path": [
          {
            "group": "path",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The course id (code).</p> "
          }
        ],
        "payload": [
          {
            "group": "payload",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "content",
            "description": "<p>The homepage content.</p> "
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The user's private token.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "201",
            "description": "<p>No content.</p> "
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "<p>json</p> ",
            "optional": false,
            "field": "400",
            "description": "<p>Validation error.</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>json</p> ",
            "optional": false,
            "field": "401",
            "description": "<p>Invalid token or token expired.</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>json</p> ",
            "optional": false,
            "field": "403",
            "description": "<p>Forbidden - insufficient permissions.</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>json</p> ",
            "optional": false,
            "field": "404",
            "description": "<p>Course not found.</p> "
          }
        ]
      }
    },
    "filename": "app/controllers/course.js",
    "groupTitle": "Courses"
  },
  {
    "type": "patch",
    "url": "/courses/:id/documents",
    "title": "Update existing file",
    "name": "UpdateFile",
    "group": "Courses",
    "version": "1.0.0",
    "permission": [
      {
        "name": "admin and teachers."
      }
    ],
    "parameter": {
      "fields": {
        "path": [
          {
            "group": "path",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The course id (code).</p> "
          },
          {
            "group": "path",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "path",
            "description": "<p>The file path (cannot be /).</p> "
          }
        ],
        "payload": [
          {
            "group": "payload",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "name",
            "description": "<p>The new file name.</p> "
          },
          {
            "group": "payload",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "hidden",
            "description": "<p>True if the file is to be hidden.</p> "
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The user's private token.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>json</p> ",
            "optional": false,
            "field": "200",
            "description": "<p>The updated file.</p> "
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "<p>json</p> ",
            "optional": false,
            "field": "400",
            "description": "<p>Validation error.</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>json</p> ",
            "optional": false,
            "field": "401",
            "description": "<p>Invalid token or token expired.</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>json</p> ",
            "optional": false,
            "field": "403",
            "description": "<p>Forbidden - insufficient permissions.</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>json</p> ",
            "optional": false,
            "field": "404",
            "description": "<p>Course not found.</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>json</p> ",
            "optional": false,
            "field": "409",
            "description": "<p>Conflict error - name already exists.</p> "
          }
        ]
      }
    },
    "filename": "app/controllers/course.js",
    "groupTitle": "Courses"
  },
  {
    "type": "get",
    "url": "/news",
    "title": "Get all news",
    "name": "GetManyNews",
    "group": "News",
    "version": "1.0.0",
    "permission": [
      {
        "name": "all users."
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The user's private token.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>json</p> ",
            "optional": false,
            "field": "200",
            "description": "<p>An array of news ordered by descendant date.</p> "
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "<p>json</p> ",
            "optional": false,
            "field": "401",
            "description": "<p>Invalid token or token expired.</p> "
          }
        ]
      }
    },
    "filename": "app/controllers/news.js",
    "groupTitle": "News"
  },
  {
    "type": "get",
    "url": "/news/:id",
    "title": "Get a news",
    "name": "GetOneNews",
    "group": "News",
    "version": "1.0.0",
    "permission": [
      {
        "name": "all users."
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The news id.</p> "
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The user's private token.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>json</p> ",
            "optional": false,
            "field": "200",
            "description": "<p>The news.</p> "
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "<p>json</p> ",
            "optional": false,
            "field": "404",
            "description": "<p>News not found.</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>json</p> ",
            "optional": false,
            "field": "401",
            "description": "<p>Invalid token or token expired.</p> "
          }
        ]
      }
    },
    "filename": "app/controllers/news.js",
    "groupTitle": "News"
  },
  {
    "type": "post",
    "url": "/news",
    "title": "Post a news",
    "name": "PostNews",
    "group": "News",
    "version": "1.0.0",
    "permission": [
      {
        "name": "admin and teachers."
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The user's private token.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>json</p> ",
            "optional": false,
            "field": "201",
            "description": "<p>The created news.</p> "
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "<p>json</p> ",
            "optional": false,
            "field": "401",
            "description": "<p>Invalid token or token expired.</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>json</p> ",
            "optional": false,
            "field": "403",
            "description": "<p>Forbidden - insufficient permissions.</p> "
          }
        ]
      }
    },
    "filename": "app/controllers/news.js",
    "groupTitle": "News"
  },
  {
    "type": "delete",
    "url": "/roles",
    "title": "Delete a role",
    "name": "DeleteRole",
    "group": "Roles",
    "version": "1.0.0",
    "permission": [
      {
        "name": "admin."
      }
    ],
    "parameter": {
      "fields": {
        "path": [
          {
            "group": "path",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>the role name.</p> "
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The user's private token.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "204",
            "description": "<p>No content.</p> "
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "<p>json</p> ",
            "optional": false,
            "field": "401",
            "description": "<p>Invalid token or token expired.</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>json</p> ",
            "optional": false,
            "field": "403",
            "description": "<p>Forbidden - insufficient permissions.</p> "
          }
        ]
      }
    },
    "filename": "app/controllers/role.js",
    "groupTitle": "Roles"
  },
  {
    "type": "get",
    "url": "/roles/:name",
    "title": "Get a role",
    "name": "GetRole",
    "group": "Roles",
    "version": "1.0.0",
    "permission": [
      {
        "name": "admin."
      }
    ],
    "parameter": {
      "fields": {
        "path": [
          {
            "group": "path",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>The role name.</p> "
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The user's private token.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>json</p> ",
            "optional": false,
            "field": "200",
            "description": "<p>The role.</p> "
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "<p>json</p> ",
            "optional": false,
            "field": "401",
            "description": "<p>Invalid token or token expired.</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>json</p> ",
            "optional": false,
            "field": "403",
            "description": "<p>Forbidden - insufficient permissions.</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>json</p> ",
            "optional": false,
            "field": "404",
            "description": "<p>Role not found.</p> "
          }
        ]
      }
    },
    "filename": "app/controllers/role.js",
    "groupTitle": "Roles"
  },
  {
    "type": "get",
    "url": "/roles",
    "title": "Get all roles",
    "name": "GetRoles",
    "group": "Roles",
    "version": "1.0.0",
    "permission": [
      {
        "name": "admin."
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The user's private token.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>json</p> ",
            "optional": false,
            "field": "200",
            "description": "<p>All the roles.</p> "
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "<p>json</p> ",
            "optional": false,
            "field": "401",
            "description": "<p>Invalid token or token expired.</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>json</p> ",
            "optional": false,
            "field": "403",
            "description": "<p>Forbidden - insufficient permissions.</p> "
          }
        ]
      }
    },
    "filename": "app/controllers/role.js",
    "groupTitle": "Roles"
  },
  {
    "type": "post",
    "url": "/roles",
    "title": "Post a role",
    "name": "PostRole",
    "group": "Roles",
    "version": "1.0.0",
    "permission": [
      {
        "name": "admin."
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The user's private token.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>json</p> ",
            "optional": false,
            "field": "201",
            "description": "<p>The created role.</p> "
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "<p>json</p> ",
            "optional": false,
            "field": "401",
            "description": "<p>Invalid token or token expired.</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>json</p> ",
            "optional": false,
            "field": "403",
            "description": "<p>Forbidden - insufficient permissions.</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>json</p> ",
            "optional": false,
            "field": "409",
            "description": "<p>Conflict - role name already exists.</p> "
          }
        ]
      }
    },
    "filename": "app/controllers/role.js",
    "groupTitle": "Roles"
  },
  {
    "type": "delete",
    "url": "/tags",
    "title": "Delete a tag",
    "name": "DeleteTag",
    "group": "Tags",
    "version": "1.0.0",
    "permission": [
      {
        "name": "admin and teachers."
      }
    ],
    "parameter": {
      "fields": {
        "path": [
          {
            "group": "path",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>The tag name.</p> "
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The user's private token.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>json</p> ",
            "optional": false,
            "field": "200",
            "description": "<p>The created tag.</p> "
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "<p>json</p> ",
            "optional": false,
            "field": "401",
            "description": "<p>Invalid token or token expired.</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>json</p> ",
            "optional": false,
            "field": "403",
            "description": "<p>Forbidden - insufficient permissions.</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>json</p> ",
            "optional": false,
            "field": "409",
            "description": "<p>Tag already exists.</p> "
          }
        ]
      }
    },
    "filename": "app/controllers/tag.js",
    "groupTitle": "Tags"
  },
  {
    "type": "get",
    "url": "/tags/:name",
    "title": "Get one tag",
    "name": "GetTag",
    "group": "Tags",
    "version": "1.0.0",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl http://localhost/tags/XYZ",
        "type": "curl"
      }
    ],
    "description": "<p>Not very useful route because tag is just a name, but still exists.</p> ",
    "permission": [
      {
        "name": "all users."
      }
    ],
    "parameter": {
      "fields": {
        "path": [
          {
            "group": "path",
            "type": "<p>String[]</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>The tag name.</p> "
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The user's private token.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>json</p> ",
            "optional": false,
            "field": "200",
            "description": "<p>The tag.</p> "
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "<p>json</p> ",
            "optional": false,
            "field": "400",
            "description": "<p>Validation error.</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>json</p> ",
            "optional": false,
            "field": "401",
            "description": "<p>Invalid token or token expired.</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>json</p> ",
            "optional": false,
            "field": "404",
            "description": "<p>Tag not found.</p> "
          }
        ]
      }
    },
    "filename": "app/controllers/tag.js",
    "groupTitle": "Tags"
  },
  {
    "type": "get",
    "url": "/tags/:name",
    "title": "Get all tags",
    "name": "GetTags",
    "group": "Tags",
    "version": "1.0.0",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl http://localhost/tags",
        "type": "curl"
      }
    ],
    "permission": [
      {
        "name": "all users."
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The user's private token.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>json</p> ",
            "optional": false,
            "field": "200",
            "description": "<p>An array of tags.</p> "
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "<p>json</p> ",
            "optional": false,
            "field": "401",
            "description": "<p>Invalid token or token expired.</p> "
          }
        ]
      }
    },
    "filename": "app/controllers/tag.js",
    "groupTitle": "Tags"
  },
  {
    "type": "post",
    "url": "/tags",
    "title": "Post a tag",
    "name": "PostTag",
    "group": "Tags",
    "version": "1.0.0",
    "permission": [
      {
        "name": "admin and teachers."
      }
    ],
    "parameter": {
      "fields": {
        "payload": [
          {
            "group": "payload",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>The tag name.</p> "
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The user's private token.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>json</p> ",
            "optional": false,
            "field": "200",
            "description": "<p>The created tag.</p> "
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "<p>json</p> ",
            "optional": false,
            "field": "401",
            "description": "<p>Invalid token or token expired.</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>json</p> ",
            "optional": false,
            "field": "403",
            "description": "<p>Forbidden - insufficient permissions.</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>json</p> ",
            "optional": false,
            "field": "409",
            "description": "<p>Tag already exists.</p> "
          }
        ]
      }
    },
    "filename": "app/controllers/tag.js",
    "groupTitle": "Tags"
  }
] });